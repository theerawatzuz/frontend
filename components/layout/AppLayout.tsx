import type React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface AppLayoutProps {
  children: React.ReactNode
  sidebarContent?: React.ReactNode
}

export default function AppLayout({ children, sidebarContent }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-grey-100">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        {sidebarContent || <Sidebar />}

        {/* Main Content */}
        <main className="flex-1 w-full p-4 md:p-6 pt-6 md:pt-8">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
