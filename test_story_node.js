// MARKED FOR DELETION – NOT IN USE (pending review)
// This file contains deprecated node-based testing approach that's no longer used

// Story section definitions
const STORY_SECTIONS = {
    mini: [
        "intro",
        "setup",
        "earlyChallenge",
        "interaction",
        "challenge1",
        "challenge2",
        "mainChallenge",
        "moral"
    ],
    short: [
        "intro",
        "setup",
        "earlyChallenge",
        "interaction",
        "challenge1",
        "challenge2",
        "mainChallenge",
        "climax",
        "resolution",
        "reflection",
        "moral",
        "emotionalClosure"
    ],
    medium: [
        "intro",
        "setup",
        "teamIntro",
        "initialChallenge",
        "teamDynamics",
        "risingConflict",
        "backstory",
        "majorChallenge",
        "midReflection",
        "characterGrowth",
        "newStrategy",
        "climax",
        "turningPoint",
        "resolution",
        "celebration",
        "reflection",
        "returnHome",
        "moral"
    ],
    long: [
        "intro",
        "adventureCall",
        "friendsIntro",
        "earlyObstacle",
        "characterInteraction",
        "problemEscalates",
        "teamStrategy",
        "earlySetback",
        "backstory",
        "majorConflict",
        "midpointReflection",
        "characterDevelopment",
        "companionship",
        "bigChallenge",
        "unexpectedTwist",
        "regroup",
        "risingAction",
        "climax",
        "courageousMoment",
        "conflictResolution",
        "celebration",
        "reflection",
        "returnHome",
        "moral",
        "emotionalClosure"
    ]
};

const { AgeAppropriateStoryGenerator } = require("./age_appropriate_story_generator");

// Test inputs for different scenarios
const testScenarios = [
    {
        name: "Kindness Theme - Age 5",
        inputs: {
            childName: "Alex",
            gender: "male",
            physicalDescription: "a boy with curly brown hair and bright green eyes",
            favoriteColor: "blue",
            favoriteAnimal: "rabbit",
            character1Name: "Grandpa",
            character1Relation: "grandfather",
            character2Name: "Sarah",
            character2Relation: "neighbor",
            theme: "kindness",
            length: "mini",
            age: 5,
            emotionalTone: "gentle"
        }
    },
    {
        name: "Courage Theme - Age 8",
        inputs: {
            childName: "Emma",
            gender: "female",
            physicalDescription: "a girl with long blonde hair and sparkling blue eyes",
            favoriteColor: "purple",
            favoriteAnimal: "dragon",
            character1Name: "Captain Jack",
            character1Relation: "uncle",
            character2Name: "Luna",
            character2Relation: "friend",
            theme: "courage",
            length: "short",
            age: 8,
            emotionalTone: "joyful"
        }
    },
    {
        name: "Friendship Theme - Age 7",
        inputs: {
            childName: "Liam",
            gender: "male",
            physicalDescription: "a boy with messy brown hair and warm brown eyes",
            favoriteColor: "orange",
            favoriteAnimal: "fox",
            character1Name: "Forest",
            character1Relation: "forest guardian",
            character2Name: "Berry",
            character2Relation: "forest friend",
            theme: "friendship",
            length: "medium",
            age: 7,
            emotionalTone: "reflective"
        }
    }
];

async function runTests() {
    console.log("Starting Age-Appropriate Story Generator Tests");
    console.log("===========================================\n");
    
    for (const scenario of testScenarios) {
        console.log(`Testing scenario: ${scenario.name}`);
        console.log("Inputs:", JSON.stringify(scenario.inputs, null, 2));
        
        try {
            const generator = new AgeAppropriateStoryGenerator(scenario.inputs);
            console.log("\nGenerating story...");
            
            const story = await generator.generateStory();
            
            console.log("\n=== Story Output ===");
            if (!story) {
                console.error("No story was generated!");
                continue;
            }

            if (Array.isArray(story.pages)) {
                story.pages.forEach((page, index) => {
                    console.log(`\nPage ${index + 1} (${page.section}):`);
                    console.log("Content:", page.content);
                    if (typeof page.content === 'string') {
                        console.log("Word count:", page.content.split(/\s+/).length);
                    }
                    if (page.descriptiveElements) {
                        console.log("Descriptive elements:", page.descriptiveElements);
                    }
                });
                console.log(`\nTotal pages: ${story.pages.length}`);
            } else {
                console.log("Story structure:", Object.keys(story));
                Object.entries(story).forEach(([section, content], index) => {
                    console.log(`\nPage ${index + 1} (${section}):`);
                    if (typeof content === 'string') {
                        console.log("Content:", content);
                        console.log("Word count:", content.split(/\s+/).length);
                    } else {
                        console.log("Content:", JSON.stringify(content, null, 2));
                    }
                });
                console.log(`\nTotal sections: ${Object.keys(story).length}`);
            }
            
            // Additional validation
            console.log("\n=== Story Validation ===");
            if (story.pages) {
                console.log("Story length:", story.pages.length);
                console.log("All sections have content:", story.pages.every(page => page.content));
            }
            
        } catch (error) {
            console.error("\n❌ Error generating story:");
            console.error("Error message:", error.message);
            console.error("Stack trace:", error.stack);
        }
        console.log("\n-----------------------------------\n");
    }
}

// Run the tests
console.log("Running story generation tests...\n");
runTests().catch(error => {
    console.error("❌ Fatal error in test execution:", error);
    process.exit(1);
}); 