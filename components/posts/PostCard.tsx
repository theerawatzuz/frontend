import { MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"
import Link from "next/link"
import { formatDate } from '@/lib/date-utils'

interface PostCardProps {
  post: Post
  isFirst?: boolean
  isLast?: boolean
}

export default function PostCard({ post, isFirst, isLast }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <article
        className={`
          bg-white border-[0.5px] border-grey-100 p-5 hover:shadow-sm transition-shadow cursor-pointer
          w-full max-w-[798px] 
          ${isFirst ? "rounded-t-xl" : ""} 
          ${isLast ? "rounded-b-xl" : ""}
        `}
      >
        <div className="space-y-1">
          {/* Author Info */}
          <div className="flex items-center gap-2 mb-4">
            <Avatar className="w-8 h-8 ring-2 ring-green-100">
              <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
              <AvatarFallback className="bg-green-100 text-green-500 font-medium">{post.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <span className="text-text font-medium text-sm">{post.author}</span>
              <span className="text-grey-300 text-xs">{formatDate(post.time)}</span>
            </div>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded-2xl border-0 hover:bg-green-100/80"
            >
              {post.category}
            </Badge>
          </div>

          {/* Post Content */}
          <div className="space-y-2">
            <h2 className="text-text font-semibold text-base leading-6 group-hover:text-green-500 transition-colors">
              {post.title}
            </h2>
            <p className="text-text text-xs leading-[15px] line-clamp-2 opacity-80">{post.content}</p>
          </div>

          {/* Post Meta */}
          <div className="flex items-center gap-1 pt-2">
            <MessageCircle className="w-4 h-4 text-grey-300" />
            <span className="text-grey-300 text-xs group-hover:text-green-500 transition-colors">
              {post.comments} Comments
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
