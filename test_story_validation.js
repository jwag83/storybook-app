const { validateStoryOutput } = require('./validate_story_output');

// Sample story with varying word counts
const story = [
  "Page 1: Luna was a bright and cheerful girl who loved exploring the magical forest near her home. She spent hours discovering new paths and making friends with the forest creatures.",
  "Page 2: One day, while walking through the forest, Luna heard a soft whimpering sound coming from behind a large oak tree. She carefully approached the source of the sound, her heart beating with curiosity and concern.",
  "Page 3: Behind the tree, Luna found a small, frightened rabbit with its paw caught in a thorny bush. The rabbit looked up at Luna with wide, scared eyes, hoping for help.",
  "Page 4: Luna immediately knelt down beside the rabbit. She spoke in a gentle voice, trying to calm the frightened creature. 'Don't worry, little one, I'll help you get free.'",
  "Page 5: With careful hands, Luna began to untangle the rabbit's paw from the thorns. It was a delicate task, but Luna was patient and gentle, working slowly to avoid hurting the rabbit further.",
  "Page 6: As Luna worked, she noticed that the rabbit was becoming less frightened. It seemed to understand that Luna was there to help, and it stopped struggling, allowing her to work more easily.",
  "Page 7: Finally, after what seemed like forever, Luna successfully freed the rabbit's paw. The rabbit hopped a few steps away, then turned back to look at Luna, as if to say thank you.",
  "Page 8: Luna smiled at the rabbit, happy that she had been able to help. 'You're welcome, little friend,' she said softly. The rabbit gave one more hop, then disappeared into the underbrush.",
  "Page 9: As Luna continued her walk through the forest, she felt a warm glow inside. Helping others, even small forest creatures, made her heart feel light and happy. She knew she would always stop to help those in need.",
  "Page 10: Later that day, Luna told her friends about her encounter with the rabbit. They listened with interest, and one of them said, 'That was so kind of you, Luna! Not everyone would stop to help a little rabbit.'",
  "Page 11: Luna thought about this for a moment. 'I believe that kindness is important, no matter how small the creature or how big the problem. Every little bit of help makes a difference.'",
  "Page 12: From that day on, Luna made it her mission to help others whenever she could. Whether it was a lost bird, a stuck hedgehog, or a friend who needed cheering up, Luna was always ready to lend a hand. And she discovered that the more she helped others, the happier she felt inside."
];

// Test parameters
const age = 8;
const expectedPageCount = 12;

// Run validation
console.log('Testing story validation...\n');
validateStoryOutput(story, age, expectedPageCount); 