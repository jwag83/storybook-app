require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const { validateUserInputs } = require("./content_filter");

/**
 * Generates an age-appropriate title and subtitle for a story
 * @param {Object} storyMetadata - Story metadata including characters, theme, moral, etc.
 * @returns {Object} - Object containing title, subtitle, preparedFor, and ageGroupNote
 */
async function generateTitlePage(storyMetadata) {
  try {
    // Extract relevant metadata
    const {
      mainCharacter,
      supportingCharacter,
      theme,
      moral,
      age,
      length,
      customTheme
    } = storyMetadata;

    // Determine age group for appropriate title complexity
    const ageGroup = age <= 5 ? '3-5' : age <= 8 ? '6-8' : '9-10';
    
    // Create a prompt for the AI to generate an appropriate title
    const prompt = `Create a children's story title and subtitle for a story with the following elements:
    - Main character: ${mainCharacter || 'a child'}
    - Supporting character: ${supportingCharacter || 'a friend'}
    - Theme: ${theme || 'friendship'}
    - Custom theme: ${customTheme || 'none'}
    - Moral: ${moral || 'being kind'}
    - Age group: ${ageGroup} years old
    - Story length: ${length || 'medium'}
    
    Requirements:
    1. The title should be age-appropriate for ${ageGroup} year olds
    2. The title should reflect the story's moral or theme
    3. The title should be creative, emotionally resonant, and unique
    4. The subtitle should be a short sentence (max 10 words) summarizing the story tone or message
    5. Avoid any inappropriate language or concepts
    6. Format the response as JSON: {"title": "Title Here", "subtitle": "Subtitle Here"}`;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    // Parse the response
    const responseText = response.data.choices[0].text.trim();
    
    // Extract JSON from the response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const titleData = JSON.parse(jsonMatch[0]);
      
      // Validate the title and subtitle for inappropriate content
      validateUserInputs({
        title: titleData.title,
        moral: titleData.subtitle // Using moral field to validate subtitle
      });
      
      // Format the age group note
      let ageGroupNote = "";
      if (age <= 5) {
        ageGroupNote = "Suitable for ages 3-5";
      } else if (age <= 8) {
        ageGroupNote = "Suitable for ages 6-8";
      } else {
        ageGroupNote = "Suitable for ages 9-10";
      }
      
      return {
        title: titleData.title,
        subtitle: titleData.subtitle || "", // Make subtitle optional
        preparedFor: `Prepared for ${mainCharacter || "The Reader"}`,
        ageGroupNote: ageGroupNote
      };
    }
    
    // Fallback if JSON parsing fails
    return {
      title: `${mainCharacter || 'The Hero'}'s ${theme || 'Adventure'}`,
      subtitle: `A story about ${moral || 'friendship and courage'}`,
      preparedFor: `Prepared for ${mainCharacter || "The Reader"}`,
      ageGroupNote: age <= 5 ? "Suitable for ages 3-5" : age <= 8 ? "Suitable for ages 6-8" : "Suitable for ages 9-10"
    };
  } catch (error) {
    console.error("Error generating title page:", error);
    // Return a safe fallback title
    return {
      title: "A Wonderful Story",
      subtitle: "A tale of friendship and courage",
      preparedFor: `Prepared for ${storyMetadata?.mainCharacter || "The Reader"}`,
      ageGroupNote: storyMetadata?.age <= 5 ? "Suitable for ages 3-5" : 
                    storyMetadata?.age <= 8 ? "Suitable for ages 6-8" : 
                    "Suitable for ages 9-10"
    };
  }
}

