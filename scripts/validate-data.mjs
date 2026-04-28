import { CATEGORIES, LIBFT_DATA, TRANSLATIONS } from "../src/data/libftData.js";

const requiredLangs = Object.keys(TRANSLATIONS);
const failures = [];

for (const category of CATEGORIES) {
  const functions = LIBFT_DATA[category] || [];
  for (const entry of functions) {
    for (const lang of requiredLangs) {
      if (!entry.desc?.[lang]) failures.push(`${entry.name}: missing desc.${lang}`);
      if (!entry.usage?.[lang]) failures.push(`${entry.name}: missing usage.${lang}`);
      if (!entry.step?.[lang]) failures.push(`${entry.name}: missing step.${lang}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Data validation failed:\n");
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

const totalFunctions = CATEGORIES.reduce((count, key) => count + (LIBFT_DATA[key] || []).length, 0);
console.log(`Data validation passed. ${totalFunctions} functions checked.`);

