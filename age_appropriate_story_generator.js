// Age-Appropriate Story Generator System
const { StoryInputValidator } = require("./story_input_validator");
const {
  VALID_THEMES,
  VALID_SUBTHEMES,
  VALID_EMOTIONAL_TONES,
  PAGE_COUNT_REQUIREMENTS,
  BASIC_COLORS,
  COMMON_ANIMALS,
  VALID_LENGTHS,
  VALID_GENDERS
} = require("./story_constants");

// Expected page counts for each story length
const EXPECTED_PAGE_COUNTS = PAGE_COUNT_REQUIREMENTS;

// Story section definitions
const STORY_SECTIONS = {
    mini: [
        "intro",
        "setup",
        "earlyChallenge",
        "interaction",
        "challenge1",
        "challenge2",
        "mainChallenge",
        "moral"
    ],
    short: [
        "intro",
        "setup",
        "earlyChallenge",
        "interaction",
        "challenge1",
        "challenge2",
        "mainChallenge",
        "climax",
        "resolution",
        "reflection",
        "moral",
        "emotionalClosure"
    ],
    medium: [
        "intro",
        "setup",
        "teamIntro",
        "initialChallenge",
        "teamDynamics",
        "risingConflict",
        "backstory",
        "majorChallenge",
        "midReflection",
        "characterGrowth",
        "newStrategy",
        "climax",
        "turningPoint",
        "resolution",
        "celebration",
        "reflection",
        "returnHome",
        "moral"
    ],
    long: [
        "intro",
        "adventureCall",
        "friendsIntro",
        "earlyObstacle",
        "characterInteraction",
        "problemEscalates",
        "teamStrategy",
        "earlySetback",
        "backstory",
        "majorConflict",
        "midpointReflection",
        "characterDevelopment",
        "companionship",
        "bigChallenge",
        "unexpectedTwist",
        "regroup",
        "risingAction",
        "climax",
        "courageousMoment",
        "conflictResolution",
        "celebration",
        "reflection",
        "returnHome",
        "moral",
        "emotionalClosure"
    ]
};

//

// Story structure validation
function validateStoryStructure(story, length) {
    const requiredSections = STORY_SECTIONS[length];
    const requiredPageCount = PAGE_COUNT_REQUIREMENTS[length];
    
    // Check page count
    const actualPageCount = Object.keys(story).length;
    if (actualPageCount !== requiredPageCount) {
        throw new Error(`Incorrect page count: expected ${requiredPageCount} but got ${actualPageCount}`);
    }
    
    // Check section order
    const storyPages = Object.keys(story);
    for (let i = 0; i < requiredSections.length; i++) {
        if (!storyPages.includes(requiredSections[i])) {
            throw new Error(`Missing required section: ${requiredSections[i]}`);
        }
    }
    
    // Check for unexpected sections
    for (const page of storyPages) {
        if (!requiredSections.includes(page)) {
            throw new Error(`Unexpected section: ${page}`);
        }
    }
}

// Story structure templates for different lengths
const STORY_STRUCTURE = {
    mini: {
        requiredPages: [
            'intro',
            'setup',
            'earlyChallenge',
            'interaction',
            'challenge1',
            'challenge2',
            'mainChallenge',
            'moral'
        ]
    },
    short: {
        requiredPages: [
            'intro',
            'setup',
            'earlyChallenge',
            'interaction',
            'challenge1',
            'challenge2',
            'mainChallenge',
            'climax',
            'resolution',
            'reflection',
            'moral',
            'emotionalClosure'
        ]
    },
    medium: {
        requiredPages: [
            'intro',
            'setup',
            'teamIntro',
            'initialChallenge',
            'teamDynamics',
            'risingConflict',
            'backstory',
            'majorChallenge',
            'midReflection',
            'characterGrowth',
            'newStrategy',
            'climax',
            'turningPoint',
            'resolution',
            'celebration',
            'reflection',
            'returnHome',
            'moral'
        ]
    },
    long: {
        requiredPages: [
            'intro',
            'adventureCall',
            'friendsIntro',
            'earlyObstacle',
            'characterInteraction',
            'problemEscalates',
            'teamStrategy',
            'earlySetback',
            'backstory',
            'majorConflict',
            'midpointReflection',
            'characterDevelopment',
            'companionship',
            'bigChallenge',
            'unexpectedTwist',
            'regroup',
            'risingAction',
            'climax',
            'courageousMoment',
            'conflictResolution',
            'celebration',
            'reflection',
            'returnHome',
            'moral',
            'emotionalClosure'
        ]
    }
};

// Age-specific content adjustments
const ageAdjustments = {
    '3-5': {
        vocabulary: {
            complex: {
                'determination': 'trying hard',
                'perseverance': 'not giving up',
                'challenge': 'hard thing',
                'accomplish': 'do',
                'realize': 'learn',
                'discover': 'find',
                'protect': 'keep safe',
                'threaten': 'hurt',
                'obstacle': 'thing in the way',
                'journey': 'trip'
            }
        },
        sentenceStructure: {
            maxLength: 15,
            preferredPatterns: [
                '{subject} {verb} {object}.',
                '{subject} {verb} {object} and {object}.',
                '{subject} {verb} {object} because {reason}.'
            ]
        },
        themes: {
            complexity: 'simple',
            conflict: 'gentle',
            resolution: 'immediate',
            moral: 'direct'
        }
    },
    '6-8': {
        vocabulary: {
            complex: {
                'determination': 'determination',
                'perseverance': 'perseverance',
                'challenge': 'challenge',
                'accomplish': 'accomplish',
                'realize': 'realize',
                'discover': 'discover',
                'protect': 'protect',
                'threaten': 'threaten',
                'obstacle': 'obstacle',
                'journey': 'journey'
            }
        },
        sentenceStructure: {
            maxLength: 20,
            preferredPatterns: [
                '{subject} {verb} {object} and {object}.',
                '{subject} {verb} {object} because {reason}.',
                '{subject} {verb} {object} when {condition}.',
                '{subject} {verb} {object} but {contrast}.'
            ]
        },
        themes: {
            complexity: 'moderate',
            conflict: 'light',
            resolution: 'earned',
            moral: 'reflective'
        }
    },
    '9-10': {
        vocabulary: {
            complex: {
                'determination': 'determination',
                'perseverance': 'perseverance',
                'challenge': 'challenge',
                'accomplish': 'accomplish',
                'realize': 'realize',
                'discover': 'discover',
                'protect': 'protect',
                'threaten': 'threaten',
                'obstacle': 'obstacle',
                'journey': 'journey'
            }
        },
        sentenceStructure: {
            maxLength: 25,
            preferredPatterns: [
                '{subject} {verb} {object} and {object}.',
                '{subject} {verb} {object} because {reason}.',
                '{subject} {verb} {object} when {condition}.',
                '{subject} {verb} {object} but {contrast}.',
                '{subject} {verb} {object} while {simultaneous}.',
                '{subject} {verb} {object} although {concession}.'
            ]
        },
        themes: {
            complexity: 'complex',
            conflict: 'substantial',
            resolution: 'earned',
            moral: 'philosophical'
        }
    }
};

// Add relationship-specific content adjustments
const relationshipAdjustments = {
    '3-5': {
        'best friend': {
            actions: ['played together', 'shared toys', 'helped each other'],
            dialogue: ['Let\'s do this together!', 'You\'re my best friend!', 'We can help each other!']
        },
        'older sister': {
            actions: ['taught', 'helped', 'showed'],
            dialogue: ['I\'ll help you learn!', 'Let me show you how!', 'You can do it!']
        },
        'classmate': {
            actions: ['worked together', 'shared ideas', 'helped each other'],
            dialogue: ['Let\'s work together!', 'We can share!', 'I\'ll help you!']
        }
    },
    '6-8': {
        'best friend': {
            actions: ['collaborated', 'supported each other', 'worked as a team'],
            dialogue: ['We\'re in this together!', 'That\'s what friends are for!', 'Let\'s solve this as a team!']
        },
        'older sister': {
            actions: ['guided', 'mentored', 'encouraged'],
            dialogue: ['I\'ll help you understand!', 'Let me teach you!', 'You\'re doing great!']
        },
        'classmate': {
            actions: ['cooperated', 'shared knowledge', 'encouraged each other'],
            dialogue: ['Let\'s work on this together!', 'We can learn from each other!', 'I believe in you!']
        }
    },
    '9-10': {
        'best friend': {
            actions: ['collaborated closely', 'supported each other through challenges', 'worked as a united team'],
            dialogue: ['We\'re stronger together!', 'That\'s what true friendship means!', 'Let\'s face this challenge as one!']
        },
        'older sister': {
            actions: ['guided with wisdom', 'mentored with patience', 'encouraged growth'],
            dialogue: ['I\'ll help you understand the deeper meaning!', 'Let me share what I\'ve learned!', 'You\'re growing so much!']
        },
        'classmate': {
            actions: ['cooperated effectively', 'shared unique perspectives', 'motivated each other'],
            dialogue: ['Let\'s combine our strengths!', 'We can learn so much from each other!', 'Your ideas are valuable!']
        }
    }
};

