const { generateUserStory } = require("./generate_user_story");

(async () => {
    const inputs = {
        childName: "Ava",
        gender: "girl",
        age: 7,
        length: "medium",
        theme: "nature",
        subTheme: "patience",
        favoriteColor: "red",
        favoriteAnimal: "dolphin",
        physicalDescription: "curly brown hair and big curious eyes",
        character1Name: "Maya",
        character1Relation: "older cousin",
        character2Name: "Luca",
        character2Relation: "family friend",
        emotionalTone: "joyful",
        moral: "Creative ideas grow when we work together"
    };

    try {
        const story = await generateUserStory(inputs);

        console.log("=== STORY OUTPUT ===");
        story.forEach((page, index) => {
            console.log(`\nPage ${index + 1} (${page.section}):`);
            console.log(`Word count: ${page.wordCount}`);
            console.log(page.text);
        });

        console.log("\n✅ Story generated successfully.");
    } catch (err) {
        console.error("❌ Error generating story:", err.message);
    }
})(); 