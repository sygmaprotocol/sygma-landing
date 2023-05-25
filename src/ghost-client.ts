import GhostContentAPI, { Params, PostOrPage, SettingsResponse, Pagination, PostsOrPages, Tag, Author } from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: "v5.0"
});



export async function getAllPosts(props?: { limit: number }): Promise<PostsOrPages> {
  const posts = await api.posts.browse({
    ...(props && { ...props }),
  })
  console.log(posts);
  return await posts;
  // const results = await createNextProfileImagesFromPosts(posts)
  // return await createNextFeatureImages(results)
}