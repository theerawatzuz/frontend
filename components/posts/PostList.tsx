import PostCard from "./PostCard"
import type { Post } from "@/lib/types"

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-0">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} isFirst={index === 0} isLast={index === posts.length - 1} />
      ))}
    </div>
  )
}
