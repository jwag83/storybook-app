// Story constants

const BASIC_COLORS = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink',
    'brown', 'black', 'white', 'gray', 'gold', 'silver'
];

const COMMON_ANIMALS = [
    'dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'horse',
    'dolphin', 'elephant', 'lion', 'tiger', 'bear', 'penguin',
    'giraffe', 'monkey', 'zebra', 'koala', 'panda', 'owl', 'butterfly'
];

const VALID_THEMES = [
    'patience',
    'kindness',
    'courage',
    'friendship',
    'creativity',
    'nature'
];

const VALID_SUBTHEMES = {
    patience: ['waiting', 'growth', 'persistence'],
    kindness: ['sharing', 'helping', 'caring'],
    courage: ['facing fears', 'trying new things', 'standing up'],
    friendship: ['working together', 'trust', 'support'],
    creativity: ['problem solving', 'imagination', 'innovation'],
    nature: ['exploration', 'discovery', 'conservation']
};

const VALID_LENGTHS = ['mini', 'short', 'medium', 'long'];
const VALID_GENDERS = ['boy', 'girl', 'non-binary'];
const VALID_EMOTIONAL_TONES = ['joyful', 'thoughtful', 'adventurous', 'peaceful', 'determined', 'default'];

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

// Expected page counts for each story length
const PAGE_COUNT_REQUIREMENTS = {
    mini: 8,
    short: 12,
    medium: 18,
    long: 25
};

module.exports = {
    BASIC_COLORS,
    COMMON_ANIMALS,
    VALID_THEMES,
    VALID_SUBTHEMES,
    VALID_LENGTHS,
    VALID_GENDERS,
    VALID_EMOTIONAL_TONES,
    STORY_SECTIONS,
    PAGE_COUNT_REQUIREMENTS
}; 