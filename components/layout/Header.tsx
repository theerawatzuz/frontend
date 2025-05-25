"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user") && localStorage.getItem("token")
    if (storedUserInfo) {
      setUserInfo(JSON.parse(localStorage.getItem("user") || ""))
    } else {
      setUserInfo(null)
    }
  }, [])


  return (
    <>
      <header className="bg-green-500 text-white relative z-[50]">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center px-8 py-2">
          <h1 className="text-xl font-normal italic text-white" style={{ fontFamily: "Castoro, serif" }}>
            a Board
          </h1>
          {userInfo ? (
            <div className="flex items-center gap-4">
               <span className="text-white font-medium text-sm">{userInfo?.fullName}</span>
                   <Avatar className="w-10 h-10 ring-1 ring-green-100">
                    <AvatarImage src={userInfo?.avatar || "/placeholder.svg"} alt={userInfo?.author} />
                    <AvatarFallback className="bg-grey-100 text-grey-300 font-medium text-sm">
                      {userInfo?.author}
                    </AvatarFallback>
                  </Avatar>
            </div>
          ) : (

          <Link href="/login">
            <Button className="w-[105px] h-[40px] bg-success hover:bg-success/90 text-white px-4 py-2 text-sm font-semibold shadow-sm">
              Sign In
            </Button>
          </Link>
          )}
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
        userInfo={userInfo}
      />
    </>
  )
}