// Story Templates with age-appropriate variations
const storyTemplates = {
    '3-5': {
        patience: {
            mini: {
                intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket.",
                setup: "One day, {childName} decided to start a small garden. {character1Name}, their {character1Relation}, helped {childName} get some seeds and soil, while {character2Name}, their {character2Relation}, taught them about how plants grow.",
                earlyChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                interaction: "{character1Name} and {character2Name} showed {childName} how to care for the plants properly, teaching them about the importance of teamwork.",
                challenge1: "Days passed, and nothing happened. {childName} wanted to dig up the seeds to see what was wrong.",
                challenge2: "{character2Name} reminded {childName} that good things take time to grow, just like all the beautiful trees in the forest.",
                challenge3: "More days passed. Still nothing. {childName} felt frustrated and wanted to give up.",
                mainChallenge: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain.",
                climax: "With determination and the help of {character1Name} and {character2Name}, {childName} protected the garden from the storm.",
                resolution: "After the storm passed, something amazing happened! The garden was safe, and the plants had grown stronger.",
                reflection: "{childName} realized that sometimes the hardest part is waiting, but it's worth it in the end.",
                moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
            }
        },
        kindness: {
            mini: {
                intro: "In a sunny classroom, there was a kind {gender} named {childName}. {childName} had {physicalDescription} and always wore their favorite {favoriteColor} shirt.",
                setup: "{childName} noticed that {character2Name}, their {character2Relation}, was feeling sad. {character1Name}, their {character1Relation}, suggested they could help.",
                earlyChallenge: "It was hard to know how to help at first. {childName} wanted to make things better.",
                interaction: "Together with {character1Name}, they made a special card for {character2Name}.",
                challenge1: "But {character2Name} was still feeling down. They needed something more.",
                challenge2: "{childName} thought about what else they could do to help.",
                challenge3: "Sometimes being kind means trying different ways to help.",
                mainChallenge: "{character2Name} seemed to be having a really tough day.",
                climax: "{childName} decided to share their favorite toy and sit with {character2Name} at lunch.",
                resolution: "Slowly, {character2Name} started to smile. Being kind made everyone feel better.",
                reflection: "{childName} learned that kindness can come in many forms.",
                moral: "Being kind makes everyone happy. {childName} learned that small acts of kindness can make a big difference."
            }
        },
        courage: {
            mini: {
                intro: "In a bright room with {favoriteColor} walls lived a brave {gender} named {childName}. {childName} had {physicalDescription} and loved their {favoriteAnimal} stuffed animal.",
                setup: "One day, {childName} had to try something new. {character1Name}, their {character1Relation}, and {character2Name}, their {character2Relation}, were there to help.",
                earlyChallenge: "It looked scary at first. {childName} wasn't sure they could do it.",
                interaction: "{character1Name} and {character2Name} showed {childName} how to be brave.",
                challenge1: "The challenge seemed too big. {childName} wanted to give up.",
                challenge2: "But {character1Name} reminded {childName} that being brave means trying even when scared.",
                challenge3: "{character2Name} shared a story about when they were scared but tried anyway.",
                mainChallenge: "Now came the biggest challenge yet.",
                climax: "With encouragement from {character1Name} and {character2Name}, {childName} tried again.",
                resolution: "{childName} did it! Everyone was proud of their bravery.",
                reflection: "Being brave doesn't mean not being scared - it means trying anyway.",
                moral: "Being brave means trying even when you're scared. {childName} learned that courage makes you stronger."
            }
        },
        friendship: {
            mini: {
                intro: "In a cheerful neighborhood lived a friendly {gender} named {childName}. {childName} had {physicalDescription} and loved wearing {favoriteColor} clothes.",
                setup: "{childName} met {character2Name}, their new {character2Relation}. {character1Name}, their {character1Relation}, helped them become friends.",
                earlyChallenge: "Making new friends wasn't always easy. Sometimes they liked different things.",
                interaction: "But {character1Name} showed them that friends can be different and still have fun.",
                challenge1: "One day, {character2Name} and {childName} had a disagreement.",
                challenge2: "They both wanted to play different games.",
                challenge3: "It was hard to find a way to play together.",
                mainChallenge: "Their friendship was being tested.",
                climax: "They learned to listen to each other and share their feelings.",
                resolution: "Together, they found a way to play that made both of them happy.",
                reflection: "Their friendship grew stronger because they learned to understand each other.",
                moral: "True friends help each other through good times and bad. {childName} learned that friendship is about caring and sharing."
            }
        }
    },
    '6-8': {
        patience: {
            short: {
                intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket.",
                setup: "One day, {childName} decided to start a small garden. {character1Name}, their {character1Relation}, helped {childName} get some seeds and soil, while {character2Name}, their {character2Relation}, taught them about how plants grow.",
                earlyChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                interaction: "{character1Name} and {character2Name} showed {childName} how to care for the plants properly, teaching them about the importance of teamwork.",
                challenge1: "Days passed, and nothing happened. {childName} wanted to dig up the seeds to see what was wrong.",
                challenge2: "{character2Name} reminded {childName} that good things take time to grow, just like all the beautiful trees in the forest.",
                challenge3: "More days passed. Still nothing. {childName} felt frustrated and wanted to give up.",
                mainChallenge: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain.",
                climax: "With determination and the help of {character1Name} and {character2Name}, {childName} protected the garden from the storm.",
                resolution: "After the storm passed, something amazing happened! The garden was safe, and the plants had grown stronger.",
                reflection: "{childName} realized that sometimes the hardest part is waiting, but it's worth it in the end.",
                moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
            },
            medium: {
                intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket.",
                setup: "One day, {childName} decided to start a small garden. {character1Name}, their {character1Relation}, helped {childName} get some seeds and soil, while {character2Name}, their {character2Relation}, taught them about how plants grow.",
                teamIntro: "Together, they formed a special gardening team. {character1Name} knew all about different types of plants, while {character2Name} had experience with garden design.",
                initialChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                teamDynamics: "As they worked together, each person brought their own special skills to the garden. {childName} learned that everyone had something valuable to contribute.",
                risingConflict: "The weather started to change, bringing unexpected challenges to the garden.",
                backstory: "{character1Name} shared stories about their own gardening adventures, teaching {childName} about perseverance.",
                majorChallenge: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain.",
                midReflection: "The team gathered to discuss what they had learned and how they could protect their garden.",
                characterGrowth: "{childName} realized that being patient wasn't just about waiting - it was about learning and growing.",
                newStrategy: "Together, they developed a plan to protect the garden and help the plants grow stronger.",
                climax: "When the storm hit, they were ready. Each person had an important role in protecting the garden.",
                turningPoint: "The team worked together through the storm, using everything they had learned.",
                resolution: "After the storm passed, the garden was not just safe - it was thriving!",
                celebration: "Everyone celebrated their success, sharing stories about what they had learned.",
                reflection: "The garden had become more than just plants - it was a symbol of their teamwork and patience.",
                returnHome: "{childName} returned to their room, now filled with {favoriteColor} butterflies and memories of their garden adventure.",
                moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
            }
        },
        kindness: {
            short: {
                intro: "In a sunny classroom, there was a kind {gender} named {childName}. {childName} had {physicalDescription} and always wore their favorite {favoriteColor} shirt.",
                setup: "{childName} noticed that {character2Name}, their {character2Relation}, was feeling sad. {character1Name}, their {character1Relation}, suggested they could help.",
                earlyChallenge: "It was hard to know how to help at first. {childName} wanted to make things better.",
                interaction: "Together with {character1Name}, they made a special card for {character2Name}.",
                challenge1: "But {character2Name} was still feeling down. They needed something more.",
                challenge2: "{childName} thought about what else they could do to help.",
                challenge3: "Sometimes being kind means trying different ways to help.",
                mainChallenge: "{character2Name} seemed to be having a really tough day.",
                climax: "{childName} decided to share their favorite toy and sit with {character2Name} at lunch.",
                resolution: "Slowly, {character2Name} started to smile. Being kind made everyone feel better.",
                reflection: "{childName} learned that kindness can come in many forms.",
                moral: "Being kind makes everyone happy. {childName} learned that small acts of kindness can make a big difference."
            },
            medium: {
                intro: "In a sunny classroom, there was a kind {gender} named {childName}. {childName} had {physicalDescription} and always wore their favorite {favoriteColor} shirt.",
                setup: "{childName} noticed that {character2Name}, their {character2Relation}, was feeling sad. {character1Name}, their {character1Relation}, suggested they could help.",
                teamIntro: "Together, they formed a kindness team. {character1Name} knew about helping others, while {character2Name} understood how to make people feel better.",
                initialChallenge: "It was hard to know how to help at first. {childName} wanted to make things better.",
                teamDynamics: "As they worked together, each person brought their own special way of being kind.",
                risingConflict: "The situation seemed to get harder each day.",
                backstory: "{character1Name} shared stories about times when kindness had made a difference.",
                majorChallenge: "{character2Name} was having a really tough time.",
                midReflection: "The team talked about what they had learned about being kind.",
                characterGrowth: "{childName} realized that being kind wasn't just about doing nice things - it was about understanding others.",
                newStrategy: "Together, they came up with a plan to help {character2Name} feel better.",
                climax: "When they put their plan into action, everyone worked together.",
                turningPoint: "Their combined kindness started to make a difference.",
                resolution: "Slowly but surely, {character2Name} began to feel better.",
                celebration: "Everyone celebrated the power of kindness together.",
                reflection: "The experience had taught them all about the importance of being kind.",
                returnHome: "{childName} went home that day, thinking about how kindness had changed everything.",
                moral: "Being kind makes everyone happy. {childName} learned that small acts of kindness can make a big difference."
            }
        },
        courage: {
            short: {
                intro: "In a bright room with {favoriteColor} walls lived a brave {gender} named {childName}. {childName} had {physicalDescription} and loved their {favoriteAnimal} stuffed animal.",
                setup: "One day, {childName} had to try something new. {character1Name}, their {character1Relation}, and {character2Name}, their {character2Relation}, were there to help.",
                earlyChallenge: "It looked scary at first. {childName} wasn't sure they could do it.",
                interaction: "{character1Name} and {character2Name} showed {childName} how to be brave.",
                challenge1: "The challenge seemed too big. {childName} wanted to give up.",
                challenge2: "But {character1Name} reminded {childName} that being brave means trying even when scared.",
                challenge3: "{character2Name} shared a story about when they were scared but tried anyway.",
                mainChallenge: "Now came the biggest challenge yet.",
                climax: "With encouragement from {character1Name} and {character2Name}, {childName} tried again.",
                resolution: "{childName} did it! Everyone was proud of their bravery.",
                reflection: "Being brave doesn't mean not being scared - it means trying anyway.",
                moral: "Being brave means trying even when you're scared. {childName} learned that courage makes you stronger."
            },
            medium: {
                intro: "In a bright room with {favoriteColor} walls lived a brave {gender} named {childName}. {childName} had {physicalDescription} and loved their {favoriteAnimal} stuffed animal.",
                setup: "One day, {childName} had to try something new. {character1Name}, their {character1Relation}, and {character2Name}, their {character2Relation}, were there to help.",
                teamIntro: "Together, they formed a brave team. {character1Name} knew about facing challenges, while {character2Name} understood how to stay strong.",
                initialChallenge: "It looked scary at first. {childName} wasn't sure they could do it.",
                teamDynamics: "As they worked together, each person brought their own special kind of bravery.",
                risingConflict: "The challenges seemed to get harder each day.",
                backstory: "{character1Name} shared stories about times when being brave had made a difference.",
                majorChallenge: "A big test of their courage arrived.",
                midReflection: "The team talked about what they had learned about being brave.",
                characterGrowth: "{childName} realized that being brave wasn't just about not being scared - it was about trying anyway.",
                newStrategy: "Together, they came up with a plan to face their fears.",
                climax: "When they put their plan into action, everyone worked together.",
                turningPoint: "Their combined courage started to make a difference.",
                resolution: "Slowly but surely, they faced their fears.",
                celebration: "Everyone celebrated their bravery together.",
                reflection: "The experience had taught them all about the importance of being brave.",
                returnHome: "{childName} went home that day, thinking about how courage had changed everything.",
                moral: "Being brave means trying even when you're scared. {childName} learned that courage makes you stronger."
            }
        },
        friendship: {
            short: {
                intro: "In a cheerful neighborhood lived a friendly {gender} named {childName}. {childName} had {physicalDescription} and loved wearing {favoriteColor} clothes.",
                setup: "{childName} met {character2Name}, their new {character2Relation}. {character1Name}, their {character1Relation}, helped them become friends.",
                earlyChallenge: "Making new friends wasn't always easy. Sometimes they liked different things.",
                interaction: "But {character1Name} showed them that friends can be different and still have fun.",
                challenge1: "One day, {character2Name} and {childName} had a disagreement.",
                challenge2: "They both wanted to play different games.",
                challenge3: "It was hard to find a way to play together.",
                mainChallenge: "Their friendship was being tested.",
                climax: "They learned to listen to each other and share their feelings.",
                resolution: "Together, they found a way to play that made both of them happy.",
                reflection: "Their friendship grew stronger because they learned to understand each other.",
                moral: "True friends help each other through good times and bad. {childName} learned that friendship is about caring and sharing."
            },
            medium: {
                intro: "In a cheerful neighborhood lived a friendly {gender} named {childName}. {childName} had {physicalDescription} and loved wearing {favoriteColor} clothes.",
                setup: "{childName} met {character2Name}, their new {character2Relation}. {character1Name}, their {character1Relation}, helped them become friends.",
                teamIntro: "Together, they formed a friendship team. {character1Name} knew about making friends, while {character2Name} understood how to keep them.",
                initialChallenge: "Making new friends wasn't always easy. Sometimes they liked different things.",
                teamDynamics: "As they worked together, each person brought their own special way of being a friend.",
                risingConflict: "The friendship faced some challenges.",
                backstory: "{character1Name} shared stories about times when friendship had made a difference.",
                majorChallenge: "A big test of their friendship arrived.",
                midReflection: "The team talked about what they had learned about being friends.",
                characterGrowth: "{childName} realized that being a good friend wasn't just about having fun - it was about understanding others.",
                newStrategy: "Together, they came up with a plan to strengthen their friendship.",
                climax: "When they put their plan into action, everyone worked together.",
                turningPoint: "Their friendship started to grow stronger.",
                resolution: "Slowly but surely, they became better friends.",
                celebration: "Everyone celebrated their friendship together.",
                reflection: "The experience had taught them all about the importance of being good friends.",
                returnHome: "{childName} went home that day, thinking about how friendship had changed everything.",
                moral: "True friends help each other through good times and bad. {childName} learned that friendship is about caring and sharing."
            }
        }
    },
    '9-10': {
        patience: {
            long: {
                intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket.",
                adventureCall: "One day, {childName} felt a strong desire to create something beautiful. The butterflies seemed to whisper that it was time to start a garden.",
                friendsIntro: "Together with {character1Name} and {character2Name}, they formed a special gardening team. Each person brought unique skills to help the garden grow.",
                earlyObstacle: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                characterInteraction: "As they worked together, they shared stories and learned from each other. {character1Name} taught about plant care, while {character2Name} shared wisdom about growth.",
                problemEscalates: "The weather started to change, bringing unexpected challenges to the garden. The plants needed more care than they had expected.",
                teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for each type of plant.",
                earlySetback: "Some of the first plants didn't grow as expected, teaching them about learning from mistakes.",
                backstory: "{character1Name} shared stories about their own gardening adventures, teaching {childName} about perseverance and hope.",
                majorConflict: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain.",
                midpointReflection: "The team gathered to discuss what they had learned and how they could protect their garden.",
                characterDevelopment: "{childName} realized that being patient wasn't just about waiting - it was about learning and growing.",
                companionship: "Through the challenges, the team grew closer. They learned to trust and support each other.",
                bigChallenge: "The storm hit with full force, testing everything they had learned.",
                unexpectedTwist: "Just when they thought they had everything under control, they noticed a flood of water building up around the garden.",
                regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                risingAction: "They worked together through the storm, each person playing an important role.",
                climax: "Finally, they faced their biggest challenge - protecting the most delicate plants.",
                courageousMoment: "{childName} showed great courage in leading the team through the storm.",
                conflictResolution: "Their hard work paid off - the garden survived and began to thrive.",
                celebration: "Everyone celebrated their success, sharing stories about what they had learned.",
                reflection: "The garden had become more than just plants - it was a symbol of their teamwork and patience.",
                returnHome: "{childName} returned to their room, now filled with {favoriteColor} butterflies and memories of their garden adventure.",
                emotionalClosure: "Looking at the thriving garden, {childName} felt proud of what they had accomplished together.",
                moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
            }
        },
        kindness: {
            long: {
                intro: "In a sunny classroom, there was a kind {gender} named {childName}. {childName} had {physicalDescription} and always wore their favorite {favoriteColor} shirt.",
                adventureCall: "One day, {childName} noticed that something wasn't right. The classroom didn't feel as happy as it usually did.",
                friendsIntro: "Together with {character1Name} and {character2Name}, they formed a special friendship. Each person had their own special way of being a friend.",
                earlyObstacle: "Making new friends wasn't always easy. Sometimes they liked different things.",
                characterInteraction: "As they worked together, they shared stories and learned from each other about being friends.",
                problemEscalates: "The friendship faced some challenges.",
                teamStrategy: "The team gathered to discuss their approach. They decided to create a friendship plan.",
                earlySetback: "Some of their first attempts to be friends didn't work as expected.",
                backstory: "{character1Name} shared stories about times when friendship had made a difference.",
                majorConflict: "A big test of their friendship arrived.",
                midpointReflection: "The team talked about what they had learned about being friends.",
                characterDevelopment: "{childName} realized that being a good friend wasn't just about having fun - it was about understanding others.",
                companionship: "Through the challenges, the team grew closer. They learned to support each other.",
                bigChallenge: "The biggest test of their friendship arrived.",
                unexpectedTwist: "Just when they thought they had everything figured out, something unexpected happened.",
                regroup: "The team quickly adapted their plan, using their combined friendship to find a solution.",
                risingAction: "They worked together, each person playing an important role.",
                climax: "Finally, they faced their biggest challenge - being good friends together.",
                courageousMoment: "{childName} showed great courage in leading the friendship team.",
                conflictResolution: "Their hard work paid off - they became better friends together.",
                celebration: "Everyone celebrated their friendship together.",
                reflection: "The experience had taught them all about the importance of being good friends.",
                returnHome: "{childName} went home that day, thinking about how friendship had changed everything.",
                emotionalClosure: "Looking at their strong friendship, {childName} felt proud of what they had accomplished together.",
                moral: "True friends help each other through good times and bad. {childName} learned that friendship is about caring and sharing."
            }
        },
        courage: {
            long: {
                intro: "In a bright room with {favoriteColor} walls lived a brave {gender} named {childName}. {childName} had {physicalDescription} and loved their {favoriteAnimal} stuffed animal.",
                adventureCall: "One day, {childName} faced their biggest challenge yet.",
                friendsIntro: "Together with {character1Name} and {character2Name}, they formed a brave team. Each person had their own special way of being courageous.",
                earlyObstacle: "It looked scary at first. {childName} wasn't sure they could do it.",
                characterInteraction: "As they worked together, they shared stories and learned from each other about being brave.",
                problemEscalates: "The challenges seemed to get harder each day.",
                teamStrategy: "The team gathered to discuss their approach. They decided to create a bravery plan.",
                earlySetback: "Some of their first attempts to be brave didn't work as expected.",
                backstory: "{character1Name} shared stories about times when courage had made a difference.",
                majorConflict: "A big test of their bravery arrived.",
                midpointReflection: "The team talked about what they had learned about being brave.",
                characterDevelopment: "{childName} realized that being brave wasn't just about not being scared - it was about trying anyway.",
                companionship: "Through the challenges, the team grew closer. They learned to support each other.",
                bigChallenge: "The biggest test of their courage arrived.",
                unexpectedTwist: "Just when they thought they had everything figured out, something unexpected happened.",
                regroup: "The team quickly adapted their plan, using their combined courage to find a solution.",
                risingAction: "They worked together, each person playing an important role.",
                climax: "Finally, they faced their biggest challenge - being brave together.",
                courageousMoment: "{childName} showed great courage in leading the brave team.",
                conflictResolution: "Their hard work paid off - they faced their fears together.",
                celebration: "Everyone celebrated their bravery together.",
                reflection: "The experience had taught them all about the importance of being brave.",
                returnHome: "{childName} went home that day, thinking about how courage had changed everything.",
                emotionalClosure: "Looking at their accomplishments, {childName} felt proud of what they had achieved together.",
                moral: "Being brave means trying even when you're scared. {childName} learned that courage makes you stronger."
            }
        },
        friendship: {
            long: {
                intro: "In a cheerful neighborhood lived a friendly {gender} named {childName}. {childName} had {physicalDescription} and loved wearing {favoriteColor} clothes.",
                adventureCall: "One day, {childName} met someone who would change their life forever.",
                friendsIntro: "Together with {character1Name} and {character2Name}, they formed a special friendship. Each person had their own special way of being a friend.",
                earlyObstacle: "Making new friends wasn't always easy. Sometimes they liked different things.",
                characterInteraction: "As they worked together, they shared stories and learned from each other about being friends.",
                problemEscalates: "The friendship faced some challenges.",
                teamStrategy: "The team gathered to discuss their approach. They decided to create a friendship plan.",
                earlySetback: "Some of their first attempts to be friends didn't work as expected.",
                backstory: "{character1Name} shared stories about times when friendship had made a difference.",
                majorConflict: "A big test of their friendship arrived.",
                midpointReflection: "The team talked about what they had learned about being friends.",
                characterDevelopment: "{childName} realized that being a good friend wasn't just about having fun - it was about understanding others.",
                companionship: "Through the challenges, the team grew closer. They learned to support each other.",
                bigChallenge: "The biggest test of their friendship arrived.",
                unexpectedTwist: "Just when they thought they had everything figured out, something unexpected happened.",
                regroup: "The team quickly adapted their plan, using their combined friendship to find a solution.",
                risingAction: "They worked together, each person playing an important role.",
                climax: "Finally, they faced their biggest challenge - being good friends together.",
                courageousMoment: "{childName} showed great courage in leading the friendship team.",
                conflictResolution: "Their hard work paid off - they became better friends together.",
                celebration: "Everyone celebrated their friendship together.",
                reflection: "The experience had taught them all about the importance of being good friends.",
                returnHome: "{childName} went home that day, thinking about how friendship had changed everything.",
                emotionalClosure: "Looking at their strong friendship, {childName} felt proud of what they had accomplished together.",
                moral: "True friends help each other through good times and bad. {childName} learned that friendship is about caring and sharing."
            }
        }
    }
};

