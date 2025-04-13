require("dotenv").config();
const express = require('express');
const path = require('path');
const OpenAI = require('openai');
const StoryInputValidator = require('./StoryInputValidator');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize validator
const validator = new StoryInputValidator({
  VALID_THEMES,
  VALID_SUBTHEMES,
  VALID_EMOTIONAL_TONES,
  PAGE_COUNT_REQUIREMENTS,
  BASIC_COLORS,
  COMMON_ANIMALS,
  VALID_LENGTHS,
  VALID_GENDERS
});

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// API endpoint to generate story
app.post('/api/generate', async (req, res) => {
    try {
        console.log('Received story generation request:', req.body);
        
        // Validate input
        const validationResult = validator.validate(req.body);
        if (!validationResult.isValid) {
            return res.status(400).json({ error: validationResult.errors });
        }

        // Generate story using OpenAI
        const story = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a children's story writer. Create engaging, age-appropriate stories."
                },
                {
                    role: "user",
                    content: JSON.stringify(req.body)
                }
            ],
            temperature: 0.7,
            max_tokens: 2000
        });

        res.json({ story: story.choices[0].message.content });
    } catch (error) {
        console.error('Error generating story:', error);
        res.status(500).json({ error: 'Failed to generate story' });
    }
});

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 