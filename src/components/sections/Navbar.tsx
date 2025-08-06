"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeIn from "../animations/FadeIn"

export default function Navbar() {
  return (
    <FadeIn>
    <header className="w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg sticky top-0 z-50">
      
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo or Brand Name */}
          <Link href="/" className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
            ADmyBRAND
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm text-neutral-400">
            <Link href="#features" className="hover:text-[#7f5af0] transition-colors duration-300">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-[#7f5af0] transition-colors duration-300">
              Pricing
            </Link>
            <Link href="#cta" className="hover:text-[#7f5af0] transition-colors duration-300">
              Get Started
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              variant="default"
              className="bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] hover:from-[#6f4ad0] hover:to-[#1ca56d] hover:shadow-[0_0_15px_-3px_rgba(127,90,240,0.3)] transition-all duration-300"
            >
              Sign In
            </Button>
          </div>
        </div>
      
    </header>
    </FadeIn>
  )
}