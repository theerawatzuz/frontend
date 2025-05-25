"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const communityOptions = ["History", "Art", "Tech", "Science", "Exercise", "Politics"]

interface CommunityDropdownProps {
  isMobile?: boolean
}

export default function CommunityDropdown({ isMobile = false }: CommunityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Art")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Community Button */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${isMobile ? "h-10 px-[14px]" : "h-10 px-[14px]"} 
          bg-transparent border-transparent text-text font-semibold text-sm 
          flex items-center gap-[5px] shadow-xs
          ${isMobile ? "w-[128px]" : "w-[128px]"}
        `}
      >
        <span className="text-sm font-semibold leading-5">Community</span>
        <ChevronDown className="w-5 h-5" />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          {isMobile && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

          {/* Dropdown Content */}
          <div
            className={`
              absolute z-50 bg-white border border-[#DADADA] rounded-lg shadow-lg
              ${isMobile ? "w-[202px] h-[316px] right-0 top-12 mr-2" : "w-[320px] h-[316px] right-0 top-12"}
            `}
          >
            <div className="py-1 h-full overflow-y-auto">
              {communityOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`
                    w-full h-11 px-[14px] py-[10px] flex items-center justify-between
                    text-left hover:bg-gray-50 transition-colors
                    ${selectedOption === option ? "bg-green-100" : ""}
                  `}
                >
                  <span className="text-[#1C1C1C] font-medium text-base leading-6">{option}</span>
                  {selectedOption === option && <Check className="w-5 h-5 text-[#4A4A4A]" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
