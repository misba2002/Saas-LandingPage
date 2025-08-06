'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FadeIn from "../animations/FadeIn"

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "Perfect to get started and explore.",
    features: ["1 Project", "Basic Analytics", "Email Support"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    description: "For growing teams and creators.",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large orgs.",
    features: ["Dedicated Manager", "Custom Integrations", "24/7 Support"],
  },
]

export default function PricingSection() {
  return (
    <FadeIn>
    <section className="relative w-full py-24 bg-neutral-950 text-white overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[480px] h-[480px] bg-[#7f5af0] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-[#2cb67d] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-[#2cb67d] opacity-5 rounded-full blur-[100px] transform -translate-x-1/2" />
      </div>

      
        <div className="container px-4 mx-auto text-center space-y-10 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-neutral-400 text-base md:text-lg">
              Choose the plan that fits your needs. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
              <Card
                key={plan.title}
                className={`flex flex-col justify-between border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden ${
                  plan.highlight
                    ? "scale-[1.02] border-[#7f5af0]/50 shadow-[0_0_30px_-10px_rgba(127,90,240,0.5)]"
                    : "hover:border-[#7f5af0]/30"
                }`}
              >
                {/* Highlight glow effect */}
                {plan.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7f5af0]/10 to-[#2cb67d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <CardHeader className="space-y-2 pt-8 px-8">
                  <CardTitle className="text-2xl font-semibold text-white">{plan.title}</CardTitle>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">
                    {plan.price}
                  </p>
                  <p className="text-sm text-neutral-400">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-1 px-8 pb-8">
                  <ul className="text-left space-y-3 mt-6 mb-8 text-sm text-neutral-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[#2cb67d]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className={`w-full mt-auto ${
                      plan.highlight 
                        ? "bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] hover:from-[#6f4ad0] hover:to-[#1ca56d]"
                        : "hover:border-[#7f5af0] hover:text-[#7f5af0]"
                    }`}
                  >
                    {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      
    </section>
    </FadeIn>
  )
}