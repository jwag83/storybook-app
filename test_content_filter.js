const { containsBlockedWords, validateUserInputs } = require('./content_filter');

// Test cases for content filtering
const testCases = [
  {
    name: "Valid inputs - should PASS",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins",
      title: "The Magical Garden",
      customTheme: "Friendship and Adventure"
    },
    expectedResult: "PASS"
  },
  {
    name: "Blocked word in main character - should FAIL",
    inputs: {
      mainCharacter: "Luna the Damn Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins",
      title: "The Magical Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The mainCharacter contains inappropriate language"
  },
  {
    name: "Blocked word in supporting character - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Hell Wise",
      moral: "Kindness always wins",
      title: "The Magical Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The supportingCharacter contains inappropriate language"
  },
  {
    name: "Blocked word in moral - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins, even against evil",
      title: "The Magical Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The moral contains inappropriate language"
  },
  {
    name: "Blocked word in title - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins",
      title: "The Damn Magical Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The title contains inappropriate language"
  },
  {
    name: "Violence reference in moral - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Sometimes you need to get revenge on bullies",
      title: "The Magical Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The moral contains inappropriate language"
  },
  {
    name: "Graphic violence in title - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins",
      title: "The Bloodbath in the Garden"
    },
    expectedResult: "FAIL",
    expectedError: "The title contains inappropriate language"
  },
  {
    name: "Inappropriate content in custom theme - should FAIL",
    inputs: {
      mainCharacter: "Luna the Brave",
      supportingCharacter: "Max the Wise",
      moral: "Kindness always wins",
      title: "The Magical Garden",
      customTheme: "Getting revenge on mean people"
    },
    expectedResult: "FAIL",
    expectedError: "The customTheme contains inappropriate language"
  }
];

// Run tests
console.log("🧪 CONTENT FILTER TEST RESULTS 🧪\n");

let passedTests = 0;
let failedTests = 0;

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  
  try {
    validateUserInputs(testCase.inputs);
    
    if (testCase.expectedResult === "PASS") {
      console.log("✅ PASS - No inappropriate content detected");
      passedTests++;
    } else {
      console.log("❌ FAIL - Expected to fail but passed");
      failedTests++;
    }
  } catch (error) {
    if (testCase.expectedResult === "FAIL") {
      console.log(`✅ PASS - Correctly detected inappropriate content: "${error.message}"`);
      passedTests++;
    } else {
      console.log(`❌ FAIL - Unexpected error: "${error.message}"`);
      failedTests++;
    }
  }
  
  console.log("-----------------------------------");
});

console.log(`\n📊 SUMMARY: ${passedTests} passed, ${failedTests} failed`);
console.log(`🎯 ACCURACY: ${((passedTests / testCases.length) * 100).toFixed(1)}%`);

// Additional test for containsBlockedWords function
console.log("\n🧪 INDIVIDUAL WORD TESTING 🧪\n");

const wordTests = [
  { word: "hello", expected: false },
  { word: "damn", expected: true },
  { word: "HELLO", expected: false },
  { word: "DAMN", expected: true },
  { word: "Hello damn world", expected: true },
  { word: "get revenge", expected: true },
  { word: "bloodbath", expected: true },
  { word: "kindness", expected: false }
];

wordTests.forEach((test, index) => {
  const result = containsBlockedWords(test.word);
  console.log(`Test ${index + 1}: "${test.word}" - ${result === test.expected ? "✅ PASS" : "❌ FAIL"}`);
});

console.log("\n-----------------------------------"); 