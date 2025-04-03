const STORY_SECTIONS = ['intro', 'setup', 'challenge', 'climax', 'resolution', 'moral'];

const defaultTemplates = {
    intro: {
        mini: "{childName} was a {age}-year-old {gender} with {physicalDescription}.",
        short: "{childName}, a {age}-year-old {gender} with {physicalDescription}, loved {favoriteColor} and had a special connection with {favoriteAnimal}s.",
        medium: "In a cozy home filled with {favoriteColor} decorations, lived {childName}, a {age}-year-old {gender} with {physicalDescription}. More than anything, {childName} loved {favoriteAnimal}s.",
        long: "In a warm and welcoming home decorated in shades of {favoriteColor}, lived a special {age}-year-old {gender} named {childName}. With {physicalDescription}, {childName} had a unique way of seeing the world, especially when it came to {favoriteAnimal}s."
    },
    setup: {
        mini: "One day, {childName} met {character1Name}, who became their {character1Relation}.",
        short: "One day, {childName} met {character1Name}, their {character1Relation}, and {character2Name}, a {character2Relation}.",
        medium: "Everything changed when {childName} met two special friends: {character1Name}, who became their {character1Relation}, and {character2Name}, a {character2Relation} with amazing stories.",
        long: "Life took an exciting turn when {childName} crossed paths with {character1Name}, who quickly became their {character1Relation}. Soon after, they met {character2Name}, a {character2Relation} who would play an important role in their adventure."
    },
    challenge: {
        mini: "They faced a difficult problem together.",
        short: "Together, they faced a challenge that tested their {theme}.",
        medium: "Their {theme} was put to the test when they encountered a situation that seemed impossible to solve.",
        long: "As they spent more time together, they encountered a challenging situation that would require all their {theme} and determination to overcome."
    },
    climax: {
        mini: "Working together, they found a solution.",
        short: "Through {theme} and teamwork, they discovered the answer.",
        medium: "By combining their strengths and believing in {theme}, they found a way to overcome their challenge.",
        long: "In their most difficult moment, they discovered that the power of {theme} and true friendship could overcome any obstacle."
    },
    resolution: {
        mini: "Everything worked out perfectly.",
        short: "Their success made everyone happy and proud.",
        medium: "Their achievement brought joy to everyone around them, showing the true power of {theme}.",
        long: "Their success not only solved their immediate problem but taught everyone in their community about the importance of {theme} and working together."
    },
    moral: {
        mini: "{moral}",
        short: "They learned that {moral}",
        medium: "Through this adventure, they discovered an important truth: {moral}",
        long: "This experience taught them a valuable lesson that they would never forget: {moral}"
    }
};

// Theme-specific templates
const themeTemplates = {
    nature: {
        intro: {
            mini: "{childName} loved exploring the outdoors.",
            short: "{childName}, with {physicalDescription}, had a special love for nature.",
            medium: "In a house near the edge of a beautiful forest lived {childName}, a {age}-year-old {gender} who loved everything about nature.",
            long: "At the edge of a magnificent forest, in a cozy house painted in {favoriteColor}, lived {childName}, a {age}-year-old {gender} with {physicalDescription} who found magic in every leaf and flower."
        },
        // Add other sections for nature theme...
    },
    friendship: {
        intro: {
            mini: "{childName} was looking for a true friend.",
            short: "{childName}, a {gender} with {physicalDescription}, wanted to make new friends.",
            medium: "{childName}, a friendly {age}-year-old with {physicalDescription}, believed that friendship was life's greatest adventure.",
            long: "In a neighborhood where everyone knew each other, lived {childName}, a {age}-year-old {gender} with {physicalDescription} who believed that true friendship was the most precious treasure of all."
        },
        // Add other sections for friendship theme...
    }
    // Add other themes...
};

// Theme + SubTheme specific templates
const themeSubThemeTemplates = {
    nature: {
        exploration: {
            intro: {
                mini: "{childName} loved discovering new places in nature.",
                short: "{childName}, an adventurous {gender} with {physicalDescription}, loved exploring the outdoors.",
                medium: "With a heart full of curiosity and {favoriteColor} backpack ready, {childName}, a {age}-year-old explorer with {physicalDescription}, set out to discover nature's secrets.",
                long: "In a world full of natural wonders waiting to be discovered, {childName}, an adventurous {age}-year-old {gender} with {physicalDescription}, packed their {favoriteColor} backpack and prepared for an amazing journey of exploration."
            }
        },
        friendship: {
            intro: {
                mini: "{childName} made friends with nature's creatures.",
                short: "{childName}, who loved {favoriteAnimal}s, found friendship in unexpected places.",
                medium: "For {childName}, a {age}-year-old {gender} with {physicalDescription}, the forest was more than trees and flowers—it was a place to make wonderful animal friends.",
                long: "Deep in a forest where {favoriteColor} wildflowers bloomed, lived {childName}, a {age}-year-old {gender} with {physicalDescription} who discovered that nature's creatures could become the most loyal friends."
            }
        }
    },
    adventure: {
        teamwork: {
            mini: {
                setup: "One day, {childName} and {character1Name}, their {character1Relation}, met {character2Name}, their {character2Relation}. Together, they decided to go on an exciting adventure!",
                challenge: "They found a big problem that needed solving! The path was blocked, and they had to work together to find a way through.",
                climax: "Working together, they used their special skills to solve the problem! Everyone helped in their own way.",
                resolution: "They did it! Everyone was happy because they worked together as a team.",
                moral: "They learned that working together makes everything better! {moral}"
            },
            short: {
                setup: "One day, {childName} and {character1Name}, their {character1Relation}, met {character2Name}, their {character2Relation}. Each friend had special skills that would help them on their journey.",
                challenge: "Their teamwork was tested when they faced a challenging obstacle. Each friend had an idea, but they needed to combine their strengths to succeed.",
                climax: "In their moment of greatest challenge, they combined their different talents perfectly. Each friend's contribution was important to their success.",
                resolution: "Their success showed how powerful teamwork can be. Each friend's contribution had made a difference.",
                moral: "Through their adventure, they discovered that true teamwork means everyone's ideas matter. {moral}"
            },
            medium: {
                setup: "When {childName} met {character1Name}, their {character1Relation}, and {character2Name}, their {character2Relation}, they knew they were about to begin something amazing. Each friend had special skills that would help them on their journey.",
                challenge: "Their teamwork was tested when they faced a challenging obstacle. Each friend had an idea, but they needed to combine their strengths to succeed.",
                climax: "In their moment of greatest challenge, they combined their different talents perfectly. Each friend's contribution was important to their success.",
                resolution: "Their success showed how powerful teamwork can be. Each friend's contribution had made a difference.",
                moral: "Through their adventure, they discovered that true teamwork means everyone's ideas matter. {moral}"
            },
            long: {
                setup: "The adventure began when {childName} teamed up with {character1Name}, their {character1Relation}, and {character2Name}, their {character2Relation}. Each brought unique talents that would prove essential to their mission.",
                challenge: "A complex challenge appeared that would test their teamwork. Each friend's unique perspective would be crucial in finding the right solution.",
                climax: "At the critical moment, they put all their ideas together in a clever way. Their combined strengths created a solution that none could have achieved alone.",
                resolution: "Their achievement proved that when friends work together, combining their unique strengths, they can overcome any challenge.",
                moral: "Their journey taught them that the best solutions come when friends combine their different strengths. {moral}"
            }
        }
    }
};

