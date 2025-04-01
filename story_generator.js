// Story Generator System

// Story Templates
const storyTemplates = {
    nature: {
        title: "The Garden of Wonders",
        themes: {
            patience: {
                mini: {
                    intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket. Every morning, {childName} would watch the butterflies dance outside the window, dreaming of having a garden of their own. The butterflies seemed to whisper secrets about the magic of growing things.",
                    setup: "One day, {childName} decided to start a small garden. {character1}, a cheerful friend who knew all about plants, helped {childName} get some seeds and soil, while {character2}, who had creative ideas and gardening experience, taught them about how plants grow. Together, they chose special seeds that would grow into beautiful {favoriteColor} flowers.",
                    earlyChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient. Sometimes {childName} would check the soil every hour, hoping to see a tiny green shoot. {character1} and {character2} reminded {childName} that good things take time to grow.",
                    interaction: "{character1} and {character2} showed {childName} how to care for the plants properly, teaching them about the importance of teamwork. They made a special watering schedule and took turns checking on the garden. {childName} learned that working together made the waiting more fun.",
                    mainChallenge: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain. {childName} felt scared and worried about the tiny plants. {character1} and {character2} helped {childName} stay brave and protect the garden.",
                    climax: "With determination and the help of {character1} and {character2}, {childName} protected the garden from the storm, using special covers and supports. They worked together through the wind and rain, making sure each plant was safe. {childName} felt proud of how brave they had been.",
                    resolution: "After the storm passed, something amazing happened! The garden was safe, and the plants had grown stronger from the challenge. The {favoriteColor} flowers bloomed brighter than ever, and {childName} realized that sometimes challenges make us stronger, just like the plants in the garden.",
                    moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard. The garden taught {childName} that patience, teamwork, and bravery can help us create something wonderful."
                },
                short: {
                    intro: "In a beautiful forest, there lived a {gender} named {childName} who loved to explore. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket.",
                    setup: "One day, {childName} and {character1}, a cheerful friend who knew all about plants, found a tiny seed. 'Let's plant it!' said {character1}. 'It will grow into something amazing!'",
                    challenge1: "Days passed, and nothing happened. {childName} wanted to dig up the seed to see what was wrong.",
                    challenge2: "{character2}, who had creative ideas and gardening experience, came by and said, 'Sometimes the best things take time to grow.'",
                    challenge3: "More days passed. Still nothing. {childName} felt frustrated and wanted to give up.",
                    challenge4: "But {character1} reminded {childName} about all the beautiful trees in the forest. 'They all started as tiny seeds!'",
                    challenge5: "One morning, {childName} saw a tiny green shoot! It was growing very slowly.",
                    challenge6: "{childName} learned to water the plant every day, even when it seemed like nothing was happening.",
                    challenge7: "The plant grew taller and taller, until one day it bloomed into a beautiful {favoriteColor} flower!",
                    challenge8: "All the forest animals came to see the amazing flower. 'It was worth waiting for!' said {character1}.",
                    challenge9: "{childName} realized that good things come to those who wait. The flower was even more special because of the patience it took to grow.",
                    moral: "Patience and care make beautiful things grow, just like {childName}'s special flower."
                },
                medium: {
                    intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket. Every morning, {childName} would watch the butterflies dance outside the window, dreaming of having a garden of their own.",
                    setup: "One day, {childName} decided to start a small garden. {character1}, a cheerful friend who knew all about plants, helped {childName} get some seeds and soil, while {character2}, who had creative ideas and gardening experience, taught them about how plants grow.",
                    teamIntro: "Together, they formed a special gardening team. {character1} knew all about different types of plants, while {character2} had experience with garden design.",
                    initialChallenge: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                    teamDynamics: "As they worked together, each person brought their own special skills to the garden. {childName} learned that everyone had something valuable to contribute.",
                    risingConflict: "The weather started to change, bringing unexpected challenges to the garden.",
                    backstory: "{character1} shared stories about their own gardening adventures, teaching {childName} about perseverance.",
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
                },
                long: {
                    intro: "In a cozy little room filled with {favoriteColor} butterflies, there lived a special {gender} named {childName}. {childName} had {physicalDescription} and always wore a cheerful {favoriteColor} jacket. Every morning, {childName} would watch the butterflies dance outside the window, dreaming of having a garden of their own.",
                    adventureCall: "One day, {childName} felt a strong desire to create something beautiful. The butterflies seemed to whisper that it was time to start a garden.",
                    friendsIntro: "Together with {character1}, a cheerful friend who knew all about plants, and {character2}, who had creative ideas and gardening experience, they formed a special gardening team. Each person brought unique skills and experiences to the project.",
                    earlyObstacle: "The first few days were tricky. The seeds needed just the right amount of water and sunlight, and {childName} had to learn to be patient.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about plant care, while {character2} shared wisdom about growth.",
                    problemEscalates: "The weather started to change, bringing unexpected challenges to the garden. The plants needed more care than they had expected.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for each type of plant.",
                    earlySetback: "Some of the first plants didn't grow as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own gardening adventures, teaching {childName} about perseverance and hope.",
                    majorConflict: "A big storm came and threatened to destroy the garden. The plants were too small to handle such strong winds and heavy rain.",
                    midpointReflection: "The team gathered to discuss what they had learned and how they could protect their garden.",
                    characterDevelopment: "{childName} realized that being patient wasn't just about waiting - it was about learning and growing.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other.",
                    bigChallenge: "The storm hit with full force, testing everything they had learned.",
                    unexpectedTwist: "Just when they thought they had everything under control, they noticed a flood of water building up around the garden, threatening to wash away their carefully planted seeds.",
                    regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                    risingAction: "They worked together through the storm, each person playing an important role.",
                    climax: "Finally, they faced their biggest challenge - protecting the most delicate plants.",
                    courageousMoment: "{childName} showed great courage in leading the team through the storm.",
                    conflictResolution: "Their hard work paid off - the garden survived and began to thrive.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned.",
                    reflection: "The garden had become more than just plants - it was a symbol of their teamwork and patience.",
                    returnHome: "{childName} returned to their room, now filled with {favoriteColor} butterflies and memories of their garden adventure.",
                    emotionalClosure: "Looking at the thriving garden, {childName} realized how much they'd grown—not just plants, but as friends and as people.",
                    moral: "Sometimes the most beautiful things in life take time and care to grow. Just like {childName}'s garden, good things come to those who wait and work hard."
                }
            },
            kindness: {
                short: {
                    intro: "In a bright and cheerful home, there lived a kind {gender} named {childName}. {physicalDescription} {childName} loved spending time in the garden, watching the {favoriteAnimal}s play and grow.",
                    conflict: "One day, {childName} noticed that the {favoriteAnimal}s in the garden needed help. The weather had been harsh, and their home wasn't as cozy as it used to be.",
                    resolution: "With the help of {character1} and {character2}, {childName} created a special place for all the animals. They built cozy homes and planted {favoriteColor} flowers to make the garden beautiful again.",
                    moral: "Kindness makes the world a better place for everyone. When we help others, we create a happier world for all."
                },
                medium: {
                    intro: "In a bright and cheerful home, there lived a kind {gender} named {childName}. {physicalDescription} {childName} loved spending time in the garden, watching the {favoriteAnimal}s play and grow.",
                    setup: "Every morning, {childName} would feed the {favoriteAnimal}s and make sure they had fresh water. {character1} and {character2} often helped with this daily routine.",
                    conflict: "One day, {childName} noticed that the {favoriteAnimal}s in the garden needed help. The weather had been harsh, and their home wasn't as cozy as it used to be.",
                    challenge: "The {favoriteAnimal}s were getting worried about their home. {childName} knew something had to be done to help them feel safe and comfortable again.",
                    resolution: "With the help of {character1} and {character2}, {childName} created a special place for all the animals. They built cozy homes and planted {favoriteColor} flowers to make the garden beautiful again.",
                    moral: "Kindness makes the world a better place for everyone. When we help others, we create a happier world for all."
                },
                long: {
                    intro: "In a bright and cheerful home, there lived a kind {gender} named {childName}. {physicalDescription} {childName} loved spending time in the garden, watching the {favoriteAnimal}s play and grow.",
                    setup: "Every morning, {childName} would feed the {favoriteAnimal}s and make sure they had fresh water. {character1} and {character2} often helped with this daily routine.",
                    beginning: "The garden was a special place where all the {favoriteAnimal}s could play and be happy. {childName} loved seeing them enjoy their home.",
                    conflict: "One day, {childName} noticed that the {favoriteAnimal}s in the garden needed help. The weather had been harsh, and their home wasn't as cozy as it used to be.",
                    challenge: "The {favoriteAnimal}s were getting worried about their home. {childName} knew something had to be done to help them feel safe and comfortable again.",
                    learning: "{character1} taught {childName} how to build sturdy homes for the animals, while {character2} showed them which {favoriteColor} flowers would make the garden beautiful.",
                    resolution: "With the help of {character1} and {character2}, {childName} created a special place for all the animals. They built cozy homes and planted {favoriteColor} flowers to make the garden beautiful again.",
                    moral: "Kindness makes the world a better place for everyone. When we help others, we create a happier world for all."
                }
            },
            curiosity: {
                mini: {
                    intro: "In a beautiful garden lived a curious {gender} named {childName}. {physicalDescription} {childName} loved exploring and learning about all the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed something mysterious growing in the garden.",
                    earlyChallenge: "Being curious wasn't always easy, but {childName} knew how to explore safely.",
                    interaction: "{character1} and {character2} helped {childName} learn about the garden's secrets.",
                    mainChallenge: "A puzzling mystery in the garden needed solving, but {childName} knew how to investigate.",
                    climax: "With careful observation and questions, {childName} discovered something amazing!",
                    resolution: "The garden revealed its special secret, showing that curiosity leads to discovery.",
                    moral: "Curiosity helps us learn and grow. {childName} showed that asking questions helps us understand the world."
                }
            },
            courage: {
                mini: {
                    intro: "In a wild forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved protecting the {favoriteAnimal}s and their home.",
                    setup: "One day, {childName} noticed that the forest needed help.",
                    earlyChallenge: "Being brave wasn't always easy, but {childName} knew it was important.",
                    interaction: "{character1} and {character2} showed {childName} how to be brave in difficult situations.",
                    mainChallenge: "A dangerous situation threatened the forest, but {childName} knew how to handle it.",
                    climax: "With courage and determination, {childName} helped save the day!",
                    resolution: "The forest was safe again, showing that bravery helps protect what we love.",
                    moral: "Courage helps us face challenges. {childName} showed that being brave can make a big difference."
                }
            },
            teamwork: {
                mini: {
                    intro: "In a busy garden lived a helpful {gender} named {childName}. {physicalDescription} {childName} loved working with others to help the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the garden needed everyone's help.",
                    earlyChallenge: "Working together wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to work as a team.",
                    mainChallenge: "A big project needed everyone's help, but {childName} knew how to organize it.",
                    climax: "With teamwork and cooperation, {childName} helped everyone succeed!",
                    resolution: "The garden was beautiful again, showing that working together brings results.",
                    moral: "Teamwork makes dreams come true. {childName} showed that working together helps us achieve great things."
                }
            },
            friendship: {
                mini: {
                    intro: "In a peaceful garden lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved making friends with all the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some of the {favoriteAnimal}s needed friends.",
                    earlyChallenge: "Making friends wasn't always easy, but {childName} knew it was worth trying.",
            }
        }
    },
    adventure: {
        title: "The Great {favoriteAnimal} Quest",
        themes: {
            courage: {
                mini: {
                    intro: "Deep in the heart of the forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved exploring the woods and making friends with all the {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered that the {favoriteAnimal}s needed help. Their home had been damaged by a storm, and they needed someone brave to help them.",
                    earlyChallenge: "The path to help the {favoriteAnimal}s was filled with obstacles. {childName} had to face their fears and be brave.",
                    interaction: "{character1} and {character2} showed {childName} how to be brave, teaching them that courage means facing fears to help others.",
                    mainChallenge: "A dangerous situation appeared, and {childName} had to make a difficult choice to help the {favoriteAnimal}s.",
                    climax: "With determination and the help of {character1} and {character2}, {childName} faced their fears and helped save the day!",
                    resolution: "The {favoriteAnimal}s found a new, safe home, and {childName} learned what true bravery means.",
                    moral: "Being brave means doing what's right, even when it's scary. {childName} showed that true courage comes from helping others."
                },
                short: {
                    intro: "Deep in the heart of the forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved exploring the woods and making friends with all the {favoriteAnimal}s.",
                    adventureBegins: "One day, {childName} discovered that the {favoriteAnimal}s needed help. Their home had been damaged by a storm, and they needed someone brave to help them.",
                    firstObstacle: "The path to help the {favoriteAnimal}s was filled with obstacles. {childName} had to face their fears and be brave.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to be brave, teaching them that courage means facing fears to help others.",
                    deepeningChallenge: "As they journeyed deeper into the forest, the challenges grew more difficult. {childName} had to learn to be brave in new ways.",
                    conflict: "A dangerous situation appeared, and {childName} had to make a difficult choice to help the {favoriteAnimal}s.",
                    emotionalMoment: "{childName} felt scared but remembered the lessons about bravery and helping others.",
                    turningPoint: "With determination and the help of {character1} and {character2}, {childName} decided to face their fears.",
                    overcomingConflict: "They worked together to find a safe new home for the {favoriteAnimal}s.",
                    immediateResolution: "The {favoriteAnimal}s found a perfect new home, filled with {favoriteColor} flowers and plenty of space to play.",
                    reflection: "{childName} realized that being brave wasn't about not being scared - it was about helping others even when scared.",
                    moral: "Being brave means doing what's right, even when it's scary. {childName} showed that true courage comes from helping others."
                },
                medium: {
                    intro: "Deep in the heart of the forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved exploring the woods and making friends with all the {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered that the {favoriteAnimal}s needed help. Their home had been damaged by a storm, and they needed someone brave to help them.",
                    teamIntro: "Together with {character1} and {character2}, they formed a brave rescue team. Each person brought unique skills to help the {favoriteAnimal}s.",
                    initialChallenge: "The path to help the {favoriteAnimal}s was filled with obstacles. {childName} had to face their fears and be brave.",
                    teamDynamics: "As they worked together, each person showed different ways of being brave. {childName} learned that courage comes in many forms.",
                    risingConflict: "The challenges grew more difficult as they ventured deeper into the forest.",
                    backstory: "{character1} shared stories about their own brave adventures, teaching {childName} about facing fears.",
                    majorChallenge: "A dangerous situation appeared, and {childName} had to make a difficult choice to help the {favoriteAnimal}s.",
                    midReflection: "The team gathered to discuss what they had learned about bravery and helping others.",
                    characterGrowth: "{childName} realized that being brave wasn't about not being scared - it was about helping others even when scared.",
                    newStrategy: "Together, they developed a plan to help the {favoriteAnimal}s find a new home.",
                    climax: "When they faced their biggest challenge, everyone had an important role to play.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The {favoriteAnimal}s found a perfect new home, filled with {favoriteColor} flowers and plenty of space to play.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about bravery.",
                    reflection: "The adventure had become more than just helping the {favoriteAnimal}s - it was about learning to be brave together.",
                    returnHome: "{childName} returned to the forest, now filled with {favoriteColor} flowers and memories of their brave adventure.",
                    moral: "Being brave means doing what's right, even when it's scary. {childName} showed that true courage comes from helping others."
                },
                long: {
                    intro: "Deep in the heart of the forest lived a brave {gender} named {childName}. {physicalDescription} {childName} loved exploring the woods and making friends with all the {favoriteAnimal}s.",
                    adventureCall: "One day, {childName} felt a strong desire to help others. The {favoriteAnimal}s needed someone brave to help them find a new home.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a brave rescue team. Each person brought unique skills and experiences to help the {favoriteAnimal}s.",
                    earlyObstacle: "The path to help the {favoriteAnimal}s was filled with obstacles. {childName} had to face their fears and be brave.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about bravery, while {character2} shared wisdom about helping others.",
                    problemEscalates: "The challenges grew more difficult as they ventured deeper into the forest. The {favoriteAnimal}s needed help more than ever.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan to help the {favoriteAnimal}s.",
                    earlySetback: "Their first attempt to help didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own brave adventures, teaching {childName} about facing fears and helping others.",
                    majorConflict: "A dangerous situation appeared, and {childName} had to make a difficult choice to help the {favoriteAnimal}s.",
                    midpointReflection: "The team gathered to discuss what they had learned about bravery and helping others.",
                    characterDevelopment: "{childName} realized that being brave wasn't about not being scared - it was about helping others even when scared.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other.",
                    bigChallenge: "They faced their biggest challenge yet - helping the {favoriteAnimal}s during a storm.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new problem that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                    risingAction: "They worked together through the storm, each person playing an important role.",
                    climax: "Finally, they faced their biggest challenge - helping the {favoriteAnimal}s find a safe new home.",
                    courageousMoment: "{childName} showed great courage in leading the team through the storm.",
                    conflictResolution: "Their hard work paid off - the {favoriteAnimal}s found a perfect new home.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about bravery.",
                    reflection: "The adventure had become more than just helping the {favoriteAnimal}s - it was about learning to be brave together.",
                    returnHome: "{childName} returned to the forest, now filled with {favoriteColor} flowers and memories of their brave adventure.",
                    emotionalClosure: "Looking at the happy {favoriteAnimal}s, {childName} felt proud of what they had accomplished together.",
                    moral: "Being brave means doing what's right, even when it's scary. {childName} showed that true courage comes from helping others."
                }
            },
            teamwork: {
                mini: {
                    intro: "In a magical land, there lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved playing with the {favoriteAnimal}s and making new friends.",
                    setup: "One day, {childName} discovered that the {favoriteAnimal}s needed a special {favoriteColor} playground, but it was too big to build alone.",
                    earlyChallenge: "The playground needed many special parts, and {childName} knew they couldn't do it alone.",
                    interaction: "{character1} and {character2} showed {childName} how to work together, teaching them about the power of teamwork.",
                    mainChallenge: "Building the playground was harder than they thought, and they had to work together to solve problems.",
                    climax: "With determination and teamwork, {childName} and their friends built the most amazing playground!",
                    resolution: "The {favoriteAnimal}s loved their new playground, and everyone celebrated their success.",
                    moral: "When we work together, we can accomplish anything! {childName} learned that teamwork makes dreams come true."
                },
                short: {
                    intro: "In a magical land, there lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved playing with the {favoriteAnimal}s and making new friends.",
                    adventureBegins: "One day, {childName} discovered that the {favoriteAnimal}s needed a special {favoriteColor} playground, but it was too big to build alone.",
                    firstObstacle: "The playground needed many special parts, and {childName} knew they couldn't do it alone.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to work together, teaching them about the power of teamwork.",
                    deepeningChallenge: "As they started building, they discovered that each part needed special care and attention.",
                    conflict: "Building the playground was harder than they thought, and they had to work together to solve problems.",
                    emotionalMoment: "{childName} felt overwhelmed but remembered that working together makes everything easier.",
                    turningPoint: "With determination and teamwork, {childName} and their friends decided to build the playground together.",
                    overcomingConflict: "They worked together to solve each problem, using everyone's special skills.",
                    immediateResolution: "The {favoriteAnimal}s loved their new playground, and everyone celebrated their success.",
                    reflection: "{childName} realized that working together made the project fun and successful.",
                    moral: "When we work together, we can accomplish anything! {childName} learned that teamwork makes dreams come true."
                },
                medium: {
                    intro: "In a magical land, there lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved playing with the {favoriteAnimal}s and making new friends.",
                    setup: "One day, {childName} discovered that the {favoriteAnimal}s needed a special {favoriteColor} playground, but it was too big to build alone.",
                    teamIntro: "Together with {character1} and {character2}, they formed a special building team. Each person brought unique skills to the project.",
                    initialChallenge: "The playground needed many special parts, and {childName} knew they couldn't do it alone.",
                    teamDynamics: "As they worked together, each person showed different ways of helping. {childName} learned that everyone had something valuable to contribute.",
                    risingConflict: "Building the playground was harder than they thought, and they faced many challenges.",
                    backstory: "{character1} shared stories about their own building adventures, teaching {childName} about teamwork.",
                    majorChallenge: "A big problem appeared, and they had to work together to solve it.",
                    midReflection: "The team gathered to discuss what they had learned about working together.",
                    characterGrowth: "{childName} realized that teamwork wasn't just about helping - it was about learning from each other.",
                    newStrategy: "Together, they developed a plan to build the playground step by step.",
                    climax: "When they faced their biggest challenge, everyone had an important role to play.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The {favoriteAnimal}s loved their new playground, and everyone celebrated their success.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about teamwork.",
                    reflection: "The playground had become more than just a place to play - it was a symbol of their teamwork.",
                    returnHome: "{childName} returned to the magical land, now filled with {favoriteColor} and memories of their teamwork adventure.",
                    moral: "When we work together, we can accomplish anything! {childName} learned that teamwork makes dreams come true."
                },
                long: {
                    intro: "In a magical land, there lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved playing with the {favoriteAnimal}s and making new friends.",
                    adventureCall: "One day, {childName} felt a strong desire to create something special. The {favoriteAnimal}s needed a magical {favoriteColor} playground.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a special building team. Each person brought unique ideas and experiences to restore the magic.",
                    earlyObstacle: "The playground needed many special parts, and {childName} knew they couldn't do it alone.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about building, while {character2} shared wisdom about teamwork.",
                    problemEscalates: "Building the playground was harder than they thought, and they faced many challenges.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for each part of the playground.",
                    earlySetback: "Their first attempt to build didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own building adventures, teaching {childName} about teamwork and perseverance.",
                    majorConflict: "A big problem appeared, and they had to work together to solve it.",
                    midpointReflection: "The team gathered to discuss what they had learned about working together.",
                    characterDevelopment: "{childName} realized that teamwork wasn't just about helping - it was about learning from each other.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other.",
                    bigChallenge: "They faced their biggest challenge yet - building the most difficult part of the playground.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new problem that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined creativity to find a solution.",
                    risingAction: "They worked together through the challenges, each person playing an important role.",
                    climax: "Finally, they faced their biggest challenge - completing the playground.",
                    courageousMoment: "{childName} showed great leadership in helping the team work together.",
                    conflictResolution: "Their hard work paid off - the playground was perfect!",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about teamwork.",
                    reflection: "The playground had become more than just a place to play - it was a symbol of their teamwork.",
                    returnHome: "{childName} returned to the magical land, now filled with {favoriteColor} and memories of their teamwork adventure.",
                    emotionalClosure: "Looking at the happy {favoriteAnimal}s playing, {childName} felt proud of what they had accomplished together.",
                    moral: "When we work together, we can accomplish anything! {childName} learned that teamwork makes dreams come true."
                }
            },
            friendship: {
                mini: {
                    intro: "In a bustling town lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved making new friends and playing with the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some of the {favoriteAnimal}s were feeling lonely and needed friends.",
                    earlyChallenge: "Making new friends wasn't always easy, but {childName} knew it was worth trying.",
                    interaction: "{character1} and {character2} showed {childName} how to be a good friend, teaching them about kindness and sharing.",
                    mainChallenge: "A misunderstanding threatened to break up the new friendships, but {childName} knew how to fix it.",
                    climax: "With understanding and patience, {childName} helped everyone become friends again!",
                    resolution: "The {favoriteAnimal}s and their new friends played together happily, showing that true friendship lasts forever.",
                    moral: "True friends are there for each other through thick and thin. {childName} showed that friendship is one of life's greatest treasures."
                }
            },
            kindness: {
                mini: {
                    intro: "In a peaceful village lived a caring {gender} named {childName}. {physicalDescription} {childName} loved helping the {favoriteAnimal}s and making others smile.",
                    setup: "One day, {childName} noticed that some of the {favoriteAnimal}s needed extra care and attention.",
                    earlyChallenge: "Being kind wasn't always easy, but {childName} knew it was the right thing to do.",
                    interaction: "{character1} and {character2} showed {childName} different ways to show kindness, teaching them about compassion.",
                    mainChallenge: "A difficult situation tested {childName}'s kindness, but they knew how to handle it.",
                    climax: "With a big heart and helping hands, {childName} made everyone feel cared for!",
                    resolution: "The {favoriteAnimal}s were happy and healthy again, showing that kindness makes the world better.",
                    moral: "Kindness makes the world a better place. {childName} showed that even small acts of kindness can make a big difference."
                }
            },
            honesty: {
                mini: {
                    intro: "In a bright town lived a truthful {gender} named {childName}. {physicalDescription} {childName} loved playing with the {favoriteAnimal}s and always told the truth.",
                    setup: "One day, {childName} discovered something important about the {favoriteAnimal}s that others needed to know.",
                    earlyChallenge: "Telling the truth wasn't always easy, but {childName} knew it was important.",
                    interaction: "{character1} and {character2} showed {childName} how to be honest in difficult situations.",
                    mainChallenge: "A big secret threatened to cause problems, but {childName} knew what to do.",
                    climax: "With courage and honesty, {childName} helped everyone understand the truth!",
                    resolution: "The {favoriteAnimal}s were safe and happy, showing that honesty is always the best policy.",
                    moral: "Honesty builds trust and respect. {childName} showed that telling the truth helps everyone in the end."
                }
            },
            patience: {
                mini: {
                    intro: "In a quiet town lived a patient {gender} named {childName}. {physicalDescription} {childName} loved watching the {favoriteAnimal}s grow and learn.",
                    setup: "One day, {childName} noticed that the {favoriteAnimal}s needed time to learn something special.",
                    earlyChallenge: "Being patient wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to stay patient while waiting.",
                    mainChallenge: "A difficult task tested {childName}'s patience, but they knew how to handle it.",
                    climax: "With patience and understanding, {childName} helped everyone succeed!",
                    resolution: "The {favoriteAnimal}s learned their special skill, showing that patience leads to success.",
                    moral: "Patience helps us achieve great things. {childName} showed that waiting and working hard brings rewards."
                }
            },
            creativity: {
                mini: {
                    intro: "In an imaginative town lived a creative {gender} named {childName}. {physicalDescription} {childName} loved dreaming up new ways to play with the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the {favoriteAnimal}s needed a special new home.",
                    earlyChallenge: "Being creative wasn't always easy, but {childName} knew they could think of something.",
                    interaction: "{character1} and {character2} helped {childName} explore their imagination.",
                    mainChallenge: "A big problem needed a creative solution, and {childName} knew just what to do.",
                    climax: "With imagination and creativity, {childName} built something amazing!",
                    resolution: "The {favoriteAnimal}s had a wonderful new home, showing that creativity solves problems.",
                    moral: "Creativity helps us find new solutions. {childName} showed that thinking differently can lead to amazing results."
                }
            },
            learning: {
                mini: {
                    intro: "In a curious town lived a learning {gender} named {childName}. {physicalDescription} {childName} loved discovering new things about the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the {favoriteAnimal}s needed to learn something important.",
                    earlyChallenge: "Learning wasn't always easy, but {childName} knew it was worth trying.",
                    interaction: "{character1} and {character2} helped {childName} understand new things.",
                    mainChallenge: "A difficult lesson tested {childName}'s determination, but they kept trying.",
                    climax: "With hard work and dedication, {childName} helped everyone learn!",
                    resolution: "The {favoriteAnimal}s mastered their new skill, showing that learning takes time and effort.",
                    moral: "Learning opens new doors. {childName} showed that trying hard helps us grow and succeed."
                }
            },
            exploration: {
                mini: {
                    intro: "In an adventurous town lived an exploring {gender} named {childName}. {physicalDescription} {childName} loved discovering new places with the {favoriteAnimal}s.",
                    setup: "One day, {childName} found a mysterious path that led to an unknown place.",
                    earlyChallenge: "Exploring wasn't always safe, but {childName} knew how to be careful.",
                    interaction: "{character1} and {character2} helped {childName} explore safely.",
                    mainChallenge: "A difficult obstacle blocked the way, but {childName} knew how to handle it.",
                    climax: "With courage and curiosity, {childName} discovered something amazing!",
                    resolution: "The {favoriteAnimal}s found a wonderful new place, showing that exploration leads to discovery.",
                    moral: "Exploring helps us learn and grow. {childName} showed that being curious can lead to amazing adventures."
                }
            },
            discovery: {
                mini: {
                    intro: "In a mysterious town lived a discovering {gender} named {childName}. {physicalDescription} {childName} loved finding new things with the {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed something unusual about the {favoriteAnimal}s.",
                    earlyChallenge: "Making discoveries wasn't always easy, but {childName} knew how to look carefully.",
                    interaction: "{character1} and {character2} helped {childName} investigate their findings.",
                    mainChallenge: "A puzzling mystery needed solving, but {childName} knew how to figure it out.",
                    climax: "With careful observation and thinking, {childName} made an amazing discovery!",
                    resolution: "The {favoriteAnimal}s revealed their special secret, showing that discovery brings wonder.",
                    moral: "Discovery makes life more exciting. {childName} showed that paying attention helps us find amazing things."
                }
            }
        }
    },
    magic: {
        title: "The Magical {favoriteColor} Adventure",
        themes: {
            creativity: {
                mini: {
                    intro: "In a world of endless possibilities lived a creative {gender} named {childName}. {physicalDescription} {childName} loved imagining new worlds and making friends with magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the magic in the world was starting to fade. The {favoriteAnimal}s were losing their sparkle, and everything needed more color.",
                    earlyChallenge: "The magic needed special care to grow stronger, and {childName} had to think creatively to help.",
                    interaction: "{character1} and {character2} showed {childName} how to use imagination to bring magic back, teaching them about the power of creativity.",
                    mainChallenge: "A big problem appeared - the magic was fading faster than expected, and they needed a creative solution.",
                    climax: "With imagination and creativity, {childName} and their friends brought the magic back to life!",
                    resolution: "The world was filled with {favoriteColor} magic again, and the {favoriteAnimal}s sparkled with joy.",
                    moral: "Your imagination can make the world more magical. {childName} showed that creativity can bring joy and wonder to everyone."
                },
                short: {
                    intro: "In a world of endless possibilities lived a creative {gender} named {childName}. {physicalDescription} {childName} loved imagining new worlds and making friends with magical {favoriteAnimal}s.",
                    adventureBegins: "One day, {childName} noticed that the magic in the world was starting to fade. The {favoriteAnimal}s were losing their sparkle, and everything needed more color.",
                    firstObstacle: "The magic needed special care to grow stronger, and {childName} had to think creatively to help.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to use imagination to bring magic back, teaching them about the power of creativity.",
                    deepeningChallenge: "As they worked to restore the magic, they discovered that each place needed its own special touch.",
                    conflict: "A big problem appeared - the magic was fading faster than expected, and they needed a creative solution.",
                    emotionalMoment: "{childName} felt worried but remembered that imagination can solve any problem.",
                    turningPoint: "With imagination and creativity, {childName} and their friends decided to bring the magic back.",
                    overcomingConflict: "They worked together to create new magical wonders, using everyone's creative ideas.",
                    immediateResolution: "The world was filled with {favoriteColor} magic again, and the {favoriteAnimal}s sparkled with joy.",
                    reflection: "{childName} realized that creativity could make the world more beautiful and magical.",
                    moral: "Your imagination can make the world more magical. {childName} showed that creativity can bring joy and wonder to everyone."
                },
                medium: {
                    intro: "In a world of endless possibilities lived a creative {gender} named {childName}. {physicalDescription} {childName} loved imagining new worlds and making friends with magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the magic in the world was starting to fade. The {favoriteAnimal}s were losing their sparkle, and everything needed more color.",
                    teamIntro: "Together with {character1} and {character2}, they formed a magical creative team. Each person brought unique ideas to restore the magic.",
                    initialChallenge: "The magic needed special care to grow stronger, and {childName} had to think creatively to help.",
                    teamDynamics: "As they worked together, each person showed different ways of creating magic. {childName} learned that everyone had creative ideas to share.",
                    risingConflict: "The magic was fading faster than expected, and they needed to work quickly.",
                    backstory: "{character1} shared stories about their own magical adventures, teaching {childName} about creativity.",
                    majorChallenge: "A big problem appeared - the magic was fading faster than expected, and they needed a creative solution.",
                    midReflection: "The team gathered to discuss what they had learned about using imagination.",
                    characterGrowth: "{childName} realized that creativity wasn't just about making things - it was about bringing joy to others.",
                    newStrategy: "Together, they developed a plan to restore the magic in each special place.",
                    climax: "When they faced their biggest challenge, everyone had creative ideas to share.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The world was filled with {favoriteColor} magic again, and the {favoriteAnimal}s sparkled with joy.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about creativity.",
                    reflection: "The adventure had become more than just restoring magic - it was about creating joy together.",
                    returnHome: "{childName} returned to their world, now filled with {favoriteColor} magic and memories of their creative adventure.",
                    moral: "Your imagination can make the world more magical. {childName} showed that creativity can bring joy and wonder to everyone."
                },
                long: {
                    intro: "In a world of endless possibilities lived a creative {gender} named {childName}. {physicalDescription} {childName} loved imagining new worlds and making friends with magical {favoriteAnimal}s.",
                    adventureCall: "One day, {childName} felt a strong desire to make the world more magical. The {favoriteAnimal}s were losing their sparkle, and everything needed more color.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a magical creative team. Each person brought unique ideas and experiences to restore the magic.",
                    earlyObstacle: "The magic needed special care to grow stronger, and {childName} had to think creatively to help.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about magic, while {character2} shared wisdom about creativity.",
                    problemEscalates: "The magic was fading faster than expected, and they needed to work quickly to save it.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for each magical place.",
                    earlySetback: "Their first attempt to restore magic didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own magical adventures, teaching {childName} about creativity and perseverance.",
                    majorConflict: "A big problem appeared - the magic was fading faster than expected, and they needed a creative solution.",
                    midpointReflection: "The team gathered to discuss what they had learned about using imagination.",
                    characterDevelopment: "{childName} realized that creativity wasn't just about making things - it was about bringing joy to others.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other's creative ideas.",
                    bigChallenge: "They faced their biggest challenge yet - restoring the most magical place of all.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new magical problem that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined creativity to find a solution.",
                    risingAction: "They worked together through the challenges, each person sharing their creative ideas.",
                    climax: "Finally, they faced their biggest challenge - bringing back all the magic to the world.",
                    courageousMoment: "{childName} showed great creativity in leading the team to restore the magic.",
                    conflictResolution: "Their hard work paid off - the world was filled with {favoriteColor} magic again!",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about creativity.",
                    reflection: "The adventure had become more than just restoring magic - it was about creating joy together.",
                    returnHome: "{childName} returned to their world, now filled with {favoriteColor} magic and memories of their creative adventure.",
                    emotionalClosure: "Looking at the sparkly {favoriteAnimal}s, {childName} felt proud of what they had accomplished together.",
                    moral: "Your imagination can make the world more magical. {childName} showed that creativity can bring joy and wonder to everyone."
                }
            },
            learning: {
                mini: {
                    intro: "In a magical school of wonders lived a curious {gender} named {childName}. {physicalDescription} {childName} loved learning new magical spells and making friends with magical {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered that some magical spells were too difficult to learn alone. The {favoriteAnimal}s needed help understanding their own special magic.",
                    earlyChallenge: "Learning new magic was tricky, and {childName} had to be patient and persistent.",
                    interaction: "{character1} and {character2} showed {childName} how to learn magic step by step, teaching them about the importance of practice.",
                    mainChallenge: "A difficult spell appeared, and they needed to work together to learn it.",
                    climax: "With determination and practice, {childName} and their friends mastered the magical spell!",
                    resolution: "The {favoriteAnimal}s learned their special magic, and everyone celebrated their success.",
                    moral: "Learning takes time and practice. {childName} showed that patience and persistence help us master new things."
                },
                short: {
                    intro: "In a magical school of wonders lived a curious {gender} named {childName}. {physicalDescription} {childName} loved learning new magical spells and making friends with magical {favoriteAnimal}s.",
                    adventureBegins: "One day, {childName} discovered that some magical spells were too difficult to learn alone. The {favoriteAnimal}s needed help understanding their own special magic.",
                    firstObstacle: "Learning new magic was tricky, and {childName} had to be patient and persistent.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to learn magic step by step, teaching them about the importance of practice.",
                    deepeningChallenge: "As they practiced, they discovered that each spell needed special attention and care.",
                    conflict: "A difficult spell appeared, and they needed to work together to learn it.",
                    emotionalMoment: "{childName} felt frustrated but remembered that learning takes time and patience.",
                    turningPoint: "With determination and practice, {childName} and their friends decided to learn the spell together.",
                    overcomingConflict: "They worked together to understand each part of the magical spell.",
                    immediateResolution: "The {favoriteAnimal}s learned their special magic, and everyone celebrated their success.",
                    reflection: "{childName} realized that learning together made the process more fun and successful.",
                    moral: "Learning takes time and practice. {childName} showed that patience and persistence help us master new things."
                },
                medium: {
                    intro: "In a magical school of wonders lived a curious {gender} named {childName}. {physicalDescription} {childName} loved learning new magical spells and making friends with magical {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered that some magical spells were too difficult to learn alone. The {favoriteAnimal}s needed help understanding their own special magic.",
                    teamIntro: "Together with {character1} and {character2}, they formed a magical learning team. Each person brought unique knowledge to help learn the spells.",
                    initialChallenge: "Learning new magic was tricky, and {childName} had to be patient and persistent.",
                    teamDynamics: "As they worked together, each person showed different ways of learning. {childName} learned that everyone had something valuable to teach.",
                    risingConflict: "The spells were getting harder to learn, and they needed to work together more than ever.",
                    backstory: "{character1} shared stories about their own learning adventures, teaching {childName} about perseverance.",
                    majorChallenge: "A difficult spell appeared, and they needed to work together to learn it.",
                    midReflection: "The team gathered to discuss what they had learned about learning magic.",
                    characterGrowth: "{childName} realized that learning wasn't just about memorizing - it was about understanding and growing.",
                    newStrategy: "Together, they developed a plan to learn each part of the magical spell.",
                    climax: "When they faced their biggest challenge, everyone had knowledge to share.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The {favoriteAnimal}s learned their special magic, and everyone celebrated their success.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about learning.",
                    reflection: "The adventure had become more than just learning spells - it was about growing together.",
                    returnHome: "{childName} returned to the magical school, now filled with {favoriteColor} magic and memories of their learning adventure.",
                    moral: "Learning takes time and practice. {childName} showed that patience and persistence help us master new things."
                },
                long: {
                    intro: "In a magical school of wonders lived a curious {gender} named {childName}. {physicalDescription} {childName} loved learning new magical spells and making friends with magical {favoriteAnimal}s.",
                    adventureCall: "One day, {childName} felt a strong desire to learn more magic. The {favoriteAnimal}s needed help understanding their own special magic.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a magical learning team. Each person brought unique knowledge and experiences to help learn the spells.",
                    earlyObstacle: "Learning new magic was tricky, and {childName} had to be patient and persistent.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about magic, while {character2} shared wisdom about learning.",
                    problemEscalates: "The spells were getting harder to learn, and they needed to work together more than ever.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for learning each spell.",
                    earlySetback: "Their first attempt to learn didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own learning adventures, teaching {childName} about perseverance and growth.",
                    majorConflict: "A difficult spell appeared, and they needed to work together to learn it.",
                    midpointReflection: "The team gathered to discuss what they had learned about learning magic.",
                    characterDevelopment: "{childName} realized that learning wasn't just about memorizing - it was about understanding and growing.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other's learning.",
                    bigChallenge: "They faced their biggest challenge yet - learning the most difficult spell of all.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new magical challenge that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                    risingAction: "They worked together through the challenges, each person sharing what they had learned.",
                    climax: "Finally, they faced their biggest challenge - mastering all the magical spells.",
                    courageousMoment: "{childName} showed great determination in leading the team to learn the magic.",
                    conflictResolution: "Their hard work paid off - they all learned the magical spells!",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about learning.",
                    reflection: "The adventure had become more than just learning spells - it was about growing together.",
                    returnHome: "{childName} returned to the magical school, now filled with {favoriteColor} magic and memories of their learning adventure.",
                    emotionalClosure: "Looking at the magical {favoriteAnimal}s, {childName} felt proud of what they had accomplished together.",
                    moral: "Learning takes time and practice. {childName} showed that patience and persistence help us master new things."
                }
            },
            courage: {
                mini: {
                    intro: "In a magical world lived a brave {gender} named {childName}. {physicalDescription} {childName} loved helping magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the magic was in danger.",
                    earlyChallenge: "Being brave wasn't always easy, but {childName} knew it was important.",
                    interaction: "{character1} and {character2} showed {childName} how to be brave with magic.",
                    mainChallenge: "A dangerous magical situation appeared, but {childName} knew how to handle it.",
                    climax: "With courage and magic, {childName} helped save the day!",
                    resolution: "The magic was safe again, showing that bravery helps protect what we love.",
                    moral: "Courage helps us face magical challenges. {childName} showed that being brave can make a big difference."
                }
            },
            teamwork: {
                mini: {
                    intro: "In a magical world lived a helpful {gender} named {childName}. {physicalDescription} {childName} loved working with others to help magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the magic needed everyone's help.",
                    earlyChallenge: "Working together wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to work as a magical team.",
                    mainChallenge: "A big magical project needed everyone's help, but {childName} knew how to organize it.",
                    climax: "With teamwork and magic, {childName} helped everyone succeed!",
                    resolution: "The magic was stronger than ever, showing that working together brings results.",
                    moral: "Teamwork makes magical dreams come true. {childName} showed that working together helps us achieve great things."
                }
            },
            friendship: {
                mini: {
                    intro: "In a magical world lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved making friends with magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some of the magical creatures needed friends.",
                    earlyChallenge: "Making friends wasn't always easy, but {childName} knew it was worth trying.",
                    interaction: "{character1} and {character2} showed {childName} how to be a magical friend.",
                    mainChallenge: "A magical misunderstanding threatened friendships, but {childName} knew how to fix it.",
                    climax: "With kindness and magic, {childName} helped everyone become friends!",
                    resolution: "The magical world was filled with happy friends, showing that friendship makes life better.",
                    moral: "Friendship makes the magical world better. {childName} showed that being a good friend brings joy to everyone."
                }
            },
            kindness: {
                mini: {
                    intro: "In a magical world lived a caring {gender} named {childName}. {physicalDescription} {childName} loved helping magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some magical creatures needed help.",
                    earlyChallenge: "Being kind wasn't always easy, but {childName} knew it was right.",
                    interaction: "{character1} and {character2} showed {childName} how to be kind with magic.",
                    mainChallenge: "A difficult magical situation tested {childName}'s kindness, but they knew how to handle it.",
                    climax: "With kindness and magic, {childName} helped everyone feel better!",
                    resolution: "The magical world was happier, showing that kindness makes everything better.",
                    moral: "Kindness makes the magical world better. {childName} showed that being kind brings happiness to everyone."
                }
            },
            patience: {
                mini: {
                    intro: "In a magical world lived a patient {gender} named {childName}. {physicalDescription} {childName} loved helping magical {favoriteAnimal}s learn.",
                    setup: "One day, {childName} noticed that the magic needed time to grow.",
                    earlyChallenge: "Being patient wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to be patient with magic.",
                    mainChallenge: "A difficult magical task tested {childName}'s patience, but they knew how to handle it.",
                    climax: "With patience and magic, {childName} helped everyone succeed!",
                    resolution: "The magic was stronger than ever, showing that patience brings rewards.",
                    moral: "Patience helps magical things grow. {childName} showed that waiting and working hard brings wonderful results."
                }
            },
            honesty: {
                mini: {
                    intro: "In a magical world lived an honest {gender} named {childName}. {physicalDescription} {childName} loved helping magical {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered something important about the magic.",
                    earlyChallenge: "Being honest wasn't always easy, but {childName} knew it was right.",
                    interaction: "{character1} and {character2} showed {childName} how to be honest with magic.",
                    mainChallenge: "A magical secret threatened everything, but {childName} knew what to do.",
                    climax: "With truth and magic, {childName} helped everyone understand!",
                    resolution: "The magical world was safe again, showing that honesty helps everyone.",
                    moral: "Honesty makes magic stronger. {childName} showed that telling the truth helps solve problems."
                }
            },
            exploration: {
                mini: {
                    intro: "In a magical world lived an exploring {gender} named {childName}. {physicalDescription} {childName} loved discovering new magical places with {favoriteAnimal}s.",
                    setup: "One day, {childName} found a mysterious magical path.",
                    earlyChallenge: "Exploring wasn't always safe, but {childName} knew how to be careful.",
                    interaction: "{character1} and {character2} helped {childName} explore magical places safely.",
                    mainChallenge: "A difficult magical obstacle blocked the way, but {childName} knew how to handle it.",
                    climax: "With courage and magic, {childName} discovered something amazing!",
                    resolution: "The magical world revealed its secrets, showing that exploration leads to discovery.",
                    moral: "Exploring helps us find magical wonders. {childName} showed that being curious can lead to amazing adventures."
                }
            },
            discovery: {
                mini: {
                    intro: "In a magical world lived a discovering {gender} named {childName}. {physicalDescription} {childName} loved finding new things about magical {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed something unusual about the magic.",
                    earlyChallenge: "Making discoveries wasn't always easy, but {childName} knew how to look carefully.",
                    interaction: "{character1} and {character2} helped {childName} investigate magical mysteries.",
                    mainChallenge: "A puzzling magical mystery needed solving, but {childName} knew how to figure it out.",
                    climax: "With careful observation and magic, {childName} made an amazing discovery!",
                    resolution: "The magical world revealed its special secret, showing that discovery brings wonder.",
                    moral: "Discovery makes magic more exciting. {childName} showed that paying attention helps us find amazing things."
                }
            }
        }
    },
    space: {
        title: "Journey to the Stars",
        themes: {
            exploration: {
                mini: {
                    intro: "Among the twinkling stars lived a curious {gender} named {childName}. {physicalDescription} {childName} loved watching the night sky and dreaming about space adventures.",
                    setup: "One day, {childName} discovered a mysterious {favoriteColor} planet that no one had ever seen before. The {favoriteAnimal}s needed someone brave to explore it.",
                    earlyChallenge: "Exploring a new planet was exciting but scary, and {childName} had to be brave and curious.",
                    interaction: "{character1} and {character2} showed {childName} how to explore safely, teaching them about the wonders of space.",
                    mainChallenge: "A big discovery appeared, and they needed to work together to understand it.",
                    climax: "With curiosity and courage, {childName} and their friends made amazing discoveries!",
                    resolution: "The {favoriteAnimal}s found a new home on the {favoriteColor} planet, and everyone celebrated their success.",
                    moral: "Being curious helps us discover new worlds. {childName} showed that asking questions and exploring can lead to amazing adventures."
                },
                short: {
                    intro: "Among the twinkling stars lived a curious {gender} named {childName}. {physicalDescription} {childName} loved watching the night sky and dreaming about space adventures.",
                    adventureBegins: "One day, {childName} discovered a mysterious {favoriteColor} planet that no one had ever seen before. The {favoriteAnimal}s needed someone brave to explore it.",
                    firstObstacle: "Exploring a new planet was exciting but scary, and {childName} had to be brave and curious.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to explore safely, teaching them about the wonders of space.",
                    deepeningChallenge: "As they explored, they discovered that each part of the planet held new mysteries.",
                    conflict: "A big discovery appeared, and they needed to work together to understand it.",
                    emotionalMoment: "{childName} felt nervous but remembered that exploring leads to amazing discoveries.",
                    turningPoint: "With curiosity and courage, {childName} and their friends decided to explore the planet together.",
                    overcomingConflict: "They worked together to solve the mysteries of the {favoriteColor} planet.",
                    immediateResolution: "The {favoriteAnimal}s found a new home on the {favoriteColor} planet, and everyone celebrated their success.",
                    reflection: "{childName} realized that being curious could lead to amazing adventures.",
                    moral: "Being curious helps us discover new worlds. {childName} showed that asking questions and exploring can lead to amazing adventures."
                },
                medium: {
                    intro: "Among the twinkling stars lived a curious {gender} named {childName}. {physicalDescription} {childName} loved watching the night sky and dreaming about space adventures.",
                    setup: "One day, {childName} discovered a mysterious {favoriteColor} planet that no one had ever seen before. The {favoriteAnimal}s needed someone brave to explore it.",
                    teamIntro: "Together with {character1} and {character2}, they formed a space exploration team. Each person brought unique skills to discover the planet's secrets.",
                    initialChallenge: "Exploring a new planet was exciting but scary, and {childName} had to be brave and curious.",
                    teamDynamics: "As they worked together, each person showed different ways of exploring. {childName} learned that everyone had something valuable to discover.",
                    risingConflict: "The planet held many mysteries, and they needed to work together to solve them.",
                    backstory: "{character1} shared stories about their own space adventures, teaching {childName} about exploration.",
                    majorChallenge: "A big discovery appeared, and they needed to work together to understand it.",
                    midReflection: "The team gathered to discuss what they had learned about exploring space.",
                    characterGrowth: "{childName} realized that exploring wasn't just about finding things - it was about learning and growing.",
                    newStrategy: "Together, they developed a plan to explore each part of the {favoriteColor} planet.",
                    climax: "When they faced their biggest challenge, everyone had discoveries to share.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The {favoriteAnimal}s found a new home on the {favoriteColor} planet, and everyone celebrated their success.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about space.",
                    reflection: "The adventure had become more than just exploring - it was about discovering together.",
                    returnHome: "{childName} returned to the stars, now filled with {favoriteColor} and memories of their space adventure.",
                    moral: "Being curious helps us discover new worlds. {childName} showed that asking questions and exploring can lead to amazing adventures."
                },
                long: {
                    intro: "Among the twinkling stars lived a curious {gender} named {childName}. {physicalDescription} {childName} loved watching the night sky and dreaming about space adventures.",
                    adventureCall: "One day, {childName} felt a strong desire to explore the unknown. A mysterious {favoriteColor} planet had appeared, and no one had ever seen it before.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a space exploration team. Each person brought unique skills and experiences to discover the planet's secrets.",
                    earlyObstacle: "Exploring a new planet was exciting but scary, and {childName} had to be brave and curious.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about space, while {character2} shared wisdom about exploration.",
                    problemEscalates: "The planet held many mysteries, and they needed to work together to solve them.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for exploring each part of the planet.",
                    earlySetback: "Their first attempt to explore didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own space adventures, teaching {childName} about exploration and perseverance.",
                    majorConflict: "A big discovery appeared, and they needed to work together to understand it.",
                    midpointReflection: "The team gathered to discuss what they had learned about exploring space.",
                    characterDevelopment: "{childName} realized that exploring wasn't just about finding things - it was about learning and growing.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other's discoveries.",
                    bigChallenge: "They faced their biggest challenge yet - exploring the most mysterious part of the planet.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new space mystery that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                    risingAction: "They worked together through the challenges, each person sharing their discoveries.",
                    climax: "Finally, they faced their biggest challenge - understanding the {favoriteColor} planet's greatest secret.",
                    courageousMoment: "{childName} showed great curiosity in leading the team to explore the planet.",
                    conflictResolution: "Their hard work paid off - they discovered amazing things about the {favoriteColor} planet!",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about space.",
                    reflection: "The adventure had become more than just exploring - it was about discovering together.",
                    returnHome: "{childName} returned to the stars, now filled with {favoriteColor} and memories of their space adventure.",
                    emotionalClosure: "Looking at the mysterious {favoriteColor} planet, {childName} felt proud of what they had discovered together.",
                    moral: "Being curious helps us discover new worlds. {childName} showed that asking questions and exploring can lead to amazing adventures."
                }
            },
            discovery: {
                mini: {
                    intro: "In a galaxy far away lived an adventurous {gender} named {childName}. {physicalDescription} {childName} loved discovering new planets and making friends with space {favoriteAnimal}s.",
                    setup: "One day, {childName} found a special {favoriteColor} star that was different from all the others. The {favoriteAnimal}s needed help understanding its mysteries.",
                    earlyChallenge: "Studying the star was tricky, and {childName} had to be patient and observant.",
                    interaction: "{character1} and {character2} showed {childName} how to study stars carefully, teaching them about the wonders of space.",
                    mainChallenge: "A big mystery appeared, and they needed to work together to solve it.",
                    climax: "With careful observation and teamwork, {childName} and their friends solved the star's mystery!",
                    resolution: "The {favoriteAnimal}s learned about the special {favoriteColor} star, and everyone celebrated their discovery.",
                    moral: "Careful observation helps us understand the world. {childName} showed that being patient and observant leads to amazing discoveries."
                },
                short: {
                    intro: "In a galaxy far away lived an adventurous {gender} named {childName}. {physicalDescription} {childName} loved discovering new planets and making friends with space {favoriteAnimal}s.",
                    adventureBegins: "One day, {childName} found a special {favoriteColor} star that was different from all the others. The {favoriteAnimal}s needed help understanding its mysteries.",
                    firstObstacle: "Studying the star was tricky, and {childName} had to be patient and observant.",
                    characterDevelopment: "{character1} and {character2} showed {childName} how to study stars carefully, teaching them about the wonders of space.",
                    deepeningChallenge: "As they studied the star, they discovered that it held many secrets waiting to be found.",
                    conflict: "A big mystery appeared, and they needed to work together to solve it.",
                    emotionalMoment: "{childName} felt puzzled but remembered that careful observation leads to understanding.",
                    turningPoint: "With careful observation and teamwork, {childName} and their friends decided to solve the mystery together.",
                    overcomingConflict: "They worked together to understand the special {favoriteColor} star.",
                    immediateResolution: "The {favoriteAnimal}s learned about the special {favoriteColor} star, and everyone celebrated their discovery.",
                    reflection: "{childName} realized that being observant could lead to amazing discoveries.",
                    moral: "Careful observation helps us understand the world. {childName} showed that being patient and observant leads to amazing discoveries."
                },
                medium: {
                    intro: "In a galaxy far away lived an adventurous {gender} named {childName}. {physicalDescription} {childName} loved discovering new planets and making friends with space {favoriteAnimal}s.",
                    setup: "One day, {childName} found a special {favoriteColor} star that was different from all the others. The {favoriteAnimal}s needed help understanding its mysteries.",
                    teamIntro: "Together with {character1} and {character2}, they formed a space discovery team. Each person brought unique skills to understand the star's secrets.",
                    initialChallenge: "Studying the star was tricky, and {childName} had to be patient and observant.",
                    teamDynamics: "As they worked together, each person showed different ways of observing. {childName} learned that everyone had something valuable to discover.",
                    risingConflict: "The star held many mysteries, and they needed to work together to solve them.",
                    backstory: "{character1} shared stories about their own space discoveries, teaching {childName} about observation.",
                    majorChallenge: "A big mystery appeared, and they needed to work together to solve it.",
                    midReflection: "The team gathered to discuss what they had learned about studying stars.",
                    characterGrowth: "{childName} realized that discovery wasn't just about finding things - it was about understanding and learning.",
                    newStrategy: "Together, they developed a plan to study each aspect of the {favoriteColor} star.",
                    climax: "When they faced their biggest challenge, everyone had observations to share.",
                    turningPoint: "The team worked together through the difficult situation, using everything they had learned.",
                    resolution: "The {favoriteAnimal}s learned about the special {favoriteColor} star, and everyone celebrated their discovery.",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about space.",
                    reflection: "The adventure had become more than just studying - it was about discovering together.",
                    returnHome: "{childName} returned to the galaxy, now filled with {favoriteColor} and memories of their space adventure.",
                    moral: "Careful observation helps us understand the world. {childName} showed that being patient and observant leads to amazing discoveries."
                },
                long: {
                    intro: "In a galaxy far away lived an adventurous {gender} named {childName}. {physicalDescription} {childName} loved discovering new planets and making friends with space {favoriteAnimal}s.",
                    adventureCall: "One day, {childName} felt a strong desire to understand the stars. A special {favoriteColor} star had appeared, and it was different from all the others.",
                    friendsIntro: "Together with {character1} and {character2}, they formed a space discovery team. Each person brought unique skills and experiences to understand the star's secrets.",
                    earlyObstacle: "Studying the star was tricky, and {childName} had to be patient and observant.",
                    characterInteraction: "As they worked together, they shared stories and learned from each other. {character1} taught about stars, while {character2} shared wisdom about observation.",
                    problemEscalates: "The star held many mysteries, and they needed to work together to solve them.",
                    teamStrategy: "The team gathered to discuss their approach. They decided to create a special plan for studying each aspect of the star.",
                    earlySetback: "Their first attempt to study the star didn't work as expected, teaching them about learning from mistakes.",
                    backstory: "{character1} shared stories about their own space discoveries, teaching {childName} about observation and perseverance.",
                    majorConflict: "A big mystery appeared, and they needed to work together to solve it.",
                    midpointReflection: "The team gathered to discuss what they had learned about studying stars.",
                    characterDevelopment: "{childName} realized that discovery wasn't just about finding things - it was about understanding and learning.",
                    companionship: "Through the challenges, the team grew closer. They learned to trust and support each other's observations.",
                    bigChallenge: "They faced their biggest challenge yet - understanding the most mysterious part of the star.",
                    unexpectedTwist: "Just when they thought they had everything under control, they discovered a new space mystery that needed solving.",
                    regroup: "The team quickly adapted their plan, using their combined knowledge to find a solution.",
                    risingAction: "They worked together through the challenges, each person sharing their observations.",
                    climax: "Finally, they faced their biggest challenge - solving the {favoriteColor} star's greatest mystery.",
                    courageousMoment: "{childName} showed great patience in leading the team to understand the star.",
                    conflictResolution: "Their hard work paid off - they discovered amazing things about the {favoriteColor} star!",
                    celebration: "Everyone celebrated their success, sharing stories about what they had learned about space.",
                    reflection: "The adventure had become more than just studying - it was about discovering together.",
                    returnHome: "{childName} returned to the galaxy, now filled with {favoriteColor} and memories of their space adventure.",
                    emotionalClosure: "Looking at the mysterious {favoriteColor} star, {childName} felt proud of what they had discovered together.",
                    moral: "Careful observation helps us understand the world. {childName} showed that being patient and observant leads to amazing discoveries."
                }
            },
            courage: {
                mini: {
                    intro: "Among the stars lived a brave {gender} named {childName}. {physicalDescription} {childName} loved protecting space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the space {favoriteAnimal}s needed help.",
                    earlyChallenge: "Being brave in space wasn't always easy, but {childName} knew it was important.",
                    interaction: "{character1} and {character2} showed {childName} how to be brave in space.",
                    mainChallenge: "A dangerous space situation appeared, but {childName} knew how to handle it.",
                    climax: "With courage and determination, {childName} helped save the day!",
                    resolution: "The space {favoriteAnimal}s were safe again, showing that bravery helps protect what we love.",
                    moral: "Courage helps us face space challenges. {childName} showed that being brave can make a big difference."
                }
            },
            teamwork: {
                mini: {
                    intro: "Among the stars lived a helpful {gender} named {childName}. {physicalDescription} {childName} loved working with others to help space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the space station needed everyone's help.",
                    earlyChallenge: "Working together in space wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to work as a space team.",
                    mainChallenge: "A big space project needed everyone's help, but {childName} knew how to organize it.",
                    climax: "With teamwork and cooperation, {childName} helped everyone succeed!",
                    resolution: "The space station was better than ever, showing that working together brings results.",
                    moral: "Teamwork makes space dreams come true. {childName} showed that working together helps us achieve great things."
                }
            },
            friendship: {
                mini: {
                    intro: "Among the stars lived a friendly {gender} named {childName}. {physicalDescription} {childName} loved making friends with space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some space creatures needed friends.",
                    earlyChallenge: "Making friends in space wasn't always easy, but {childName} knew it was worth trying.",
                    interaction: "{character1} and {character2} showed {childName} how to be a space friend.",
                    mainChallenge: "A space misunderstanding threatened friendships, but {childName} knew how to fix it.",
                    climax: "With kindness and understanding, {childName} helped everyone become friends!",
                    resolution: "The galaxy was filled with happy friends, showing that friendship makes life better.",
                    moral: "Friendship makes space better. {childName} showed that being a good friend brings joy to everyone."
                }
            },
            kindness: {
                mini: {
                    intro: "Among the stars lived a caring {gender} named {childName}. {physicalDescription} {childName} loved helping space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that some space creatures needed help.",
                    earlyChallenge: "Being kind in space wasn't always easy, but {childName} knew it was right.",
                    interaction: "{character1} and {character2} showed {childName} how to be kind in space.",
                    mainChallenge: "A difficult space situation tested {childName}'s kindness, but they knew how to handle it.",
                    climax: "With kindness and care, {childName} helped everyone feel better!",
                    resolution: "The galaxy was happier, showing that kindness makes everything better.",
                    moral: "Kindness makes space better. {childName} showed that being kind brings happiness to everyone."
                }
            },
            patience: {
                mini: {
                    intro: "Among the stars lived a patient {gender} named {childName}. {physicalDescription} {childName} loved helping space {favoriteAnimal}s learn.",
                    setup: "One day, {childName} noticed that the space station needed time to grow.",
                    earlyChallenge: "Being patient in space wasn't always easy, but {childName} knew it was worth it.",
                    interaction: "{character1} and {character2} showed {childName} how to be patient in space.",
                    mainChallenge: "A difficult space task tested {childName}'s patience, but they knew how to handle it.",
                    climax: "With patience and dedication, {childName} helped everyone succeed!",
                    resolution: "The space station was better than ever, showing that patience brings rewards.",
                    moral: "Patience helps space things grow. {childName} showed that waiting and working hard brings wonderful results."
                }
            },
            creativity: {
                mini: {
                    intro: "Among the stars lived a creative {gender} named {childName}. {physicalDescription} {childName} loved dreaming up new ways to help space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the space station needed something special.",
                    earlyChallenge: "Being creative in space wasn't always easy, but {childName} knew they could think of something.",
                    interaction: "{character1} and {character2} helped {childName} explore their space imagination.",
                    mainChallenge: "A space problem needed a creative solution, but {childName} knew just what to do.",
                    climax: "With imagination and creativity, {childName} made something amazing!",
                    resolution: "The space station was transformed, showing that creativity solves problems.",
                    moral: "Creativity makes space better. {childName} showed that thinking differently can lead to wonderful things."
                }
            },
            learning: {
                mini: {
                    intro: "Among the stars lived a learning {gender} named {childName}. {physicalDescription} {childName} loved discovering new things about space {favoriteAnimal}s.",
                    setup: "One day, {childName} noticed that the space station had many lessons to teach.",
                    earlyChallenge: "Learning in space wasn't always easy, but {childName} knew it was worth trying.",
                    interaction: "{character1} and {character2} helped {childName} understand space things.",
                    mainChallenge: "A difficult space lesson tested {childName}'s determination, but they kept trying.",
                    climax: "With hard work and dedication, {childName} learned something amazing!",
                    resolution: "The space station shared its secrets, showing that learning brings rewards.",
                    moral: "Learning helps us understand space. {childName} showed that trying hard helps us understand the universe."
                }
            },
            honesty: {
                mini: {
                    intro: "Among the stars lived an honest {gender} named {childName}. {physicalDescription} {childName} loved helping space {favoriteAnimal}s.",
                    setup: "One day, {childName} discovered something important about the space station.",
                    earlyChallenge: "Being honest in space wasn't always easy, but {childName} knew it was right.",
                    interaction: "{character1} and {character2} showed {childName} how to be honest in space.",
                    mainChallenge: "A space secret threatened everything, but {childName} knew what to do.",
                    climax: "With truth and courage, {childName} helped everyone understand!",
                    resolution: "The space station was safe again, showing that honesty helps everyone.",
                    moral: "Honesty makes space better. {childName} showed that telling the truth helps solve problems."
                }
            }
        }
    }
};

// Character templates for consistent appearance
const characterTemplates = {
    mainCharacter: {
        boy: "a boy with curly brown hair, green eyes, wearing a cheerful blue jacket",
        girl: "a girl with long blonde hair, blue eyes, wearing a bright red dress"
    },
    sidekick: {
        rabbit: "a friendly white rabbit with floppy ears and a pink nose",
        cat: "a playful orange tabby cat with green eyes",
        dog: "a loyal golden retriever with a wagging tail"
    }
};

// Image generation settings
const imageSettings = {
    style: "children's book illustration, soft lighting, vibrant colors, 300 DPI, print-quality",
    aspectRatio: "16:9",
    quality: "high quality, detailed, professional children's book art"
};

// Theme and moral combinations
const themeMoralCombos = {
    adventure: {
        morals: ['courage', 'teamwork', 'friendship', 'kindness', 'honesty', 'patience', 'creativity', 'learning', 'exploration', 'discovery'],
        lengths: ['mini', 'short', 'medium', 'long']
    },
    nature: {
        morals: ['patience', 'kindness', 'curiosity', 'courage', 'teamwork', 'friendship', 'honesty', 'creativity', 'learning', 'exploration', 'discovery'],
        lengths: ['mini', 'short', 'medium', 'long']
    },
    magic: {
        morals: ['creativity', 'learning', 'courage', 'teamwork', 'friendship', 'kindness', 'patience', 'honesty', 'exploration', 'discovery'],
        lengths: ['mini', 'short', 'medium', 'long']
    },
    space: {
        morals: ['exploration', 'discovery', 'courage', 'teamwork', 'friendship', 'kindness', 'patience', 'creativity', 'learning', 'honesty'],
        lengths: ['mini', 'short', 'medium', 'long']
    }
};

// Story Generator Class
class StoryGenerator {
    constructor(userInputs) {
        this.userInputs = userInputs;
        console.log('StoryGenerator initialized with inputs:', userInputs);
    }

    generateStory() {
        const { theme, moral, length } = this.userInputs;
        console.log('Generating story with theme:', theme, 'moral:', moral, 'and length:', length);
        
        // Validate inputs
        if (!theme || !moral || !length) {
            console.error('Missing required story parameters:', { theme, moral, length });
            return null;
        }

        // Get the appropriate template based on length
        const template = storyTemplates[theme]?.themes[moral]?.[length];
        console.log('Selected template:', template);
        
        if (!template) {
            const availableMorals = Object.keys(storyTemplates[theme]?.themes || {});
            console.error('Invalid theme, moral, or length combination:', {
                theme,
                moral,
                length,
                availableThemes: Object.keys(storyTemplates),
                availableMorals,
                availableLengths: Object.keys(storyTemplates[theme]?.themes[moral] || {})
            });
            
            // Show user-friendly error message
            const errorMessage = `The moral "${moral}" is not available for the "${theme}" theme. ` +
                `For the "${theme}" theme, please choose one of these morals: ${availableMorals.join(', ')}. ` +
                `Or, if you want to keep the "${moral}" moral, please choose the "adventure" theme.`;
            
            alert(errorMessage);
            return null;
        }

        // Generate the story with the selected length
        const pages = Object.values(template).map(page => this.generatePage(page));
        console.log('Generated pages:', pages);
        
        // Verify page count matches expected length
        const expectedPages = {
            mini: 8,
            short: 12,
            medium: 18,
            long: 25
        };
        
        if (pages.length !== expectedPages[length]) {
            console.error(`Invalid page count for ${length} story. Expected ${expectedPages[length]} pages, got ${pages.length}`);
            alert(`Error: The story should have ${expectedPages[length]} pages but only generated ${pages.length} pages. Please try again.`);
            return null;
        }
        
        return {
            title: this.replacePlaceholders(storyTemplates[theme].title),
            pages: pages,
            length: length,
            pageCount: pages.length
        };
    }

    generatePage(template) {
        const page = this.replacePlaceholders(template);
        console.log('Generated page:', page);
        return page;
    }

    replacePlaceholders(text) {
        const replacements = {
            '{childName}': this.userInputs.childName,
            '{gender}': this.userInputs.gender === 'male' ? 'boy' : 'girl',
            '{favoriteColor}': this.userInputs.favoriteColor,
            '{favoriteAnimal}': this.userInputs.favoriteAnimal,
            '{physicalDescription}': this.userInputs.physicalDescription || '',
            '{character1}': this.userInputs.character1?.name || 'friend',
            '{character2}': this.userInputs.character2?.name || 'friend'
        };

        console.log('Replacing placeholders with:', replacements);
        const result = text.replace(/\{(\w+)\}/g, (match, key) => {
            const replacement = replacements[match] || match;
            console.log(`Replacing ${match} with ${replacement}`);
            return replacement;
        });
        return result;
    }
}

// Form Handler
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up form handlers...');

    // Handle Create Story button
    const createStoryBtn = document.querySelector('.create-story-btn');
    const landingPage = document.querySelector('.landing-page');
    const wizardContainer = document.querySelector('.wizard-container');

    if (createStoryBtn) {
        createStoryBtn.addEventListener('click', () => {
            console.log('Create Story button clicked');
            landingPage.style.display = 'none';
            wizardContainer.style.display = 'block';
            showStep(1); // Initialize first step
        });
    }

    // Handle theme selection and update available morals
    const themeSelect = document.getElementById('story-theme');
    const moralSelect = document.getElementById('story-moral');
    
    if (themeSelect && moralSelect) {
        themeSelect.addEventListener('change', () => {
            const selectedTheme = themeSelect.value;
            console.log('Theme selected:', selectedTheme);
            
            // Get available morals for the selected theme
            const availableMorals = themeMoralCombos[selectedTheme]?.morals || [];
            
            // Update moral options
            Array.from(moralSelect.options).forEach(option => {
                if (option.value === '') return; // Skip the placeholder option
                
                const isAvailable = availableMorals.includes(option.value);
                option.disabled = !isAvailable;
                option.style.color = isAvailable ? '#000' : '#999';
                option.style.fontStyle = isAvailable ? 'normal' : 'italic';
                
                // If this moral was selected and is no longer available, clear the selection
                if (moralSelect.value === option.value && !isAvailable) {
                    moralSelect.value = '';
                }
            });
        });
    }

    // Handle custom color input
    const favoriteColorSelect = document.getElementById('favorite-color');
    const customColorInput = document.getElementById('custom-color-input');
    const customColorText = document.getElementById('custom-color-text');

    if (favoriteColorSelect && customColorInput && customColorText) {
        favoriteColorSelect.addEventListener('change', () => {
            customColorInput.style.display = favoriteColorSelect.value === 'custom' ? 'block' : 'none';
        });
    }

    // Handle story length selection
    const storyLengthSelect = document.getElementById('story-length');
    if (storyLengthSelect) {
        storyLengthSelect.addEventListener('change', () => {
            const selectedLength = storyLengthSelect.value;
            const descriptions = document.querySelectorAll('.length-description p');
            
            // Hide all descriptions
            descriptions.forEach(desc => desc.style.display = 'none');
            
            // Show the selected length's description
            const selectedDesc = document.querySelector(`.${selectedLength}-desc`);
            if (selectedDesc) {
                selectedDesc.style.display = 'block';
            }
        });
    }

    // Handle wizard navigation
    const steps = document.querySelectorAll('.wizard-step');
    const progressSteps = document.querySelectorAll('.progress-bar .step');
    
    function showStep(stepNumber) {
        console.log('Showing step:', stepNumber);
        if (stepNumber < 1 || stepNumber > steps.length) {
            console.error('Invalid step number:', stepNumber);
            return;
        }
        
        steps.forEach((step, index) => {
            step.style.display = index + 1 === stepNumber ? 'block' : 'none';
        });
        
        // Update progress bar
        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 <= stepNumber);
        });
    }

    // Add click handlers for navigation buttons
    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Next button clicked');
            const currentStep = Array.from(steps).findIndex(step => step.style.display !== 'none');
            console.log('Current step:', currentStep);
            
            if (currentStep < steps.length - 1) {
                const nextStep = currentStep + 2;
                console.log('Moving to step:', nextStep);
                showStep(nextStep);
                
                if (nextStep === 4) { // If moving to preview step
                    console.log('Generating story preview...');
                    generateStoryPreview();
                }
            }
        });
    });

    document.querySelectorAll('.prev-btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Previous button clicked');
            const currentStep = Array.from(steps).findIndex(step => step.style.display !== 'none');
            console.log('Current step:', currentStep);
            
            if (currentStep > 0) {
                const prevStep = currentStep;
                console.log('Moving to step:', prevStep);
                showStep(prevStep);
            }
        });
    });

    // Initialize first step
    showStep(1);
});

