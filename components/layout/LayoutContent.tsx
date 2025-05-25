"use client"

import { usePathname } from "next/navigation"
import ForumLayout from "./ForumLayout"
import SearchBar from "@/components/ui/SearchBar"

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const showSearchBar = !pathname.startsWith('/post/')

  if (isLoginPage) {
    return children
  }

  return (
    <ForumLayout>
      <div className="w-full justify-start space-y-6">
        {showSearchBar && <SearchBar />}
        {children}
      </div>
    </ForumLayout>
  )
}
