import GhostContentAPI, { Params, PostOrPage, SettingsResponse, Pagination, PostsOrPages, Tag, Author } from '@tryghost/content-api'

// Create API instance with site credentials

const ghostUrl = 'https://testing123.ghost.io'
const ghostKey = '91a22ddc444be4218587778571'
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