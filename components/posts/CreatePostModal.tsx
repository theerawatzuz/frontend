"use client"

import type React from "react"

import { useState } from "react"
import { X, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { categories } from "@/lib/data"

interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCategory || !title.trim() || !content.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would typically make an API call to create the post
    console.log("Creating post:", { category: selectedCategory, title, content })

    // Reset form and close modal
    setSelectedCategory("")
    setTitle("")
    setContent("")
    setIsSubmitting(false)
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleCancel = () => {
    setSelectedCategory("")
    setTitle("")
    setContent("")
    setIsDropdownOpen(false)
    onClose()
  }

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setIsDropdownOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      {/* Desktop Modal */}
      <div className="hidden md:block bg-white rounded-xl p-8 w-full max-w-[685px] relative">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-6 right-6 text-green-500 hover:bg-green-100/50 w-6 h-6"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-[28px] font-semibold text-text leading-6">Create Post</h2>

          <div className="space-y-4 relative">
            {/* Category Dropdown */}
            <div className="relative">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-[195px] h-10 justify-between border-success text-success hover:bg-success/5 hover:border-success/80 font-semibold text-sm"
                disabled={isSubmitting}
              >
                {selectedCategory || "Select Category"}
                <ChevronDown className="w-5 h-5" />
              </Button>

              {/* Desktop Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-12 left-0 w-[320px] bg-white border border-[#DADADA] rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleCategorySelect(category.name)}
                        className={`w-full flex items-center justify-between px-[14px] py-[10px] text-left hover:bg-gray-50 transition-colors ${
                          selectedCategory === category.name ? "bg-green-100" : ""
                        }`}
                      >
                        <span className="text-[#1C1C1C] font-medium text-base">{category.name}</span>
                        {selectedCategory === category.name && <Check className="w-5 h-5 text-[#4A4A4A]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Title Input */}
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-[625px] h-11 border-[#DADADA] focus:border-green-300 focus:ring-green-300"
              disabled={isSubmitting}
              required
            />

            {/* Content Textarea */}
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content..."
              className="w-[625px] h-[234px] resize-none border-[#DADADA] focus:border-green-300 focus:ring-green-300"
              disabled={isSubmitting}
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="border-success text-success hover:bg-success/5 hover:border-success/80"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !selectedCategory || !title.trim() || !content.trim()}
              className="bg-success hover:bg-success/90 text-white"
            >
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </div>
        </form>
      </div>

      {/* Mobile Modal */}
      <div className="md:hidden bg-white rounded-xl p-6 w-full max-w-[343px] relative">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-green-500 hover:bg-green-100/50 w-6 h-6"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-2xl font-semibold text-text leading-6">Create Post</h2>

          <div className="space-y-4 relative">
            {/* Category Dropdown */}
            <div className="relative">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-10 justify-between border-success text-success hover:bg-success/5 hover:border-success/80 font-semibold text-sm"
                disabled={isSubmitting}
              >
                {selectedCategory || "Select Category"}
                <ChevronDown className="w-5 h-5" />
              </Button>

              {/* Mobile Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-12 left-0 w-[311px] bg-white border border-[#DADADA] rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleCategorySelect(category.name)}
                        className={`w-full flex items-center justify-between px-[14px] py-[10px] text-left hover:bg-gray-50 transition-colors ${
                          selectedCategory === category.name ? "bg-green-100" : ""
                        }`}
                      >
                        <span className="text-[#1C1C1C] font-medium text-base">{category.name}</span>
                        {selectedCategory === category.name && <Check className="w-5 h-5 text-[#4A4A4A]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Title Input */}
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full h-11 border-[#DADADA] focus:border-green-300 focus:ring-green-300"
              disabled={isSubmitting}
              required
            />

            {/* Content Textarea */}
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content..."
              className="w-full h-[234px] resize-none border-[#DADADA] focus:border-green-300 focus:ring-green-300"
              disabled={isSubmitting}
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="w-full border-success text-success hover:bg-success/5 hover:border-success/80"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !selectedCategory || !title.trim() || !content.trim()}
              className="w-full bg-success hover:bg-success/90 text-white"
            >
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </div>
        </form>

        {/* Click outside to close dropdown */}
        {isDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />}
      </div>

      {/* Click outside to close dropdown for desktop */}
      {isDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />}
    </div>
  )
}
