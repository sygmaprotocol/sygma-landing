import GhostContentAPI, {PostsOrPages} from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL as string,
  key: process.env.NEXT_PUBLIC_GHOST_KEY as string,
  version: "v5.0"
});



export async function getAllPosts(props?: { limit: number }): Promise<PostsOrPages> {
  const posts = await api.posts.browse({
    include: ["tags", "authors"],
    ...(props && { ...props }),
  })
  return await posts;
}