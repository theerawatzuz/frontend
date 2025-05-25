"use client"
import MyPostCard from "./MyPostCard"
import type { Post } from "@/lib/types"
import { useEffect, useState } from 'react'
import { postService } from '@/lib/api-service'



export default function MyPostList(){
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const userStr = localStorage.getItem('user')
  const user = userStr ? JSON.parse(userStr) : null


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPost(user.id)
        setPosts([data])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, []) 

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-grey-300 text-lg">You haven't created any posts yet.</p>
        <p className="text-grey-300 text-sm mt-2">Click "Create" to write your first post!</p>
      </div>
    )
  }

  return (
    <div className="space-y-0">
      {posts.map((post, index) => (
        <MyPostCard key={post.id} post={post} isFirst={index === 0} isLast={index === posts.length - 1} />
      ))}
    </div>
  )
}
