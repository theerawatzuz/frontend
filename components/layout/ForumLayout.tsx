import type React from "react"
import AppLayout from "./AppLayout"
import Sidebar from "./Sidebar"

interface ForumLayoutProps {
  children: React.ReactNode
}

export default function ForumLayout({ children }: ForumLayoutProps) {
  return <AppLayout sidebarContent={<Sidebar />}>{children}</AppLayout>
}
