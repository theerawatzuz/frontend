import { Home, Edit } from "lucide-react"
import Link from "next/link"

export default function MyBlogSidebar() {
  return (
    <aside className="hidden md:block w-[280px] bg-grey-100 p-8 pt-8">
      <nav className="space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 text-green-500 font-medium rounded-md hover:bg-green-100/50 transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="text-base">Home</span>
        </Link>
        <div className="flex items-center gap-3 px-3 py-2 text-green-500 font-extrabold rounded-md hover:bg-green-100/50 transition-colors">
          <Edit className="w-6 h-6" />
          <span className="text-base">Our Blog</span>
        </div>
      </nav>
    </aside>
  )
}
