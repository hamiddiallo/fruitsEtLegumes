"use client"

export default function Director() {
  return (
    <section className="section-padding bg-green/5">
      <div className="max-content">
        <h2 className="text-center text-green mb-4">Notre Directeur</h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          Découvrez la vision et la passion qui animent Fadidia Fruits & Légumes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Director Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md w-full">
              <img
                src="/allodi.png"
                alt="Directeur de Fadidia Fruits & Légumes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Director Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-green mb-2">Notre Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fadidia Fruits & Légumes est fondée sur la passion de fournir les meilleurs produits frais et naturels à
                Conakry, en Guinée. Nos fruits, légumes, jus naturels et salades sont sélectionnés avec soin pour
                garantir la qualité et la fraîcheur à chaque étape.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange mb-3">Nos Valeurs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/70">
                    <strong>Qualité Premium:</strong> Seulement les meilleurs produits
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/70">
                    <strong>Fraîcheur Garantie:</strong> Livraison rapide et produits frais
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/70">
                    <strong>Proximité:</strong> Au cœur de Conakry pour vous servir
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/70">
                    <strong>Engagement:</strong> Durabilité et respect de l'environnement
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-orange/10 rounded-2xl p-6 border-l-4 border-orange">
              <p className="text-foreground/80 italic">
                "Notre mission est simple: apporter la fraîcheur et la santé à chaque foyer de Conakry."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
