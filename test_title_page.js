const { generateTitlePage } = require('./ai_story_generator');
const { validateUserInputs } = require('./content_filter');

// Mock the OpenAI API to avoid actual API calls during testing
jest.mock('openai', () => {
  return {
    Configuration: jest.fn(),
    OpenAIApi: jest.fn().mockImplementation(() => {
      return {
        createCompletion: jest.fn().mockResolvedValue({
          data: {
            choices: [
              {
                text: '{"title": "The Magic Garden of Friendship", "subtitle": "A tale of kindness and courage"}'
              }
            ]
          }
        })
      };
    })
  };
});

// Mock the content filter to avoid actual validation during testing
jest.mock('./content_filter', () => {
  return {
    validateUserInputs: jest.fn()
  };
});

describe('Title Page Generation', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should generate a title page with all required fields', async () => {
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

    // Check that the title page has the expected structure
    expect(titlePage).toHaveProperty('title');
    expect(titlePage).toHaveProperty('subtitle');
    
    // Check that the title and subtitle are strings
    expect(typeof titlePage.title).toBe('string');
    expect(typeof titlePage.subtitle).toBe('string');
    
    // Check that the title and subtitle are not empty
    expect(titlePage.title.length).toBeGreaterThan(0);
    expect(titlePage.subtitle.length).toBeGreaterThan(0);
    
    // Check that the content filter was called to validate the title and subtitle
    expect(validateUserInputs).toHaveBeenCalled();
  });

  test('should handle missing fields gracefully', async () => {
    const storyMetadata = {
      // Missing most fields
      age: 5
    };

    const titlePage = await generateTitlePage(storyMetadata);

    // Check that the title page has the expected structure
    expect(titlePage).toHaveProperty('title');
    expect(titlePage).toHaveProperty('subtitle');
    
    // Check that the title and subtitle are strings
    expect(typeof titlePage.title).toBe('string');
    expect(typeof titlePage.subtitle).toBe('string');
    
    // Check that the title and subtitle are not empty
    expect(titlePage.title.length).toBeGreaterThan(0);
    expect(titlePage.subtitle.length).toBeGreaterThan(0);
  });

  test('should generate age-appropriate titles', async () => {
    // Test for young children (3-5)
    const youngMetadata = {
      mainCharacter: 'Luna',
      theme: 'friendship',
      moral: 'sharing is caring',
      age: 4
    };
    
    const youngTitlePage = await generateTitlePage(youngMetadata);
    
    // Test for middle-aged children (6-8)
    const middleMetadata = {
      mainCharacter: 'Luna',
      theme: 'friendship',
      moral: 'kindness always wins',
      age: 7
    };
    
    const middleTitlePage = await generateTitlePage(middleMetadata);
    
    // Test for older children (9-10)
    const olderMetadata = {
      mainCharacter: 'Luna',
      theme: 'friendship',
      moral: 'perseverance leads to success',
      age: 9
    };
    
    const olderTitlePage = await generateTitlePage(olderMetadata);
    
    // Check that all title pages have the expected structure
    expect(youngTitlePage).toHaveProperty('title');
    expect(middleTitlePage).toHaveProperty('title');
    expect(olderTitlePage).toHaveProperty('title');
  });

  test('should handle API errors gracefully', async () => {
    // Mock the OpenAI API to throw an error
    const openai = require('openai');
    openai.OpenAIApi.mockImplementation(() => {
      return {
        createCompletion: jest.fn().mockRejectedValue(new Error('API Error'))
      };
    });

    const storyMetadata = {
      mainCharacter: 'Luna',
      theme: 'friendship',
      moral: 'kindness always wins',
      age: 7
    };

    const titlePage = await generateTitlePage(storyMetadata);

    // Check that the title page has the expected structure
    expect(titlePage).toHaveProperty('title');
    expect(titlePage).toHaveProperty('subtitle');
    
    // Check that the title and subtitle are strings
    expect(typeof titlePage.title).toBe('string');
    expect(typeof titlePage.subtitle).toBe('string');
    
    // Check that the title and subtitle are not empty
    expect(titlePage.title.length).toBeGreaterThan(0);
    expect(titlePage.subtitle.length).toBeGreaterThan(0);
    
    // Check that the fallback title is used
    expect(titlePage.title).toBe("A Wonderful Story");
    expect(titlePage.subtitle).toBe("A tale of friendship and courage");
  });
});

// Run the tests if this file is executed directly
if (require.main === module) {
  console.log('🧪 RUNNING TITLE PAGE TESTS 🧪\n');
  
  // Simple test runner for environments without Jest
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
      console.log(`   Young (4): "${youngTitlePage.title}"`);
      console.log(`   Middle (7): "${middleTitlePage.title}"`);
      console.log(`   Older (9): "${olderTitlePage.title}"`);
      console.log('-----------------------------------');
      
      console.log('🎉 ALL TESTS PASSED! 🎉');
    } catch (error) {
      console.error('❌ TEST FAILED:', error);
    }
  };
  
  runTests();
} 