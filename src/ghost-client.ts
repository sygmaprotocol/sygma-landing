import GhostContentAPI, { Params, PostOrPage, SettingsResponse, Pagination, PostsOrPages, Tag, Author } from '@tryghost/content-api'

// Create API instance with site credentials

const ghostUrl = process.env.GHOST_URL || ''
const ghostKey = process.env.GHOST_KEY || ''

const api = new GhostContentAPI({
  url: ghostUrl,
  key: ghostKey,
  version: "v5.0"
});



export async function getAllPosts(props?: { limit: number }): Promise<PostsOrPages> {
  const posts = await api.posts.browse({
    include: ["tags", "authors"],
    ...(props && { ...props }),
  })
  console.log(posts);
  return await posts;
}