"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import FadeIn from "../animations/FadeIn"

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Growth Marketer at ScaleUp",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "ADmyBRAND's AI Suite changed the game for us. Our campaigns are smarter and faster.",
  },
  {
    name: "Ravi Mehta",
    role: "Founder at SparkTech",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Incredible tools and seamless integration. It's like having a full marketing team on autopilot.",
  },
  {
    name: "Isha Verma",
    role: "Marketing Head at CreativeNest",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "We saw a 40% increase in engagement within weeks. The AI insights are next-level.",
  },
]

export default function TestimonialsSection() {
  return (
    <FadeIn>
    <section className="w-full py-24 bg-neutral-950 text-white relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[10%] w-[300px] h-[300px] bg-[#7f5af0] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-[#2cb67d] opacity-10 rounded-full blur-[120px]" />
      </div>

      
        <div className="container mx-auto px-4 max-w-6xl space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
              Loved by Marketing Teams
            </h2>
            <p className="text-neutral-400 text-base md:text-lg">
              Hear what our users are saying about ADmyBRAND AI Suite.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-lg hover:border-[#7f5af0]/30 relative overflow-hidden"
              >
                {/* Testimonial glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7f5af0]/10 to-[#2cb67d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-8 relative z-10">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <Avatar className="border-2 border-[#7f5af0]/50 group-hover:border-[#7f5af0] transition-colors duration-500">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback className="bg-[#7f5af0]/10 text-white">{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </section>
    </FadeIn>
  )
}