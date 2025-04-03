const { generateUserStory } = require('./generate_user_story');

const inputs = {
    childName: "Ava",
    age: 7,
    gender: "girl",
    theme: "nature",
    subTheme: "patience",
    length: "medium",  // Changed from storyLength to length to match our validation
    physicalDescription: "short black hair and big green eyes",
    favoriteColor: "red",
    favoriteAnimal: "dolphin",
    character1Name: "Maya",
    character1Relation: "older cousin",
    character2Name: "Luca",
    character2Relation: "family friend",
    moral: "Creative ideas grow when we work together",
    emotionalTone: "joyful"
};

(async () => {
    try {
        console.log("=== Running User Story Test ===\n");
        await generateUserStory(inputs);
    } catch (error) {
        console.error("\n❌ Test failed:", error.message);
    }
})(); 