// Add default morals for different themes
const defaultMorals = {
    kindness: {
        '3-5': "Being kind makes everyone happy.",
        '6-8': "Small acts of kindness can make a big difference in someone's day.",
        '9-10': "Kindness creates a ripple effect that spreads joy and builds stronger connections with others."
    },
    patience: {
        '3-5': "Good things come to those who wait.",
        '6-8': "Patience and perseverance help us achieve our goals.",
        '9-10': "The journey of growth requires patience, and each step teaches us valuable lessons."
    },
    courage: {
        '3-5': "Being brave means trying even when we're scared.",
        '6-8': "True courage is facing our fears and doing what's right.",
        '9-10': "Courage isn't about being fearless, but about moving forward despite our fears."
    },
    friendship: {
        '3-5': "Friends help each other and play together.",
        '6-8': "True friendship means being there for each other in good times and bad.",
        '9-10': "Strong friendships are built on trust, understanding, and supporting each other's growth."
    },
    responsibility: {
        '3-5': "Taking care of our things and helping others is important.",
        '6-8': "Being responsible means doing what needs to be done, even when it's not easy.",
        '9-10': "With greater responsibility comes the opportunity to make a positive impact on others."
    }
};

class AgeAppropriateStoryGenerator {
    constructor(inputs) {
        this.validator = new StoryInputValidator({
            VALID_THEMES,
            VALID_SUBTHEMES,
            VALID_EMOTIONAL_TONES,
            PAGE_COUNT_REQUIREMENTS,
            BASIC_COLORS,
            COMMON_ANIMALS,
            VALID_LENGTHS,
            VALID_GENDERS
        });

        // Initialize emotional tones with fallback
        this.emotionalTones = {
            default: {
                patience: ["gently", "softly", "calmly", "steadily", "peacefully"],
                kindness: ["warmly", "sweetly", "gently", "with care", "tenderly"],
                courage: ["bravely", "boldly", "with strength", "confidently", "resolutely"],
                friendship: ["kindly", "cheerfully", "joyfully", "together", "warmly"]
            },
            joyful: {
                patience: ["playfully", "happily", "cheerfully", "brightly", "merrily"],
                kindness: ["delightfully", "gratefully", "joyfully", "gleefully", "happily"],
                courage: ["joyfully", "proudly", "enthusiastically", "excitedly", "cheerfully"],
                friendship: ["delightfully", "joyfully", "happily", "cheerfully", "excitedly"]
            },
            gentle: {
                patience: ["softly", "tenderly", "carefully", "quietly", "peacefully"],
                kindness: ["gently", "softly", "tenderly", "carefully", "delicately"],
                courage: ["quietly", "steadily", "carefully", "gently", "softly"],
                friendship: ["tenderly", "softly", "gently", "warmly", "carefully"]
            },
            reflective: {
                patience: ["gently", "softly", "tenderly"],
                kindness: ["gently", "tenderly", "softly"],
                courage: ["gently", "firmly", "softly"],
                friendship: ["gently", "tenderly", "softly"]
            }
        };
        this.inputs = this.validateInputs(inputs);
        this.length = inputs.length.toLowerCase();
        this.age = inputs.age;
        this.theme = inputs.theme;
        
        // Initialize story templates and adjustments
        this.storyTemplates = storyTemplates;
        this.ageAdjustments = ageAdjustments;
        this.relationshipAdjustments = relationshipAdjustments;
        
        // Determine age group
        if (this.age <= 5) {
            this.ageGroup = '3-5';
        } else if (this.age <= 8) {
            this.ageGroup = '6-8';
        } else {
            this.ageGroup = '9-10';
        }
        
        // Initialize content balancing based on age group
        this.contentBalancing = {
            '3-5': {
                minWordsPerPage: 15,
                maxWordsPerPage: 30,
                targetWordsPerPage: 20,
                hardCap: 120
            },
            '6-8': {
                minWordsPerPage: 25,
                maxWordsPerPage: 45,
                targetWordsPerPage: 35,
                hardCap: 120
            },
            '9-10': {
                minWordsPerPage: 35,
                maxWordsPerPage: 60,
                targetWordsPerPage: 45,
                hardCap: 120
            }
        };

        // Initialize story structure
        this.storyStructure = STORY_STRUCTURE[this.length];
        if (!this.storyStructure) {
            throw new Error(`Invalid story length: ${this.length}`);
        }

        // Initialize story elements tracking
        this.storyElements = {
            characters: new Set(),
            settings: new Set(),
            emotions: new Set(),
            actions: new Set()
        };
    }

    validateInputs(inputs) {
        const validation = this.validator.validateAll(inputs);
        
        if (!validation.isValid) {
            throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
        }

        // Set optional fields with defaults
        const validatedInputs = {
            ...inputs,
            ...this.validator.optionalFields
        };

        return validatedInputs;
    }

    simplifyVocabulary(text) {
        let simplifiedText = text;
        for (const [complex, simple] of Object.entries(this.ageAdjustments[this.ageGroup].vocabulary.complex)) {
            const regex = new RegExp(complex, 'gi');
            simplifiedText = simplifiedText.replace(regex, simple);
        }
        return simplifiedText;
    }

    adjustSentenceStructure(text) {
        const sentences = text.split(/[.!?]+/).filter(s => s.trim());
        const adjustedSentences = sentences.map(sentence => {
            if (sentence.length > this.ageAdjustments[this.ageGroup].sentenceStructure.maxLength) {
                return this.breakIntoSmallerSentences(sentence);
            }
            return sentence;
        });
        return adjustedSentences.join('. ') + '.';
    }

    breakIntoSmallerSentences(sentence) {
        const words = sentence.split(' ');
        const maxWords = this.ageAdjustments[this.ageGroup].sentenceStructure.maxLength;
        const sentences = [];
        
        for (let i = 0; i < words.length; i += maxWords) {
            sentences.push(words.slice(i, i + maxWords).join(' '));
        }
        
        return sentences.join('. ');
    }

    validatePageCount(story, length) {
        const requiredCount = PAGE_COUNT_REQUIREMENTS[length];
        const actualCount = Object.keys(story).length;
        
        if (actualCount !== requiredCount) {
            throw new Error(`Story length mismatch: Expected ${requiredCount} pages for ${length} story, got ${actualCount}`);
        }
    }

    validateStoryStructure(story, length) {
        const structure = STORY_STRUCTURE[length];
        const storyPages = Object.keys(story);
        
        // Check if all required pages are present
        for (const requiredPage of structure.requiredPages) {
            if (!storyPages.includes(requiredPage)) {
                throw new Error(`Missing required page: ${requiredPage} in ${length} story`);
            }
        }
        
        // Check if there are any unexpected pages
        for (const page of storyPages) {
            if (!structure.requiredPages.includes(page) && !structure.optionalPages.includes(page)) {
                throw new Error(`Unexpected page: ${page} in ${length} story`);
            }
        }
    }

    generateDescriptivePhrase(inputs, section) {
        const phrases = {
            general: [
                "The sun shone brightly in the sky.",
                "They felt a spark of joy in their heart.",
                "The air smelled like fresh earth and new beginnings.",
                "Each moment felt more magical than the last.",
                "The world seemed full of endless possibilities.",
                "Their hearts were filled with hope and excitement.",
                "The gentle breeze carried whispers of adventure.",
                "Everything felt fresh and new."
            ],
            reflection: [
                "It made them realize how much they had grown.",
                "They felt proud of what they had learned together.",
                "Their journey had taught them valuable lessons.",
                "They had discovered strength they never knew they had.",
                "The experience had changed them in wonderful ways."
            ],
            intro: [
                "The morning light streamed through the window.",
                "A sense of adventure filled the air.",
                "The world was waiting for their story to begin.",
                "Everything felt possible on this special day."
            ],
            setup: [
                "They gathered their supplies with care and excitement.",
                "The project seemed both challenging and exciting.",
                "Each step brought them closer to their goal.",
                "Their enthusiasm was contagious."
            ],
            teamIntro: [
                "Their different skills complemented each other perfectly.",
                "Together, they formed an unstoppable team.",
                "Each person brought something special to the group.",
                "Their combined talents made them stronger."
            ],
            initialChallenge: [
                "The first obstacle tested their determination.",
                "They faced their first real test with courage.",
                "The challenge seemed daunting but exciting.",
                "They knew this was just the beginning."
            ],
            teamDynamics: [
                "Working together brought out the best in everyone.",
                "Their friendship grew stronger with each challenge.",
                "They learned to trust and rely on each other.",
                "Teamwork made everything possible."
            ],
            risingConflict: [
                "The situation grew more challenging by the day.",
                "Each obstacle tested their resolve.",
                "The stakes were getting higher.",
                "They faced their biggest challenge yet."
            ],
            climax: [
                "This was the moment they had been preparing for.",
                "Everything they had learned would be put to the test.",
                "The final challenge lay before them.",
                "Their courage would be tested like never before."
            ],
            resolution: [
                "Their hard work had finally paid off.",
                "Success tasted sweeter because they had earned it.",
                "They had proven what they could achieve together.",
                "The journey had been worth every step."
            ],
            moral: [
                "The experience had changed them forever.",
                "They had grown in ways they never expected.",
                "The lessons learned would stay with them always.",
                "Their adventure had taught them valuable truths."
            ]
        };

        // Get age-appropriate phrases
        const agePhrases = {
            '3-5': {
                general: [
                    "The sun was bright and warm.",
                    "They felt happy in their heart.",
                    "The air smelled nice.",
                    "Everything felt good."
                ],
                reflection: [
                    "They had learned new things.",
                    "They felt proud of their work.",
                    "They had grown bigger and stronger.",
                    "They had made new friends."
                ]
            },
            '6-8': {
                general: [
                    "The sun shone brightly in the sky.",
                    "They felt a spark of joy in their heart.",
                    "The air smelled like fresh earth and new beginnings.",
                    "Each moment felt more magical than the last."
                ],
                reflection: [
                    "It made them realize how much they had grown.",
                    "They felt proud of what they had learned together.",
                    "Their journey had taught them valuable lessons.",
                    "They had discovered strength they never knew they had."
                ]
            },
            '9-10': {
                general: [
                    "The sun's golden rays painted the world in light.",
                    "Their hearts overflowed with joy and anticipation.",
                    "The air carried the sweet scent of possibility.",
                    "Each moment unfolded like a precious gift."
                ],
                reflection: [
                    "The experience had transformed them in profound ways.",
                    "They felt an overwhelming sense of pride in their achievements.",
                    "Their journey had revealed depths of wisdom they hadn't known.",
                    "They had discovered reservoirs of strength within themselves."
                ]
            }
        };

        // Get the appropriate phrases based on age group and section
        const ageSpecificPhrases = agePhrases[this.ageGroup]?.[section] || 
                                  agePhrases[this.ageGroup]?.general || 
                                  phrases[section] || 
                                  phrases.general;

        return ageSpecificPhrases[Math.floor(Math.random() * ageSpecificPhrases.length)];
    }

