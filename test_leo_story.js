const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator.js');

async function generateLeoStory() {
    const inputs = {
        childName: "Leo",
        gender: "boy",
        physicalDescription: "short curly hair and a big smile",
        favoriteColor: "green",
        favoriteAnimal: "elephant",
        character1Name: "Max",
        character1Relation: "dad",
        character2Name: "Ruby",
        character2Relation: "friend from preschool",
        theme: "patience",
        length: "mini",
        age: 4
    };

    console.log("Generating story for Leo...\n");
    
    const generator = new AgeAppropriateStoryGenerator(4);
    
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
generateLeoStory(); 