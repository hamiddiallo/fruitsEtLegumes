"use client"

export default function Products() {
  const products = [
    {
      name: "Fruits frais",
      description: "Sélection variée de fruits mûrs et savoureux",
      image: "/fresh-colorful-fruits-mango-apple-banana-orange.jpg",
      icon: "🍎",
    },
    {
      name: "Légumes variés",
      description: "Légumes de saison cultivés localement",
      image: "/fresh-vegetables-carrots-lettuce-tomatoes-peppers.jpg",
      icon: "🥕",
    },
    {
      name: "Jus naturels",
      description: "Mangue, bissap, gingembre - fraîchement pressé",
      image: "/natural-fresh-juices-mango-ginger-colorful-drinks.jpg",
      icon: "🧃",
    },
    {
      name: "Smoothies",
      description: "Préparations délicieuses et énergétiques",
      image: "/colorful-fruit-smoothies-fresh-blended-drinks.jpg",
      icon: "🥤",
    },
    {
      name: "Salades",
      description: "Préparations fraîches et saines",
      image: "/fresh-colorful-salads-healthy-bowls-vegetables.jpg",
      icon: "🥗",
    },
    {
      name: "Produits dérivés",
      description: "Tout 100% naturel et sans additifs",
      image: "/natural-food-products-dried-fruits-preserves.jpg",
      icon: "✨",
    },
  ]

  return (
    <section id="products" className="section-padding bg-gray-light">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-green mb-4">Nos Produits</h2>
          <p className="text-lg text-foreground/70">Une gamme complète de produits frais et naturels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gray">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{product.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
