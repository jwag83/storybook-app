const { TemplateManager } = require('./story_templates');
const { VALID_THEMES, VALID_SUBTHEMES, VALID_LENGTHS } = require('./story_constants');

const AGE_GROUPS = ['3-5', '6-8', '9-10'];

// Base test input template
const baseInput = {
    childName: "TestChild",
    gender: "girl",
    physicalDescription: "test description",
    favoriteColor: "blue",
    favoriteAnimal: "dolphin",
    character1Name: "Friend1",
    character1Relation: "best friend",
    character2Name: "Friend2",
    character2Relation: "helper"
};

// Test combinations
const combinations = [];

// Generate all valid combinations
AGE_GROUPS.forEach(ageGroup => {
    const age = parseInt(ageGroup.split('-')[0]);
    VALID_THEMES.forEach(theme => {
        const subThemes = VALID_SUBTHEMES[theme] || [];
        subThemes.forEach(subTheme => {
            VALID_LENGTHS.forEach(length => {
                // Required fields test
                combinations.push({
                    ...baseInput,
                    age,
                    theme,
                    subTheme,
                    length
                });

                // Optional fields test
                combinations.push({
                    ...baseInput,
                    age,
                    theme,
                    subTheme,
                    length,
                    moral: "Test moral",
                    emotionalTone: "joyful"
                });
            });
        });
    });
});

console.log(`=== Comprehensive Template System Test ===`);
console.log(`Total combinations to test: ${combinations.length}\n`);

const templateManager = new TemplateManager();
const sections = ['setup', 'challenge', 'climax', 'resolution', 'moral'];

let totalTests = 0;
let successfulTests = 0;
let failedTests = 0;
let missingTemplates = new Set();
let unreplacedPlaceholders = new Set();
let edgeCaseFailures = new Set();

// Test each combination
combinations.forEach((inputs, index) => {
    console.log(`\nTest #${index + 1}`);
    console.log(`Theme: ${inputs.theme}, SubTheme: ${inputs.subTheme}, Length: ${inputs.length}, Age: ${inputs.age}`);
    console.log('Optional fields:', inputs.moral ? 'moral included' : 'no moral', inputs.emotionalTone ? 'emotionalTone included' : 'no emotionalTone');

    sections.forEach(section => {
        totalTests++;
        try {
            const template = templateManager.getTemplate(section, inputs.theme, inputs.subTheme, inputs.length);
            
            if (!template) {
                missingTemplates.add(`${inputs.theme}/${inputs.subTheme}/${inputs.length}/${section}`);
                failedTests++;
                return;
            }

            // Check template source
            const isThemeSpecific = templateManager.themeSubThemeTemplates[inputs.theme]?.[inputs.subTheme]?.[inputs.length]?.[section];
            console.log(`${section}: ${isThemeSpecific ? 'theme-specific' : 'fallback'}`);

            // Replace placeholders using the TemplateManager's method
            const content = templateManager.replacePlaceholders(template, inputs);

            // Check for unreplaced placeholders
            const remaining = content.match(/\{([^}]+)\}/g) || [];
            remaining.forEach(p => unreplacedPlaceholders.add(p));

            // Word count check
            const wordCount = content.split(/\s+/).length;
            console.log(`Word count: ${wordCount}`);

            successfulTests++;
        } catch (error) {
            failedTests++;
            edgeCaseFailures.add(`${inputs.theme}/${inputs.subTheme}/${inputs.length}/${section}: ${error.message}`);
        }
    });
});

// Edge case tests
console.log('\n=== Edge Case Tests ===');
const edgeCases = [
    {},  // Empty input
    { theme: 'invalid' },  // Invalid theme
    { theme: 'adventure', subTheme: 'invalid' },  // Invalid subtheme
    { theme: 'adventure', subTheme: 'teamwork' }  // Missing required fields
];

edgeCases.forEach((input, index) => {
    console.log(`\nEdge Case #${index + 1}:`);
    try {
        const template = templateManager.getTemplate('setup', input.theme, input.subTheme, 'medium');
        console.log('Result:', template ? 'Template found' : 'No template');
    } catch (error) {
        console.log('Error handled:', error.message);
    }
});

// Print summary report
console.log('\n=== Test Summary ===');
console.log(`Total tests run: ${totalTests}`);
console.log(`Successful tests: ${successfulTests}`);
console.log(`Failed tests: ${failedTests}`);

if (missingTemplates.size > 0) {
    console.log('\nMissing Templates:');
    missingTemplates.forEach(path => console.log(`- ${path}`));
}

if (unreplacedPlaceholders.size > 0) {
    console.log('\nUnreplaced Placeholders:');
    unreplacedPlaceholders.forEach(p => console.log(`- ${p}`));
}

if (edgeCaseFailures.size > 0) {
    console.log('\nEdge Case Failures:');
    edgeCaseFailures.forEach(failure => console.log(`- ${failure}`));
} 