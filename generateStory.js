// Story Generation Interface
const { StoryGenerator } = require('./story_generator.js');
const { StoryInputValidator } = require('./story_input_validator.js');

class StoryGenerationService {
    constructor() {
        this.storyGenerator = null;
        this.validator = new StoryInputValidator();
    }

    /**
     * Initialize the story generator with user inputs
     * @param {Object} userInputs - User preferences and details
     * @returns {Promise<Object>} Result of initialization
     */
    async initialize(userInputs) {
        try {
            // Validate all inputs first
            const validation = this.validator.validateAll(userInputs);
            if (!validation.isValid) {
                throw new Error(`Invalid inputs: ${validation.errors.join(', ')}`);
            }

            // Transform inputs to match the expected format
            const transformedInputs = this.transformInputs(userInputs);

            // Initialize the story generator
            this.storyGenerator = new StoryGenerator(transformedInputs);
            
            return {
                success: true,
                message: 'Story generator initialized successfully'
            };
        } catch (error) {
            return {
                success: false,
                message: this.getErrorMessage(error),
                error: error.message
            };
        }
    }

    /**
     * Transform user inputs to match the story generator's expected format
     * @param {Object} inputs - Validated user inputs
     * @returns {Object} Transformed inputs
     */
    transformInputs(inputs) {
        return {
            childName: inputs.childName,
            gender: inputs.gender.toLowerCase(),
            age: inputs.age,
            physicalDescription: inputs.physicalDescription,
            favoriteColor: inputs.favoriteColor.toLowerCase(),
            favoriteAnimal: inputs.favoriteAnimal.toLowerCase(),
            character1Name: inputs.character1Name,
            character1Relation: inputs.character1Relation,
            character2Name: inputs.character2Name,
            character2Relation: inputs.character2Relation,
            theme: inputs.theme.toLowerCase(),
            subTheme: inputs.subTheme.toLowerCase(),
            length: inputs.length.toLowerCase(),
            moral: inputs.moral || this.validator.getDefaultMoral(inputs.theme),
            emotionalTone: inputs.emotionalTone || 'default'
        };
    }

    /**
     * Generate a complete story based on initialized parameters
     * @returns {Promise<Object>} Generated story with title, pages, and moral
     */
    async generateStory() {
        try {
            if (!this.storyGenerator) {
                throw new Error('Story generator not initialized. Please call initialize() first.');
            }

            const story = await this.storyGenerator.generateStory();
            
            // Validate the generated story
            if (!story || !story.title || !story.pages || !story.moral) {
                throw new Error('Generated story is incomplete or invalid');
            }

            return {
                success: true,
                story
            };
        } catch (error) {
            return {
                success: false,
                message: this.getErrorMessage(error),
                error: error.message
            };
        }
    }

    /**
     * Generate a single page of the story
     * @param {string} template - Template text for the page
     * @returns {Promise<Object>} Generated page text
     */
    async generatePage(template) {
        try {
            if (!this.storyGenerator) {
                throw new Error('Story generator not initialized. Please call initialize() first.');
            }

            if (!template || typeof template !== 'string') {
                throw new Error('Invalid template provided');
            }

            const page = await this.storyGenerator.generatePage(template);
            
            if (!page || typeof page !== 'string') {
                throw new Error('Failed to generate page content');
            }

            return {
                success: true,
                page
            };
        } catch (error) {
            return {
                success: false,
                message: this.getErrorMessage(error),
                error: error.message
            };
        }
    }

    /**
     * Preview the story before final generation
     * @returns {Promise<Object>} Story preview with title and first page
     */
    async generatePreview() {
        try {
            if (!this.storyGenerator) {
                throw new Error('Story generator not initialized. Please call initialize() first.');
            }

            const title = await this.storyGenerator.generateTitle();
            const firstPage = await this.storyGenerator.generatePage(
                this.storyGenerator.getFirstPageTemplate()
            );

            if (!title || !firstPage) {
                throw new Error('Failed to generate preview content');
            }

            return {
                success: true,
                preview: {
                    title,
                    firstPage
                }
            };
        } catch (error) {
            return {
                success: false,
                message: this.getErrorMessage(error),
                error: error.message
            };
        }
    }

    /**
     * Get user-friendly error messages
     * @param {Error} error - The error object
     * @returns {string} User-friendly error message
     */
    getErrorMessage(error) {
        if (error.message.includes('Invalid inputs')) {
            return 'Please check your story settings. ' + error.message;
        }
        if (error.message.includes('not initialized')) {
            return 'Please start over and fill in all the story details before generating.';
        }
        if (error.message.includes('incomplete or invalid')) {
            return 'The story generation was interrupted. Please try again.';
        }
        if (error.message.includes('API')) {
            return 'Unable to connect to the story generation service. Please check your internet connection and try again.';
        }
        return 'We encountered an issue while creating your story. Please try again with different settings.';
    }
}

// Export the service
module.exports = { StoryGenerationService };

// Example usage:
/*
const storyService = new StoryGenerationService();

const userInputs = {
    childName: "Alex",
    gender: "boy",
    favoriteColor: "blue",
    favoriteAnimal: "dolphin",
    physicalDescription: "bright eyes and a big smile",
    character1Name: "Sam",
    character2Name: "Maya",
    theme: "patience",
    storyLength: "medium",
    moral: "Optional custom moral" // Optional
};

try {
    const initResult = await storyService.initialize(userInputs);
    if (!initResult.success) {
        console.error(initResult.message);
        return;
    }

    const storyResult = await storyService.generateStory();
    if (!storyResult.success) {
        console.error(storyResult.message);
        return;
    }

    console.log('Generated story:', storyResult.story);
} catch (error) {
    console.error('Unexpected error:', error);
}
*/ 