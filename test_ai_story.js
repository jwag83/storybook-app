const { generateAIStory } = require("./ai_story_generator");

async function test() {
  const story = await generateAIStory({
    characterName: "Luna",
    age: 7,
    moral: "Be kind to others",
    storyLength: 'short',
    theme: "Adventure",
    supportingCharacters: ["Milo the Mouse", "Sage the Owl"]
  });

  console.log("\n📖 Generated Story:\n");
  story.forEach((page, index) => {
    console.log(`Page ${index + 1}: ${page}\n`);
  });
}

test(); 