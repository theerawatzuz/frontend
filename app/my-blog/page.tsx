import MyPostList from "@/components/blog/MyPostList"
import { posts } from "@/lib/data"

// Filter posts by current user (assuming logged in user is "Wittawat")
const currentUser = "Wittawat"
const myPosts = posts.filter((post) => post.author === currentUser)

export default function MyBlogPage() {
  return <MyPostList posts={myPosts} />
}
