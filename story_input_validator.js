// Input validation for story generator
class StoryInputValidator {
    constructor(constants) {
        if (!constants) {
            throw new Error('Constants must be provided to StoryInputValidator constructor');
        }

        this.errors = [];
        this.requiredFields = [
            'childName',
            'gender',
            'age',
            'physicalDescription',
            'favoriteColor',
            'favoriteAnimal',
            'character1Name',
            'character1Relation',
            'character2Name',
            'character2Relation',
            'theme',
            'subTheme',
            'length'
        ];
        
        this.optionalFields = ['moral'];

        // Store constants passed in from constructor
        this.BASIC_COLORS = constants.BASIC_COLORS;
        this.COMMON_ANIMALS = constants.COMMON_ANIMALS;
        this.VALID_THEMES = constants.VALID_THEMES;
        this.VALID_SUBTHEMES = constants.VALID_SUBTHEMES;
        this.VALID_LENGTHS = constants.VALID_LENGTHS;
        this.VALID_GENDERS = constants.VALID_GENDERS;
        this.VALID_EMOTIONAL_TONES = constants.VALID_EMOTIONAL_TONES;

        // Validate that all required constants are present
        const requiredConstants = [
            'BASIC_COLORS',
            'COMMON_ANIMALS',
            'VALID_THEMES',
            'VALID_SUBTHEMES',
            'VALID_LENGTHS',
            'VALID_GENDERS',
            'VALID_EMOTIONAL_TONES'
        ];

        for (const constant of requiredConstants) {
            if (!constants[constant]) {
                throw new Error(`Required constant ${constant} is missing`);
            }
        }
    }

    /**
     * Validate all story inputs
     * @param {Object} inputs - Story input parameters
     * @returns {Object} Validation result with errors if any
     */
    validateAll(inputs) {
        this.errors = [];

        // Validate required fields
        for (const field of this.requiredFields) {
            if (!inputs[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        // Validate individual fields
        this.validateChildName(inputs.childName);
        this.validateGender(inputs.gender);
        this.validatePhysicalDescription(inputs.physicalDescription);
        this.validateFavoriteColor(inputs.favoriteColor);
        this.validateFavoriteAnimal(inputs.favoriteAnimal);
        this.validateCharacterName(inputs.character1Name, 'character1Name');
        this.validateCharacterRelation(inputs.character1Relation, 'character1Relation');
        this.validateCharacterName(inputs.character2Name, 'character2Name');
        this.validateCharacterRelation(inputs.character2Relation, 'character2Relation');
        this.validateTheme(inputs.theme);
        this.validateStoryLength(inputs.length);

        // Validate optional moral if provided
        if (inputs.moral !== undefined) {
            this.validateMoral(inputs.moral);
        }

        return {
            isValid: this.errors.length === 0,
            errors: this.errors
        };
    }

    validateRequiredFields(inputs) {
        const requiredFields = [
            'childName',
            'gender',
            'physicalDescription',
            'favoriteColor',
            'favoriteAnimal',
            'character1Name',
            'character2Name',
            'theme',
            'storyLength'
        ];

        if (!inputs) {
            this.errors.push('No input provided');
            return;
        }

        requiredFields.forEach(field => {
            if (!inputs[field] || inputs[field].toString().trim() === '') {
                this.errors.push(`${field} is required`);
            }
        });
    }

    validateChildName(name) {
        if (name && name.length > 50) {
            this.errors.push('Child name must be less than 50 characters');
        }
        if (name && !/^[a-zA-Z\s-']+$/.test(name)) {
            this.errors.push('Child name can only contain letters, spaces, hyphens, and apostrophes');
        }
    }

    validateGender(gender) {
        if (gender && !this.VALID_GENDERS.includes(gender.toLowerCase())) {
            this.errors.push(`Gender must be one of: ${this.VALID_GENDERS.join(', ')}`);
        }
    }

    validatePhysicalDescription(description) {
        if (description && description.length > 100) {
            this.errors.push('Physical description must be less than 100 characters');
        }
    }

    validateFavoriteColor(color) {
        if (color && !this.BASIC_COLORS.includes(color.toLowerCase())) {
            this.errors.push(`Color must be one of: ${this.BASIC_COLORS.join(', ')}`);
        }
    }

    validateFavoriteAnimal(animal) {
        if (animal && !this.COMMON_ANIMALS.includes(animal.toLowerCase())) {
            this.errors.push(`Animal must be one of: ${this.COMMON_ANIMALS.join(', ')}`);
        }
    }

    validateCharacterName(name, field) {
        if (name && name.length > 30) {
            this.errors.push(`${field} must be less than 30 characters`);
        }
        if (name && !/^[a-zA-Z\s-']+$/.test(name)) {
            this.errors.push(`${field} can only contain letters, spaces, hyphens, and apostrophes`);
        }
    }

    validateTheme(theme) {
        if (theme && !this.VALID_THEMES.includes(theme.toLowerCase())) {
            this.errors.push(`Theme must be one of: ${this.VALID_THEMES.join(', ')}`);
        }
    }

    validateStoryLength(length) {
        if (length && !this.VALID_LENGTHS.includes(length.toLowerCase())) {
            this.errors.push(`Story length must be one of: ${this.VALID_LENGTHS.join(', ')}`);
        }
    }

    validateMoral(moral) {
        if (typeof moral !== 'string') {
            throw new Error('Moral must be a string');
        }
        if (moral.length > 200) {
            throw new Error('Moral must not exceed 200 characters');
        }
        if (moral.trim().length === 0) {
            throw new Error('Moral cannot be empty if provided');
        }
    }

    validateCharacterRelation(relation, fieldName) {
        if (!relation || typeof relation !== 'string') {
            throw new Error(`${fieldName} must be a string`);
        }
        if (relation.length > 30) {
            throw new Error(`${fieldName} must be 30 characters or less`);
        }
        if (relation.trim().length === 0) {
            throw new Error(`${fieldName} cannot be empty`);
        }
        // Add common relationship patterns
        const commonRelations = [
            'best friend',
            'older sister',
            'younger brother',
            'classmate',
            'friendly neighbor',
            'uncle',
            'aunt',
            'school teacher',
            'grandparent',
            'cousin',
            'family friend',
            'next-door neighbor',
            'playground friend',
            'school counselor',
            'art teacher'
        ];
        // Note: We don't enforce exact matches, but we can use this list for suggestions
        return true;
    }

    /**
     * Get the default moral for a theme
     * @param {string} theme - Story theme
     * @returns {string} Default moral for the theme
     */
    getDefaultMoral(theme) {
        const defaultMorals = {
            patience: "Good things come to those who wait and work hard.",
            kindness: "Being kind to others makes the world a better place for everyone.",
            courage: "Being brave means facing your fears and doing what's right.",
            friendship: "True friends support each other through good times and bad.",
            creativity: "Using your imagination can help solve problems in unique ways."
        };

        return defaultMorals[theme.toLowerCase()] || "Every story teaches us something valuable.";
    }
}

module.exports = { StoryInputValidator }; 