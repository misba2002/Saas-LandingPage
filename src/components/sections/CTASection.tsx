"use client"

import { Button } from "@/components/ui/button";
import FadeIn from "../animations/FadeIn";

export default function CTASection() {
  return (
    <FadeIn>
          <section className="w-full py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#7f5af0] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2cb67d] opacity-10 rounded-full blur-[180px]" />
      </div>

      
        <div className="container max-w-3xl mx-auto px-4 text-center rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-12 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
            Ready to supercharge your marketing?
          </h2>
          <p className="text-lg text-neutral-400">
            Join thousands of marketers using <span className="font-semibold text-[#7f5af0]">ADmyBRAND AI Suite</span> to grow smarter and faster.
          </p>
          <Button 
            size="lg" 
            className="text-base px-8 py-6 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] hover:from-[#6f4ad0] hover:to-[#1ca56d] hover:shadow-lg hover:shadow-[#7f5af0]/30 transition-all duration-300"
          >
            Get Started Now
          </Button>
        </div>
      
    </section>
    </FadeIn>

  )
}