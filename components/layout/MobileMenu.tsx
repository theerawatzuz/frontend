"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div 
        className={cn(
          "fixed top-0 right-0 w-[280px] h-screen bg-green-500 z-[70] transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="h-[72px] flex items-center px-6">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#2d463d] rounded-lg"
          >
         <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.10645 7.48804L17.1064 7.48804M17.1064 7.48804L11.1064 1.48804M17.1064 7.48804L11.1064 13.488" stroke="#D8E9E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="py-3 px-2 space-y-2">
          <nav className="px-4 space-y-1">
            <Link 
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-green-100 rounded-md hover:bg-[#2d463d]",
                pathname === "/" ? "bg-[#2d463d] font-extrabold" : "font-medium"
              )}
            >
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.26123 16.1804H14.2612M9.27893 1.94442L2.49662 7.21954C2.04325 7.57217 1.81657 7.74848 1.65326 7.96928C1.5086 8.16486 1.40083 8.3852 1.33526 8.61947C1.26123 8.88394 1.26123 9.17112 1.26123 9.74547V16.9804C1.26123 18.1005 1.26123 18.6606 1.47922 19.0884C1.67096 19.4647 1.97693 19.7707 2.35325 19.9624C2.78107 20.1804 3.34113 20.1804 4.46123 20.1804H16.0612C17.1813 20.1804 17.7414 20.1804 18.1692 19.9624C18.5455 19.7707 18.8515 19.4647 19.0432 19.0884C19.2612 18.6606 19.2612 18.1005 19.2612 16.9804V9.74547C19.2612 9.17112 19.2612 8.88394 19.1872 8.61947C19.1216 8.3852 19.0139 8.16486 18.8692 7.96928C18.7059 7.74848 18.4792 7.57217 18.0258 7.21955L11.2435 1.94442C10.8922 1.67117 10.7165 1.53454 10.5226 1.48202C10.3514 1.43568 10.171 1.43568 9.99988 1.48202C9.80591 1.53454 9.63025 1.67117 9.27893 1.94442Z" stroke="#BBC2C0"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>


              <span>Home</span>
            </Link>
            
            <Link 
              href="/my-blog"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-green-100 rounded-md hover:bg-[#2d463d]",
                pathname === "/my-blog" ? "bg-[#2d463d] font-extrabold" : "font-medium"
              )}
            >
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1064 3.48802H5.90645C4.22629 3.48802 3.38621 3.48802 2.74447 3.815C2.17999 4.10262 1.72105 4.56156 1.43343 5.12605C1.10645 5.76778 1.10645 6.60786 1.10645 8.28802V16.688C1.10645 18.3682 1.10645 19.2083 1.43343 19.85C1.72105 20.4145 2.17999 20.8734 2.74447 21.161C3.38621 21.488 4.22629 21.488 5.90645 21.488H14.3064C15.9866 21.488 16.8267 21.488 17.4684 21.161C18.0329 20.8734 18.4918 20.4145 18.7795 19.85C19.1064 19.2083 19.1064 18.3682 19.1064 16.688V12.488M7.10642 15.488H8.78096C9.27014 15.488 9.51473 15.488 9.74491 15.4328C9.94898 15.3838 10.1441 15.303 10.323 15.1933C10.5248 15.0696 10.6978 14.8967 11.0437 14.5508L20.6064 4.98802C21.4349 4.15959 21.4349 2.81645 20.6064 1.98802C19.778 1.15959 18.4349 1.15959 17.6064 1.98802L8.04368 11.5508C7.69778 11.8967 7.52482 12.0696 7.40114 12.2715C7.29148 12.4504 7.21067 12.6455 7.16168 12.8496C7.10642 13.0797 7.10642 13.3243 7.10642 13.8135V15.488Z" stroke="#BBC2C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>My Blog</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
