"use client"
import MyPostCard from "./MyPostCard"
import type { Post } from "@/lib/types"
import { useEffect, useState, useCallback } from 'react'
import { postService } from '@/lib/api-service'



export default function MyPostList(){
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const userStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null
  const user = userStr ? JSON.parse(userStr) : null

  const fetchPosts = useCallback(async () => {
    if (!user?.id) return

    try {
      setIsLoading(true)
      const data = await postService.getPost(user.id)
      // Check if data exists and is not empty
      if (data && Object.keys(data).length > 0) {
        setPosts([data])
      } else {
        setPosts([])
      }
      setError(null)
    } catch (error: any) {
      setError(error.message)
      setPosts([]) // Reset posts on error
    } finally {
      setIsLoading(false)
    }
  }, [user?.id])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts]) 

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-grey-300">Loading posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error: {error}</p>
      </div>
    )
  }

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
        <MyPostCard 
          key={post.id} 
          post={post} 
          isFirst={index === 0} 
          isLast={index === posts.length - 1} 
          onPostUpdated={fetchPosts}
        />
      ))}
    </div>
  )
}
