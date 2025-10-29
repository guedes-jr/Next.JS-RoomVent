import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { InstitutionalVideo } from "@/components/institutional-video"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <InstitutionalVideo />
      <Partners />
      <Footer />
    </main>
  )
}
