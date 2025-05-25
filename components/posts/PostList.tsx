"use client"

import { useEffect, useState } from 'react'
import { postService } from '@/lib/api-service'
import type { Post } from '@/lib/types'
import PostCard from './PostCard'

interface PostListProps {
  posts?: Post[]  // Optional because we might fetch posts internally
}

export default function PostList({ posts: initialPosts }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts || [])
  const [isLoading, setIsLoading] = useState(!initialPosts)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialPosts) return; // Don't fetch if posts were provided via props

    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts()
        setPosts(data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [initialPosts])

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
