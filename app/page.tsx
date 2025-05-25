import ForumLayout from "@/components/layout/ForumLayout"
import PostList from "@/components/posts/PostList"
import SearchBar from "@/components/ui/SearchBar"
import { posts } from "@/lib/data"

export default function ForumBoard() {
  return (
    <ForumLayout>
      <div className="space-y-6">
        <SearchBar />
        <PostList posts={posts} />
      </div>
    </ForumLayout>
  )
}
