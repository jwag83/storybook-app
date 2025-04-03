(async () => {
  const { generateUserStory } = require("./generate_user_story");

  const inputs = {
    childName: "Ava",
    gender: "girl",
    physicalDescription: "long brown hair and bright blue eyes",
    favoriteColor: "purple",
    favoriteAnimal: "butterfly",
    character1Name: "Sophia",
    character1Relation: "best friend",
    character2Name: "Oliver",
    character2Relation: "neighbor",
    theme: "nature",
    subTheme: "patience",
    length: "medium",
    age: 7,
    moral: "Creative ideas grow when we work together",
    emotionalTone: "joyful"
  };

  try {
    const story = await generateUserStory(inputs);
    console.log("\n✅ Generated Story:\n", story);
  } catch (err) {
    console.error("❌ Error generating story:", err);
  }
})(); 