const { generateUserStory } = require('./generate_user_story');

async function testAvaStory() {
    console.log('Starting test with Ava\'s story parameters...');
    
    const inputs = {
        childName: "Ava",
        age: 7,
        gender: "girl",
        physicalDescription: "curly brown hair and bright eyes",
        favoriteColor: "red",
        favoriteAnimal: "butterfly",
        character1Name: "Maya",
        character1Relation: "older cousin",
        character2Name: "Luca",
        character2Relation: "family friend",
        theme: "nature",
        subTheme: "patience",
        length: "medium",
        emotionalTone: "joyful",
        moral: "Creative ideas grow when we work together"
    };

    console.log('Input parameters:', JSON.stringify(inputs, null, 2));
    
    try {
        const story = await generateUserStory(inputs);
        console.log('\nGenerated Story:');
        console.log('----------------');
        story.forEach((page, index) => {
            console.log(`\nPage ${index + 1}:`);
            console.log(page.content);
            console.log(`Word count: ${page.content.split(/\s+/).length}`);
        });
        
        const totalWords = story.reduce((sum, page) => sum + page.content.split(/\s+/).length, 0);
        console.log(`\nTotal pages: ${story.length}`);
        console.log(`Total word count: ${totalWords}`);
        console.log(`Average words per page: ${(totalWords / story.length).toFixed(1)}`);
        
    } catch (error) {
        console.error('Error generating story:', error);
    }
}

testAvaStory(); 