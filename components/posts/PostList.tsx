"use client";

import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { postService } from "@/lib/api-service";
import type { Post } from "@/lib/types";
import PostCard from "./PostCard";
import { useSearchParams, useRouter } from "next/navigation";

const PostList = forwardRef(function PostList(props, ref) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchPosts = async () => {
    try {
      const data = await postService.getPosts();
      setPosts(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({ fetchPosts }));

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchParams.get("success") === "1") {
      fetchPosts();
      router.replace(window.location.pathname, { scroll: false });
    }
  }, [searchParams, router]);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-[798px] justify-start">
      {[...posts]
        .sort((a, b) => b.id - a.id)
        .map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            isFirst={index === 0}
            isLast={index === posts.length - 1}
          />
        ))}
    </div>
  );
});

export default PostList;
