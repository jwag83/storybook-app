import os

# === Character + Style Profile ===
CHARACTER_DESCRIPTION = (
    "A cheerful young boy named Alex with curly brown hair, bright green eyes, "
    "and a cheerful blue jacket. Always accompanied by a cute white rabbit."
)

STYLE_GUIDE = (
    "Whimsical cartoon style, age-appropriate for 5–10 years, bright cheerful color palette, "
    "clean lines, forest or garden setting, soft natural lighting."
)

# === Story Content ===
story_pages = {
    "01": "In a beautiful forest, there lived a boy named Alex who loved to explore. Alex had curly brown hair and bright green eyes and always wore a cheerful blue jacket. His best friend was a friendly rabbit who loved hopping through the forest.",
    "02": "One day, Alex and Sam, a cheerful friend who knew all about plants, found a tiny seed. 'Let's plant it!' said Sam. 'It will grow into something amazing!' Alex's rabbit friend watched curiously as they prepared the soil.",
    "03": "Days passed, and nothing happened. Alex wanted to dig up the seed to see what was wrong. His rabbit friend nudged his hand gently, as if to say 'Wait!'",
    "04": "One morning, Alex saw a tiny green shoot! The seed had grown into a beautiful blue flower. 'Patience makes beautiful things grow!' said Sam. Alex smiled, realizing that waiting had made the flower even more special."
}

# === Output Folder ===
output_dir = "illustration_prompts"
os.makedirs(output_dir, exist_ok=True)

# === Loop Through Each Page ===
for page_num, story_text in story_pages.items():
    # Generate the prompt
    prompt = f"""
Create an illustration for a children's storybook page.

Character:
{CHARACTER_DESCRIPTION}

Scene Style:
{STYLE_GUIDE}

Scene Description:
{story_text}

Important:
– Embed the following story text directly into the image, positioned like a printed storybook page.
– Do not include extra borders, speech bubbles, or frames.
– This is a full-page book illustration. Do not show the book or multiple panels.
– Maintain consistent character appearance across all pages.
– Ensure text is clearly readable against the background.
– Use a 16:9 aspect ratio for optimal text placement.

Story Text (to embed visually):
"{story_text}"
"""

    # Save prompt to file
    with open(os.path.join(output_dir, f"page_{page_num}.txt"), "w") as out:
        out.write(prompt.strip())

print("✅ Illustration prompts generated successfully.") 