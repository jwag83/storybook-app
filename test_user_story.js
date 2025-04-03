const { generateUserStory } = require('./generate_user_story');

// Example user input
const userInputs = {
    childName: "Ava",
    gender: "girl",
    age: 7,
    physicalDescription: "curly brown hair and bright blue eyes",
    favoriteColor: "purple",
    favoriteAnimal: "butterfly",
    character1Name: "Maya",
    character1Relation: "older cousin",
    character2Name: "Luca",
    character2Relation: "family friend",
    theme: "nature",
    subTheme: "patience",
    length: "medium"
};

// Run the test
async function testUserStoryGeneration() {
    try {
        console.log("=== Testing User Story Generation ===\n");
        await generateUserStory(userInputs);
    } catch (error) {
        console.error("Test failed:", error.message);
    }
}

// Run the test
testUserStoryGeneration(); 