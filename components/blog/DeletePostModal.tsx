"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/types"
import { postService } from '@/lib/api-service'

interface DeletePostModalProps {
  isOpen: boolean
  onClose: () => void
  post: Post
  onSuccess?: () => void
}

export default function DeletePostModal({ isOpen, onClose, post, onSuccess }: DeletePostModalProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleDelete = async () => {
    setIsDeleting(true)
    setError(null)

    try {
      await postService.deletePost(post.id)
      if (onSuccess) {
        onSuccess()
      }
      onClose()
    } catch (err: any) {
      setError(err.message || 'Failed to delete post')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      {/* Desktop Modal */}
      <div className="hidden md:flex bg-white rounded-xl w-[400px] h-[248px] relative flex-col items-center justify-center p-6 gap-8 shadow-xl">
        {/* Modal Content */}
        <div className="flex flex-col items-center gap-4 w-[352px] h-[112px]">
          {/* Text and supporting text */}
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="text-lg font-semibold text-[#101828] text-center leading-7 w-full h-14">
              Are you sure you want to delete this post? This action cannot be undone.
            </h2>
            <p className="text-base text-[#475467] text-center leading-6 w-full h-12">
              This will permanently delete "{post.title}" and remove all associated comments.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-[352px] h-11">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 h-11 bg-white border-[#DADADA] text-[#5B5B5B] hover:bg-gray-50 font-semibold text-base shadow-xs"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex-1 h-11 bg-[#F23536] hover:bg-[#F23536]/90 border-[#F23536] text-white font-semibold text-base shadow-xs"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>

      {/* Mobile Modal */}
      <div className="md:hidden bg-white rounded-xl w-[343px] h-[280px] relative flex flex-col items-center justify-center p-6 gap-6 shadow-lg border border-[#DADADA]">
        {/* Modal Content */}
        <div className="flex flex-col items-center gap-4 w-[311px] h-24">
          {/* Text and supporting text */}
          <div className="flex flex-col items-center gap-2 w-full h-24">
            <h2 className="text-xl font-semibold text-[#1C1C1C] text-center leading-6 w-full h-12">
              Are you sure you want to delete this post?
            </h2>
            <p className="text-sm text-[#5B5B5B] text-center leading-5 w-full h-10">
              This action cannot be undone and will permanently delete "{post.title}".
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-[311px] h-[100px]">
          <Button
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full h-11 bg-[#F23536] hover:bg-[#F23536]/90 border-[#F23536] text-white font-semibold text-base shadow-xs"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isDeleting}
            className="w-full h-11 bg-white border-[#DADADA] text-[#5B5B5B] hover:bg-gray-50 font-semibold text-base shadow-xs"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
