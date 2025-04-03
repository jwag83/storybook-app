const validateStoryOutput = (story, age, expectedPageCount) => {
  // Set word count rules for different ages
  const rules = {
    7: { min: 25, max: 50, hardMin: 10 },
    8: { min: 25, max: 50, hardMin: 15 },
    9: { min: 35, max: 80, hardMin: 25 }
  };

  // Get the appropriate rules for the child's age
  const { min, max, hardMin } = rules[age];
  if (!min || !max || !hardMin) {
    console.error(`❌ Invalid age: ${age}`);
    return false;
  }

  // Check if the story has the correct number of pages
  if (story.length !== expectedPageCount) {
    console.error(`❌ Story has ${story.length} pages, expected ${expectedPageCount}`);
    return false;
  }

  console.log('\nValidating story...\n');
  const issues = [];
  let softFails = 0;
  let hardFails = 0;
  let totalWords = 0;

  story.forEach((page, index) => {
    const wordCount = page.trim().split(/\s+/).filter(w => w.length > 0).length;
    const pageNumber = index + 1;
    totalWords += wordCount;

    if (wordCount < hardMin) {
      hardFails++;
      issues.push(`❌ Page ${pageNumber} has ${wordCount} words — below **hard minimum** of ${hardMin}`);
    } else if (wordCount < min || wordCount > max) {
      softFails++;
      issues.push(`⚠️ Page ${pageNumber} has ${wordCount} words (outside target range of ${min}–${max})`);
    } else {
      console.log(`✅ Page ${pageNumber}: ${wordCount} words (✔ acceptable for age ${age})`);
    }
  });

  // Special handling for long stories (age 9)
  if (age === 9 && expectedPageCount === 25) {
    // Enforce total word count of at least 1000
    if (totalWords < 1000) {
      issues.push(`❌ Total word count is ${totalWords} (should be at least 1000 for long stories)`);
    }
  }

  // Final pass/fail rule
  let isValid = true;
  if (hardFails > 0 || softFails > 5) {
    isValid = false;
    issues.push(`❌ Story failed with ${hardFails} hard fails and ${softFails} soft fails.`);
  } else {
    console.log("✅ Story passed all validation rules");
  }

  // Print summary of any issues found
  if (issues.length > 0) {
    console.log('\n❌ Story has ' + issues.length + ' issues:');
    issues.forEach(issue => console.log('  - ' + issue));
    console.log('\nStory validation: ❌ FAILED\n');
    return false;
  }

  console.log('\n✅ Story is valid\n');
  console.log('Story validation: ✅ PASSED\n');
  return true;
};

module.exports = { validateStoryOutput };

// Example usage:
// const story = [
//   "Page 1: This is a sample story page with some words.",
//   "Page 2: Another page with different content."
// ];
// validateStoryOutput(story, 7, 2); 