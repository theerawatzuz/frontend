"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/comments/CommentSection";
import type { Post } from "@/lib/types";
import CommentForm from "@/components/comments/CommentForm";
import CommentModal from "@/components/comments/CommentModal";
import { postService } from "@/lib/api-service";
import { formatDate } from "@/lib/date-utils";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const router = useRouter();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [postDetail, setPostDetail] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await postService.getPost(post.id);
        setPostDetail(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetail();
  }, [post.id]);

  const handleBack = () => {
    router.back();
  };

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
                <AvatarImage
                  src={postDetail?.avatar || "/placeholder.svg"}
                  alt={postDetail?.author}
                />
                <AvatarFallback className="bg-green-100 text-green-500 font-medium text-lg">
                  {postDetail?.author}
                </AvatarFallback>
              </Avatar>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text font-medium text-sm">
                {postDetail?.author}
              </span>
              <span className="text-grey-300 text-xs">
                {postDetail?.time ? formatDate(postDetail.time) : ""}
              </span>
            </div>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded-2xl border-0"
            >
              {postDetail?.category}
            </Badge>
          </div>

          {/* Post Content */}
          <div className="space-y-4">
            <h1 className="text-text font-semibold text-2xl md:text-[28px] leading-tight">
              {postDetail?.title}
            </h1>
            <div className="text-text text-sm leading-relaxed">
              <p className="mb-4">{postDetail?.content}</p>
            </div>
          </div>

          {/* Post Meta */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setShowCommentForm(true)}
              className="flex items-center gap-1 px-0 hover:bg-transparent"
            >
              <MessageCircle className="w-4 h-4 text-grey-300" />
              <span className="text-grey-300 text-xs">
                {postDetail?.comments} Comments
              </span>
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection postId={post.id} />
      </div>
    </div>
  );
}
