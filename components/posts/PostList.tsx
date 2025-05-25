"use client"

import { useEffect, useState } from 'react'
import { postService } from '@/lib/api-service'
import type { Post } from '@/lib/types'
import PostCard from './PostCard'

interface PostListProps {
  posts?: Post[]  
}

export default function PostList({ posts: initialPosts }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts || [])
  const [isLoading, setIsLoading] = useState(!initialPosts)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts()
        setPosts(data)
        console.log("Fetched posts:", data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, )

  if (isLoading) {
    return <div>Loading posts...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="w-full max-w-[798px] justify-start">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} isFirst={index === 0} isLast={index === posts.length - 1} />
      ))}
    </div>
  )
}
