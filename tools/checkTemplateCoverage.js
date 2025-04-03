const fs = require('fs');
const path = require('path');

const sections = [
  "intro", "build_up", "challenge", "struggle", "turning_point",
  "resolution", "moral", "closing"
];
const lengths = ["mini", "short", "medium", "long"];
const ages = ["3-5", "6-8", "9-10"];

const baseDir = path.join(__dirname, '../templates'); // adjust if needed

function scanTemplates() {
  const themes = fs.readdirSync(baseDir).filter(f => fs.lstatSync(path.join(baseDir, f)).isDirectory());
  const results = [];

  themes.forEach(theme => {
    const themePath = path.join(baseDir, theme);
    lengths.forEach(length => {
      sections.forEach(section => {
        ages.forEach(age => {
          const templateFile = path.join(themePath, `${section}_${length}_age${age}.txt`);
          if (!fs.existsSync(templateFile)) {
            results.push(`[MISSING] ${theme}/${section}_${length}_age${age}`);
          }
        });
      });
    });
  });

  return results;
}

const missing = scanTemplates();
if (missing.length === 0) {
  console.log("✅ All templates covered.");
} else {
  console.log("⚠️ Missing templates:");
  missing.forEach(line => console.log(line));
} 