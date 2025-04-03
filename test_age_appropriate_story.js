const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator.js');

async function testAgeAppropriateStoryGenerator() {
    // Test inputs with character relationships
    const testInputs = {
        childName: "Ava",
        gender: "girl",
        physicalDescription: "long black hair and bright blue eyes",
        favoriteColor: "yellow",
        favoriteAnimal: "koala",
        character1Name: "Noah",
        character1Relation: "older brother",
        character2Name: "Lily",
        character2Relation: "best friend",
        theme: "kindness",
        length: "mini",
        age: 6
    };

    console.log("Generating story with character relationships...\n");
    
    const generator = new AgeAppropriateStoryGenerator(6);
    
    try {
        const story = await generator.generateStory(testInputs);
        
        console.log("=== Story Analysis ===\n");
        Object.entries(story).forEach(([key, content]) => {
            const wordCount = content.split(/\s+/).length;
            console.log(`\n${key.toUpperCase()} (${wordCount} words):`);
            console.log(content);
            
            // Analyze character relationships
            const noahMentioned = content.includes("Noah");
            const lilyMentioned = content.includes("Lily");
            const brotherMentioned = content.includes("brother");
            const friendMentioned = content.includes("friend");
            
            if (noahMentioned || lilyMentioned) {
                console.log("\nCharacter Analysis:");
                if (noahMentioned) console.log("- Noah appears as:", content.match(/Noah[^.]*\./g));
                if (lilyMentioned) console.log("- Lily appears as:", content.match(/Lily[^.]*\./g));
            }
        });
        
    } catch (error) {
        console.error("Error generating story:", error.message);
    }
}

// Run the test
testAgeAppropriateStoryGenerator(); 