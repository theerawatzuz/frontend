import { notFound } from "next/navigation"
import PostDetail from "@/components/posts/PostDetail"
import { posts } from "@/lib/data"

interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="flex justify-center min-h-screen p-4">

      <PostDetail post={post} />
    </div>
  )
    
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}
