import { getAllPosts } from "@/ghost-client";
import BlogGrid from "@/sections/BlogGrid";

import { GetStaticProps } from "next";
import { PostsOrPages } from "@tryghost/content-api";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

export default function Blog(props: any) {
  return (
    <>
      <h1>Hello from blog grid</h1>
      <BlogGrid posts={props.posts} />
    </>
  );
}
