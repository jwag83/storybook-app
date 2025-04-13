require('dotenv').config();
const OpenAI = require("openai");
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
      customTheme,
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

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional children's book title generator. You create engaging, age-appropriate titles and subtitles that capture the essence of the story."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    // Parse the response
    const responseText = response.choices[0].message.content.trim();
    
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

async function generateAIStory({
  mainCharacter,
  supportingCharacter,
  relationship,
  age,
  gender,
  theme,
  customTheme,
  moral,
  customMoral,
  length,
  dedication,
  favouriteColor,
  favouritePet
}) {
  // Validate user inputs for inappropriate content
  validateUserInputs({
    mainCharacter,
    supportingCharacter,
    moral,
    customTheme,
    customMoral,
    dedication,
    favouriteColor,
    favouritePet
  });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const pageCount = {
    mini: 8,
    short: 12,
    medium: 18,
    long: 25
  }[length];

  const storyStructure = {
    mini: ['intro', 'challenge', 'turningPoint', 'resolution', 'moral', 'closing'],
    short: ['intro', 'challenge', 'risingAction', 'climax', 'resolution', 'moral', 'closing'],
    medium: ['intro', 'obstacle', 'teamForming', 'plan', 'setback', 'risingAction', 'climax', 'resolution', 'reflection', 'moral', 'closing'],
    long: ['intro', 'adventureCall', 'friendsIntro', 'earlyObstacle', 'characterInteraction', 'problemEscalates', 'teamStrategy', 'earlySetback', 'backstory', 'majorConflict', 'midpointReflection', 'characterDevelopment', 'companionship', 'bigChallenge', 'unexpectedTwist', 'regroup', 'risingAction', 'climax', 'courageousMoment', 'conflictResolution', 'celebration', 'reflection', 'returnHome', 'moral', 'emotionalClosure']
  }[length];

  const wordCountRange = age <= 5 ? '10-25' : age <= 8 ? '25-50' : '40-75';

  const prompt = `
You are a professional children's author. Write a ${length}-length story for a child aged ${age}.

STORY REQUIREMENTS:
- Main character: ${mainCharacter}
- Supporting characters: ${supportingCharacter ? supportingCharacter : "none specified"}
- Relationship: ${relationship ? relationship : "friend"}
- Theme: ${theme}${customTheme ? ` (${customTheme})` : ''}
- Moral lesson: ${moral}${customMoral ? ` (${customMoral})` : ''}
- Dedication: ${dedication ? dedication : "none specified"}
- Favorite color: ${favouriteColor ? favouriteColor : "none specified"}
- Favorite pet: ${favouritePet ? favouritePet : "none specified"}
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
${age <= 5 ? `
- Use very simple vocabulary and short sentences
- Repeat important words and phrases
- Focus on concrete concepts
- Keep action gentle and reassuring
- Use basic emotions and clear cause-effect relationships` :
  age <= 8 ? `
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
3. Maintain consistent narrative voice and emotional tone
4. Ensure smooth transitions between pages
5. Build toward the moral lesson naturally
6. Match vocabulary and sentence complexity to age ${age}

Write the complete story now, using exactly ${pageCount} pages with ${wordCountRange} words per page.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional children's book author who creates engaging, age-appropriate stories that follow specific formatting and content guidelines."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    const storyText = response.choices[0].message.content;
    const pages = storyText.split('\n\n')
      .filter(page => page.trim().startsWith('Page'))
      .map(page => page.trim());

    // Generate the title page
    const titlePage = await generateTitlePage({
      mainCharacter,
      supportingCharacter,
      theme,
      moral,
      age,
      length,
      customTheme,
    });

    // Return the story with the title page
    return {
      titlePage,
      pages
    };

  } catch (error) {
    console.error("Error generating story:", error);
    throw error;
  }
}

module.exports = {
  generateAIStory,
  generateTitlePage
}; 