    balanceContent(story, length) {
        const balancedStory = {};
        const balancing = this.contentBalancing[this.ageGroup];
        const maxRetries = 5;

        // Get the required sections for the story length
        const requiredSections = STORY_STRUCTURE[length].requiredPages;

        for (const [page, content] of Object.entries(story)) {
            // Skip if this page is not in the required sections
            if (!requiredSections.includes(page)) {
                continue;
            }

            let balancedContent = content;
            let wordCount = content.split(/\s+/).length;
            let retryCount = 0;

            // First, ensure we have a complete sentence structure
            const sentences = balancedContent.split(/[.!?]+/).filter(s => s.trim());
            if (sentences.length === 0) {
                balancedContent = this.generateDescriptivePhrase(this.inputs, page);
                sentences.push(balancedContent);
            }

            // Add descriptive phrases until we reach the minimum word count or hit retry limit
            while (wordCount < balancing.minWordsPerPage && retryCount < maxRetries) {
                // Get age-appropriate descriptive elements
                const elements = this.getDescriptiveElements();
                
                // Add new descriptive sentences that expand the story
                const newSentences = [];
                
                // Add section-specific details that enhance the narrative
                const sectionDetails = this.getSectionDetails(page);
                if (sectionDetails) {
                    const details = sectionDetails;
                    const unusedDetails = details.filter(d => !balancedContent.includes(d));
                    if (unusedDetails.length > 0) {
                        const detail = unusedDetails[Math.floor(Math.random() * unusedDetails.length)];
                        newSentences.push(detail);
                    }
                }

                // Add relationship-specific content
                if (page === 'teamIntro' || page === 'teamDynamics') {
                    const relationshipContent = this.addRelationshipContent(
                        this.getDescriptivePhrase(page, this.ageGroup),
                        this.inputs.character1Name,
                        this.inputs.character1Relation,
                        this.ageGroup
                    );
                    newSentences.push(relationshipContent);
                }

                // Add moral hints in key sections
                if (['characterGrowth', 'midReflection', 'newStrategy'].includes(page)) {
                    const moralHint = this.getMoralHint(this.inputs, page);
                    if (moralHint && !balancedContent.includes(moralHint)) {
                        newSentences.push(moralHint);
                    }
                }

                // Add descriptive elements to existing sentences in a more natural way
                const expandedSentences = sentences.map(sentence => {
                    // Skip if sentence already has a descriptive element
                    if (this.hasDescriptiveElement(sentence)) {
                        return sentence;
                    }

                    const category = Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)];
                    const word = elements[category][Math.floor(Math.random() * elements[category].length)];
                    
                    return this.addDescriptiveElement(sentence, category, word);
                });

                // Combine existing and new sentences with proper punctuation
                balancedContent = this.combineSentences([...expandedSentences, ...newSentences]);
                wordCount = balancedContent.split(/\s+/).length;
                retryCount++;

                // Log retry attempts
                console.log(`[DEBUG] Page "${page}": Attempt ${retryCount}/${maxRetries}, Word count: ${wordCount}`);

                // Break if we've hit the hard cap
                if (wordCount >= balancing.hardCap) {
                    console.log(`[DEBUG] Page "${page}": Hit hard cap of ${balancing.hardCap} words`);
                    break;
                }
            }

            // If content is too long, condense it while maintaining story flow
            if (wordCount > balancing.maxWordsPerPage) {
                balancedContent = this.condenseContent(balancedContent, balancing.targetWordsPerPage);
                wordCount = balancedContent.split(/\s+/).length;
            }

            // Final word count check and logging
            console.log(`[DEBUG] Page "${page}": Final word count: ${wordCount} (${retryCount} retries used)`);
            
