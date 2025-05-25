import PostCard from "./PostCard"
import type { Post } from "@/lib/types"

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="w-full max-w-[798px] justify-start">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} isFirst={index === 0} isLast={index === posts.length - 1} />
      ))}
    </div>
  )
}
