const { generateAIStory } = require('./ai_story_generator');

async function runTestStory() {
  try {
    const story = await generateAIStory({
      mainCharacter: "Ethan",
      supportingCharacter: "Ruby",
      relationship: "sister",
      age: 6,
      gender: "male",
      theme: "Adventure",
      customTheme: "",
      moral: "Never give up",
      customMoral: "",
      length: "medium",
      dedication: "For Ethan, who loves big adventures",
      favouriteColor: "red",
      favouritePet: "tiger cub"
    });

    console.log("=== STORY TITLE PAGE ===");
    console.log(JSON.stringify(story.titlePage, null, 2));
    console.log("\n=== STORY PAGES ===");
    console.log(JSON.stringify(story.pages, null, 2));
  } catch (error) {
    console.error("Error generating story:", error);
  }
}

runTestStory(); 