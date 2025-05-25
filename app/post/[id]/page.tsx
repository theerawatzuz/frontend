import PostDetail from "@/components/posts/PostDetail";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="flex justify-center min-h-screen p-4">
      <PostDetail postId={Number(params.id)} />
    </div>
  );
}
