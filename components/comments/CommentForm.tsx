"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  postId: number
  onCancel: () => void
  onSubmit: (content: string) => void
}

export default function CommentForm({ postId, onCancel, onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)
    try {
      await onSubmit(comment.trim())
      setComment("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        disabled={isSubmitting}
        required
      />
      <div className=" flex justify-end gap-2">
        <Button
         className="w-[105px] h-[40px] border-success text-success"
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
         className="w-[105px] h-[40px] bg-success hover:bg-green-600 text-white"
          type="submit"
          disabled={isSubmitting || !comment.trim()}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </div>
    </form>
  )
}
