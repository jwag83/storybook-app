const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');

async function testMoralHandling() {
    const inputs = {
        childName: "Ava",
        gender: "girl",
        age: 7,
        favoriteColor: "red",
        favoriteAnimal: "dolphin",
        physicalDescription: "short black hair and big green eyes",
        character1Name: "Maya",
        character1Relation: "older cousin",
        character2Name: "Luca",
        character2Relation: "family friend",
        theme: "nature",
        subTheme: "patience",
        length: "medium",
        moral: "Creative ideas grow when we work together",
        emotionalTone: "joyful"
    };

    console.log("Testing moral handling with inputs:", JSON.stringify(inputs, null, 2));

    const generator = new AgeAppropriateStoryGenerator(inputs);

    // Test moral section generation directly
    console.log("\nTesting moral section generation:");
    const moralContent = await generator.generateSection("moral", inputs);
    console.log("Generated moral:", moralContent);

    // Generate full story to verify moral integration
    console.log("\nGenerating full story to verify moral integration:");
    const story = await generator.generateStory();
    
    // Find and display the moral page
    const moralPage = story.find(page => page.section === "moral");
    console.log("\nMoral page from full story:", moralPage?.content || "No moral page found");
}

testMoralHandling().catch(console.error); 