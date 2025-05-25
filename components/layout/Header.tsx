"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-green-500 text-white relative z-[50]">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center px-8 py-2">
          <h1 className="text-xl font-normal italic text-white" style={{ fontFamily: "Castoro, serif" }}>
            a Board
          </h1>
          <Link href="/login">
            <Button className="w-[105px] h-[40px] bg-success hover:bg-success/90 text-white px-4 py-2 text-sm font-semibold shadow-sm">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <div>
          <h1 className="text-xl font-normal italic text-white mx-auto" style={{ fontFamily: "Castoro, serif" }}>
            a Board
          </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 w-10 h-10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}
