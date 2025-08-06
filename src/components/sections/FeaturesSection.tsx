'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import FadeIn from "../animations/FadeIn"

const features = [
  {
    icon: <Icons.zap className="h-5 w-5 text-white" />,
    title: "Fast Performance",
    description: "Blazing fast speeds with optimized delivery.",
  },
  {
    icon: <Icons.shieldCheck className="h-5 w-5 text-white" />,
    title: "Secure by Default",
    description: "Security-first architecture ensures peace of mind.",
  },
  {
    icon: <Icons.robot className="h-5 w-5 text-white" />,
    title: "AI Automation",
    description: "Automate repetitive tasks with smart AI.",
  },
  {
    icon: <Icons.layers className="h-5 w-5 text-white" />,
    title: "Modular System",
    description: "Composable design for custom workflows.",
  },
  {
    icon: <Icons.database className="h-5 w-5 text-white" />,
    title: "Cloud Storage",
    description: "Secure and scalable cloud data access.",
  },
  {
    icon: <Icons.user className="h-5 w-5 text-white" />,
    title: "Team Collaboration",
    description: "Real-time teamwork and feedback tools.",
  },
]

export default function FeaturesSection() {
  return (
    <FadeIn>
    <section className="w-full py-24 bg-neutral-950 text-white relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[480px] h-[480px] bg-[#7f5af0] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-[#2cb67d] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-[10%] w-[200px] h-[200px] bg-[#2cb67d] opacity-5 rounded-full blur-[80px]" />
      </div>

      
        <div className="container px-4 mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
              Powerful Features
            </h2>
            <p className="mt-4 text-neutral-300 text-base md:text-lg">
              Everything you need to streamline your marketing workflows with AI.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="group bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-xl hover:border-[#7f5af0]/30 relative overflow-hidden"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7f5af0]/10 to-[#2cb67d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-6 flex flex-col items-start gap-4 relative z-10">
                  <div className="p-3 rounded-md bg-gradient-to-tr from-[#7f5af0] to-[#2cb67d] shadow-lg group-hover:shadow-[0_0_15px_-3px_rgba(127,90,240,0.5)] transition-shadow duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-neutral-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      
    </section>
    </FadeIn>
  )
}