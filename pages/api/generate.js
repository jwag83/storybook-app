import { generateAIStory } from '../../utils/generator';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const storyData = req.body;
    const result = await generateAIStory(storyData);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ message: 'Story generation failed.' });
  }
} 