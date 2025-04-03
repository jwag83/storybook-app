const { StoryInputValidator } = require('./story_input_validator');
const {
  VALID_THEMES,
  VALID_SUBTHEMES,
  VALID_EMOTIONAL_TONES,
  PAGE_COUNT_REQUIREMENTS,
  BASIC_COLORS,
  COMMON_ANIMALS,
  VALID_LENGTHS,
  VALID_GENDERS
} = require('./story_constants');

class StoryGenerator {
  constructor() {
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
  }
} 