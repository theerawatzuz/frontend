import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Comment } from "@/lib/types"
import { formatTimeAgo } from "@/lib/utils"

interface CommentCardProps {
  comment: Comment
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="space-y-2">
      {/* Comment Header */}
      <div className="flex items-center gap-2.5">
        <Avatar className="w-10 h-10 ring-1 ring-green-100">
          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
          <AvatarFallback className="bg-grey-100 text-grey-300 font-medium text-sm">
            {comment.author.name}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2.5">
          <span className="text-text font-medium text-sm">{comment.author.name}</span>
          <span className="text-grey-300 text-xs">{formatTimeAgo(new Date(comment.createdAt))}</span>
        </div>
      </div>

      {/* Comment Content */}
      <div className="ml-12 md:ml-[50px]">
        <p className="text-text text-sm leading-relaxed">{comment.content}</p>
      </div>
    </div>
  )
}
