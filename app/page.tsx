import PostList from "@/components/posts/PostList"
import { posts } from "@/lib/data"

export default function ForumBoard() {
  return <PostList posts={posts} />
}
