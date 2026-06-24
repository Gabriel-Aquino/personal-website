import { BlogService } from "../../services/BlogService";
import { PortfolioService } from "../../services/PortfolioService";
import { slugifyCategory } from "../../utils/url";

export async function GET() {
  const posts = await BlogService.getAllPosts();
  const projects = await PortfolioService.getAllProjects();

  // Format and merge all search data
  const searchData = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      category: post.data.category || "Geral",
      tags: post.data.tags || [],
      url: `/blog/${slugifyCategory(post.data.category || "Geral")}/${post.id}`,
      type: "Blog",
    })),
    ...projects.map((project) => ({
      title: project.data.projectName,
      description: project.data.description,
      category: "Portfólio",
      tags: project.data.techStack || [],
      url: `/portfolio/${project.id}`,
      type: "Portfolio",
    })),
  ];

  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
