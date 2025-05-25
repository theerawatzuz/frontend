"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would typically make an API call to authenticate
    console.log("Login attempt with username:", username)

    // Redirect to home page after successful login
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Heading */}
      <h2 className="text-white text-[28px] font-semibold leading-[34px]">Sign in</h2>

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Username Input */}
        <div className="w-full">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full h-11 bg-[#F9F9F9] border-[#DADADA] text-[#A0AFBA] placeholder:text-[#A0AFBA] focus:border-green-300 focus:ring-green-300 rounded-lg px-[14px] py-[10px] text-base leading-6"
            disabled={isLoading}
            required
          />
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          disabled={isLoading || !username.trim()}
          className="w-full h-10 bg-success hover:bg-success/90 border-success text-white font-semibold text-sm shadow-xs rounded-lg"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </div>
    </form>
  )
}
