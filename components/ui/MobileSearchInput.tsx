"use client"

import { useState } from "react"
import { Search } from "lucide-react"

interface MobileSearchInputProps {
  placeholder?: string
  className?: string
}

export default function MobileSearchInput({ placeholder = "Search", className = "" }: MobileSearchInputProps) {
  const [searchValue, setSearchValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {/* Search Icon */}
      <div className="absolute left-[14px] top-1/2 transform -translate-y-1/2 z-10">
        <Search className="w-5 h-5 text-[#5B5B5B]" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full h-10 pl-12 pr-4 rounded-lg bg-white transition-all duration-200
          border border-green-100 text-text placeholder:text-grey-300
          font-normal text-base leading-6
          ${isFocused || searchValue ? "border-green-300 ring-2 ring-green-300/20 shadow-sm" : "border-green-100"}
          ${searchValue ? "text-text font-medium" : ""}
          focus:outline-none focus:border-green-300 focus:ring-2 focus:ring-green-300/20
        `}
      />

      {/* Highlight Effect */}
      {searchValue && (
        <div className="absolute inset-0 pointer-events-none rounded-lg ring-2 ring-green-300/30 animate-pulse" />
      )}

      {/* Typing Indicator */}
      {searchValue && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  )
}
