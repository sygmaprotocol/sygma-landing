import { getAllPosts } from '@/ghost-client';

export default function BlogGrid() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <>
      <h1>Hello from blog grid</h1>
    </>
  );
}
