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

// Test Case 1: Full input set with all fields
const testCase1 = {
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
    subTheme: "exploration",
    length: "medium",
    moral: "Taking care of our world helps everyone thrive.",
    emotionalTone: "joyful"
};

// Test Case 2: Missing optional fields
const testCase2 = {
    childName: "Ethan",
    gender: "boy",
    age: 6,
    physicalDescription: "short black hair and big green eyes",
    favoriteColor: "red",
    favoriteAnimal: "owl",
    character1Name: "Luna",
    character1Relation: "best friend",
    character2Name: "Max",
    character2Relation: "classmate",
    theme: "patience",
    subTheme: "waiting",
    length: "short"
};

// Test Case 3: Invalid values
const testCase3 = {
    childName: "Sophie",
    gender: "girl",
    age: 12, // Invalid age
    physicalDescription: "long blonde hair and blue eyes",
    favoriteColor: "rainbow", // Invalid color
    favoriteAnimal: "unicorn", // Invalid animal
    character1Name: "Alex",
    character1Relation: "friend",
    character2Name: "Sam",
    character2Relation: "neighbor",
    theme: "magic", // Invalid theme
    subTheme: "flying", // Invalid subTheme
    length: "extra-long", // Invalid length
    emotionalTone: "angry" // Invalid tone
};

// Test Case 4: Minimal valid required fields
const testCase4 = {
    childName: "Tom",
    gender: "boy",
    age: 5,
    physicalDescription: "brown hair",
    favoriteColor: "blue",
    favoriteAnimal: "dog",
    character1Name: "Ben",
    character1Relation: "brother",
    character2Name: "Amy",
    character2Relation: "sister",
    theme: "friendship",
    subTheme: "trust",
    length: "mini"
};

// Test input
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
  subTheme: "patience",
  length: "medium",
  moral: "Creative ideas grow when we work together"
};

async function runValidationTests() {
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
    
    console.log("\n=== Input Validation Tests ===\n");
    
    // Test Case 1: Full input set
    console.log("Test Case 1: Full input set");
    console.log("-".repeat(50));
    try {
        const result1 = validator.validateAll(testCase1);
        console.log("✅ All validations passed");
        console.log("Default values applied:", validator.optionalFields);
    } catch (error) {
        console.log("❌ Validation failed:", error.message);
    }
    
    // Test Case 2: Missing optional fields
    console.log("\nTest Case 2: Missing optional fields");
    console.log("-".repeat(50));
    try {
        const result2 = validator.validateAll(testCase2);
        console.log("✅ All validations passed");
        console.log("Default values applied:", validator.optionalFields);
    } catch (error) {
        console.log("❌ Validation failed:", error.message);
    }
    
    // Test Case 3: Invalid values
    console.log("\nTest Case 3: Invalid values");
    console.log("-".repeat(50));
    try {
        const result3 = validator.validateAll(testCase3);
        console.log("✅ All validations passed");
    } catch (error) {
        console.log("❌ Validation failed:", error.message);
    }
    
    // Test Case 4: Minimal valid required fields
    console.log("\nTest Case 4: Minimal valid required fields");
    console.log("-".repeat(50));
    try {
        const result4 = validator.validateAll(testCase4);
        console.log("✅ All validations passed");
        console.log("Default values applied:", validator.optionalFields);
    } catch (error) {
        console.log("❌ Validation failed:", error.message);
    }
}

// Run the tests
runValidationTests().catch(console.error);

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

  const result = validator.validateAll(testInput);
  console.log("✅ Validation Passed:", result);
} catch (err) {
  console.error("❌ Validation Failed:", err.message);
} 