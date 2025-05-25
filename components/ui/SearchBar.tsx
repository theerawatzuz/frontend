"use client";

import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CreatePostModal from "@/components/posts/CreatePostModal";
import CommunityDropdown from "./CommunityDropdown";

interface SearchBarProps {
  onFilterResult?: Dispatch<SetStateAction<any>>;
}

export default function SearchBar({ onFilterResult }: SearchBarProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSearchExpanded &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchExpanded(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchExpanded]);

  const handleMobileSearchClick = () => {
    setIsSearchExpanded(true);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Desktop Search */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-5 flex-1">
            <div className="relative flex-1 max-w-[535px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey-300" />
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search"
                className={`
                  pl-10 bg-transparent text-text h-10 transition-all duration-200
                  ${
                    isFocused || searchValue
                      ? "border-green-100   shadow-none"
                      : "border-green-100  focus:border-green-100"
                  }
                  ${searchValue ? "text-text font-medium" : "text-grey-300"}
                `}
              />
              {/* Highlight effect when typing */}
              {searchValue && (
                <div className="absolute inset-0 pointer-events-none rounded-md ring-2 ring-green-300/30 animate-pulse" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <CommunityDropdown />
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-success hover:bg-success/90 text-white px-4 font-semibold text-sm shadow-sm w-[105px] h-[40px]"
              >
                Create
                <Plus className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden flex items-center justify-between gap-1">
          {isSearchExpanded ? (
            <div
              className="relative flex-1 max-w-[535px]"
              ref={searchContainerRef}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey-300" />
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search"
                className={`
                  pl-10 bg-transparent text-text h-10 transition-all duration-200
                  ${
                    isFocused || searchValue
                      ? "border-green-100   shadow-none"
                      : "border-green-100  focus:border-green-100"
                  }
                  ${searchValue ? "text-text font-medium" : "text-grey-300"}
                `}
              />
              {/* Highlight effect when typing */}
              {searchValue && (
                <div className="absolute inset-0 pointer-events-none rounded-md ring-2 ring-green-300/30 animate-pulse" />
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1 flex-1 justify-between">
              <div>
                <Search
                  className="w-5 h-5 text-text flex-shrink-0"
                  onClick={handleMobileSearchClick}
                />
              </div>
              <div className="flex items-center gap-2">
                <CommunityDropdown isMobile />
                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="bg-success hover:bg-success/90 text-white h-10 px-4 font-semibold text-sm flex-shrink-0"
                >
                  Create
                  <Plus className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}
