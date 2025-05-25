import MyBlogLayout from "@/components/blog/MyBlogLayout"
import MyPostList from "@/components/blog/MyPostList"
import SearchBar from "@/components/ui/SearchBar"
import { posts } from "@/lib/data"

// Filter posts by current user (assuming logged in user is "Wittawat")
const currentUser = "Wittawat"
const myPosts = posts.filter((post) => post.author === currentUser)

export default function MyBlogPage() {
  return (
    <MyBlogLayout>
      <div className="space-y-6">
        <SearchBar />
        <MyPostList posts={myPosts} />
      </div>
    </MyBlogLayout>
  )
}
