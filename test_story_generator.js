// MARKED FOR DELETION – NOT IN USE (pending review)
// This file contains tests for the old story generator that has been replaced

const { StoryGenerationService } = require('./generateStory.js');
const { BASIC_COLORS, COMMON_ANIMALS } = require('./story_input_validator.js');

// Story Templates
const storyTemplates = {
    nature: {
        title: "The Garden of Wonders",
        themes: {
            patience: {
                mini: {
                    intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket. Every morning, {childName} would watch the butterflies dance outside the window, dreaming of having a garden of their own.",
                    setup: "One day, {childName} decided to start a small garden. {character1Name}, {childName}'s {character1Relation}, helped {childName} get some seeds and soil, while {character2Name}, {childName}'s {character2Relation}, taught them about how plants grow.",
                    earlyChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                    interaction: "{character1Name} and {character2Name} showed {childName} how to care for the plants properly, teaching them about the importance of teamwork.",
                    mainChallenge: "A big storm came and threatened to destroy the garden. {childName} felt scared and worried about the tiny plants.",
                    climax: "With determination and the help of {character1Name} and {character2Name}, {childName} protected the garden from the storm.",
                    resolution: "After the storm passed, something amazing happened! The garden was safe, and the plants had grown stronger.",
                    moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
                }
            },
            kindness: {
                short: {
                    intro: "In a bright and cheerful home, there lived a kind {gender} named {childName}. {physicalDescription} {childName} loved spending time in the garden, watching the {favoriteAnimal}s play and grow.",
                    conflict: "One day, {childName} noticed that the {favoriteAnimal}s in the garden needed help. The weather had been harsh, and their home wasn't as cozy as it used to be.",
                    resolution: "With the help of {character1Name} and {character2Name}, {childName} created a special place for all the animals. They built cozy homes and planted {favoriteColor} flowers to make the garden beautiful again.",
                    moral: "Kindness makes the world a better place for everyone. When we help others, we create a happier world for all."
                }
            }
        }
    },
    adventure: {
        title: "The Great {favoriteAnimal} Quest",
        themes: {
            courage: {
                short: {
                    intro: "Deep in the heart of the forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved exploring the woods and making friends with all the {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered that the {favoriteAnimal}s needed help. Their home had been damaged by a storm, and they needed someone brave to help them.",
                    earlyChallenge: "The path to help the {favoriteAnimal}s was filled with obstacles. {childName} had to face their fears and be brave.",
                    interaction: "{character1Name} and {character2Name} showed {childName} how to be brave, teaching them that courage means facing fears to help others.",
                    mainChallenge: "A dangerous situation appeared, and {childName} had to make a difficult choice to help the {favoriteAnimal}s.",
                    climax: "With determination and the help of {character1Name} and {character2Name}, {childName} faced their fears and helped save the day!",
                    resolution: "The {favoriteAnimal}s found a new, safe home, and {childName} learned what true bravery means.",
                    moral: "Being brave means doing what's right, even when it's scary. {childName} showed that true courage comes from helping others."
                }
            }
        }
    }
};

// Story Generator Class
class StoryGenerator {
    constructor(userInputs) {
        this.userInputs = userInputs;
        console.log('StoryGenerator initialized with inputs:', userInputs);
    }

    generateStory() {
        const { theme, moral, length } = this.userInputs;
        console.log('Generating story with theme:', theme, 'moral:', moral, 'and length:', length);
        
        // Validate inputs
        if (!theme || !moral || !length) {
            console.error('Missing required story parameters:', { theme, moral, length });
            return null;
        }

        // Get the appropriate template based on length
        const template = storyTemplates[theme]?.themes[moral]?.[length];
        console.log('Selected template:', template);
        
        if (!template) {
            console.error('Invalid theme, moral, or length combination:', {
                theme,
                moral,
                length,
                availableThemes: Object.keys(storyTemplates),
                availableMorals: Object.keys(storyTemplates[theme]?.themes || {}),
                availableLengths: Object.keys(storyTemplates[theme]?.themes[moral] || {})
            });
            return null;
        }

        // Generate the story with the selected length
        const pages = Object.values(template).map(page => this.generatePage(page));
        console.log('Generated pages:', pages);
        
        return {
            title: this.replacePlaceholders(storyTemplates[theme].title),
            pages: pages,
            length: length,
            pageCount: pages.length
        };
    }

