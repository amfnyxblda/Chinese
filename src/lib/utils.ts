const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  lifestyle: "exercise-and-fitness",
};

const CATEGORY_LABEL_OVERRIDES: Record<string, string> = {
  // Current (Malay) category slugs
  "alam-sekitar-dan-perumahan": "环境与居住",
  "dandanan": "美容护理",
  "pemakanan-dan-diet": "营养与饮食",
  "peringkat-kehidupan": "生命阶段",
  "perjalanan-dan-logistik": "出行与后勤",
  "senaman-dan-kecergasan": "运动与健身",

  // English category slugs (keep slug/path unchanged, display Chinese label)
  "environment-and-housing": "环境与居住",
  "grooming": "美容护理",
  "nutrition-and-diet": "营养与饮食",
  "life-stages": "生命阶段",
  "travel-and-logistics": "出行与后勤",
  "exercise-and-fitness": "运动与健身",
};

export function canonicalizeCategorySlug(slug: string): string {
  if (!slug) return "";
  return CATEGORY_SLUG_ALIASES[slug] ?? slug;
}

export function formatCategory(slug: string): string {
  const canonical = canonicalizeCategorySlug(slug);
  if (!canonical) return "";
  if (CATEGORY_LABEL_OVERRIDES[canonical]) return CATEGORY_LABEL_OVERRIDES[canonical];

  const words = canonical.split("-");
  const capitalizedWords = words.map((word) => {
    if (word.toLowerCase() === "dan") return "&";
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}
