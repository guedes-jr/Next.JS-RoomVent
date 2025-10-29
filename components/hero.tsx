import { Button } from "@/components/ui/button"
import { ArrowRight, Wind } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent via-accent/95 to-accent/80" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Wind className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Especialistas em Ventilação Industrial</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
            Soluções Avançadas em Climatização
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Tecnologia de ponta em sistemas de ventilação e distribuição de ar para ambientes industriais e comerciais,
            garantindo conforto e eficiência energética.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
              <Link href="/portfolio">
                Ver Portfólio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