// Story Generation Function
function generateStoryPreview() {
    // Get form data
    const formData = {
        childName: document.getElementById('child-name').value,
        gender: document.getElementById('child-gender').value,
        favoriteColor: document.getElementById('favorite-color').value,
        favoriteAnimal: document.getElementById('favorite-animal').value,
        physicalDescription: document.getElementById('physical-description').value,
        theme: document.querySelector('input[name="theme"]:checked').value,
        moral: document.querySelector('input[name="moral"]:checked').value,
        length: document.querySelector('input[name="length"]:checked').value,
        character1: {
            name: document.getElementById('character-1-name').value,
            relation: document.getElementById('character-1-relation').value
        },
        character2: {
            name: document.getElementById('character-2-name').value,
            relation: document.getElementById('character-2-relation').value
        }
    };

    // Create story generator instance
    const storyGenerator = new StoryGenerator(formData);
    
    // Generate story
    const storyData = storyGenerator.generateStory();
    
    if (storyData) {
        // Store story data in localStorage
        localStorage.setItem('currentStory', JSON.stringify(storyData));
        
        // Redirect to review page
        window.location.href = 'review_story.html';
    } else {
        alert('There was an error generating your story. Please try again.');
    }
}

// Update the form submission handler
document.querySelector('.length-form').addEventListener('submit', function(e) {
    e.preventDefault();
    generateStoryPreview();
});

// ... existing code ...