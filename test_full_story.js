const { TemplateManager, STORY_SECTIONS } = require('./story_templates');

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

console.log('=== Full Story Generation Test (Medium Length) ===\n');

const templateManager = new TemplateManager();
let totalWordCount = 0;

STORY_SECTIONS.forEach((section, index) => {
    console.log(`\nPage ${index + 1} - Section: ${section}`);
    console.log('----------------------------------------');
    
    const template = templateManager.getTemplate(section, testInputs.theme, testInputs.subTheme, testInputs.length);
    
    // Replace placeholders in template
    let filledText = template;
    Object.entries(testInputs).forEach(([key, value]) => {
        const placeholder = new RegExp(`{${key}}`, 'g');
        filledText = filledText.replace(placeholder, value);
    });
    
    const wordCount = filledText.split(/\s+/).length;
    totalWordCount += wordCount;
    
    console.log('Text:', filledText);
    console.log('Word Count:', wordCount);
});

console.log('\nTotal Word Count:', totalWordCount); 