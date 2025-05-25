import CommentCard from "./CommentCard"
import { comments } from "@/lib/data"

interface CommentSectionProps {
  postId: number
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // Filter comments for this post and sort by most recent (newest first)
  const postComments = comments
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  if (postComments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-grey-300 text-sm">No comments yet. Be the first to comment!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-text font-medium text-lg">Comments ({postComments.length})</h3>
      <div className="space-y-6">
        {postComments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
