const StoryInputValidator = require('./story_input_validator');
const constants = require('./story_constants');

/**
 * Validate and normalize user inputs
 * @param {Object} inputs - Raw user inputs
 * @returns {Object} Normalized and validated inputs
 * @throws {Error} If validation fails
 */
function validateAndNormalizeInputs(inputs) {
    const validator = new StoryInputValidator(constants);
    
    // Convert all string inputs to lowercase for consistency
    const normalizedInputs = {
        ...inputs,
        gender: inputs.gender?.toLowerCase(),
        favoriteColor: inputs.favoriteColor?.toLowerCase(),
        favoriteAnimal: inputs.favoriteAnimal?.toLowerCase(),
        theme: inputs.theme?.toLowerCase(),
        subTheme: inputs.subTheme?.toLowerCase(),
        length: inputs.length?.toLowerCase(),
        emotionalTone: inputs.emotionalTone?.toLowerCase()
    };

    // Validate all inputs
    const validation = validator.validateAll(normalizedInputs);
    
    if (!validation.isValid) {
        throw new Error(`Validation failed:\n${validation.errors.join('\n')}`);
    }

    // Add default values for optional fields if not provided
    if (!normalizedInputs.moral) {
        normalizedInputs.moral = validator.getDefaultMoral(normalizedInputs.theme);
    }
    if (!normalizedInputs.emotionalTone) {
        normalizedInputs.emotionalTone = 'default';
    }
    
    return normalizedInputs;
}

module.exports = {
    validateAndNormalizeInputs,
    StoryInputValidator
}; 