"use client"

import { useEffect, useState } from 'react'
import { commentService } from '@/lib/api-service'
import type { Comment } from '@/lib/types'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import { Button } from '../ui/button'

interface CommentSectionProps {
  postId: number
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
      try {
        setUser(JSON.parse(userStr))
      } catch (e) {
        console.error('Error parsing user data:', e)
      }
    }
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await commentService.getComments(postId)
        setComments(data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [postId])

  const handleAddComment = async (content: string) => {
    if (!user) {
      setError("Please login to add a comment")
      return
    }

    try {
      const newComment = await commentService.createComment(postId, { 
        content, 
        fullName: user.fullName,
      })
      setComments(prev => [...prev, newComment])
      setIsFormVisible(false)
    } catch (error: any) {
      setError(error.message)
    }
  }

  if (isLoading) {
    return <div>Loading comments...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        size="sm"
        className="text-success border-success hover:bg-green-100/50"
        onClick={() => setIsFormVisible(true)}
      >
        Add Comment
      </Button>

      {isFormVisible && (
        <CommentForm
          postId={postId}
          onSubmit={handleAddComment}
          onCancel={() => setIsFormVisible(false)}
        />
      )}

      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
