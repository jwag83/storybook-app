// Add timeout to prevent infinite hanging
// Increased from 30s to 120s to allow completion of long stories
setTimeout(() => {
    console.error("⚠️ Story generation timed out after 120 seconds.");
    process.exit(1);
}, 120000);

const { AgeAppropriateStoryGenerator } = require('./age_appropriate_story_generator');
const { StoryInputValidator } = require('./story_input_validator');
const {
  VALID_THEMES,
  VALID_SUBTHEMES,
  VALID_EMOTIONAL_TONES,
  PAGE_COUNT_REQUIREMENTS,
  BASIC_COLORS,
  COMMON_ANIMALS,
  VALID_LENGTHS,
  VALID_GENDERS
} = require('./story_constants');

const testInput = {
  childName: "Ethan",
  gender: "boy",
  age: 7,
  physicalDescription: "short black hair and big green eyes",
  favoriteColor: "red",
  favoriteAnimal: "dolphin",
  character1Name: "Maya",
  character1Relation: "older cousin",
  character2Name: "Luca",
  character2Relation: "family friend",
  theme: "nature",
  subTheme: "exploration",
  length: "medium",
  moral: "Creative ideas grow when we work together"
};

try {
  const validator = new StoryInputValidator({
    VALID_THEMES,
    VALID_SUBTHEMES,
    VALID_EMOTIONAL_TONES,
    PAGE_COUNT_REQUIREMENTS,
    BASIC_COLORS,
    COMMON_ANIMALS,
    VALID_LENGTHS,
    VALID_GENDERS
  });

  const generator = new AgeAppropriateStoryGenerator(testInput);
  const story = generator.generateStory(testInput);

  console.log("=== Story Output ===");
  Object.entries(story).forEach(([section, content], i) => {
    console.log(`Page ${i + 1} - ${section}`);
    console.log(content);
    console.log();
  });
} catch (error) {
  console.error("❌ Error generating story:", error.message);
} 