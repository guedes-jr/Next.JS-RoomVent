import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CongressosPage() {
  const congressos = [
    {
      title: "ROOMVENT 2024",
      location: "Copenhagen, Dinamarca",
      date: "Junho 2024",
      description: "Conferência Internacional sobre Distribuição de Ar em Compartimentos",
      participants: "250+ participantes",
      topics: ["Ventilação Natural", "Qualidade do Ar Interior", "Eficiência Energética"],
    },
    {
      title: "SCANVAC Annual Meeting",
      location: "Stockholm, Suécia",
      date: "Setembro 2023",
      description: "Encontro anual das sociedades escandinavas de HVAC",
      participants: "180+ participantes",
      topics: ["Sistemas Híbridos", "Sustentabilidade", "Normas Técnicas"],
    },
    {
      title: "ASHRAE Winter Conference",
      location: "Chicago, EUA",
      date: "Janeiro 2023",
      description: "Conferência de inverno da ASHRAE com foco em inovação",
      participants: "500+ participantes",
      topics: ["Smart Buildings", "IoT em HVAC", "Refrigerantes Naturais"],
    },
    {
      title: "REHVA Congress",
      location: "Brussels, Bélgica",
      date: "Maio 2022",
      description: "Congresso europeu de ventilação e ar condicionado",
      participants: "300+ participantes",
      topics: ["Ventilação Pós-Pandemia", "Filtração de Ar", "Conforto Térmico"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Eventos Internacionais</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Congressos e Conferências
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Participação ativa nos principais eventos internacionais de ventilação e climatização, mantendo-nos
              atualizados com as últimas tendências e tecnologias do setor.
            </p>
          </div>
        </div>
      </section>

      {/* Congressos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {congressos.map((congresso, index) => (
              <Card
                key={index}
                className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{congresso.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{congresso.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{congresso.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{congresso.participants}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{congresso.description}</p>

                <div className="flex flex-wrap gap-2">
                  {congresso.topics.map((topic, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/contato">Saiba Mais Sobre Nossa Participação</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