class TemplateManager {
    constructor() {
        this.defaultTemplates = defaultTemplates;
        this.themeTemplates = themeTemplates;
        this.themeSubThemeTemplates = themeSubThemeTemplates;
    }

    getDefaultMoral(theme) {
        const defaultMorals = {
            patience: "Good things come to those who wait and work hard.",
            kindness: "Being kind to others makes the world a better place for everyone.",
            courage: "Being brave means facing your fears and doing what's right.",
            friendship: "True friends support each other through good times and bad.",
            creativity: "Using your imagination can help solve problems in unique ways.",
            nature: "Nature teaches us the importance of balance and sustainability.",
            adventure: "Working together makes every challenge easier to overcome."
        };

        return defaultMorals[theme?.toLowerCase()] || "Every story teaches us something valuable.";
    }

    getTemplate(section, theme, subTheme, length) {
        console.log(`[DEBUG] Looking for template - Theme: ${theme}, SubTheme: ${subTheme}, Length: ${length}, Section: ${section}`);
        console.log(`[DEBUG] Checking path: this.themeSubThemeTemplates[${theme}]?.[${subTheme}]?.[${length}]?.[${section}]`);

        // Try theme + subTheme specific template
        const themeSubThemeTemplate = this.themeSubThemeTemplates[theme]?.[subTheme]?.[length]?.[section];
        console.log('[DEBUG] Theme+SubTheme template found:', themeSubThemeTemplate ? 'yes' : 'no');
        if (themeSubThemeTemplate) {
            console.log(`[DEBUG] Found theme+subTheme specific template for ${theme}/${subTheme}`);
            return themeSubThemeTemplate;
        }

        // Try theme-only template
        const themeTemplate = this.themeTemplates[theme]?.[section]?.[length];
        console.log('[DEBUG] Theme-only template found:', themeTemplate ? 'yes' : 'no');
        if (themeTemplate) {
            console.log(`[DEBUG] Falling back to theme-only template for ${theme}`);
            return themeTemplate;
        }

        // Fall back to default template
        const defaultTemplate = this.defaultTemplates[section]?.[length];
        console.log('[DEBUG] Default template found:', defaultTemplate ? 'yes' : 'no');
        if (defaultTemplate) {
            console.warn(`⚠️ Missing specific template for ${section} (${theme}/${subTheme}, length ${length}) – using fallback.`);
            console.log(`[DEBUG] Using default template for ${section}`);
            return defaultTemplate;
        }

        console.warn(`[WARN] No template found for section: ${section}, theme: ${theme}, subTheme: ${subTheme}, length: ${length}`);
        return null;
    }

    replacePlaceholders(template, inputs) {
        if (!template || typeof template !== 'string') {
            return '';
        }

        // Create a copy of inputs to avoid modifying the original
        const replacements = { ...inputs };

        // Always ensure moral has a value
        if (!replacements.moral) {
            replacements.moral = this.getDefaultMoral(replacements.theme);
        }

        // Replace all placeholders
        let content = template;
        Object.entries(replacements).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                content = content.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            }
        });

        return content;
    }

    validateCoverage() {
        const coverage = {
            total: 0,
            missing: [],
            fallbacks: []
        };

        // Check coverage for all combinations
        STORY_SECTIONS.forEach(section => {
            ['mini', 'short', 'medium', 'long'].forEach(length => {
                Object.keys(themeTemplates).forEach(theme => {
                    Object.keys(themeSubThemeTemplates[theme] || {}).forEach(subTheme => {
                        coverage.total++;
                        const template = this.getTemplate(section, theme, subTheme, length);
                        
                        if (!template) {
                            coverage.missing.push(`${theme}/${subTheme}/${section}/${length}`);
                        } else if (!this.themeSubThemeTemplates[theme]?.[subTheme]?.[section]?.[length]) {
                            coverage.fallbacks.push(`${theme}/${subTheme}/${section}/${length}`);
                        }
                    });
                });
            });
        });

        return coverage;
    }
}

module.exports = {
    TemplateManager,
    STORY_SECTIONS
}; 