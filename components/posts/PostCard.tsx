import { MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"
import Link from "next/link"

interface PostCardProps {
  post: Post
  isFirst?: boolean
  isLast?: boolean
}

export default function PostCard({ post, isFirst, isLast }: PostCardProps) {
  return (
    <article
      className={`
        bg-white border-[0.5px] border-grey-100 p-5 hover:shadow-sm transition-shadow
        w-full max-w-[798px] md:w-[798px] 
        ${isFirst ? "rounded-t-3xl" : ""} 
        ${isLast ? "rounded-b-3xl" : ""}
      `}
    >
      <div className="space-y-1">
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
          <Link href={`/post/${post.id}`} className="block">
            <h2 className="text-text font-semibold text-base leading-6 hover:text-green-500 transition-colors cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="text-text text-xs leading-[15px] line-clamp-2 opacity-80">{post.content}</p>
        </div>

        {/* Post Meta */}
        <div className="flex items-center gap-1 pt-2">
          <MessageCircle className="w-4 h-4 text-grey-300" />
          <span className="text-grey-300 text-xs hover:text-green-500 transition-colors cursor-pointer">
            {post.comments} Comments
          </span>
        </div>
      </div>
    </article>
  )
}
