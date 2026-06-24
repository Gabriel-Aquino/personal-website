import { getCollection, type CollectionEntry } from "astro:content";

export class PortfolioService {
  /**
   * Retrieves all portfolio projects.
   */
  static async getAllProjects(): Promise<CollectionEntry<"portfolio">[]> {
    const projects = await getCollection("portfolio");
    return projects;
  }
}
