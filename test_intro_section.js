const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');

const testInputs = {
    childName: "Ethan",
    age: 6,
    gender: "boy",
    physicalDescription: "curious boy with green eyes",
    favoriteColor: "green",
    favoriteAnimal: "owl",
    character1Name: "Luna",
    character1Relation: "best friend",
    character2Name: "Oliver",
    character2Relation: "forest guardian",
    theme: "nature",
    subTheme: "friendship",
    length: "medium",
    moral: "Always take care of the world around you",
    emotionalTone: "joyful"
};

class MockValidator {
    validateAll() {
        return { isValid: true, errors: [] };
    }
}

(async () => {
    try {
        // Override the validator
        AgeAppropriateStoryGenerator.prototype.validateInputs = function() {
            return new MockValidator().validateAll();
        };

        const generator = new AgeAppropriateStoryGenerator(testInputs);
        const rawTemplate = generator.getSectionTemplate("introduction", testInputs);
        const filledTemplate = generator.replacePlaceholders(rawTemplate, testInputs);
        
        console.log('=== Intro Section Test Results ===');
        console.log('\nFilled Text:');
        console.log(filledTemplate);
        console.log('\nWord Count:', filledTemplate.split(/\s+/).length);
        
    } catch (error) {
        console.error('Test Error:', error.message);
    }
})(); 