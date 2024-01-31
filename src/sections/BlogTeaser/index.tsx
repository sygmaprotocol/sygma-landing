import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/ghost-client";

export type Post = {
  title: string;
  id: string;
  slug: string;
  excerpt: string;
  feature_image: string;
  created_at: string;
  url: string;
  datetime?: string;
  primary_tag?: {
    url?: string;
    name: string;
  };
  reading_time?: string;
  primary_author?: {
    url?: string;
    name: string;
  };
  showExcerpt?: boolean;
};

const BlogTeaser: React.FC<{ posts: any }> = (props) => {
  const { posts } = props;

  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          { posts && posts
            .map((post: Post) => (
              <BlogCard key={post.id} {...post} showExcerpt={true} />
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default BlogTeaser