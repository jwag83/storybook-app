const { TemplateManager, STORY_SECTIONS } = require('./story_templates');
const { VALID_THEMES, VALID_SUBTHEMES } = require('./story_constants');

console.log('=== Template Coverage Test ===\n');

const templateManager = new TemplateManager();

// Test specific template retrieval
console.log('1. Testing Nature/Friendship/Intro Template Retrieval:');
const testCases = [
    { theme: 'nature', subTheme: 'friendship', section: 'intro', length: 'medium' },
    { theme: 'nature', subTheme: 'exploration', section: 'intro', length: 'short' },
    { theme: 'friendship', subTheme: 'trust', section: 'intro', length: 'mini' }
];

testCases.forEach(test => {
    console.log(`\nTesting ${test.theme}/${test.subTheme}/${test.section}/${test.length}:`);
    const template = templateManager.getTemplate(test.section, test.theme, test.subTheme, test.length);
    console.log('Template:', template || 'Not found');
});

// Validate overall coverage
console.log('\n2. Overall Template Coverage:');
const coverage = templateManager.validateCoverage();

console.log(`\nTotal combinations checked: ${coverage.total}`);
console.log(`Missing templates: ${coverage.missing.length}`);
console.log(`Using fallback templates: ${coverage.fallbacks.length}`);

if (coverage.missing.length > 0) {
    console.log('\nMissing Template Combinations:');
    coverage.missing.forEach(combo => console.log(`- ${combo}`));
}

if (coverage.fallbacks.length > 0) {
    console.log('\nFallback Template Usage:');
    coverage.fallbacks.forEach(combo => console.log(`- ${combo}`));
}

// Test template availability for each theme
console.log('\n3. Theme-specific Template Availability:');
VALID_THEMES.forEach(theme => {
    console.log(`\nTheme: ${theme}`);
    const subThemes = VALID_SUBTHEMES[theme] || [];
    console.log(`SubThemes: ${subThemes.join(', ')}`);
    
    STORY_SECTIONS.forEach(section => {
        const template = templateManager.getTemplate(section, theme, subThemes[0], 'medium');
        console.log(`- ${section}: ${template ? 'Available' : 'Missing'}`);
    });
}); 