            balancedStory[page] = balancedContent;
        }

        return balancedStory;
    }

    getMoralHint(inputs, section) {
        const baseMoral = inputs.moral || this.getDefaultMoral(inputs.theme, inputs.age);
        const ageGroup = this.determineAgeGroup(inputs.age);
        const { childName, character1Name, character2Name } = inputs;

        // Only return hints 70% of the time to avoid formulaic patterns
        if (Math.random() > 0.7) {
            return '';
        }

        // Define theme-specific variations
        const variations = {
            kindness: {
                '3-5': {
                    characterGrowth: `"That was nice!" said ${character1Name}. "Being kind makes everyone happy!"`,
                    midReflection: `${character2Name} smiled. "When we're kind, good things happen!"`,
                    newStrategy: `"Let's be kind together!" said ${childName}.`
                },
                '6-8': {
                    characterGrowth: `"Kindness makes everything better," ${character1Name} said thoughtfully.`,
                    midReflection: `${character2Name} nodded. "Small acts of kindness can make a big difference."`,
                    newStrategy: `"Together, we can spread kindness everywhere!" said ${childName}.`
                },
                '9-10': {
                    characterGrowth: `"Your kindness has changed everything," ${character1Name} said warmly.`,
                    midReflection: `${character2Name} reflected, "Kindness creates ripples that touch everyone."`,
                    newStrategy: `"Let's make kindness our superpower," ${childName} suggested.`
                }
            },
            patience: {
                '3-5': {
                    characterGrowth: `"Good things take time!" said ${character1Name}.`,
                    midReflection: `${character2Name} smiled. "Waiting makes it better!"`,
                    newStrategy: `"Let's be patient together!" said ${childName}.`
                },
                '6-8': {
                    characterGrowth: `"Patience helps us grow," ${character1Name} said wisely.`,
                    midReflection: `${character2Name} nodded. "Sometimes waiting brings the best surprises."`,
                    newStrategy: `"Patience makes everything better," ${childName} realized.`
                },
                '9-10': {
                    characterGrowth: `"Your patience has taught us all," ${character1Name} said thoughtfully.`,
                    midReflection: `${character2Name} reflected, "The journey of growth requires patience."`,
                    newStrategy: `"Patience is our greatest teacher," ${childName} observed.`
                }
            },
            courage: {
                '3-5': {
                    characterGrowth: `"You're so brave!" said ${character1Name}.`,
                    midReflection: `${character2Name} smiled. "Being brave makes us strong!"`,
                    newStrategy: `"Let's be brave together!" said ${childName}.`
                },
                '6-8': {
                    characterGrowth: `"Courage helps us face challenges," ${character1Name} said proudly.`,
                    midReflection: `${character2Name} nodded. "True courage means trying even when we're scared."`,
                    newStrategy: `"Together, we can be brave!" ${childName} declared.`
                },
                '9-10': {
                    characterGrowth: `"Your courage inspires us all," ${character1Name} said admiringly.`,
                    midReflection: `${character2Name} reflected, "Courage isn't about being fearless, but about moving forward despite our fears."`,
                    newStrategy: `"Courage makes us stronger together," ${childName} realized.`
                }
            },
            friendship: {
                '3-5': {
                    characterGrowth: `"We're good friends!" said ${character1Name}.`,
                    midReflection: `${character2Name} smiled. "Friends help each other!"`,
                    newStrategy: `"Let's be good friends!" said ${childName}.`
                },
                '6-8': {
                    characterGrowth: `"Friendship makes everything better," ${character1Name} said warmly.`,
                    midReflection: `${character2Name} nodded. "True friends help each other through good times and bad."`,
                    newStrategy: `"Together, we're stronger!" ${childName} said.`
                },
                '9-10': {
                    characterGrowth: `"Your friendship means the world to us," ${character1Name} said sincerely.`,
                    midReflection: `${character2Name} reflected, "Strong friendships are built on trust and understanding."`,
                    newStrategy: `"Friendship helps us grow together," ${childName} observed.`
                }
            }
        };

        // Get the appropriate variation based on theme, age group, and section
        const themeVariations = variations[inputs.theme.toLowerCase()];
        if (!themeVariations) return '';

        const ageVariations = themeVariations[ageGroup];
        if (!ageVariations) return '';

        return ageVariations[section] || '';
    }

    determineAgeGroup(age) {
        if (age <= 5) return '3-5';
        if (age <= 8) return '6-8';
        return '9-10';
    }

    getDescriptiveElements() {
        return {
            '3-5': {
                actions: ["smiled", "laughed", "helped", "worked", "tried"],
                emotions: ["happy", "excited", "proud", "brave", "careful"],
                descriptions: ["big", "small", "pretty", "nice", "good"],
                timeWords: ["soon", "then", "next", "later", "finally"]
            },
            '6-8': {
                actions: ["collaborated", "encouraged", "supported", "persisted", "discovered"],
                emotions: ["determined", "thoughtful", "confident", "patient", "inspired"],
                descriptions: ["remarkable", "wonderful", "impressive", "clever", "skillful"],
                timeWords: ["eventually", "meanwhile", "afterward", "suddenly", "finally"]
            },
            '9-10': {
                actions: ["persevered", "contemplated", "coordinated", "innovated", "strategized"],
                emotions: ["resolute", "insightful", "optimistic", "resourceful", "dedicated"],
                descriptions: ["extraordinary", "ingenious", "remarkable", "exceptional", "brilliant"],
                timeWords: ["subsequently", "simultaneously", "ultimately", "gradually", "momentarily"]
            }
        }[this.ageGroup];
    }

    hasDescriptiveElement(sentence) {
        return sentence.includes('as they') || 
               sentence.includes('feeling') || 
               sentence.includes('in a') || 
               sentence.includes('eventually') || 
               sentence.includes('meanwhile') || 
               sentence.includes('afterward');
    }

    addDescriptiveElement(sentence, category, word) {
        const trimmedSentence = sentence.trim();
        switch (category) {
            case 'actions':
                return `${trimmedSentence} as they ${word}`;
            case 'emotions':
                return `${trimmedSentence} feeling ${word}`;
            case 'descriptions':
                return `${trimmedSentence} in a ${word} way`;
            case 'timeWords':
                return `${word}, ${trimmedSentence.toLowerCase()}`;
            default:
                return trimmedSentence;
        }
    }

    combineSentences(sentences) {
        return sentences
            .filter(s => s.trim())
            .map(s => s.trim())
            .join('. ') + '.';
    }

    getSectionDetails(page) {
        const sectionDetails = {
            intro: [
                "The morning light streamed through the window.",
                "A sense of adventure filled the air.",
                "The world was waiting for their story to begin."
            ],
            setup: [
                "They carefully gathered their supplies, each item chosen with purpose",
                "Excitement filled the air as they prepared for their project",
                "The perfect day for beginning their adventure had arrived"
            ],
            teamIntro: [
                "Their unique talents blended together perfectly",
                "Together, they formed an unstoppable team.",
                "Each person brought something special to the group."
            ],
            initialChallenge: [
                "The first obstacle tested their determination.",
                "They faced their first obstacle with courage.",
                "This was their chance to prove what they could do"
            ],
            teamDynamics: [
                "Working together brought out the best in everyone.",
                "Their friendship grew stronger with each challenge.",
                "They learned to trust and rely on each other."
            ],
            risingConflict: [
                "The situation grew more challenging by the day.",
                "Each obstacle tested their resolve.",
                "The stakes were getting higher."
            ],
            climax: [
                "This was the moment they had been preparing for.",
                "Everything they had learned would be put to the test.",
                "The final challenge lay before them."
            ],
            resolution: [
                "Their hard work had finally paid off.",
                "Success tasted sweeter because they had earned it.",
                "They had proven what they could achieve together."
            ],
            moral: [
                "The experience had changed them forever.",
                "They had grown in ways they never expected.",
                "The lessons learned would stay with them always."
            ]
        };
        return sectionDetails[page];
    }

    expandContent(text, targetLength) {
        const words = text.split(/\s+/);
        if (words.length >= targetLength) return text;

        // Get age-appropriate descriptive elements
        const descriptiveElements = {
            '3-5': {
                actions: ["smiled", "laughed", "helped", "worked", "tried"],
                emotions: ["happy", "excited", "proud", "brave", "careful"],
                descriptions: ["big", "small", "pretty", "nice", "good"],
                timeWords: ["soon", "then", "next", "later", "finally"]
            },
            '6-8': {
                actions: ["collaborated", "encouraged", "supported", "persisted", "discovered"],
                emotions: ["determined", "thoughtful", "confident", "patient", "inspired"],
                descriptions: ["remarkable", "wonderful", "impressive", "clever", "skillful"],
                timeWords: ["eventually", "meanwhile", "afterward", "suddenly", "finally"]
            },
            '9-10': {
                actions: ["persevered", "contemplated", "coordinated", "innovated", "strategized"],
                emotions: ["resolute", "insightful", "optimistic", "resourceful", "dedicated"],
                descriptions: ["extraordinary", "ingenious", "remarkable", "exceptional", "brilliant"],
                timeWords: ["subsequently", "simultaneously", "ultimately", "gradually", "momentarily"]
            }
        };

        const elements = descriptiveElements[this.ageGroup];
        const sentences = text.split(/[.!?]+/).filter(s => s.trim());
        const expandedSentences = sentences.map(sentence => {
            if (words.length < targetLength) {
                const category = Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)];
                const word = elements[category][Math.floor(Math.random() * elements[category].length)];
                
                // Add the descriptive element in a natural way
                if (category === 'actions') {
                    return `${sentence.trim()} as they ${word}`;
                } else if (category === 'emotions') {
                    return `${sentence.trim()} feeling ${word}`;
                } else if (category === 'descriptions') {
                    return `${sentence.trim()} in a ${word} way`;
                } else {
                    return `${word}, ${sentence.trim().toLowerCase()}`;
                }
            }
            return sentence;
        });

        return expandedSentences.join('. ') + '.';
    }

    condenseContent(text, targetLength) {
        // Enhanced content condensation while preserving key elements
        const sentences = text.split(/[.!?]+/).filter(s => s.trim());
        const condensedSentences = sentences.map(sentence => {
            if (sentence.split(/\s+/).length > targetLength) {
                return this.removeNonEssentialDetails(sentence);
            }
            return sentence;
        });
        return condensedSentences.join('. ') + '.';
    }

    removeNonEssentialDetails(sentence) {
        // Remove non-essential details while preserving core message
        return sentence
            // Remove adverbs and descriptive phrases
            .replace(/\b(very|really|quite|extremely|carefully|gently|happily|bravely|thoughtfully|quietly)\b/g, '')
            // Remove redundant adjectives
            .replace(/\b(big|small|tiny|huge|enormous|little)\s+/g, '')
            // Clean up extra spaces
            .replace(/\s+/g, ' ')
            .trim();
    }

    addRelationshipContent(text, characterName, relation, ageGroup) {
        const adjustments = relationshipAdjustments[ageGroup];
        if (!adjustments || !adjustments[relation]) {
            return text;
        }

        const { actions, dialogue } = adjustments[relation];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const randomDialogue = dialogue[Math.floor(Math.random() * dialogue.length)];

        // Add relationship-specific content
        return text.replace(
            new RegExp(characterName, 'g'),
            `${characterName}, who ${randomAction} with ${this.inputs.childName}`
        );
    }

    async generateStory() {
        try {
            const story = [];
            const requiredSections = STORY_STRUCTURE[this.length].requiredPages;
            
            for (const section of requiredSections) {
                const sectionContent = await this.generateSection(section, this.inputs);
                if (sectionContent) {
                    story.push(sectionContent);
                }
            }

            // Ensure moral section uses the provided moral
            const moralPage = story.find(page => page.section === 'moral');
            if (moralPage) {
                moralPage.content = this.applyMoral(moralPage.content, this.inputs, 'moral');
            }

            return story;
        } catch (error) {
            console.error('Error generating story:', error);
            return [];
        }
    }

    async generateSection(section, inputs) {
        try {
            const template = this.getSectionTemplate(section, inputs);
            if (!template) {
                console.warn(`[WARN] No template found for section: ${section}`);
                return { section, content: `Section ${section} has no content` };
            }

            let content = this.replacePlaceholders(template, inputs);
            content = this.adjustContentForTheme(content, inputs, section);
            content = this.applyAgeAdjustments(content, inputs.age);
            content = this.addDescriptiveContent(content, section, inputs.age);
            
            // Only call methods if they exist
            if (typeof this.addCharacterInteraction === 'function') {
                content = this.addCharacterInteraction(content, section, inputs);
            }
            if (typeof this.addMoralHint === 'function') {
                content = this.addMoralHint(content, section, inputs);
            }

            // Explicitly handle the moral section
            if (section === "moral") {
                content = this.applyMoral(content, inputs, section);
            }

            const wordCount = content.split(/\s+/).length;
            console.log(`[DEBUG] Word count for ${section}: ${wordCount}`);

            return {
                section: section,
                content: content.trim()
            };
        } catch (err) {
            console.error(`❌ Error generating section "${section}":`, err.message);
            return {
                section: section,
                content: "[Error generating this part of the story]"
            };
        }
    }

    getSectionTemplate(section, inputs) {
        console.log(`[DEBUG] Getting template for section: ${section}`);
        
        // Map internal section names to template keys
        const sectionKeyMap = {
            introduction: "intro",
            setup: "setup",
            conflict: "conflict",
            resolution: "resolution",
            moral: "moral"
        };

        // Get the mapped section name, fall back to original if no mapping exists
        const mappedSection = sectionKeyMap[section] || section;
        console.log(`[DEBUG] Mapped section "${section}" to "${mappedSection}"`);

        const templates = {
            nature: {
                patience: {
                    medium: {
                        intro: "{childName}, a curious {gender} with {physicalDescription}, loved spending time in nature watching {favoriteAnimal}s flutter through the garden.",
                        setup: "One spring day, {childName} and {character1Name}, {character1Relation}, decided to plant a butterfly garden with {character2Name}, {character2Relation}.",
                        teamIntro: "Together, they formed a special team. {character1Name} knew all about plants, and {character2Name} had a way with {favoriteAnimal}s.",
                        initialChallenge: "The garden needed time to grow, and waiting for the first flowers to bloom tested everyone's patience.",
                        teamDynamics: "Each day, they worked together, {character1Name} teaching about soil and water, while {character2Name} shared stories about {favoriteAnimal}s.",
                        risingConflict: "The days grew longer, but still no flowers appeared. {childName} began to wonder if they would ever see their garden bloom.",
                        backstory: "They remembered how excited they were when they first planted the seeds, dreaming of a garden full of {favoriteColor} flowers.",
                        majorChallenge: "A summer storm threatened their garden, and they had to work quickly to protect their plants.",
                        midReflection: "Through the challenges, they learned that growing a garden takes more than just planting seeds.",
                        characterGrowth: "Each day of waiting taught them something new about patience and care.",
                        newStrategy: "They decided to try a different approach, working together to create the perfect conditions for their garden.",
                        climax: "Finally, after weeks of careful tending, they saw the first signs of life in their garden.",
                        turningPoint: "The first {favoriteColor} flower bud appeared, bringing hope and excitement to the team.",
                        resolution: "After weeks of careful tending, the first {favoriteColor} flowers bloomed, attracting beautiful {favoriteAnimal}s to their garden.",
                        celebration: "They celebrated their success, knowing that patience and teamwork had made it possible.",
                        reflection: "Looking at their beautiful garden, they realized how much they had learned together.",
                        returnHome: "As they left the garden that day, they knew they would return tomorrow to continue their journey of growth.",
                        moral: "Just like flowers need time to grow, good things come to those who wait and care with patience."
                    }
                }
            }
        };

        // Default templates for when no specific template is found
        const defaultTemplates = {
            intro: "{childName}, a {gender} with {physicalDescription}, loved {favoriteColor} and had a special connection with {favoriteAnimal}s.",
            setup: "One day, {childName} and {character1Name}, {character1Relation}, met {character2Name}, {character2Relation}.",
            teamIntro: "Together, they formed a special team, each bringing their own unique talents.",
            initialChallenge: "Their first challenge tested their determination and teamwork.",
            teamDynamics: "Working together, they learned to trust and rely on each other.",
            risingConflict: "The situation grew more challenging, testing their resolve.",
            backstory: "They remembered how excited they were when they first started.",
            majorChallenge: "A big challenge appeared, testing everything they had learned.",
            midReflection: "Through the challenges, they learned valuable lessons.",
            characterGrowth: "Each challenge helped them grow stronger and wiser.",
            newStrategy: "They decided to try a different approach, working together.",
            climax: "Finally, they faced their biggest challenge yet.",
            turningPoint: "A moment of realization changed everything.",
            resolution: "Their hard work and determination paid off.",
            celebration: "They celebrated their success together.",
            reflection: "Looking back, they realized how much they had learned.",
            returnHome: "As they finished their journey, they knew they had grown together.",
            moral: "Through their journey, they learned that {moral}."
        };

        try {
            const theme = inputs.theme?.toLowerCase() || 'nature';
            const subTheme = inputs.subTheme?.toLowerCase() || 'patience';
            const length = inputs.length?.toLowerCase() || 'medium';

            console.log(`[DEBUG] Looking for template - Theme: ${theme}, SubTheme: ${subTheme}, Length: ${length}, Section: ${section}`);

            // Try to get theme-specific template
            const themeTemplates = templates[theme]?.[subTheme]?.[length];
            if (themeTemplates && themeTemplates[mappedSection]) {
                console.log(`[DEBUG] Found theme-specific template for ${mappedSection}`);
                return themeTemplates[mappedSection];
            }

            // Fall back to default template
            const defaultTemplate = defaultTemplates[mappedSection];
            if (defaultTemplate) {
                console.log(`[DEBUG] Using default template for ${mappedSection}`);
                return defaultTemplate;
            }

            // Ultimate fallback - should never happen as all sections have defaults
            console.warn(`[WARN] No template found for section: ${mappedSection}, using generic fallback`);
            return `{childName} and their friends worked together to overcome challenges and learn important lessons.`;
        } catch (error) {
            console.error(`[ERROR] Error getting template for ${section}:`, error);
            return `{childName} and their friends worked together to overcome challenges and learn important lessons.`;
        }
    }

    replacePlaceholders(template, placeholders) {
        if (!template || typeof template !== 'string') {
            console.warn('Invalid template provided to replacePlaceholders');
            return '';
        }

        if (!placeholders || typeof placeholders !== 'object') {
            console.warn('Invalid placeholders object provided to replacePlaceholders');
            return template;
        }

        // Define all possible placeholders and their values
        const replacements = {
            '{childName}': placeholders.childName,
            '{gender}': placeholders.gender,
            '{physicalDescription}': placeholders.physicalDescription,
            '{favoriteColor}': placeholders.favoriteColor,
            '{favoriteAnimal}': placeholders.favoriteAnimal,
            '{character1Name}': placeholders.character1Name,
            '{character1Relation}': placeholders.character1Relation,
            '{character2Name}': placeholders.character2Name,
            '{character2Relation}': placeholders.character2Relation,
            '{theme}': placeholders.theme,
            '{subTheme}': placeholders.subTheme,
            '{moral}': placeholders.moral,
            '{emotionalTone}': placeholders.emotionalTone,
            '{age}': placeholders.age,
            '{length}': placeholders.length
        };

        let content = template;
        const unresolvedPlaceholders = new Set();

        // Replace all placeholders with their values
        for (const [placeholder, value] of Object.entries(replacements)) {
            if (value === undefined || value === null) {
                // Track unresolved placeholders
                const matches = content.match(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
                if (matches) {
                    matches.forEach(match => unresolvedPlaceholders.add(match));
                }
                continue;
            }

            // Escape special regex characters in the placeholder
            const escapedPlaceholder = placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            content = content.replace(new RegExp(escapedPlaceholder, 'g'), value);
        }

        // Log any unresolved placeholders
        if (unresolvedPlaceholders.size > 0) {
            console.warn('[DEBUG] Unresolved placeholders:', Array.from(unresolvedPlaceholders));
        }

        return content;
    }

    addDescriptiveContent(content, section, age) {
        if (!content) return '';
        
        // Initialize story elements if not provided
        const storyElements = {
            characters: new Set(),
            settings: new Set(),
            emotions: new Set(),
            actions: new Set()
        };

        const sentences = content.split(/[.!?]+/).filter(s => s.trim());
        const enhancedSentences = sentences.map(sentence => {
            // Extract and track story elements
            this.extractStoryElements(sentence, storyElements);
            
            // Add descriptive elements based on section type
            if (this.shouldAddDescription(section)) {
                return this.addSectionAppropriateDescription(sentence, section, storyElements);
            }
            
            return sentence;
        });

        return enhancedSentences.join('. ') + '.';
    }

    extractStoryElements(sentence, storyElements) {
        // Extract character names
        const characterMatches = sentence.match(/\b[A-Z][a-z]+\b/g) || [];
        characterMatches.forEach(char => storyElements.characters.add(char));

        // Extract settings
        const settingMatches = sentence.match(/\b(in|at|on|by|near)\s+[a-z\s]+/gi) || [];
        settingMatches.forEach(setting => storyElements.settings.add(setting));

        // Extract emotions
        const emotionMatches = sentence.match(/\b(feeling|felt|feels)\s+[a-z\s]+/gi) || [];
        emotionMatches.forEach(emotion => storyElements.emotions.add(emotion));

        // Extract actions
        const actionMatches = sentence.match(/\b(ran|walked|jumped|played|worked|helped|learned|discovered)\b/gi) || [];
        actionMatches.forEach(action => storyElements.actions.add(action));
    }

    shouldAddDescription(section) {
        const descriptiveSections = [
            'intro', 'setup', 'teamIntro', 'initialChallenge',
            'teamDynamics', 'risingConflict', 'climax', 'resolution'
        ];
        return descriptiveSections.includes(section);
    }

    addSectionAppropriateDescription(sentence, section, storyElements) {
        const elements = this.getDescriptiveElements();
        const category = Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)];
        const word = elements[category][Math.floor(Math.random() * elements[category].length)];

        // Add description based on section type
        switch (section) {
            case 'intro':
                return this.addDescriptiveElement(sentence, 'descriptions', word);
            case 'setup':
                return this.addDescriptiveElement(sentence, 'actions', word);
            case 'teamIntro':
                return this.addDescriptiveElement(sentence, 'emotions', word);
            case 'initialChallenge':
                return this.addDescriptiveElement(sentence, 'timeWords', word);
            case 'teamDynamics':
                return this.addDescriptiveElement(sentence, 'actions', word);
            case 'risingConflict':
                return this.addDescriptiveElement(sentence, 'emotions', word);
            case 'climax':
                return this.addDescriptiveElement(sentence, 'timeWords', word);
            case 'resolution':
                return this.addDescriptiveElement(sentence, 'emotions', word);
            default:
                return sentence;
        }
    }

    integrateMoralLesson(story, moral) {
        const storyWithMoral = { ...story };
        
        // Add subtle moral hints in key sections
        const moralHints = {
            teamDynamics: "Working together made everything more meaningful.",
            characterGrowth: "Each challenge helped them grow stronger.",
            midReflection: "They were learning valuable lessons along the way.",
            newStrategy: "Their combined ideas led to better solutions.",
            climax: "Their teamwork and determination made all the difference.",
            resolution: "Success came from working together and never giving up."
        };

        // Add moral hints to relevant sections
        for (const [section, hint] of Object.entries(moralHints)) {
            if (storyWithMoral[section]) {
                const sentences = storyWithMoral[section].split(/[.!?]+/).filter(s => s.trim());
                if (!sentences.some(s => s.includes(hint))) {
                    sentences.push(hint);
                    storyWithMoral[section] = sentences.join('. ') + '.';
                }
            }
        }

        // Ensure the final moral section ties everything together
        if (storyWithMoral.moral) {
            const moralContent = storyWithMoral.moral;
            const finalMoral = this.applyMoral(moralContent, { ...this.inputs, moral }, 'moral');
            if (!moralContent.includes(finalMoral)) {
                storyWithMoral.moral = finalMoral;
            }
        }

        return storyWithMoral;
    }

    addContextualDetails(content, section) {
        // Add section-specific details to enrich the content
        const contextDetails = {
            intro: [
                "The morning sun painted the room in warm light",
                "A gentle breeze carried the scent of fresh flowers",
                "The world outside seemed full of possibilities"
            ],
            setup: [
                "They carefully gathered their supplies, each item chosen with purpose",
                "Excitement filled the air as they prepared for their project",
                "The perfect day for beginning their adventure had arrived"
            ],
            teamIntro: [
                "Their unique talents blended together perfectly",
                "Together, they formed an unstoppable team.",
                "Each person brought something special to the group."
            ],
            initialChallenge: [
                "The first obstacle tested their determination.",
                "They faced their first obstacle with courage.",
                "This was their chance to prove what they could do"
            ],
            teamDynamics: [
                "Working together brought out the best in everyone.",
                "Their friendship grew stronger with each challenge.",
                "They learned to trust and rely on each other."
            ],
            risingConflict: [
                "The situation grew more challenging by the day.",
                "Each obstacle tested their resolve.",
                "The stakes were getting higher."
            ],
            climax: [
                "This was the moment they had been preparing for.",
                "Everything they had learned would be put to the test.",
                "The final challenge lay before them."
            ],
            resolution: [
                "Their hard work had finally paid off.",
                "Success tasted sweeter because they had earned it.",
                "They had proven what they could achieve together."
            ],
            moral: [
                "The experience had changed them forever.",
                "They had grown in ways they never expected.",
                "The lessons learned would stay with them always."
            ]
        };

        // Get age-appropriate descriptive elements
        const descriptiveElements = {
            '3-5': {
                actions: ["helped", "worked", "played", "shared", "learned"],
                emotions: ["happy", "excited", "proud", "brave", "kind"],
                descriptions: ["nice", "good", "fun", "special", "wonderful"],
                timeWords: ["then", "next", "later", "soon", "now"]
            },
            '6-8': {
                actions: ["worked together", "helped each other", "shared ideas", "learned together", "grew together"],
                emotions: ["determined", "thoughtful", "confident", "patient", "inspired"],
                descriptions: ["special", "wonderful", "amazing", "important", "meaningful"],
                timeWords: ["then", "next", "later", "soon", "now"]
            },
            '9-10': {
                actions: ["collaborated", "supported each other", "shared experiences", "learned together", "grew together"],
                emotions: ["determined", "thoughtful", "confident", "patient", "inspired"],
                descriptions: ["special", "wonderful", "amazing", "important", "meaningful"],
                timeWords: ["then", "next", "later", "soon", "now"]
            }
        };

        const elements = descriptiveElements[this.ageGroup];
        const sentences = content.split(/[.!?]+/).filter(s => s.trim());
        
        // Only add one descriptive element per sentence, and only if it adds value
        const expandedSentences = sentences.map(sentence => {
            // Skip if sentence already has a descriptive element
            if (sentence.includes('as they') || sentence.includes('feeling') || 
                sentence.includes('in a') || sentence.includes('eventually') || 
                sentence.includes('meanwhile') || sentence.includes('afterward')) {
                return sentence;
            }

            // Only add descriptive elements to sentences that would benefit from them
            if (sentence.split(/\s+/).length < 8) {
                const category = Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)];
                const word = elements[category][Math.floor(Math.random() * elements[category].length)];
                
                // Add the descriptive element in a natural way
                if (category === 'actions') {
                    return `${sentence.trim()} as they ${word}`;
                } else if (category === 'emotions') {
                    return `${sentence.trim()} feeling ${word}`;
                } else if (category === 'descriptions') {
                    return `${sentence.trim()} in a ${word} way`;
                } else {
                    return `${word}, ${sentence.trim().toLowerCase()}`;
                }
            }
            return sentence;
        });

        // Add section-specific details if available
        if (contextDetails[section]) {
            const details = contextDetails[section];
            const unusedDetails = details.filter(d => !content.includes(d));
            if (unusedDetails.length > 0) {
                const detail = unusedDetails[Math.floor(Math.random() * unusedDetails.length)];
                expandedSentences.push(detail);
            }
        }

        return expandedSentences.join('. ') + '.';
    }

    generateSetupPage(pageNumber, inputs) {
        const templates = {
            1: "On a sunny day, {childName} and {character1Name} decided to plant a garden.",
            2: "They chose {favoriteColor} flowers to attract {favoriteAnimal}s.",
            3: "The soil was perfect for growing beautiful plants."
        };
        return this.replacePlaceholders(templates[pageNumber], inputs);
    }

    generateChallengePage(pageNumber, inputs) {
        const templates = {
            1: "The {favoriteAnimal}s were not coming to visit.",
            2: "{childName} and {character1Name} felt sad.",
            3: "They wondered what they could do to help."
        };
        return this.replacePlaceholders(templates[pageNumber], inputs);
    }

    generateResolutionPage(pageNumber, inputs) {
        const templates = {
            1: "One day, a {favoriteAnimal} finally came to visit!",
            2: "More and more {favoriteAnimal}s followed.",
            3: "The garden was now full of life and color."
        };
        return this.replacePlaceholders(templates[pageNumber], inputs);
    }

    generateIntroduction(inputs) {
        const template = "Meet {childName}, a {age}-year-old with {physicalDescription}.";
        return this.replacePlaceholders(template, inputs);
    }

    generateMoralPage(inputs) {
        const template = "The moral of the story is: {moral}";
        return this.replacePlaceholders(template, inputs);
    }

    processText(text, inputs) {
        return this.replacePlaceholders(text, inputs);
    }

    applyAgeAdjustments(content, age) {
        if (!content) return content;

        // Handle different age groups
        if (age >= 9) {
            return content; // Full vocabulary for ages 9-10
        }

        let adjustedContent = content;

        if (age <= 5) {
            // Ages 3-5: Simplify sentences and vocabulary
            adjustedContent = adjustedContent
                .replace(/([.!?]+)\s+/g, '$1\n') // Split into lines at sentence endings
                .split('\n')
                .map(sentence => {
                    // Shorten complex sentences
                    if (sentence.includes(' and ')) {
                        return sentence.split(' and ')[0] + '.';
                    }
                    if (sentence.includes(' but ')) {
                        return sentence.split(' but ')[0] + '.';
                    }
                    return sentence;
                })
                .filter(Boolean)
                .join(' ');
        } else if (age <= 8) {
            // Ages 6-8: Moderate complexity
            adjustedContent = adjustedContent
                .replace(/([.!?]+)\s+/g, '$1\n')
                .split('\n')
                .map(sentence => {
                    // Keep compound sentences but simplify complex ones
                    if (sentence.includes(' however ') || sentence.includes(' therefore ')) {
                        return sentence.split(/\s+(?:however|therefore)\s+/)[0] + '.';
                    }
                    return sentence;
                })
                .filter(Boolean)
                .join(' ');
        }

        // Clean up any double periods or spaces
        return adjustedContent
            .replace(/\.+/g, '.')
            .replace(/\s+/g, ' ')
            .trim();
    }

    ensureMinimumWordCount(content, age) {
        const balancing = this.contentBalancing[this.ageGroup];
        let wordCount = content.split(/\s+/).length;
        let maxRetries = 5;
        let retryCount = 0;

        // If content is too short, add meaningful content with retry limit
        while (wordCount < balancing.minWordsPerPage && retryCount < maxRetries) {
            // Add meaningful content based on the section's context
            content = this.addContextualDetails(content);
            wordCount = content.split(/\s+/).length;
            retryCount++;
            
            // Log retry attempts
            console.log(`[DEBUG] Attempt ${retryCount}/${maxRetries}: Word count is ${wordCount}`);
            
            // Break if we've hit the hard cap
            if (wordCount >= balancing.hardCap) {
                console.log(`[DEBUG] Hit hard cap of ${balancing.hardCap} words`);
                break;
            }
        }

        if (retryCount >= maxRetries && wordCount < balancing.minWordsPerPage) {
            console.warn(`[WARNING] Could not reach minimum word count (${balancing.minWordsPerPage}) after ${maxRetries} attempts. Final count: ${wordCount}`);
        } else if (wordCount >= balancing.minWordsPerPage) {
            console.log(`[DEBUG] Successfully reached minimum word count: ${wordCount}`);
        }

        return content;
    }

    replaceCharacterNamePlaceholders(content, inputs) {
        // Replace any remaining character name placeholders
        let processedContent = content;
        const characterReplacements = {
            '{character1}': inputs.character1Name,
            '{character2}': inputs.character2Name,
            '{character1Name}': inputs.character1Name,
            '{character2Name}': inputs.character2Name
        };

        for (const [placeholder, value] of Object.entries(characterReplacements)) {
            const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            processedContent = processedContent.replace(regex, value);
        }

        return processedContent;
    }

    validateStoryStructure(story) {
        const requiredSections = this.storyStructure.requiredPages;
        const requiredPageCount = EXPECTED_PAGE_COUNTS[this.length];
        
        // Check page count
        const actualPageCount = Object.keys(story).length;
        if (actualPageCount !== requiredPageCount) {
            throw new Error(`Incorrect page count: expected ${requiredPageCount} but got ${actualPageCount}`);
        }
        
        // Check section order
        const storyPages = Object.keys(story);
        for (let i = 0; i < requiredSections.length; i++) {
            if (!storyPages.includes(requiredSections[i])) {
                throw new Error(`Missing required section: ${requiredSections[i]}`);
            }
        }
        
        // Check for unexpected sections
        for (const page of storyPages) {
            if (!requiredSections.includes(page)) {
                throw new Error(`Unexpected section: ${page}`);
            }
        }
    }

    getDescriptivePhrase(section, ageGroup) {
        const basePhrases = {
            "3-5": [
                "Everything looked bright and happy.",
                "They smiled with joy.",
                "The sun was warm and nice.",
                "They felt good inside."
            ],
            "6-8": [
                "They worked with energy and focus.",
                "The moment felt special.",
                "Their hearts were filled with excitement.",
                "The day was full of possibilities."
            ],
            "9-10": [
                "Their teamwork felt meaningful.",
                "It was a moment to remember.",
                "The experience shaped them in profound ways.",
                "Their determination shone through."
            ]
        };

        const generic = [
            "The sun shone through the trees.",
            "They felt proud of their work.",
            "The air was filled with excitement.",
            "They looked at each other and smiled.",
            "The moment felt perfect.",
            "Their hearts were light with joy.",
            "The world seemed full of possibilities.",
            "They knew this was just the beginning."
        ];

        const ageSpecificPhrases = basePhrases[ageGroup] || [];
        const allPhrases = [...ageSpecificPhrases, ...generic];
        return allPhrases[Math.floor(Math.random() * allPhrases.length)];
    }

    applyMoral(content, inputs, section) {
        if (section !== "moral") return content;

        const childName = inputs.childName || "Your child";
        let finalMoral = inputs.moral?.trim();

        // If no moral is provided, use the default
        if (!finalMoral) {
            finalMoral = this.getDefaultMoral(inputs.theme, inputs.age);
        }

        // Ensure the moral ends with a period
        if (!finalMoral.endsWith('.')) {
            finalMoral += ".";
        }

        // Add child name if it's not already included
        if (!finalMoral.toLowerCase().includes(childName.toLowerCase())) {
            finalMoral = `${childName}, remember: ${finalMoral}`;
        }

        return finalMoral;
    }

    getDefaultMoral(theme, age) {
        // Determine age group
        let ageGroup;
        if (age <= 5) ageGroup = '3-5';
        else if (age <= 8) ageGroup = '6-8';
        else ageGroup = '9-10';

        // Get the default moral for the theme and age group
        return defaultMorals[theme.toLowerCase()]?.[ageGroup] || 
               "Every day brings new opportunities to learn and grow.";
    }

    getCharacterInteraction(section, inputs) {
        const { childName, character1Name, character2Name, character1Relation, character2Relation, theme } = inputs;
        const characters = [childName, character1Name, character2Name];
        const speaker = characters[Math.floor(Math.random() * characters.length)];
        const emotion = this.getEmotionForTheme(theme);

        const interactions = {
            characterGrowth: {
                '3-5': [
                    `"That was amazing," ${speaker} said ${emotion}.`,
                    `"You did great!" ${speaker} said ${emotion}.`,
                    `"I'm so proud of you!" ${speaker} said ${emotion}.`
                ],
                '6-8': [
                    `"You've grown so much," ${speaker} said ${emotion}.`,
                    `"That was incredible!" ${speaker} said ${emotion}.`,
                    `"You're getting stronger every day," ${speaker} said ${emotion}.`
                ],
                '9-10': [
                    `"Your growth is remarkable," ${speaker} said ${emotion}.`,
                    `"You've come so far," ${speaker} said ${emotion}.`,
                    `"Your progress is inspiring," ${speaker} said ${emotion}.`
                ]
            },
            midReflection: {
                '3-5': [
                    `"We're doing great!" ${speaker} said ${emotion}.`,
                    `"Keep going!" ${speaker} said ${emotion}.`,
                    `"We can do this!" ${speaker} said ${emotion}.`
                ],
                '6-8': [
                    `"We're making good progress," ${speaker} said ${emotion}.`,
                    `"Let's keep moving forward," ${speaker} said ${emotion}.`,
                    `"We're getting closer," ${speaker} said ${emotion}.`
                ],
                '9-10': [
                    `"We're on the right track," ${speaker} said ${emotion}.`,
                    `"Our journey is unfolding well," ${speaker} said ${emotion}.`,
                    `"We're making steady progress," ${speaker} said ${emotion}.`
                ]
            },
            celebration: {
                '3-5': [
                    `"We did it!" ${speaker} said ${emotion}.`,
                    `"That was fun!" ${speaker} said ${emotion}.`,
                    `"Great job!" ${speaker} said ${emotion}.`
                ],
                '6-8': [
                    `"What an achievement!" ${speaker} said ${emotion}.`,
                    `"We worked hard for this!" ${speaker} said ${emotion}.`,
                    `"Success feels amazing!" ${speaker} said ${emotion}.`
                ],
                '9-10': [
                    `"Our hard work paid off!" ${speaker} said ${emotion}.`,
                    `"This is a moment to remember," ${speaker} said ${emotion}.`,
                    `"We've accomplished something special," ${speaker} said ${emotion}.`
                ]
            }
        };

        const ageGroup = this.determineAgeGroup(inputs.age);
        const sectionInteractions = interactions[section]?.[ageGroup] || [];
        return sectionInteractions.length ? sectionInteractions[Math.floor(Math.random() * sectionInteractions.length)] : '';
    }

    getMoralCallback(section, theme, ageGroup, inputs) {
        // Only return callback 60% of the time
        if (Math.random() > 0.6) {
            return '';
        }

        const { childName, character1Name, character2Name, character1Relation, character2Relation } = inputs;
        const characters = [childName, character1Name, character2Name];
        const speaker = characters[Math.floor(Math.random() * characters.length)];

        // Get relationship-specific dialogue style
        const getRelationshipStyle = (relation) => {
            const lower = relation.toLowerCase();
            if (lower.includes("brother") || lower.includes("sister") || lower.includes("sibling")) {
                return "said, giving a sibling hug";
            }
            if (lower.includes("friend") || lower.includes("neighbour")) {
                return "said, with a friendly smile";
            }
            if (lower.includes("cousin") || lower.includes("uncle") || lower.includes("aunt") || lower.includes("mentor") || lower.includes("teacher")) {
                return "said, with a knowing smile";
            }
            if (lower.includes("pet") || lower.includes("dog") || lower.includes("cat") || lower.includes("animal")) {
                return "barked happily beside them"; // customize per animal if you want
            }
            return "said";
        };

        const relationshipStyle = getRelationshipStyle(
            speaker === character1Name ? character1Relation : 
            speaker === character2Name ? character2Relation : ''
        );

        const emotion = this.getEmotionForTheme(theme);

        const callbacks = {
            patience: {
                '3-5': {
                    climax: [
                        `"Waiting is hard, but worth it!" said ${speaker}.`,
                        `${speaker} smiled. "Good things come to those who wait!"`,
                        `"Patience makes everything better!" said ${speaker}.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "This was worth waiting for!"`,
                        `"Good things come to those who wait," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Patience makes everything better!"`
                    ],
                    celebration: [
                        `"Patience makes everything better!" said ${speaker}.`,
                        `${speaker} cheered. "We did it with patience!"`,
                        `"Being patient helped us!" said ${speaker}.`
                    ],
                    turningPoint: [
                        `${speaker} smiled. "Let's wait and see what happens!"`,
                        `"Sometimes waiting is the best choice," said ${speaker}.`,
                        `${speaker} nodded. "Good things come to those who wait!"`
                    ],
                    courageousMoment: [
                        `${speaker} took a deep breath. "Let's be patient together!"`,
                        `"Patience is brave too!" said ${speaker}.`,
                        `${speaker} smiled. "Being patient is being brave!"`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Waiting made it special!"`,
                        `"Being patient was worth it," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Patience helped us succeed!"`
                    ]
                },
                '6-8': {
                    climax: [
                        `"I guess good things really do take time," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Patience leads to success!"`,
                        `"Patience has taught us so much," ${speaker} reflected.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "This moment was worth every bit of waiting."`,
                        `"Patience brought us here," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Sometimes waiting brings the best surprises."`
                    ],
                    celebration: [
                        `"Patience helped us succeed!" said ${speaker} proudly.`,
                        `${speaker} smiled. "Our patience paid off!"`,
                        `"Together, we learned the value of patience!" ${speaker} said.`
                    ],
                    turningPoint: [
                        `${speaker} took a deep breath. "Let's trust in patience."`,
                        `"Sometimes the best action is waiting," ${speaker} said wisely.`,
                        `${speaker} nodded. "Patience will guide us."`
                    ],
                    courageousMoment: [
                        `${speaker} stood firm. "Patience is its own kind of courage."`,
                        `"Being patient takes bravery too," ${speaker} said thoughtfully.`,
                        `${speaker} smiled. "Patience and courage go hand in hand."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Our patience made this journey special."`,
                        `"Waiting taught us something valuable," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Patience made our journey meaningful."`
                    ]
                },
                '9-10': {
                    climax: [
                        `"The journey of growth requires patience," ${speaker} reflected.`,
                        `${speaker} nodded thoughtfully. "Patience reveals the path forward."`,
                        `"In patience, we find our strength," ${speaker} observed.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Each moment of waiting taught us something valuable."`,
                        `"Patience has shaped our journey," ${speaker} ${emotion} said thoughtfully.`,
                        `${speaker} nodded. "The rewards of patience are worth the wait."`
                    ],
                    celebration: [
                        `"Patience is our greatest teacher," ${speaker} observed.`,
                        `${speaker} smiled. "Through patience, we've grown stronger."`,
                        `"Patience has led us to this moment," ${speaker} reflected.`
                    ],
                    turningPoint: [
                        `${speaker} took a deep breath. "Patience will show us the way."`,
                        `"In patience, we find wisdom," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let patience guide our next steps."`
                    ],
                    courageousMoment: [
                        `${speaker} stood resolute. "Patience is the courage to wait."`,
                        `"True courage includes patience," ${speaker} reflected.`,
                        `${speaker} smiled. "Patience and courage walk together."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Each moment of waiting led us here."`,
                        `"Patience has shaped our story," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "The rewards of patience are worth every moment."`
                    ]
                }
            },
            kindness: {
                '3-5': {
                    climax: [
                        `"Being kind makes everyone happy!" said ${speaker}.`,
                        `${speaker} smiled. "Kindness is the best!"`,
                        `"Let's be kind together!" said ${speaker}.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Being kind makes everyone happy!"`,
                        `"Kindness makes everything better," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Being kind is the best!"`
                    ],
                    celebration: [
                        `"Let's be kind forever!" said ${speaker}.`,
                        `${speaker} cheered. "We did it with kindness!"`,
                        `"Being kind helped us!" said ${speaker}.`
                    ],
                    turningPoint: [
                        `${speaker} smiled. "Let's choose kindness!"`,
                        `"Kindness makes everything better," said ${speaker}.`,
                        `${speaker} nodded. "Let's be kind together!"`
                    ],
                    courageousMoment: [
                        `${speaker} smiled. "Being kind is being brave!"`,
                        `"Kindness takes courage too!" said ${speaker}.`,
                        `${speaker} nodded. "Let's be brave and kind!"`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Kindness made our journey special!"`,
                        `"Being kind brought us together," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Kindness helped us succeed!"`
                    ]
                },
                '6-8': {
                    climax: [
                        `"Kindness makes everything better," ${speaker} said warmly.`,
                        `${speaker} nodded. "Kindness leads to success!"`,
                        `"Kindness has taught us so much," ${speaker} reflected.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Small acts of kindness can make a big difference."`,
                        `"Kindness changes everything," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Our kindness made an impact."`
                    ],
                    celebration: [
                        `"Together, we can spread kindness everywhere!" said ${speaker}.`,
                        `${speaker} smiled. "Our kindness made a difference!"`,
                        `"Through kindness, we succeeded!" ${speaker} said.`
                    ],
                    turningPoint: [
                        `${speaker} smiled warmly. "Let's choose kindness."`,
                        `"Kindness will guide us," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let kindness lead the way."`
                    ],
                    courageousMoment: [
                        `${speaker} stood firm. "Kindness is its own kind of courage."`,
                        `"Being kind takes bravery too," ${speaker} said warmly.`,
                        `${speaker} smiled. "Kindness and courage go hand in hand."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Our kindness made this journey special."`,
                        `"Being kind brought us closer," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Kindness made our journey meaningful."`
                    ]
                },
                '9-10': {
                    climax: [
                        `"Kindness creates ripples that touch everyone," ${speaker} reflected.`,
                        `${speaker} nodded thoughtfully. "Kindness reveals the path forward."`,
                        `"In kindness, we find our strength," ${speaker} observed.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "The power of kindness knows no bounds."`,
                        `"Kindness has shaped our journey," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "The impact of kindness is endless."`
                    ],
                    celebration: [
                        `"Let's make kindness our superpower," ${speaker} suggested.`,
                        `${speaker} smiled. "Through kindness, we've grown stronger."`,
                        `"Kindness has led us to this moment," ${speaker} reflected.`
                    ],
                    turningPoint: [
                        `${speaker} smiled warmly. "Let kindness guide us."`,
                        `"In kindness, we find wisdom," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let kindness show us the way."`
                    ],
                    courageousMoment: [
                        `${speaker} stood resolute. "Kindness is the courage to care."`,
                        `"True courage includes kindness," ${speaker} reflected.`,
                        `${speaker} smiled. "Kindness and courage walk together."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Kindness has transformed our experience."`,
                        `"The ripple effect of kindness touches everyone," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Kindness has guided us to this moment."`
                    ]
                }
            },
            courage: {
                '3-5': {
                    climax: [
                        `"Being brave makes us strong!" said ${speaker}.`,
                        `${speaker} smiled. "We can do it!"`,
                        `"Let's be brave together!" said ${speaker}.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Being brave makes us strong!"`,
                        `"Courage makes everything better," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Being brave is the best!"`
                    ],
                    celebration: [
                        `"Let's be brave forever!" said ${speaker}.`,
                        `${speaker} cheered. "We did it with courage!"`,
                        `"Being brave helped us!" said ${speaker}.`
                    ],
                    turningPoint: [
                        `${speaker} smiled. "Let's be brave!"`,
                        `"Courage makes everything better," said ${speaker}.`,
                        `${speaker} nodded. "Let's be brave together!"`
                    ],
                    courageousMoment: [
                        `${speaker} stood tall. "Being brave feels good!"`,
                        `"Courage makes us strong!" said ${speaker}.`,
                        `${speaker} smiled. "Let's be brave!"`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Courage made our journey special!"`,
                        `"Being brave helped us succeed," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Courage made us strong!"`
                    ]
                },
                '6-8': {
                    climax: [
                        `"I didn't think I could, but I did it!" ${speaker} said proudly.`,
                        `${speaker} nodded. "Courage leads to success!"`,
                        `"Courage has taught us so much," ${speaker} reflected.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "True courage means trying even when we're scared."`,
                        `"Courage changes everything," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Our courage made an impact."`
                    ],
                    celebration: [
                        `"Together, we can be brave!" ${speaker} declared.`,
                        `${speaker} smiled. "Our courage made a difference!"`,
                        `"Through courage, we succeeded!" ${speaker} said.`
                    ],
                    turningPoint: [
                        `${speaker} stood firm. "Let's find our courage."`,
                        `"Courage will guide us," ${speaker} said proudly.`,
                        `${speaker} nodded. "Let courage lead the way."`
                    ],
                    courageousMoment: [
                        `${speaker} stood tall. "This is what courage looks like."`,
                        `"Being brave takes strength," ${speaker} said proudly.`,
                        `${speaker} smiled. "Courage makes us stronger."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Our courage made this journey special."`,
                        `"Being brave brought out our best," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Courage made our journey meaningful."`
                    ]
                },
                '9-10': {
                    climax: [
                        `"Courage isn't about being fearless, but moving forward despite our fears," ${speaker} reflected.`,
                        `${speaker} nodded thoughtfully. "Courage reveals our true strength."`,
                        `"In courage, we find our path," ${speaker} observed.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Our courage has led us to this moment."`,
                        `"Courage has shaped our journey," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "The power of courage is endless."`
                    ],
                    celebration: [
                        `"Courage makes us stronger together," ${speaker} realized.`,
                        `${speaker} smiled. "Through courage, we've grown stronger."`,
                        `"Courage has led us to this moment," ${speaker} reflected.`
                    ],
                    turningPoint: [
                        `${speaker} stood resolute. "Let courage guide us."`,
                        `"In courage, we find wisdom," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let courage show us the way."`
                    ],
                    courageousMoment: [
                        `${speaker} stood tall. "This is the moment for courage."`,
                        `"True courage reveals itself in moments like this," ${speaker} reflected.`,
                        `${speaker} smiled. "Courage and strength walk together."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Courage has transformed our experience."`,
                        `"The strength of courage reveals itself in moments like this," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Courage has guided us to this moment."`
                    ]
                }
            },
            friendship: {
                '3-5': {
                    climax: [
                        `"Friends help each other!" said ${speaker}.`,
                        `${speaker} smiled. "We're good friends!"`,
                        `"Let's be friends forever!" said ${speaker}.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Friends help each other!"`,
                        `"Friendship makes everything better," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Being friends is the best!"`
                    ],
                    celebration: [
                        `"Let's be friends forever!" said ${speaker}.`,
                        `${speaker} cheered. "We did it together!"`,
                        `"Being friends helped us!" said ${speaker}.`
                    ],
                    turningPoint: [
                        `${speaker} smiled. "Let's be good friends!"`,
                        `"Friendship makes everything better," said ${speaker}.`,
                        `${speaker} nodded. "Let's be friends together!"`
                    ],
                    courageousMoment: [
                        `${speaker} smiled. "Friends help each other be brave!"`,
                        `"Friendship makes us strong!" said ${speaker}.`,
                        `${speaker} nodded. "Let's be brave friends!"`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Friendship made our journey special!"`,
                        `"Being friends helped us succeed," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Friendship makes us happy!"`
                    ]
                },
                '6-8': {
                    climax: [
                        `"Friendship makes everything better," ${speaker} said warmly.`,
                        `${speaker} nodded. "Friendship leads to success!"`,
                        `"Friendship has taught us so much," ${speaker} reflected.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "True friends help each other through good times and bad."`,
                        `"Friendship changes everything," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Our friendship made an impact."`
                    ],
                    celebration: [
                        `"Together, we're stronger!" ${speaker} said.`,
                        `${speaker} smiled. "Our friendship made a difference!"`,
                        `"Through friendship, we succeeded!" ${speaker} said.`
                    ],
                    turningPoint: [
                        `${speaker} smiled warmly. "Let friendship guide us."`,
                        `"Friendship will show us the way," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let friendship lead us forward."`
                    ],
                    courageousMoment: [
                        `${speaker} stood firm. "Friendship gives us courage."`,
                        `"Being friends makes us brave," ${speaker} said warmly.`,
                        `${speaker} smiled. "Friendship and courage go hand in hand."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Our friendship made this journey special."`,
                        `"Being friends brought out our best," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Friendship made our journey meaningful."`
                    ]
                },
                '9-10': {
                    climax: [
                        `"Strong friendships are built on trust and understanding," ${speaker} reflected.`,
                        `${speaker} nodded thoughtfully. "Friendship reveals our true strength."`,
                        `"In friendship, we find our path," ${speaker} observed.`
                    ],
                    resolution: [
                        `${speaker} ${emotion} whispered. "Our friendship has grown stronger through every challenge."`,
                        `"Friendship has shaped our journey," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "The power of friendship is endless."`
                    ],
                    celebration: [
                        `"Friendship helps us grow together," ${speaker} observed.`,
                        `${speaker} smiled. "Through friendship, we've grown stronger."`,
                        `"Friendship has led us to this moment," ${speaker} reflected.`
                    ],
                    turningPoint: [
                        `${speaker} smiled warmly. "Let friendship guide us."`,
                        `"In friendship, we find wisdom," ${speaker} said thoughtfully.`,
                        `${speaker} nodded. "Let friendship show us the way."`
                    ],
                    courageousMoment: [
                        `${speaker} stood resolute. "Friendship gives us the courage to be ourselves."`,
                        `"True friendship includes courage," ${speaker} reflected.`,
                        `${speaker} smiled. "Friendship and courage walk together."`
                    ],
                    returnHome: [
                        `${speaker} ${emotion} whispered. "Friendship has transformed our experience."`,
                        `"The bonds of friendship grow stronger with each challenge," ${speaker} ${emotion} said softly.`,
                        `${speaker} ${emotion} smiled. "Friendship has guided us to this moment."`
                    ]
                }
            }
        };

        const themeCallbacks = callbacks[theme.toLowerCase()];
        if (!themeCallbacks) {
            console.log(`[DEBUG] No callbacks defined for theme: ${theme}`);
            return '';
        }

        const ageCallbacks = themeCallbacks[ageGroup];
        if (!ageCallbacks) {
            console.log(`[DEBUG] No callbacks defined for age group: ${ageGroup}`);
            return '';
        }

        const sectionCallbacks = ageCallbacks[section];
        if (!sectionCallbacks) {
            console.log(`[DEBUG] No callback defined for section: ${section}`);
            return '';
        }

        // Select a random callback from the available options
        const callback = sectionCallbacks[Math.floor(Math.random() * sectionCallbacks.length)];

        // Add relationship-specific modifications if applicable
        let finalCallback = callback;
        if (relationshipStyle === 'sibling') {
            finalCallback = finalCallback.replace('said', 'said, giving a sibling hug');
        } else if (relationshipStyle === 'friend') {
            finalCallback = finalCallback.replace('said', 'said, with a friendly smile');
        } else if (relationshipStyle === 'mentor') {
            finalCallback = finalCallback.replace('said', 'said, with a knowing smile');
        }

        console.log(`[DEBUG] Added moral callback in ${section} section, spoken by ${speaker} (${relationshipStyle} style)`);
        return finalCallback;
    }

    getEmotionForTheme(theme) {
        const tone = this.inputs.emotionalTone || "default";
        const emotions = this.emotionalTones[tone] || this.emotionalTones.default;
        const themeEmotions = emotions[theme.toLowerCase()] || emotions.patience; // fallback to patience if theme not found
        
        // Return a single emotion from the theme-appropriate list
        return themeEmotions[Math.floor(Math.random() * themeEmotions.length)];
    }

    // New helper method to adjust content based on theme
    adjustContentForTheme(content, inputs, section) {
        const theme = inputs.theme?.toLowerCase?.() || "";

        // Nature-specific adjustments
        if (theme === "nature") {
            content = content.replace(/\bdolphin(s)?\b/gi, "butterflie$1");
            content = content.replace(/\bocean\b/gi, "garden");
            content = content.replace(/\bwater\b/gi, "garden");
            content = content.replace(/\bsea\b/gi, "flowers");

            const color = inputs.favoriteColor?.toLowerCase?.() || "colorful";
            content = content.replace(/\bflowers?\b/gi, `${color} flowers`);
        }

        // Clean up accidental word duplicates and spacing
        content = content.replace(/\b(\w+)\s+\1\b/g, "$1");
        content = content.replace(/\s+\./g, ".");
        content = content.replace(/\.{2,}/g, ".");
        return content;
    }
}

