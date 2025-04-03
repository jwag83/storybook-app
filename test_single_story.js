// File: test_single_story.js

const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');

const inputs = {
  childName: "Ava",
  gender: "girl",
  age: 7,
  physicalDescription: "curly brown hair and bright blue eyes",
  favoriteColor: "yellow",
  favoriteAnimal: "elephant",
  character1Name: "Maya",
  character1Relation: "older sister",
  character2Name: "Leo",
  character2Relation: "classmate",
  theme: "kindness",
  subTheme: "sharing",
  length: "medium",
  moral: "Kindness grows when we share what we love",
  emotionalTone: "joyful"
};

(async () => {
  try {
    console.log("=== Generating Story for:", inputs.childName, "===");

    const generator = new AgeAppropriateStoryGenerator(inputs);
    const story = await generator.generateStory();

    if (!Array.isArray(story)) {
      console.error("Story is not an array. Received:", typeof story, story);
      return;
    }

    console.log(`\n=== Story Generated: ${story.length} pages ===\n`);

    story.forEach((page, index) => {
      console.log(`Page ${index + 1} (${page.section || 'unknown'}):`);
      console.log(`Word count: ${page.content.trim().split(/\s+/).length}`);
      console.log(page.content);
      console.log('---');
    });

    console.log(`\n=== Story Stats ===`);
    console.log(`Total pages: ${story.length}`);
    const totalWords = story.reduce((acc, p) => acc + p.content.trim().split(/\s+/).length, 0);
    console.log(`Total words: ${totalWords}`);
    console.log(`Avg words/page: ${(totalWords / story.length).toFixed(1)}`);
  } catch (err) {
    console.error("❌ Error generating story:");
    console.error(err);
  }
})(); 