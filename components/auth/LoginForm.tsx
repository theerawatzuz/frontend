"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authService } from "@/lib/api-service"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) {
      setError("Username is required")
      return
    }
    
    setIsLoading(true)
    try {
      const response = await authService.login(username.trim())
      if (response.success && response.access_token) {
        localStorage.setItem('token', response.access_token)
        localStorage.setItem('user', JSON.stringify(response.user))
        router.push("/")
      }
    } catch (error: any) {
      console.error('Login failed:', error)
      setError(error.message || "Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
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

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

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
