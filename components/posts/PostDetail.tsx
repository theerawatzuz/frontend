"use client"

import { useState } from "react"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CommentSection from "@/components/comments/CommentSection"
import type { Post } from "@/lib/types"
import CommentForm from "@/components/comments/CommentForm"
import CommentModal from "@/components/comments/CommentModal"

interface PostDetailProps {
  post: Post
}

export default function PostDetail({ post }: PostDetailProps) {
  const router = useRouter()
  const [showCommentForm, setShowCommentForm] = useState(false)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="space-y-10 max-w-[800px]">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="w-11 h-11 bg-green-100 hover:bg-green-100/80 text-green-500 rounded-full p-2.5"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        {/* Post Content */}
        <div className="space-y-6">
          {/* Post Header */}
          <div className="space-y-4">
            {/* Author Info */}
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Avatar className="w-12 h-12 ring-2 ring-green-100">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback className="bg-green-100 text-green-500 font-medium text-lg">
                    {post.author[0]}
                  </AvatarFallback>
                </Avatar>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text font-medium text-sm">{post.author}</span>
                <span className="text-grey-300 text-xs">{post.time}</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded-2xl border-0">
                {post.category}
              </Badge>
            </div>

            {/* Post Content */}
            <div className="space-y-4">
              <h1 className="text-text font-semibold text-2xl md:text-[28px] leading-tight">{post.title}</h1>
              <div className="text-text text-sm leading-relaxed">
                <p className="mb-4">{post.content}</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>

            {/* Post Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 text-grey-300" />
                <span className="text-grey-300 text-xs">{post.comments} Comments</span>
              </div>
              {showCommentForm ? (
              <div>

              </div>
     
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-500 border-green-500 hover:bg-green-100/50"
                  onClick={() => setShowCommentForm(true)}
                >
                  Add Comment
                </Button>
              )}
            </div>

            {/* Comment Form */}
            {showCommentForm && (
              <>
                {/* Desktop Comment Form */}
                <div className="hidden md:block">
                  <CommentForm
                    postId={post.id}
                    onCancel={() => setShowCommentForm(false)}
                    onSubmit={() => setShowCommentForm(false)}
                  />
                </div>

                {/* Mobile Comment Modal */}
                <div className="md:hidden">
                  <CommentModal postId={post.id} isOpen={showCommentForm} onClose={() => setShowCommentForm(false)} />
                </div>
              </>
            )}
          </div>

          {/* Comments Section */}
          <CommentSection postId={post.id} />
        </div>
      </div>
  )
}
