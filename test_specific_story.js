const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');

const testInputs = {
    childName: "Ethan",
    age: 6,
    gender: "boy",
    physicalDescription: "curious boy with bright green eyes",
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
    emotionalTone: "joyful",
    setting: "forest",
    storyType: "personalized",
    language: "English"
};

console.log('\n=== Raw Introduction Section (No Balancing) ===\n');

(async () => {
    try {
        const generator = new AgeAppropriateStoryGenerator(testInputs);
        
        // Get raw template and fill placeholders
        const rawTemplate = generator.getSectionTemplate("introduction", testInputs);
        const filledTemplate = generator.replacePlaceholders(rawTemplate, testInputs);
        
        // Print the raw filled template
        console.log('Filled Template:');
        console.log(filledTemplate);
        console.log('\nWord Count:', filledTemplate.split(/\s+/).length);
        
    } catch (error) {
        console.error('Error:', error);
    }
})(); 