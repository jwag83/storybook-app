const { generateStoryImages } = require('./image_generator');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Test parameters
const testInputs = {
    childName: "Alex",
    gender: "male",
    favoriteColor: "blue",
    favoriteAnimal: "rabbit",
    physicalDescription: "curly brown hair and bright green eyes",
    theme: "nature",
    moral: "patience",
    length: "mini",
    character1: {
        name: "Sam",
        relation: "friend"
    },
    character2: {
        name: "Maya",
        relation: "friend"
    }
};

// Test story content (4 pages)
const testStory = {
    title: "Alex's Nature Adventure",
    intro: "In a beautiful forest, there lived a boy named Alex who loved to explore. Alex had curly brown hair and bright green eyes and always wore a cheerful blue jacket. His best friend was a friendly rabbit who loved hopping through the forest.",
    setup: "One day, Alex and Sam, a cheerful friend who knew all about plants, found a tiny seed. 'Let's plant it!' said Sam. 'It will grow into something amazing!' Alex's rabbit friend watched curiously as they prepared the soil.",
    challenge1: "Days passed, and nothing happened. Alex wanted to dig up the seed to see what was wrong. His rabbit friend nudged his hand gently, as if to say 'Wait!'",
    moral: "One morning, Alex saw a tiny green shoot! The seed had grown into a beautiful blue flower. 'Patience makes beautiful things grow!' said Sam. Alex smiled, realizing that waiting had made the flower even more special."
};

// Function to download and save image
async function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(fs.createWriteStream(path.join('images', filename)))
                    .on('error', reject)
                    .once('close', () => resolve(filename));
            } else {
                response.resume();
                reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
            }
        });
    });
}

async function runTest() {
    try {
        console.log('Generating images for test story...');
        const images = await generateStoryImages(testStory, testInputs.childName, testInputs.favoriteColor, testInputs.favoriteAnimal);
        
        console.log('Downloading images...');
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const filename = `page_${i + 1}.png`;
            await downloadImage(image.url, filename);
            console.log(`Downloaded ${filename}`);
        }

        console.log('Test completed successfully!');
    } catch (error) {
        console.error('Error during test:', error);
    }
}

runTest(); 