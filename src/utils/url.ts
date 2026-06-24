/**
 * Utility function to convert a category string into a URL-friendly slug.
 * Ex: "Web Development" -> "web-development"
 */
export function slugifyCategory(category: string): string {
  if (!category) return "geral";
  return category.toLowerCase().replace(/\s+/g, '-');
}
