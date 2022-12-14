import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 md:p-6 max-w-7xl mx-auto">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <img
              className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={urlFor(post.mainImage).url()!}
              alt=""
            />

            <div className="flex items-center justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs">
                  {post.description} by {post.author.name}
                </p>
              </div>

              <img
                className="h-12 w-12 rounded-full"
                src={urlFor(post.author.image).url()!}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