// Test cases
async function testAgeAppropriateStoryGenerator() {
    console.log('\n=== Testing Age-Appropriate Story Generator ===\n');

    const testCases = [
        {
            childName: "Zara",
            gender: "girl",
            physicalDescription: "short curly hair and bright blue eyes",
            favoriteColor: "yellow",
            favoriteAnimal: "elephant",
            character1Name: "Noah",
            character1Relation: "older brother",
            character2Name: "Luna",
            character2Relation: "best friend",
            theme: "kindness",
            subTheme: "sharing",
            length: "medium",
            age: 7,
            moral: "Kindness grows when we help others",
            emotionalTone: "joyful"
        },
        {
            childName: "Leo",
            gender: "boy",
            physicalDescription: "curly brown hair and big eyes",
            favoriteColor: "green",
            favoriteAnimal: "puppy",
            character1Name: "Maya",
            character1Relation: "older sister",
            character2Name: "Zane",
            character2Relation: "neighbor",
            theme: "kindness",
            subTheme: "sharing",
            length: "mini",
            age: 4,
            emotionalTone: "gentle",
            moral: "Sharing makes everyone feel happy."
        },
        {
            childName: "Ella",
            gender: "girl",
            physicalDescription: "short red hair and freckles",
            favoriteColor: "purple",
            favoriteAnimal: "bunny",
            character1Name: "Ollie",
            character1Relation: "older cousin",
            character2Name: "Sam",
            character2Relation: "best friend",
            theme: "courage",
            subTheme: "tryingNewThings",
            length: "short",
            age: 6,
            emotionalTone: "energetic",
            moral: "Trying new things helps us grow brave."
        },
        {
            childName: "Ethan",
            gender: "boy",
            physicalDescription: "short black hair and big green eyes",
            favoriteColor: "red",
            favoriteAnimal: "dolphin",
            character1Name: "Maya",
            character1Relation: "older cousin",
            character2Name: "Luca",
            character2Relation: "family friend",
            theme: "patience",
            subTheme: "waitingAndWorking",
            length: "medium",
            age: 7,
            emotionalTone: "reflective",
            moral: "Good things take time and effort."
        },
        {
            childName: "Isla",
            gender: "girl",
            physicalDescription: "long blonde hair and bright green eyes",
            favoriteColor: "blue",
            favoriteAnimal: "owl",
            character1Name: "Jack",
            character1Relation: "older brother",
            character2Name: "Chloe",
            character2Relation: "family friend",
            theme: "friendship",
            subTheme: "supportingEachOther",
            length: "long",
            age: 9,
            emotionalTone: "joyful",
            moral: "True friends support one another through anything."
        }
    ];

    for (const testCase of testCases) {
        console.log(`\n=== Testing Story for ${testCase.childName} (${testCase.age} years) ===`);
        console.log(`Theme: ${testCase.theme} (${testCase.subTheme})`);
        console.log(`Emotional Tone: ${testCase.emotionalTone}`);
        console.log(`Length: ${testCase.length}`);
        console.log('='.repeat(50));
        
        await testStoryWithValidation(testCase);
        console.log('='.repeat(50));
    }
}

