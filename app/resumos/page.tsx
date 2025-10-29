import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { FileText, Download, Calendar, Tag, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumosPage() {
  const depoimentos = [
    {
      name: "Carlos Mendes",
      company: "Indústria Metalúrgica XYZ",
      role: "Gerente de Facilities",
      content:
        "A Roomvent Brazil transformou completamente nosso ambiente industrial. A redução no consumo energético foi de 35% e o conforto térmico melhorou significativamente.",
      rating: 5,
    },
    {
      name: "Ana Paula Silva",
      company: "Hospital São Lucas",
      role: "Diretora de Infraestrutura",
      content:
        "Profissionalismo exemplar. O sistema de ventilação instalado nas salas cirúrgicas atende todos os requisitos técnicos e normativos com excelência.",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      company: "Shopping Center Metropolitano",
      role: "Diretor de Operações",
      content:
        "Projeto executado com precisão e dentro do prazo. A qualidade do ar no shopping melhorou consideravelmente, refletindo positivamente na satisfação dos lojistas.",
      rating: 5,
    },
  ]

  const trabalhos = [
    {
      title: "Análise Comparativa de Sistemas de Ventilação Natural e Mecânica em Edifícios Comerciais",
      authors: "Silva, J.P.; Santos, M.A.; Oliveira, R.C.",
      event: "ROOMVENT 2024",
      date: "Junho 2024",
      category: "Ventilação Natural",
      abstract:
        "Este estudo apresenta uma análise detalhada comparando a eficiência energética e qualidade do ar interior entre sistemas de ventilação natural e mecânica em edifícios comerciais de médio porte.",
    },
    {
      title: "Otimização de Difusores de Ar para Ambientes Industriais de Alta Densidade Térmica",
      authors: "Ferreira, A.L.; Costa, P.R.",
      event: "SCANVAC Annual Meeting 2023",
      date: "Setembro 2023",
      category: "Distribuição de Ar",
      abstract:
        "Desenvolvimento de metodologia para otimização de difusores de ar em ambientes industriais com alta carga térmica, resultando em redução de 30% no consumo energético.",
    },
    {
      title: "Impacto da Qualidade do Ar Interior na Produtividade em Ambientes Corporativos",
      authors: "Almeida, C.M.; Rodrigues, T.S.; Lima, F.A.",
      event: "ASHRAE Winter Conference 2023",
      date: "Janeiro 2023",
      category: "Qualidade do Ar",
      abstract:
        "Pesquisa quantitativa sobre a correlação entre parâmetros de qualidade do ar interior (CO2, temperatura, umidade) e índices de produtividade em escritórios corporativos.",
    },
    {
      title: "Sistemas Híbridos de Ventilação: Integração de Tecnologias Passivas e Ativas",
      authors: "Martins, L.B.; Souza, D.K.",
      event: "REHVA Congress 2022",
      date: "Maio 2022",
      category: "Sistemas Híbridos",
      abstract:
        "Proposta de framework para integração de sistemas de ventilação passiva e ativa, maximizando eficiência energética e conforto térmico em diferentes condições climáticas.",
    },
    {
      title: "Modelagem CFD de Padrões de Fluxo de Ar em Salas Cirúrgicas",
      authors: "Barbosa, R.N.; Carvalho, E.P.",
      event: "ROOMVENT 2022",
      date: "Junho 2022",
      category: "Simulação CFD",
      abstract:
        "Utilização de dinâmica de fluidos computacional para análise e otimização de padrões de fluxo de ar em salas cirúrgicas, garantindo máxima proteção contra contaminação.",
    },
    {
      title: "Eficiência Energética em Sistemas de Climatização: Estudo de Caso em Hospitais",
      authors: "Gomes, V.H.; Pereira, A.C.",
      event: "SCANVAC 2021",
      date: "Setembro 2021",
      category: "Eficiência Energética",
      abstract:
        "Análise de estratégias de eficiência energética implementadas em sistemas de climatização hospitalar, com foco em redução de custos operacionais e sustentabilidade.",
    },
  ]

  const categorias = [
    "Todas",
    "Ventilação Natural",
    "Distribuição de Ar",
    "Qualidade do Ar",
    "Sistemas Híbridos",
    "Simulação CFD",
    "Eficiência Energética",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Publicações Técnicas</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Resumos e Trabalhos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contribuições científicas e técnicas apresentadas em congressos internacionais, demonstrando nosso
              compromisso com a inovação e excelência em engenharia de climatização.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-muted-foreground">Confiança construída através de resultados excepcionais</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="p-8 border-border relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{depoimento.content}"</p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{depoimento.name}</p>
                  <p className="text-sm text-muted-foreground">{depoimento.role}</p>
                  <p className="text-sm text-primary font-medium">{depoimento.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((categoria, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                {categoria}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Trabalhos List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {trabalhos.map((trabalho, index) => (
              <Card
                key={index}
                className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 text-pretty">{trabalho.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4">{trabalho.authors}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {trabalho.event} - {trabalho.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {trabalho.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{trabalho.abstract}</p>

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
