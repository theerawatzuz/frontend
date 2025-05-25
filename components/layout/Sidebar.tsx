"use client"

import { Home, Edit } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden md:block min-w-[280px] bg-grey-100 p-8 pt-8">
      <nav className="space-y-1">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2 text-green-500 rounded-md hover:bg-green-100/50 transition-colors",
            pathname === "/" 
              ? "bg-green-100/50 font-bold" 
              : "font-medium"
          )}
        >
          <Home className="w-6 h-6" />
          <span className="text-base">Home</span>
        </Link>
        <Link
          href="/my-blog"
          className={cn(
            "flex items-center gap-3 px-3 py-2 text-green-500 rounded-md hover:bg-green-100/50 transition-colors",
            pathname === "/my-blog" 
              ? "bg-green-100/50 font-bold" 
              : "font-medium"
          )}
        >
          <Edit className="w-6 h-6" />
          <span className="text-base">Our Blog</span>
        </Link>
      </nav>
    </aside>
  )
}
