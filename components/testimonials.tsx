"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const defaultTestimonials = [
  {
    id: 1,
    name: "Marie Diallo",
    role: "Cliente régulière",
    content: "Les fruits sont toujours frais et de excellente qualité. Je recommande Fadidia à tous mes amis!",
    rating: 5,
    avatar: "/diverse-woman-avatar.png",
  },
  {
    id: 2,
    name: "Ibrahim Sylla",
    role: "Restaurant à Conakry",
    content: "Livraison rapide et fiable. Les produits sont impeccables pour nos salades et jus frais.",
    rating: 5,
    avatar: "/man-avatar.png",
  },
  {
    id: 3,
    name: "Awa Bah",
    role: "Gérant de boutique",
    content: "Fadidia offre les meilleurs légumes biologiques de Conakry. Mes clients reviennent toujours.",
    rating: 5,
    avatar: "/diverse-woman-avatar.png",
  },
  {
    id: 4,
    name: "Moussa Kone",
    role: "Café local",
    content: "Les smoothies que je prépare avec vos fruits sont succulents. Merci pour la qualité!",
    rating: 5,
    avatar: "/man-avatar.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState(defaultTestimonials)
  const [formData, setFormData] = useState({ name: "", role: "", content: "", rating: 5 })
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("testimonials")
    if (saved) {
      try {
        const combined = [...defaultTestimonials, ...JSON.parse(saved)]
        setTestimonials(combined)
      } catch (e) {
        setTestimonials(defaultTestimonials)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTestimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      role: formData.role,
      content: formData.content,
      rating: formData.rating,
      avatar: `/placeholder.svg?height=64&width=64&query=avatar`,
    }

    const updatedTestimonials = [...testimonials, newTestimonial]
    setTestimonials(updatedTestimonials)

    // Save to localStorage
    const userTestimonials = updatedTestimonials.slice(defaultTestimonials.length)
    localStorage.setItem("testimonials", JSON.stringify(userTestimonials))

    setFormData({ name: "", role: "", content: "", rating: 5 })
    setSubmitted(true)
    setShowForm(false)
    setTimeout(() => setSubmitted(false), 3000)
    setCurrentIndex(updatedTestimonials.length - 1)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="pt-20 pb-10 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Découvrez pourquoi nos clients nous font confiance
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={24} className="fill-primary text-primary" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-xl text-foreground mb-8 leading-relaxed italic">"{current.content}"</p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={current.avatar || "/placeholder.svg"}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h4 className="font-semibold text-lg text-foreground">{current.name}</h4>
              <p className="text-muted-foreground">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            aria-label="Avis précédent"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                aria-label={`Voir avis ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            aria-label="Avis suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-muted-foreground mb-8 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </p>

        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-800">Merci pour votre avis! Il a été ajouté avec succès.</p>
          </div>
        )}

        <div className="flex justify-center mb-8">
          <Button onClick={() => setShowForm(!showForm)} className="bg-primary hover:bg-primary/90 text-white">
            {showForm ? "Annuler" : "Laisser votre avis"}
          </Button>
        </div>

        {showForm && (
          <Card className="p-8 bg-white mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Partagez votre expérience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Votre nom</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Votre rôle</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ex: Cliente, Restaurant..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Votre note</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={star <= formData.rating ? "fill-primary text-primary" : "text-primary/30"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Votre avis</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Partagez votre expérience avec Fadidia..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={20} />
                Soumettre votre avis
              </button>
            </form>
          </Card>
        )}
      </div>
    </section>
  )
}