async function testStoryWithValidation(inputs) {
    try {
        const generator = new AgeAppropriateStoryGenerator(inputs);
        const story = await generator.generateStory(inputs);

        console.log("\n=== Story Generation Successful ===\n");
        console.log("Child:", inputs.childName);
        console.log("Length:", inputs.length);
        console.log("Theme:", inputs.theme);
        console.log("Tone:", inputs.emotionalTone || "default");

        console.log("\n=== Story Preview ===\n");
        story.pages.forEach((page, index) => {
            console.log(`Page ${index + 1} (${page.section}):`);
            console.log("Word count:", page.content.split(/\s+/).length);
            console.log(page.content + "\n");
        });

        console.log("=== Final Summary ===");
        console.log("Total pages:", story.pages.length);
        console.log("Total words:", story.pages.reduce((acc, page) => acc + page.content.split(/\s+/).length, 0));

        // Validate emotional tone consistency
        const emotionalToneValidation = validateEmotionalTone(story, inputs.emotionalTone || 'default');
        console.log("\n=== Emotional Tone Validation ===");
        console.log(emotionalToneValidation.message);
        if (emotionalToneValidation.foundAdverbs.length > 0) {
            console.log("Found adverbs:", emotionalToneValidation.foundAdverbs.join(", "));
        }

        // Validate age appropriateness
        const ageValidation = validateAgeAppropriateness(story, inputs.age);
        console.log("\n=== Age Appropriateness ===");
        console.log(ageValidation.message);
        if (ageValidation.complexWords.length > 0) {
            console.log("Complex words:", ageValidation.complexWords.join(", "));
        }

        // Validate moral integration
        const moralValidation = validateMoralIntegration(story, inputs.moral);
        console.log("\n=== Moral Integration ===");
        console.log(moralValidation.message);
        if (moralValidation.foundMoralWords.length > 0) {
            console.log("Found moral words:", moralValidation.foundMoralWords.join(", "));
        }

        return {
            success: true,
            story,
            validations: {
                emotionalTone: emotionalToneValidation,
                age: ageValidation,
                moral: moralValidation
            }
        };
    } catch (err) {
        console.error("❌ Error generating story:", err.message);
        return {
            success: false,
            error: err.message
        };
    }
}

