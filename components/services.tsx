import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wind, Thermometer, Gauge, Settings, ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Wind,
      title: "Sistemas de Ventilação",
      description:
        "Projetos completos de ventilação natural e mecânica para ambientes industriais, garantindo renovação de ar e conforto térmico.",
      features: ["Ventilação Natural", "Ventilação Mecânica", "Exaustão Industrial"],
    },
    {
      icon: Thermometer,
      title: "Climatização Industrial",
      description:
        "Soluções integradas de climatização para grandes ambientes, com foco em eficiência energética e sustentabilidade.",
      features: ["Ar Condicionado Central", "Resfriamento Evaporativo", "Controle de Umidade"],
    },
    {
      icon: Gauge,
      title: "Distribuição de Ar",
      description:
        "Sistemas avançados de distribuição de ar em compartimentos, utilizando tecnologia escandinava de última geração.",
      features: ["Difusores Inteligentes", "Dutos Otimizados", "Controle de Fluxo"],
    },
    {
      icon: Settings,
      title: "Manutenção e Consultoria",
      description:
        "Serviços especializados de manutenção preventiva e consultoria técnica para otimização de sistemas existentes.",
      features: ["Manutenção Preventiva", "Auditoria Energética", "Treinamento Técnico"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Nossos Serviços</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluções Completas para Seu Projeto
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços em ventilação e climatização, desde o projeto até a implementação e
            manutenção.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                Saiba mais
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <Card className="p-8 md:p-12 bg-accent text-accent-foreground border-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
                Precisa de uma Solução Personalizada?
              </h3>
              <p className="text-accent-foreground/90 text-lg">
                Nossa equipe está pronta para desenvolver o projeto ideal para suas necessidades.
              </p>
            </div>
            <Button size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 shrink-0">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