async function generateAIStory(input) {
  // Validate user inputs for inappropriate content
  validateUserInputs({
    mainCharacter: input.childName,
    supportingCharacter: input.character1Name,
    moral: input.moral,
    title: input.title,
    customTheme: input.customTheme
  });

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const pageCount = {
    mini: 8,
    short: 12,
    medium: 18,
    long: 25
  }[input.storyLength];

  const storyStructure = {
    mini: ['intro', 'challenge', 'turningPoint', 'resolution', 'moral', 'closing'],
    short: ['intro', 'challenge', 'risingAction', 'climax', 'resolution', 'moral', 'closing'],
    medium: ['intro', 'obstacle', 'teamForming', 'plan', 'setback', 'risingAction', 'climax', 'resolution', 'reflection', 'moral', 'closing'],
    long: ['intro', 'adventureCall', 'friendsIntro', 'earlyObstacle', 'characterInteraction', 'problemEscalates', 'teamStrategy', 'earlySetback', 'backstory', 'majorConflict', 'midpointReflection', 'characterDevelopment', 'companionship', 'bigChallenge', 'unexpectedTwist', 'regroup', 'risingAction', 'climax', 'courageousMoment', 'conflictResolution', 'celebration', 'reflection', 'returnHome', 'moral', 'emotionalClosure']
  }[input.storyLength];

  const wordCountRange = input.age <= 5 ? '10-25' : input.age <= 8 ? '25-50' : '40-75';

  const prompt = `
You are a professional children's author. Write a ${input.storyLength}-length story for a child aged ${input.age}.

STORY REQUIREMENTS:
- Main character: ${input.childName}
- Supporting characters: ${input.character1Name ? input.character1Name : "none specified"}
- Theme: ${input.theme}${input.subTheme ? ` (${input.subTheme})` : ''}
- Emotional tone: ${input.emotionalTone}
- Moral lesson: ${input.moral}
- Total pages required: ${pageCount}
- Word count per page: ${wordCountRange} words

PAGE STRUCTURE REQUIREMENTS:
1. The story MUST be exactly ${pageCount} pages long - no more, no less
2. Each page MUST start with "Page X:" followed by the content
3. Each page MUST contain exactly one story section
4. You MUST follow this exact structure:
${storyStructure.map((section, i) => `Page ${i + 1}: ${section}`).join('\n')}
5. DO NOT skip or combine sections
6. DO NOT end early or go over the required page count

WORD COUNT GUIDELINES:
- Each page MUST contain between ${wordCountRange} words
- If a section is too short: add age-appropriate descriptions or emotional content
- If a section is too long: simplify language or break into smaller phrases
- Maintain consistent word count across all pages

AGE-APPROPRIATE GUIDELINES:
${input.age <= 5 ? `
- Use very simple vocabulary and short sentences
- Repeat important words and phrases
- Focus on concrete concepts
- Keep action gentle and reassuring
- Use basic emotions and clear cause-effect relationships` :
  input.age <= 8 ? `
- Use straightforward vocabulary with some challenging words
- Mix short and medium-length sentences
- Include some abstract concepts with explanations
- Balance action and dialogue
- Explore more complex emotions and problem-solving` :
  `
- Use more sophisticated vocabulary (but still age-appropriate)
- Vary sentence structure and length
- Include abstract concepts and deeper themes
- Develop complex character relationships
- Explore nuanced emotions and multi-step problem-solving`}

FORMATTING REQUIREMENTS:
1. Begin each page with "Page X:" followed by the content
2. Keep each page focused on its designated story element
3. Maintain consistent narrative voice and emotional tone (${input.emotionalTone})
4. Ensure smooth transitions between pages
5. Build toward the moral lesson naturally
6. Match vocabulary and sentence complexity to age ${input.age}

Write the complete story now, using exactly ${pageCount} pages with ${wordCountRange} words per page.

---
📏 STRUCTURE + WORD COUNT RULES

Each story must:
- Be exactly ${pageCount} pages long (e.g. 12 for 'short', 25 for 'long')
- Contain one full story section per page, following the specified structure
- Each page must meet the minimum word count for the child's age

Word Count Rules (per page):
- Age 3–5: 10–25 words
- Age 6–8: 25–50 words
- Age 9–10: 40–75 words

❗DO NOT return any page below the minimum word count
✅ Use rich sensory details, small bits of dialogue, and internal thoughts to expand content when needed
🛑 Avoid filler — if over limit, cut repetition or unnecessary phrases

💡 Example:
Page 5 should say: "Page 5: Luna stepped into the dark forest, her heart beating like a drum. 'We have to be brave,' she whispered. The trees seemed to listen." 
(→ hits target words + emotion + description)

🟨 LONG STORY SPECIAL GUIDANCE (Age 9 - 25 pages)

• Each page should be a self-contained and complete scene or moment that stands on its own and can be illustrated independently.
• Word count per page should aim for **35–80 words**, with a **hard minimum of 25**.
• Total word count should aim for 900+ words, but this is not strictly required.
• Each page must include at least one of:
   – Character thoughts or reflections
   – Descriptive setting or atmosphere
   – Minor actions or emotional responses
   – Small side-events or interactions

❗ Avoid:
• Filler words or meaningless repetition
• Rushing through the story arc
• Overly short or vague pages that feel empty

💡 Goal: Make each page satisfying on its own AND contribute to the full narrative. These stories will be paired with illustrations, so each page must feel meaningful.

💡 Example fix:
Too short: "Luna walked into the cave. It was quiet and dark."
Improved: "Luna tiptoed into the cave, her heart racing. Shadows danced on the stone walls, and each drip of water echoed like a warning. She held her breath, wondering what secrets lay ahead."

LONG STORY EXPANSION STRATEGIES (for Age 9 stories, 25 pages):
- Each page must have **35–80 words**
- Total word count must be **at least 1000 words**
- Avoid pages with fewer than **25 words** — these will fail validation

To reach the correct word count **without filler**, you can:
• Add internal character thoughts or reflections
• Describe the environment or atmosphere more vividly
• Insert small challenges, decisions, or discoveries
• Include mini-dialogue that develops the theme or moral
• Expand on emotional reactions or moments of hesitation

✅ Each page must feel like a meaningful part of the adventure, but also clear enough to be illustrated on its own.
⚠️ Avoid repeating ideas or writing vague "padding" sentences — every line must build the story.

EXAMPLE PAGE:
"Milo stepped into the glowing cave. The walls sparkled like diamonds, and the air smelled of honey and moss. 'This must be where the light is coming from,' he whispered. But as he took a step forward, a soft growl echoed through the chamber..."
`.trim();

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.85,
    });

    const storyText = response.data.choices[0].message.content;
    const pages = storyText
      .split(/Page \d+:/)
      .slice(1)
      .map(p => p.trim());

    // Generate the title page
    const titlePage = await generateTitlePage(input);

    // Return the story with the title page
    return {
      story: pages,
      titlePage: titlePage
    };
  } catch (error) {
    console.error("❌ Error generating story:", error);
    return {
      story: [],
      titlePage: {
        title: "A Wonderful Story",
        subtitle: "A tale of friendship and courage"
      }
    };
  }
}

module.exports = {
  generateAIStory,
  generateTitlePage
}; 