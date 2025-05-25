"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  postId: number
  onCancel: () => void
  onSubmit: () => void
}

export default function CommentForm({ postId, onCancel, onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically make an API call to save the comment
    console.log("Submitting comment:", { postId, comment })

    setComment("")
    setIsSubmitting(false)
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        className="min-h-[100px] resize-none border-[#DADADA] focus:border-green-300 focus:ring-green-300"
        disabled={isSubmitting}
      />

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
          className="w-[105px] h-[40px] border-success text-success hover:bg-success/5 hover:border-success/80"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting || !comment.trim()}
          className="w-[105px] h-[40px] bg-success hover:bg-success/90 text-white"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </div>
    </form>
  )
}
