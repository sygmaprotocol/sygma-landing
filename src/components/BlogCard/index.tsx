import React from "react";
import { Post } from "@/sections/BlogTeaser";

const BlogCard = (post: Post, showExcerpt = false) => {
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <img
          src={post.feature_image}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-3 flex items-center gap-x-2 text-xs">
          <time dateTime={post.datetime} className="text-sm text-gray-800">
            {post.created_at.substring(0, 7)}
          </time>
          {post.primary_tag ? (
            <a
              href={post.primary_tag.url}
              className="relative z-10 rounded-full bg-gray-50 px-1.5 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.primary_tag.name}
            </a>
          ) : (
            ""
          )}
          <p className="text-sm text-gray-500">{post.reading_time}min read</p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.url}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          {showExcerpt && (
            <p className="text-md leading-2 mt-2 line-clamp-2 text-gray-500">
              {post.excerpt}
            </p>
          )}
        </div>
        <div className="relative mt-3 flex items-center gap-x-2">
          <img
            src="/orange-on-gray.png"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {post.primary_author ? (
                <a href={post.primary_author.url}>
                  <span className="absolute inset-0" />
                  {post.primary_author.name}
                </a>
              ) : (
                "Sygma Team"
              )}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
