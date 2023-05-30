import { getAllPosts } from "@/ghost-client";
import BlogPosts from "@/sections/BlogPosts";

import { GetStaticProps } from "next";

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
      <BlogPosts posts={props.posts} />
    </>
  );
}
