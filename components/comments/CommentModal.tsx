"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentModalProps {
  postId: number
  isOpen: boolean
  onClose: () => void
}

export default function CommentModal({ postId, isOpen, onClose }: CommentModalProps) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

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
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl p-8 w-full max-w-[343px] relative">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-green-500 hover:bg-green-100/50 w-6 h-6"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Modal Content */}
        <div className="space-y-8">
          <h2 className="text-xl font-medium text-text">Add Comments</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="min-h-[120px] resize-none border-[#DADADA] focus:border-green-300 focus:ring-green-300"
              disabled={isSubmitting}
            />

            <div className="space-y-2.5">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="w-full border-success text-success hover:bg-success/5 hover:border-success/80"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !comment.trim()}
                className="w-full bg-success hover:bg-success/90 text-white"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
