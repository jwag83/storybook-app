const { generateAIStory } = require("./ai_story_generator");
const { validateStoryOutput } = require("./validate_story_output");

// Shared input parameters
const baseInput = {
  childName: "Luna",
  gender: "girl",
  physicalDescription: "fiery red hair and sparkling eyes",
  favoriteColor: "purple",
  favoriteAnimal: "owl",
  character1Name: "Milo",
  character1Relation: "friend",
  character2Name: "Sage",
  character2Relation: "friend",
  theme: "kindness",
  subTheme: "helping others",
  moral: "Be kind to others",
  emotionalTone: "joyful"
};

async function testAllLengths() {
  // Test cases with different ages and lengths
  const testCases = [
    { age: 7, length: 'short', pageCount: 12, title: 'SHORT STORY' },
    { age: 8, length: 'medium', pageCount: 18, title: 'MEDIUM STORY' },
    { age: 9, length: 'long', pageCount: 25, title: 'LONG STORY' }
  ];

  for (const test of testCases) {
    // Set up input for this test case
    const input = {
      ...baseInput,
      age: test.age,
      storyLength: test.length
    };

    // Generate and validate story
    console.log(`\n===== ${test.title} =====\n`);
    const story = await generateAIStory(input);
    
    // Print story pages
    story.forEach((page, index) => {
      console.log(`Page ${index + 1}: ${page}\n`);
    });

    // Validate story
    console.log('\nValidating story...\n');
    const isValid = validateStoryOutput(story, test.age, test.pageCount);
    console.log(`\nStory validation: ${isValid ? '✅ PASSED' : '❌ FAILED'}\n`);
    console.log('=' .repeat(50));
  }
}

testAllLengths(); 