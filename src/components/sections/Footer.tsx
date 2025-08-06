'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import FadeIn from "../animations/FadeIn"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <FadeIn>
    <footer className="border-t border-white/10 bg-neutral-950 py-12  relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7f5af0]/50 to-transparent" />
      </div>

      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 relative z-10">
          <p className="text-sm text-neutral-400 text-center md:text-left">
            &copy; {year ?? "2025"} ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-[#7f5af0] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-[#7f5af0] transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-[#7f5af0] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      
    </footer>
    </FadeIn>
  )
}