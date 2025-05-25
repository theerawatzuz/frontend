"use client"

import { useState } from "react"
import { MessageCircle, Edit, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/types"
import Link from "next/link"
import EditPostModal from "./EditPostModal"
import DeletePostModal from "./DeletePostModal"

interface MyPostCardProps {
  post: Post
  isFirst?: boolean
  isLast?: boolean
}

export default function MyPostCard({ post, isFirst, isLast }: MyPostCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <Link href={`/post/${post.id}`}>
        <article
          className={`
            bg-white border-[0.5px] border-grey-100 p-5 hover:shadow-sm transition-shadow relative cursor-pointer
            w-full max-w-[798px] 
            ${isFirst ? "rounded-t-xl" : ""} 
            ${isLast ? "rounded-b-xl" : ""}
          `}
        >
          {/* Edit and Delete Icons */}
          <div className="absolute top-5 right-5 flex items-center gap-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault() 
                setIsEditModalOpen(true)
              }}
              className="w-4 h-4 p-0 hover:bg-green-100/50"
            >
              <Edit className="w-4 h-4 text-green-300" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault() 
                setIsDeleteModalOpen(true)
              }}
              className="w-4 h-4 p-0 hover:bg-red-100/50"
            >
              <Trash2 className="w-4 h-4 text-green-300" />
            </Button>
          </div>

          <div className="space-y-1 pr-16">
            {/* Author Info */}
            <div className="flex items-center gap-2 mb-4">
              <Avatar className="w-8 h-8 ring-2 ring-green-100">
                <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                <AvatarFallback className="bg-green-100 text-green-500 font-medium">{post.author[0]}</AvatarFallback>
              </Avatar>
              <span className="text-grey-300 font-medium text-sm">{post.author}</span>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded-2xl border-0 hover:bg-green-100/80"
              >
                {post.category}
              </Badge>
            </div>

            {/* Post Content */}
            <div className="space-y-2">
              <h2 className="text-text font-semibold text-base leading-6 transition-colors">
                {post.title}
              </h2>
              <p className="text-text text-xs leading-[15px] line-clamp-2 opacity-80">{post.content}</p>
            </div>

            {/* Post Meta */}
            <div className="flex items-center gap-1 pt-2">
              <MessageCircle className="w-4 h-4 text-grey-300" />
              <span className="text-grey-300 text-xs transition-colors">
                {post.comments} Comments
              </span>
            </div>
          </div>
        </article>
      </Link>

      {/* Edit Modal */}
      <EditPostModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} post={post} />

      {/* Delete Modal */}
      <DeletePostModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} post={post} />
    </>
  )
}
