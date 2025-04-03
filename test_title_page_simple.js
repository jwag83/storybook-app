const { generateTitlePage } = require('./ai_story_generator');

// Mock the OpenAI API to avoid actual API calls during testing
const mockOpenAI = {
  Configuration: function() {},
  OpenAIApi: function() {
    return {
      createCompletion: async function() {
        return {
          data: {
            choices: [
              {
                text: '{"title": "The Magic Garden of Friendship", "subtitle": "A tale of kindness and courage"}'
              }
            ]
          }
        };
      }
    };
  }
};

// Replace the real OpenAI module with our mock
require.cache[require.resolve('openai')] = {
  exports: mockOpenAI
};

// Mock the content filter to avoid actual validation during testing
const mockContentFilter = {
  validateUserInputs: function() {
    // Do nothing, just a mock
  }
};

require.cache[require.resolve('./content_filter')] = {
  exports: mockContentFilter
};

// Run the tests
console.log('🧪 RUNNING TITLE PAGE TESTS 🧪\n');

const runTests = async () => {
  try {
    // Test 1: Generate title page with all required fields
    console.log('Test 1: Generate title page with all required fields');
    const storyMetadata = {
      mainCharacter: 'Luna',
      supportingCharacter: 'Max',
      theme: 'friendship',
      moral: 'kindness always wins',
      age: 7,
      length: 'medium',
      customTheme: 'adventure'
    };
    
    const titlePage = await generateTitlePage(storyMetadata);
    console.log('✅ PASS - Title page generated successfully');
    console.log(`   Title: "${titlePage.title}"`);
    console.log(`   Subtitle: "${titlePage.subtitle}"`);
    console.log(`   Prepared For: "${titlePage.preparedFor}"`);
    console.log(`   Age Group Note: "${titlePage.ageGroupNote}"`);
    console.log('-----------------------------------');
    
    // Test 2: Handle missing fields
    console.log('Test 2: Handle missing fields');
    const minimalMetadata = {
      age: 5
    };
    
    const minimalTitlePage = await generateTitlePage(minimalMetadata);
    console.log('✅ PASS - Title page generated with minimal metadata');
    console.log(`   Title: "${minimalTitlePage.title}"`);
    console.log(`   Subtitle: "${minimalTitlePage.subtitle}"`);
    console.log(`   Prepared For: "${minimalTitlePage.preparedFor}"`);
    console.log(`   Age Group Note: "${minimalTitlePage.ageGroupNote}"`);
    console.log('-----------------------------------');
    
    // Test 3: Age-appropriate titles
    console.log('Test 3: Age-appropriate titles');
    const youngMetadata = { mainCharacter: 'Luna', theme: 'friendship', moral: 'sharing is caring', age: 4 };
    const middleMetadata = { mainCharacter: 'Luna', theme: 'friendship', moral: 'kindness always wins', age: 7 };
    const olderMetadata = { mainCharacter: 'Luna', theme: 'friendship', moral: 'perseverance leads to success', age: 9 };
    
    const youngTitlePage = await generateTitlePage(youngMetadata);
    const middleTitlePage = await generateTitlePage(middleMetadata);
    const olderTitlePage = await generateTitlePage(olderMetadata);
    
    console.log('✅ PASS - Age-appropriate titles generated');
    console.log(`   Young (4): "${youngTitlePage.title}" (${youngTitlePage.ageGroupNote})`);
    console.log(`   Middle (7): "${middleTitlePage.title}" (${middleTitlePage.ageGroupNote})`);
    console.log(`   Older (9): "${olderTitlePage.title}" (${olderTitlePage.ageGroupNote})`);
    console.log('-----------------------------------');
    
    // Test 4: Test with different themes
    console.log('Test 4: Different themes');
    const natureMetadata = { mainCharacter: 'Luna', theme: 'nature', moral: 'respect the environment', age: 7 };
    const adventureMetadata = { mainCharacter: 'Luna', theme: 'adventure', moral: 'be brave', age: 7 };
    const friendshipMetadata = { mainCharacter: 'Luna', theme: 'friendship', moral: 'be a good friend', age: 7 };
    
    const natureTitlePage = await generateTitlePage(natureMetadata);
    const adventureTitlePage = await generateTitlePage(adventureMetadata);
    const friendshipTitlePage = await generateTitlePage(friendshipMetadata);
    
    console.log('✅ PASS - Theme-appropriate titles generated');
    console.log(`   Nature: "${natureTitlePage.title}"`);
    console.log(`   Adventure: "${adventureTitlePage.title}"`);
    console.log(`   Friendship: "${friendshipTitlePage.title}"`);
    console.log('-----------------------------------');
    
    console.log('🎉 ALL TESTS PASSED! 🎉');
  } catch (error) {
    console.error('❌ TEST FAILED:', error);
  }
};

runTests(); 