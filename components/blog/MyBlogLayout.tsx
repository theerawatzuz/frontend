import type React from "react"
import AppLayout from "@/components/layout/AppLayout"
import MyBlogSidebar from "./MyBlogSidebar"

interface MyBlogLayoutProps {
  children: React.ReactNode
}

export default function MyBlogLayout({ children }: MyBlogLayoutProps) {
  return <AppLayout sidebarContent={<MyBlogSidebar />}>{children}</AppLayout>
}
