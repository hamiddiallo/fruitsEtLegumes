"use client"

export default function Juices() {
  const juices = [
    {
      name: "Mangue",
      image: "/mango-juice-fresh-tropical-drink.jpg",
    },
    {
      name: "Bissap",
      image: "/hibiscus-juice-fresh-red-drink.jpg",
    },
    {
      name: "Gingembre",
      image: "/ginger-juice-fresh-spiced-drink.jpg",
    },
    {
      name: "Orange",
      image: "/orange-juice-fresh-citrus.jpg",
    },
    {
      name: "Mixte",
      image: "/mixed-fruit-juice-colorful-tropical.jpg",
    },
    {
      name: "Détox",
      image: "/detox-juice-green-fresh-vegetables.jpg",
    },
  ]

  return (
    <section id="juices" className="section-padding bg-white">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-green mb-4">Jus & Smoothies</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            100% naturel – sans additifs – fraîchement pressé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {juices.map((juice, idx) => (
            <div key={juice.name} className="relative group cursor-pointer rounded-2xl overflow-hidden h-80">
              <img
                src={juice.image || "/placeholder.svg"}
                alt={juice.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 group-hover:from-black/80 transition-colors">
                <h3 className="text-white font-semibold text-xl">{juice.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
