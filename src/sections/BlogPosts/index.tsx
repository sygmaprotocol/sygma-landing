import BlogCard from "@/components/BlogCard";
import type { Post } from "../BlogTeaser";

const BlogPosts: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All posts
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600"></p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: Post) => (
            <BlogCard {...post} showExcerpt={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
