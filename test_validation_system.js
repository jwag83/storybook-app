const { generateUserStory, validateAndNormalizeInputs } = require('./generate_user_story');

// Test cases
const testCases = {
    validCase: {
        childName: "Ethan",
        age: 6,
        gender: "boy",
        physicalDescription: "curious boy with bright green eyes",
        favoriteColor: "green",
        favoriteAnimal: "owl",
        character1Name: "Luna",
        character1Relation: "best friend",
        character2Name: "Oliver",
        character2Relation: "forest guardian",
        theme: "nature",
        subTheme: "exploration",
        length: "medium",
        moral: "Always take care of the world around you",
        emotionalTone: "joyful"
    },
    missingRequiredFields: {
        childName: "Ethan",
        age: 6,
        // Missing gender
        physicalDescription: "curious boy with bright green eyes",
        favoriteColor: "green",
        // Missing favoriteAnimal
        character1Name: "Luna",
        character1Relation: "best friend",
        character2Name: "Oliver",
        character2Relation: "forest guardian",
        theme: "nature",
        subTheme: "exploration",
        length: "medium"
    },
    invalidValues: {
        childName: "Ethan123", // Invalid characters
        age: 15, // Out of range
        gender: "unknown", // Invalid gender
        physicalDescription: "curious boy with bright green eyes",
        favoriteColor: "ultraviolet", // Invalid color
        favoriteAnimal: "dragon", // Invalid animal
        character1Name: "Luna",
        character1Relation: "best friend",
        character2Name: "Oliver",
        character2Relation: "forest guardian",
        theme: "mystery", // Invalid theme
        subTheme: "exploration",
        length: "extra-long", // Invalid length
        moral: "Always take care of the world around you",
        emotionalTone: "angry" // Invalid tone
    },
    optionalFieldsOnly: {
        childName: "Ethan",
        age: 6,
        gender: "boy",
        physicalDescription: "curious boy with bright green eyes",
        favoriteColor: "green",
        favoriteAnimal: "owl",
        character1Name: "Luna",
        character1Relation: "best friend",
        character2Name: "Oliver",
        character2Relation: "forest guardian",
        theme: "nature",
        subTheme: "exploration",
        length: "medium"
        // No moral or emotionalTone
    }
};

// Run validation tests
async function runValidationTests() {
    console.log("=== Running Validation System Tests ===\n");

    // Test 1: Valid Case
    console.log("Test Case 1: Valid Inputs");
    console.log("-".repeat(50));
    try {
        const validatedInputs = validateAndNormalizeInputs(testCases.validCase);
        console.log("✅ Validation passed");
        console.log("Normalized inputs:", validatedInputs);
    } catch (error) {
        console.error("❌ Validation failed:", error.message);
    }

    // Test 2: Missing Required Fields
    console.log("\nTest Case 2: Missing Required Fields");
    console.log("-".repeat(50));
    try {
        validateAndNormalizeInputs(testCases.missingRequiredFields);
        console.error("❌ Test failed: Should have thrown an error for missing fields");
    } catch (error) {
        console.log("✅ Test passed: Correctly caught missing fields");
        console.log("Error message:", error.message);
    }

    // Test 3: Invalid Values
    console.log("\nTest Case 3: Invalid Values");
    console.log("-".repeat(50));
    try {
        validateAndNormalizeInputs(testCases.invalidValues);
        console.error("❌ Test failed: Should have thrown an error for invalid values");
    } catch (error) {
        console.log("✅ Test passed: Correctly caught invalid values");
        console.log("Error message:", error.message);
    }

    // Test 4: Optional Fields Only
    console.log("\nTest Case 4: Optional Fields Only");
    console.log("-".repeat(50));
    try {
        const validatedInputs = validateAndNormalizeInputs(testCases.optionalFieldsOnly);
        console.log("✅ Validation passed");
        console.log("Default moral:", validatedInputs.moral);
        console.log("Default emotionalTone:", validatedInputs.emotionalTone);
    } catch (error) {
        console.error("❌ Validation failed:", error.message);
    }
}

// Run the tests
runValidationTests(); 