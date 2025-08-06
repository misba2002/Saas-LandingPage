"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import FadeIn from "../animations/FadeIn";

interface Particle {
  width: number
  height: number
  top: number
  left: number
  animationDuration: number
  animationDelay: number
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 10,
      animationDelay: Math.random() * 5,
    }))
    setParticles(generated)
  }, [])

  return ( 
    <FadeIn>
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white px-6 text-center overflow-hidden">
      
      {/* Gradient Background Elements */}
      <div className="absolute top-[-120px] left-[-120px] w-[480px] h-[480px] bg-[#7f5af0] opacity-20 rounded-full blur-[150px] pointer-events-none animate-float" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-[#2cb67d] opacity-20 rounded-full blur-[150px] pointer-events-none animate-float delay-1000" />
      <div className="absolute top-1/4 right-[10%] w-[200px] h-[200px] bg-[#2cb67d] opacity-10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-[15%] w-[150px] h-[150px] bg-[#7f5af0] opacity-10 rounded-full blur-[60px] pointer-events-none animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
      
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white">
          Supercharge Your Brand <br className="hidden md:block" />
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">AI</span>
        </h1>
        
    

        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          ADmyBRAND AI Suite offers smart tools for marketing automation, growth analytics, and effortless branding that scales with your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-6 text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white hover:from-[#6f4ad0] hover:to-[#1ca56d] hover:shadow-lg hover:shadow-[#7f5af0]/30 transform hover:-translate-y-1">
            Get Started - It's Free
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg font-medium border-white/20 hover:bg-white/5 hover:border-white/40 transition-all text-[#7f5af0] hover:text-[#7f5af0] duration-300">
            See How It Works
          </Button>
        </div>
      </div>

      {/* Particle layer (client-only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              animation: `float ${p.animationDuration}s linear infinite`,
              animationDelay: `${p.animationDelay}s`,
            }}
          />
        ))}
      </div>
      
    </section>
    </FadeIn>
  
  )
}