    generatePage(template) {
        return this.replacePlaceholders(template);
    }

    replacePlaceholders(text) {
        if (!text || typeof text !== 'string') {
            console.warn('Invalid text provided to replacePlaceholders');
            return '';
        }

        const replacements = {
            '{childName}': this.userInputs.childName,
            '{gender}': this.userInputs.gender === 'male' ? 'boy' : 'girl',
            '{favoriteColor}': this.userInputs.favoriteColor,
            '{favoriteAnimal}': this.userInputs.favoriteAnimal,
            '{physicalDescription}': this.userInputs.physicalDescription || '',
            '{character1Name}': this.userInputs.character1?.name || 'friend',
            '{character2Name}': this.userInputs.character2?.name || 'friend',
            '{character1Relation}': this.userInputs.character1?.relation || 'friend',
            '{character2Relation}': this.userInputs.character2?.relation || 'friend'
        };

        let result = text;
        Object.entries(replacements).forEach(([placeholder, value]) => {
            if (value) {
                result = result.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
            }
        });

        return result;
    }
}

// Test Scenarios
const testScenarios = [
    {
        name: 'Nature Theme - Patience Moral - Mini Length',
        inputs: {
            childName: 'Alex',
            gender: 'male',
            favoriteColor: 'blue',
            favoriteAnimal: 'rabbit',
            physicalDescription: 'a boy with curly brown hair and bright green eyes',
            theme: 'nature',
            moral: 'patience',
            length: 'mini',
            character1: { name: 'Grandpa', relation: 'grandfather' },
            character2: { name: 'Sarah', relation: 'neighbor' }
        }
    },
    {
        name: 'Adventure Theme - Courage Moral - Short Length',
        inputs: {
            childName: 'Emma',
            gender: 'female',
            favoriteColor: 'purple',
            favoriteAnimal: 'dragon',
            physicalDescription: 'a girl with long blonde hair and sparkling blue eyes',
            theme: 'adventure',
            moral: 'courage',
            length: 'short',
            character1: { name: 'Captain Jack', relation: 'uncle' },
            character2: { name: 'Luna', relation: 'friend' }
        }
    },
    {
        name: 'Nature Theme - Kindness Moral - Short Length',
        inputs: {
            childName: 'Liam',
            gender: 'male',
            favoriteColor: 'orange',
            favoriteAnimal: 'fox',
            physicalDescription: 'a boy with messy brown hair and warm brown eyes',
            theme: 'nature',
            moral: 'kindness',
            length: 'short',
            character1: { name: 'Forest', relation: 'forest guardian' },
            character2: { name: 'Berry', relation: 'forest friend' }
        }
    }
];

// Run tests
async function runTests() {
    console.log('Starting story generation tests...\n');
    
    for (const scenario of testScenarios) {
        console.log(`Testing scenario: ${scenario.name}`);
        console.log('Inputs:', JSON.stringify(scenario.inputs, null, 2));
        
        try {
            const storyGenerator = new StoryGenerator(scenario.inputs);
            const story = storyGenerator.generateStory();
            
            if (story) {
                console.log('\nStory generated successfully:');
                console.log('Title:', story.title);
                console.log('Length:', story.length);
                console.log('Page count:', story.pageCount);
                console.log('\nFirst page:', story.pages[0]);
                console.log('\nLast page:', story.pages[story.pages.length - 1]);
            } else {
                console.error('Failed to generate story for scenario:', scenario.name);
            }
        } catch (error) {
            console.error('Error in scenario:', scenario.name, error);
        }
        console.log('\n-----------------------------------\n');
    }
}

// Run the tests
runTests().catch(console.error); 