// MARKED FOR DELETION – NOT IN USE (pending review)
// This file contains old testing patterns that are no longer needed

const { AgeAppropriateStoryGenerator, STORY_STRUCTURE } = require('./age_appropriate_story_generator.js');

// Expected page counts for each story length
const EXPECTED_PAGE_COUNTS = {
    mini: 8,
    short: 12,
    medium: 18,
    long: 25
};

// Word count ranges for different age groups
const WORD_COUNT_RANGES = {
    '3-5': { min: 15, max: 30 },
    '6-8': { min: 25, max: 45 },
    '9-10': { min: 35, max: 60 }
};

async function testStoryGeneration(length, age, inputs) {
    console.log(`\n=== Testing ${length.toUpperCase()} Story (Age ${age}) ===`);
    console.log(`Expected page count: ${EXPECTED_PAGE_COUNTS[length]}`);
    
    const generator = new AgeAppropriateStoryGenerator(inputs);
    const ageGroup = age <= 5 ? '3-5' : age <= 8 ? '6-8' : '9-10';
    const wordRange = WORD_COUNT_RANGES[ageGroup];
    
    try {
        console.log(`Generating story for ${inputs.childName} (${age} years old)...`);
        const startTime = Date.now();
        const story = await generator.generateStory();
        const generationTime = Date.now() - startTime;
        
        // Verify page count
        const pageCount = Object.keys(story).length;
        const pageCountValid = pageCount === EXPECTED_PAGE_COUNTS[length];
        console.log(`\nPage Count: ${pageCount} (${pageCountValid ? '✓' : '✗'})`);
        
        // Verify word counts and content
        let totalWords = 0;
        let allWordCountsValid = true;
        let relationshipCheck = { page2: false, page3: false, page4: false };
        let moralCheck = false;
        
        Object.entries(story).forEach(([page, content], index) => {
            const wordCount = content.split(/\s+/).length;
            totalWords += wordCount;
            
            // Check word count range
            const wordCountValid = wordCount >= wordRange.min && wordCount <= wordRange.max;
            allWordCountsValid = allWordCountsValid && wordCountValid;
            
            // Check relationships (pages 2-4)
            if (index >= 1 && index <= 3) {
                relationshipCheck[`page${index + 1}`] = content.includes(inputs.character1Name) && 
                                                     content.includes(inputs.character2Name) &&
                                                     content.includes(inputs.character1Relation) &&
                                                     content.includes(inputs.character2Relation);
            }
            
            // Check moral
            if (page === 'moral') {
                moralCheck = content.includes(inputs.moral || 'learned') && 
                           content.includes(inputs.childName);
            }
            
            console.log(`\nPage ${index + 1} (${wordCount} words):`);
            console.log(content);
        });
        
        const avgWordsPerPage = totalWords / pageCount;
        
        console.log('\nValidation Results:');
        console.log(`- Page Count: ${pageCountValid ? '✓' : '✗'}`);
        console.log(`- Word Count Range: ${allWordCountsValid ? '✓' : '✗'}`);
        console.log(`- Relationships (Pages 2-4):`);
        Object.entries(relationshipCheck).forEach(([page, valid]) => {
            console.log(`  ${page}: ${valid ? '✓' : '✗'}`);
        });
        console.log(`- Moral Present: ${moralCheck ? '✓' : '✗'}`);
        console.log(`- Generation Time: ${generationTime}ms`);
        
        console.log('\nStory Statistics:');
        console.log(`- Total Pages: ${pageCount}`);
        console.log(`- Total Words: ${totalWords}`);
        console.log(`- Average Words per Page: ${avgWordsPerPage.toFixed(1)}`);
        
        return {
            success: pageCountValid && allWordCountsValid && 
                    Object.values(relationshipCheck).every(v => v) && 
                    moralCheck,
            pageCount,
            avgWordsPerPage,
            generationTime
        };
        
    } catch (error) {
        console.error(`Error generating ${length} story:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

async function runAllTests() {
    const testCases = [
        {
            length: 'mini',
            age: 4,
            inputs: {
                childName: "Leo",
                gender: "boy",
                physicalDescription: "short curly hair and a big smile",
                favoriteColor: "green",
                favoriteAnimal: "elephant",
                character1Name: "Max",
                character1Relation: "dad",
                character2Name: "Ruby",
                character2Relation: "friend from preschool",
                theme: "patience",
                moral: "Good things come to those who wait.",
                length: "mini",
                age: 4
            }
        },
        {
            length: 'short',
            age: 6,
            inputs: {
                childName: "Ava",
                gender: "girl",
                physicalDescription: "long black hair and bright blue eyes",
                favoriteColor: "yellow",
                favoriteAnimal: "koala",
                character1Name: "Noah",
                character1Relation: "older brother",
                character2Name: "Lily",
                character2Relation: "best friend",
                theme: "kindness",
                moral: "Being kind makes everyone happy.",
                length: "short",
                age: 6
            }
        },
        {
            length: 'medium',
            age: 7,
            inputs: {
                childName: "Ethan",
                gender: "boy",
                physicalDescription: "brown eyes and a friendly smile",
                favoriteColor: "blue",
                favoriteAnimal: "dolphin",
                character1Name: "Sophie",
                character1Relation: "teacher",
                character2Name: "Lucas",
                character2Relation: "classmate",
                theme: "courage",
                moral: "Being brave means trying even when you're scared.",
                length: "medium",
                age: 7
            }
        },
        {
            length: 'long',
            age: 9,
            inputs: {
                childName: "Isla",
                gender: "girl",
                physicalDescription: "long red hair and freckles",
                favoriteColor: "purple",
                favoriteAnimal: "fox",
                character1Name: "Olivia",
                character1Relation: "older sister",
                character2Name: "Zane",
                character2Relation: "next-door neighbor",
                theme: "friendship",
                moral: "True friends help each other through good times and bad.",
                length: "long",
                age: 9
            }
        }
    ];
    
    console.log("Starting comprehensive story generation tests...\n");
    
    const results = [];
    for (const testCase of testCases) {
        const result = await testStoryGeneration(testCase.length, testCase.age, testCase.inputs);
        results.push({
            length: testCase.length,
            age: testCase.age,
            ...result
        });
    }
    
    console.log("\n=== Test Summary ===");
    results.forEach(result => {
        console.log(`\n${result.length.toUpperCase()} Story (Age ${result.age}):`);
        if (result.error) {
            console.log(`✗ Failed: ${result.error}`);
        } else {
            console.log(`✓ Success: ${result.success ? 'All checks passed' : 'Some checks failed'}`);
            console.log(`- Pages: ${result.pageCount}`);
            console.log(`- Avg Words/Page: ${result.avgWordsPerPage.toFixed(1)}`);
            console.log(`- Generation Time: ${result.generationTime}ms`);
        }
    });
}

// Run all tests
runAllTests(); 