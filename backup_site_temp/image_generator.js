require('dotenv').config();
const OpenAI = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Enhanced character style guide for consistency
const characterStyleGuide = {
    style: "whimsical, child-friendly, colorful, digital art style, consistent character design",
    lighting: "bright, cheerful lighting with consistent shadows and highlights",
    composition: "centered composition with clear focal point, leaving space for text",
    details: "crisp details, soft edges, vibrant colors, consistent character features",
    textSpace: "clear area for text placement, balanced composition",
    aspectRatio: "16:9 landscape format for optimal text placement",
    characterConsistency: "maintain exact same character appearance, clothing, and expressions across all pages"
};

async function generateImage(prompt, size = "1024x1024", characterDescription = "") {
    try {
        const enhancedPrompt = `Create a child-friendly, colorful illustration for a children's story. 
        ${characterDescription}
        Scene description: ${prompt}
        Style requirements: ${characterStyleGuide.style}
        Lighting: ${characterStyleGuide.lighting}
        Composition: ${characterStyleGuide.composition}
        Details: ${characterStyleGuide.details}
        Text Space: ${characterStyleGuide.textSpace}
        Aspect Ratio: ${characterStyleGuide.aspectRatio}
        Character Consistency: ${characterStyleGuide.characterConsistency}
        The image should be suitable for a children's book, with clear focal points and readable text space.`;

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: enhancedPrompt,
            n: 1,
            size: size,
            quality: "standard",
            style: "vivid"
        });

        return response.data[0].url;
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}

// Function to generate images for a story
async function generateStoryImages(storyData, characterName, favoriteColor, favoriteAnimal) {
    const images = [];
    
    // Create detailed character description for consistency
    const characterDescription = `Main character: A child named ${characterName}, wearing ${favoriteColor} clothes. 
    Their companion: A friendly ${favoriteAnimal}. 
    Character style: Cute, expressive features, consistent appearance throughout the story.
    Character details: 
    - Always wearing ${favoriteColor} clothes
    - Same hairstyle and facial features in every scene
    - Consistent expressions and body language
    - Same ${favoriteAnimal} companion with consistent appearance
    - Maintain exact same character design across all pages`;
    
    // Generate images for each page of the story
    for (const [pageName, content] of Object.entries(storyData)) {
        if (pageName !== 'title') { // Skip the title page
            try {
                const imageUrl = await generateImage(content, "1024x1024", characterDescription);
                images.push({
                    page: pageName,
                    url: imageUrl,
                    text: content
                });
            } catch (error) {
                console.error(`Error generating image for ${pageName}:`, error);
                // Add a placeholder image URL in case of error
                images.push({
                    page: pageName,
                    url: 'placeholder.jpg',
                    text: content
                });
            }
        }
    }

    return images;
}

module.exports = {
    generateImage,
    generateStoryImages
}; 