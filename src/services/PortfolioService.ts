import { getCollection, type CollectionEntry } from "astro:content";

export class PortfolioService {
  /**
   * Retrieves all portfolio projects.
   */
  static async getAllProjects(): Promise<CollectionEntry<"portfolio">[]> {
    const projects = await getCollection("portfolio");
    return projects;
  }

  /**
   * Retrieves all featured portfolio projects.
   */
  static async getFeaturedProjects(): Promise<CollectionEntry<"portfolio">[]> {
    const projects = await this.getAllProjects();
    return projects.filter((project) => project.data.featured);
  }
}
