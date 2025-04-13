import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateAIStory(storyData) {
  const {
    mainCharacter,
    supportingCharacter,
    relationship,
    age,
    gender,
    theme,
    moral,
    length,
    dedication,
    favouriteColor,
    favouritePet
  } = storyData;

  const systemPrompt = `
You are an expert children's story author.

Write a ${length}-length story (exactly ${getPageCount(length)} pages) for a ${age}-year-old child named ${mainCharacter}, who is ${gender}.
The story must include:
- A supporting character named ${supportingCharacter}, who is their ${relationship}
- The child's favourite color: ${favouriteColor}
- A ${favouritePet} as a key part of the story
- A strong moral: "${moral}"
- Dedication: "${dedication || 'None'}"

Write each page as a short paragraph in a numbered list.
Keep vocabulary age-appropriate.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Generate the full ${length}-length story now.` }
    ],
    temperature: 0.7
  });

  const raw = response.choices[0].message.content;
  const pages = raw.split(/\n?\s*Page \d+:?/i).filter(p => p.trim().length > 0);

  return {
    story: pages,
    titlePage: {
      title: `${mainCharacter}'s ${theme} Adventure`,
      subtitle: `A Story of ${moral}`,
      preparedFor: `Prepared for ${mainCharacter}`,
      ageGroupNote: `Suitable for ages ${age}-${age + 2}`
    }
  };
}

function getPageCount(length) {
  switch (length) {
    case 'Mini': return 8;
    case 'Short': return 12;
    case 'Medium': return 18;
    case 'Long': return 25;
    default: return 12;
  }
} 