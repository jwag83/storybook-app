// List of flagged words (case-insensitive)
const BLOCKED_WORDS = [
  // Profanity and slurs
  "abuse", "arse", "ass", "bastard", "bitch", "bloody", "bugger", "bullshit",
  "chink", "cock", "crap", "cunt", "damn", "dick", "dyke", "fag", "faggot", "frick",
  "fuck", "fudge", "gook", "hell", "homo", "jerk", "kike", "kill", "mofo", "molest",
  "murder", "nazi", "nigga", "nigger", "pedo", "piss", "prick", "pussy", "queer",
  "rape", "rapist", "retard", "shit", "shoot", "slaughter", "slut", "spaz", "spic",
  "stab", "suicide", "terrorist", "tranny", "turd", "twat", "wank", "wanker",
  "wetback", "whore",
  
  // Additional slurs and offensive terms
  "cholo", "coward", "cowboy", "crackhead", "cripple", "dago", "dumb", "fatso",
  "gimp", "gyp", "gypsy", "hick", "idiot", "imbecile", "jap", "jew", "kraut",
  "lame", "loser", "moron", "nazi", "nigga", "nigger", "paki", "polack", "pollack",
  "redneck", "savage", "stupid", "tard", "thug", "wop", "yid", "zombie",
  
  // Graphic violence references
  "bloodbath", "bloodshed", "brutal", "butcher", "carnage", "choke", "crush",
  "decapitate", "dismember", "execute", "gore", "gory", "massacre", "mutilate",
  "torture", "vicious", "violent",
  
  // Revenge and harmful intent
  "annihilate", "destroy", "eliminate", "end them", "get revenge", "hurt",
  "punish", "revenge", "take revenge", "vengeance", "vindictive",
  
  // Negative concepts
  "evil", "wicked", "bad", "wrong", "hate", "hated", "hating"
];

/**
 * Checks if input text contains any blocked words
 * @param {string} inputText - The text to check
 * @returns {boolean} - True if blocked words are found
 */
function containsBlockedWords(inputText) {
  if (!inputText) return false;
  const lower = inputText.toLowerCase();
  return BLOCKED_WORDS.some((word) => lower.includes(word));
}

/**
 * Validates user inputs for inappropriate content
 * @param {Object} inputs - Object containing fields to validate
 * @param {string} inputs.mainCharacter - Main character name/description
 * @param {string} inputs.supportingCharacter - Supporting character name/description
 * @param {string} inputs.moral - Story moral/lesson
 * @param {string} inputs.title - Story title
 * @param {string} inputs.customTheme - Custom theme if provided
 * @throws {Error} If inappropriate content is found
 */
function validateUserInputs({ mainCharacter, supportingCharacter, moral, title, customTheme }) {
  const fields = { 
    mainCharacter, 
    supportingCharacter, 
    moral,
    title: title || "Untitled Story", // Default if title is not provided
    customTheme: customTheme || "" // Optional custom theme
  };
  
  for (const [fieldName, value] of Object.entries(fields)) {
    if (value && containsBlockedWords(value)) {
      throw new Error(
        `The ${fieldName} contains inappropriate language. Please revise it before continuing.`
      );
    }
  }
}

module.exports = {
  containsBlockedWords,
  validateUserInputs
}; 