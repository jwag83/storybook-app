const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator.js');

async function generateIslaStory() {
    const inputs = {
        childName: "Isla",
        gender: "girl",
        physicalDescription: "long red hair and freckles",
        favoriteColor: "purple",
        favoriteAnimal: "fox",
        character1Name: "Olivia",
        character1Relation: "older sister",
        character2Name: "Zane",
        character2Relation: "next-door neighbor",
        theme: "courage",
        moral: "Courage means standing up for what's right, even when you're scared.",
        length: "medium",
        age: 9
    };

    console.log("Generating story for Isla...\n");
    
    const generator = new AgeAppropriateStoryGenerator(9);
    
    try {
        const story = await generator.generateStory(inputs);
        
        // Print each page with word count
        Object.entries(story).forEach(([page, content], index) => {
            const wordCount = content.split(/\s+/).length;
            console.log(`Page ${index + 1} (${wordCount} words):`);
            console.log(content);
            console.log();
        });

        // Calculate and display story statistics
        const totalWords = Object.values(story).reduce((sum, content) => sum + content.split(/\s+/).length, 0);
        const pageCount = Object.keys(story).length;
        const avgWordsPerPage = totalWords / pageCount;

        console.log("Story Statistics:");
        console.log(`- Total pages: ${pageCount}`);
        console.log(`- Total words: ${totalWords}`);
        console.log(`- Average words per page: ${avgWordsPerPage.toFixed(1)}`);
    } catch (error) {
        console.error("Error generating story:", error.message);
    }
}

// Run the test
generateIslaStory(); 