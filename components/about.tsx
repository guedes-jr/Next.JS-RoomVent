import { Card } from "@/components/ui/card"
import { Award, Users, Zap, Globe } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, value: "25+", label: "Anos de Experiência" },
    { icon: Users, value: "500+", label: "Projetos Concluídos" },
    { icon: Zap, value: "98%", label: "Satisfação dos Clientes" },
    { icon: Globe, value: "15+", label: "Países Atendidos" },
  ]

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/30">
              <img
                src="/assets/img/equipe2.jpg"
                alt="Equipe Roomvent"
                className="w-full h-full object-cover object-left md:object-center"
              />
            </div>
          </div>
          {/* Right Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Sobre Nós</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Excelência em Ventilação e Climatização
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Roomvent Brazil é referência em soluções de ventilação e distribuição de ar para ambientes industriais e
              comerciais. Com tecnologia escandinava de ponta e expertise local, desenvolvemos projetos customizados que
              garantem máxima eficiência energética e conforto térmico.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe de engenheiros especializados trabalha em parceria com as principais instituições técnicas
              internacionais, trazendo inovação e qualidade para cada projeto.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 border-border/50 hover:border-primary/50 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
