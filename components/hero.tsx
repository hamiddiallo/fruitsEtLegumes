"use client"

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/fresh-fruits-and-vegetables-market-stall-colorful-.jpg"
          alt="Marché de fruits et légumes frais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-content px-4 md:px-8 py-24 md:py-32 text-white text-center flex flex-col items-center justify-center min-h-screen">
        <h1 className="mb-6 text-white font-bold text-balance">La fraîcheur au cœur de votre assiette</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90 text-pretty">
          Découvrez nos fruits et légumes sélectionnés, jus naturels et smoothies préparés avec amour
        </p>
        <button className="btn-secondary">Découvrir nos produits</button>
      </div>
    </section>
  )
}
