import PostList from "@/components/posts/PostList"

export default function ForumBoard() {
  // ไม่ต้องส่ง posts prop เพื่อให้ PostList ดึงข้อมูลจาก API เอง
  return <PostList />
}
