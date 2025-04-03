const { TemplateManager } = require('./story_templates');

const testInputs = {
    childName: "Zara",
    age: 6,
    gender: "girl",
    physicalDescription: "curious and energetic with bright blue eyes",
    favoriteColor: "blue",
    favoriteAnimal: "dolphin",
    character1Name: "Luna",
    character1Relation: "best friend",
    character2Name: "Oliver",
    character2Relation: "helper",
    theme: "adventure",
    subTheme: "teamwork",
    length: "medium",
    moral: "Teamwork makes the impossible possible",
    emotionalTone: "joyful",
    setting: "beach",
    storyType: "personalized",
    language: "English"
};

console.log('=== Adventure/Teamwork Template Test ===\n');

try {
    const templateManager = new TemplateManager();
    const sections = ['setup', 'challenge', 'climax', 'resolution', 'moral'];
    
    let themeSpecificCount = 0;
    let fallbackCount = 0;
    let unreplacedPlaceholders = new Set();

    console.log('=== Template Sections ===\n');
    sections.forEach(section => {
        console.log(`Section: ${section}`);
        
        // Get template
        const template = templateManager.getTemplate(section, testInputs.theme, testInputs.subTheme, testInputs.length);
        
        // Check template source
        const isThemeSpecific = templateManager.themeSubThemeTemplates[testInputs.theme]?.[testInputs.subTheme]?.[testInputs.length]?.[section];
        const templateSource = isThemeSpecific ? 'theme+subTheme' : 'fallback';
        console.log(`Template Source: ${templateSource}`);
        
        // Count template types
        if (templateSource === 'theme+subTheme') {
            themeSpecificCount++;
        } else {
            fallbackCount++;
        }

        // Replace placeholders
        let content = template;
        Object.entries(testInputs).forEach(([key, value]) => {
            content = content.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
        });

        // Check for unreplaced placeholders
        const remainingPlaceholders = content.match(/\{([^}]+)\}/g) || [];
        remainingPlaceholders.forEach(p => unreplacedPlaceholders.add(p));

        // Print content and word count
        console.log('Content:', content);
        console.log('Word Count:', content.split(/\s+/).length);
        console.log('---\n');
    });

    // Print summary
    console.log('=== Summary ===');
    console.log(`Theme-specific templates used: ${themeSpecificCount}`);
    console.log(`Fallback templates used: ${fallbackCount}`);
    if (unreplacedPlaceholders.size > 0) {
        console.log('\nUnreplaced placeholders found:');
        unreplacedPlaceholders.forEach(p => console.log(`- ${p}`));
    }

} catch (error) {
    console.error('Error testing templates:', error);
} 