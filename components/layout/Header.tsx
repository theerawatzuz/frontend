"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-green-500 text-white relative z-50">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-normal italic text-white" style={{ fontFamily: "Castoro, serif" }}>
            a Board
          </h1>
          <Link href="/login">
            <Button className="bg-success hover:bg-success/90 border-success text-white px-4 py-2 text-sm font-semibold shadow-sm">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 py-4 h-[72px] border-b border-grey-100">
          <h1 className="text-xl font-normal italic text-white" style={{ fontFamily: "Castoro, serif" }}>
            a Board
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 w-10 h-10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu Content */}
          <div className="absolute top-[72px] left-4 right-4 bg-grey-100 rounded-t-3xl p-5 space-y-5">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute left-[14px] top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#5B5B5B"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 pl-12 pr-4 border border-green-100 rounded-lg bg-white text-text placeholder:text-grey-300 focus:outline-none focus:border-green-300 focus:ring-2 focus:ring-green-300/20"
              />
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-text font-medium text-base hover:text-green-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/my-blog"
                className="block text-text font-medium text-base hover:text-green-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Blog
              </Link>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-success hover:bg-success/90 text-white font-semibold">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
