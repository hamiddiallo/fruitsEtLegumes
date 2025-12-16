import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Juices from "@/components/juices"
import Commitments from "@/components/commitments"
import Director from "@/components/director"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import SocialFloatingButton from "@/components/social-floating-button"

export default function Home() {
  return (
    <main className="smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Products />
      <Juices />
      <Commitments />
      <Director />
      <Testimonials />
      <SocialFloatingButton />
      <Footer />
    </main>
  )
}
