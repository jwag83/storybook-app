const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');
const { validateAndNormalizeInputs } = require('./story_validation');

/**
 * Generate a story from user input
 * @param {Object} inputs - User inputs for story generation
 * @returns {Promise<Array>} Generated story pages
 * @throws {Error} If story generation fails
 */
async function generateUserStory(inputs) {
    try {
        console.log("\n=== Story Generation Request ===");
        console.log("Input Parameters:");
        console.log(JSON.stringify(inputs, null, 2), "\n");

        // Validate and normalize inputs
        const validatedInputs = validateAndNormalizeInputs(inputs);
        console.log("✓ Input validation passed\n");

        // Create story generator instance
        console.log("Initializing story generator...");
        const generator = new AgeAppropriateStoryGenerator(validatedInputs);
        
        // Generate the story
        console.log("Generating story...\n");
        const story = await generator.generateStory();

        if (!Array.isArray(story)) {
            throw new Error("Story generation failed: Invalid story structure");
        }

        // Validate story structure
        story.forEach((page, index) => {
            if (!page.section || !page.content) {
                throw new Error(`Invalid page structure at index ${index}`);
            }
        });

        // Print the story
        console.log("=== Generated Story ===\n");
        story.forEach((page, index) => {
            console.log(`Page ${index + 1} (${page.section}):`);
            console.log("-".repeat(40));
            console.log(page.content);
            console.log(`Word count: ${page.content.split(/\s+/).length}`);
            console.log("\n");
        });

        // Print story statistics
        console.log("=== Story Statistics ===");
        console.log(`Total pages: ${story.length}`);
        const totalWords = story.reduce((acc, page) => acc + page.content.split(/\s+/).length, 0);
        console.log(`Total words: ${totalWords}`);
        console.log(`Average words per page: ${(totalWords / story.length).toFixed(1)}`);

        return story;
    } catch (error) {
        console.error("\n❌ Error generating story:");
        console.error(error.message);
        throw error;
    }
}

// Export the function for use in other files
module.exports = {
    generateUserStory
}; 