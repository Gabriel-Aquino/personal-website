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
}
