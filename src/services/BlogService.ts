import { getCollection, type CollectionEntry } from "astro:content";

export class BlogService {
  /**
   * Retrieves all blog posts sorted by publish date (newest first).
   */
  static async getAllPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await getCollection("blog");
    return posts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );
  }

  /**
   * Retrieves posts filtered by a specific category.
   */
  static async getPostsByCategory(
    category: string,
  ): Promise<CollectionEntry<"blog">[]> {
    const posts = await this.getAllPosts();
    return posts.filter((post) => (post.data.category || "Geral") === category);
  }

  /**
   * Retrieves all unique categories available in the blog.
   */
  static async getAllCategories(): Promise<string[]> {
    const posts = await this.getAllPosts();
    return [...new Set(posts.map((post) => post.data.category || "Geral"))];
  }

  /**
   * Retrieves all featured posts.
   */
  static async getFeaturedPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await this.getAllPosts();
    return posts.filter((post) => post.data.featured);
  }

  /**
   * Retrieves posts filtered by a specific tag.
   */
  static async getPostsByTag(tag: string): Promise<CollectionEntry<"blog">[]> {
    const posts = await this.getAllPosts();
    return posts.filter((post) =>
      post.data.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()),
    );
  }

  /**
   * Retrieves all unique tags available in the blog, sorted by frequency of use.
   */
  static async getAllTags(): Promise<string[]> {
    const posts = await this.getAllPosts();
    const tags = posts.flatMap((post) => post.data.tags || []);
    const normalizedTags = tags.map((tag) => tag.toLowerCase());

    const frequencies: Record<string, number> = {};
    for (const tag of normalizedTags) {
      frequencies[tag] = (frequencies[tag] || 0) + 1;
    }

    return Object.keys(frequencies).sort(
      (a, b) => frequencies[b] - frequencies[a],
    );
  }
}
