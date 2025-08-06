"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FadeIn from "../animations/FadeIn"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <FadeIn>
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#7f5af0] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#2cb67d] opacity-10 rounded-full blur-[100px]" />
      </div>

      
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
            Stay in the loop
          </h2>
          <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
            Subscribe to our newsletter and be the first to know about new features, updates, and special offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full sm:w-96 h-12 bg-white/5 border-white/20 backdrop-blur-sm focus:border-[#7f5af0] focus:ring-[#7f5af0] text-white placeholder:text-neutral-400 transition-all duration-300 hover:border-white/40"
            />
            <Button 
              type="submit" 
              className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] hover:from-[#6f4ad0] hover:to-[#1ca56d] transition-all duration-300 hover:shadow-lg hover:shadow-[#7f5af0]/30"
            >
              Subscribe
            </Button>
          </form>
        </div>
      
    </section>
    </FadeIn>
  )
}