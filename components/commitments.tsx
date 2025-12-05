"use client"

import { Leaf, Truck, Shield, Sparkles } from "lucide-react"

export default function Commitments() {
  const commitments = [
    {
      icon: Leaf,
      title: "Produits frais",
      description: "Sélectionnés chaque jour pour vous",
    },
    {
      icon: Truck,
      title: "Livraison possible",
      description: "Service de livraison à domicile disponible",
    },
    {
      icon: Shield,
      title: "Hygiène assurée",
      description: "Respect des normes sanitaires strictes",
    },
    {
      icon: Sparkles,
      title: "100% naturel",
      description: "Sans additifs ni conservateurs",
    },
  ]

  return (
    <section className="section-padding bg-gray-light">
      <div className="max-content">
        <h2 className="text-center text-green mb-12">Nos Engagements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment) => {
            const Icon = commitment.icon
            return (
              <div
                key={commitment.title}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{commitment.title}</h3>
                <p className="text-sm text-foreground/70">{commitment.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
