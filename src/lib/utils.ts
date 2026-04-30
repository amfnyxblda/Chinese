const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  lifestyle: "exercise-and-fitness",
};

const CATEGORY_LABEL_OVERRIDES: Record<string, string> = {

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