function validateEmotionalTone(story, tone) {
    const emotionalAdverbs = {
        default: ["calmly", "steadily", "peacefully", "warmly", "gently", "with care", "bravely", "boldly", "with strength", "joyfully", "cheerfully", "together"],
        calm: ["serenely", "tranquilly", "peacefully", "softly", "gently", "tenderly", "steadily", "resolutely", "firmly", "quietly", "gently", "peacefully"],
        joyful: ["happily", "cheerfully", "brightly", "joyfully", "gleefully", "happily", "enthusiastically", "excitedly", "joyfully", "delightfully", "joyfully", "happily"],
        reflective: ["thoughtfully", "contemplatively", "mindfully", "thoughtfully", "considerately", "mindfully", "thoughtfully", "determinedly", "mindfully", "thoughtfully", "fondly", "mindfully"],
        energetic: ["eagerly", "enthusiastically", "energetically", "energetically", "enthusiastically", "vibrantly", "energetically", "boldly", "dynamically", "energetically", "enthusiastically", "vibrantly"],
        gentle: ["gently", "softly", "tenderly", "gently", "tenderly", "softly", "gently", "firmly", "softly", "gently", "tenderly", "softly"]
    };

    const expectedAdverbs = emotionalAdverbs[tone] || emotionalAdverbs.default;
    const storyText = JSON.stringify(story);
    const foundAdverbs = expectedAdverbs.filter(adverb => storyText.includes(adverb));
    
    return {
        isValid: foundAdverbs.length > 0,
        foundAdverbs,
        expectedAdverbs,
        message: foundAdverbs.length > 0 
            ? `Found ${foundAdverbs.length} emotional adverbs matching the ${tone} tone`
            : `No emotional adverbs found matching the ${tone} tone`
    };
}

function validateAgeAppropriateness(story, age) {
    const storyText = JSON.stringify(story);
    const ageGroup = age <= 5 ? '3-5' : age <= 8 ? '6-8' : '9-10';
    
    // Check for age-appropriate vocabulary
    const complexWords = storyText.match(/\b\w{8,}\b/g) || [];
    const complexWordCount = complexWords.length;
    
    // Check for sentence length
    const sentences = storyText.split(/[.!?]+/);
    const avgSentenceLength = sentences.reduce((acc, sent) => acc + sent.split(/\s+/).length, 0) / sentences.length;
    
    return {
        isValid: complexWordCount <= 5 && avgSentenceLength <= 10,
        complexWords,
        avgSentenceLength,
        message: `Story contains ${complexWordCount} complex words and average sentence length is ${avgSentenceLength.toFixed(1)} words`
    };
}

function validateMoralIntegration(story, moral) {
    const storyText = JSON.stringify(story);
    const moralWords = moral.toLowerCase().split(/\s+/);
    const foundMoralWords = moralWords.filter(word => storyText.toLowerCase().includes(word));
    
    return {
        isValid: foundMoralWords.length >= moralWords.length * 0.7,
        foundMoralWords,
        expectedMoralWords: moralWords,
        message: `Found ${foundMoralWords.length} out of ${moralWords.length} moral words`
    };
}

// Add a direct test function for single story generation
async function generateSingleStory(inputs) {
    try {
        const generator = new AgeAppropriateStoryGenerator(inputs);
        const story = await generator.generateStory();

        if (!story || !story.pages || !Array.isArray(story.pages)) {
            throw new Error("Invalid story structure generated");
        }

        console.log("\n=== Story Generation Successful ===\n");
        console.log("Child:", inputs.childName);
        console.log("Length:", inputs.length);
        console.log("Theme:", inputs.theme);
        console.log("Tone:", inputs.emotionalTone || "default");

        console.log("\n=== Story Preview ===\n");
        story.pages.forEach((page, index) => {
            if (!page || !page.content) {
                console.warn(`Warning: Invalid page structure at index ${index}`);
                return;
            }
            console.log(`Page ${index + 1} (${page.section || 'unknown section'}):`);
            const wordCount = (page.content || '').split(/\s+/).length;
            console.log("Word count:", wordCount);
            console.log(page.content + "\n");
        });

        const totalWords = story.pages.reduce((acc, page) => acc + (page.content || '').split(/\s+/).length, 0);
        console.log("=== Final Summary ===");
        console.log("Total pages:", story.pages.length);
        console.log("Total words:", totalWords);

        return {
            success: true,
            story,
            summary: {
                pageCount: story.pages.length,
                wordCount: totalWords,
                theme: inputs.theme,
                emotionalTone: inputs.emotionalTone || "default"
            }
        };
    } catch (err) {
        console.error("❌ Error generating story:", err.message);
        return {
            success: false,
            error: err.message
        };
    }
}

// Export the functions for use in other files
module.exports = {
    AgeAppropriateStoryGenerator,
    testAgeAppropriateStoryGenerator,
    generateSingleStory,
    storyTemplates,
    PAGE_COUNT_REQUIREMENTS
}; 