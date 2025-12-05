"use client"

export default function About() {
  const values = ["Fraîcheur", "Qualité", "Naturalité", "Hygiène", "Local"]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-green mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Fadidia Fruits & Légumes est votre partenaire de confiance pour des produits 100% naturels, frais et
            savoureux. Nous sélectionnons chaque jour les meilleurs fruits et légumes pour vous offrir une qualité
            exceptionnelle.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((value) => (
            <div key={value} className="bg-gray-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌿</span>
              </div>
              <p className="font-semibold text-green">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
