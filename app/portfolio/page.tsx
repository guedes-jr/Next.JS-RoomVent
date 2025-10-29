"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Building2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const projetos = [
    {
      title: "Centro de Distribuição Logística",
      category: "Industrial",
      location: "São Paulo, SP",
      year: "2024",
      area: "15.000 m²",
      description: "Sistema de ventilação natural assistida com controles automatizados para otimização energética.",
      image: "/modern-industrial-warehouse-ventilation.jpg",
      tags: ["Ventilação Natural", "Automação", "Eficiência Energética"],
    },
    {
      title: "Hospital Regional",
      category: "Saúde",
      location: "Brasília, DF",
      year: "2023",
      area: "8.500 m²",
      description: "Climatização de salas cirúrgicas e UTIs com sistema de filtragem HEPA e controle de pressurização.",
      image: "/modern-hospital-operating-room-ventilation.jpg",
      tags: ["Saúde", "Filtragem HEPA", "Salas Limpas"],
    },
    {
      title: "Shopping Center Premium",
      category: "Comercial",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      area: "25.000 m²",
      description: "Sistema centralizado de climatização com recuperação de calor e monitoramento de qualidade do ar.",
      image: "/modern-shopping-mall-interior-ventilation.jpg",
      tags: ["Comercial", "Recuperação de Calor", "Monitoramento"],
    },
    {
      title: "Fábrica Automotiva",
      category: "Industrial",
      location: "Curitiba, PR",
      year: "2022",
      area: "20.000 m²",
      description: "Ventilação industrial de alta capacidade com sistema de exaustão localizada para áreas de pintura.",
      image: "/automotive-factory-ventilation-system.jpg",
      tags: ["Industrial", "Exaustão", "Alta Capacidade"],
    },
    {
      title: "Edifício Corporativo AAA",
      category: "Comercial",
      location: "São Paulo, SP",
      year: "2022",
      area: "12.000 m²",
      description: "Sistema VRF com controle individual por andar e integração com sistema de automação predial.",
      image: "/modern-corporate-office-building-hvac.jpg",
      tags: ["VRF", "Automação Predial", "Eficiência"],
    },
    {
      title: "Laboratório Farmacêutico",
      category: "Saúde",
      location: "Campinas, SP",
      year: "2021",
      area: "5.000 m²",
      description: "Salas limpas classe ISO 7 e 8 com controle rigoroso de temperatura, umidade e particulados.",
      image: "/pharmaceutical-clean-room-laboratory.jpg",
      tags: ["Salas Limpas", "ISO", "Controle Ambiental"],
    },
    {
      title: "Data Center Tier III",
      category: "Industrial",
      location: "São Paulo, SP",
      year: "2021",
      area: "3.500 m²",
      description: "Sistema de climatização de precisão com redundância N+1 e monitoramento 24/7.",
      image: "/data-center-cooling-system.jpg",
      tags: ["Precisão", "Redundância", "Monitoramento"],
    },
    {
      title: "Universidade Federal",
      category: "Educacional",
      location: "Belo Horizonte, MG",
      year: "2020",
      area: "18.000 m²",
      description: "Climatização de laboratórios, bibliotecas e salas de aula com foco em eficiência energética.",
      image: "/university-campus-hvac-system.jpg",
      tags: ["Educacional", "Sustentabilidade", "Conforto"],
    },
    {
      title: "Hotel Resort 5 Estrelas",
      category: "Hotelaria",
      location: "Florianópolis, SC",
      year: "2020",
      area: "22.000 m²",
      description: "Sistema VRV com controle individual por quarto e integração com sistema de gestão hoteleira.",
      image: "/luxury-hotel-resort-hvac.jpg",
      tags: ["Hotelaria", "VRV", "Conforto"],
    },
  ]

  const projetosFiltrados = useMemo(() => {
    return projetos.filter((projeto) => {
      const matchesSearch =
        searchTerm === "" ||
        projeto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        projeto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        projeto.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory =
        selectedCategory === "all" || projeto.category.toLowerCase() === selectedCategory.toLowerCase()

      const matchesLocation =
        selectedLocation === "all" || projeto.location.toLowerCase().includes(selectedLocation.toLowerCase())

      return matchesSearch && matchesCategory && matchesLocation
    })
  }, [searchTerm, selectedCategory, selectedLocation])

  const projetosVisiveis = projetosFiltrados.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < projetosFiltrados.length

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  const categorias = [
    { value: "all", label: "Todas as Categorias" },
    { value: "industrial", label: "Industrial" },
    { value: "saude", label: "Saúde" },
    { value: "comercial", label: "Comercial" },
    { value: "educacional", label: "Educacional" },
    { value: "hotelaria", label: "Hotelaria" },
  ]

  const localizacoes = [
    { value: "all", label: "Todas as Localizações" },
    { value: "são paulo", label: "São Paulo" },
    { value: "rio de janeiro", label: "Rio de Janeiro" },
    { value: "brasília", label: "Brasília" },
    { value: "curitiba", label: "Curitiba" },
    { value: "campinas", label: "Campinas" },
    { value: "belo horizonte", label: "Belo Horizonte" },
    { value: "florianópolis", label: "Florianópolis" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Nossos Projetos</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Portfólio de Excelência
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mais de 500 projetos executados com sucesso em diversos segmentos, sempre com foco em eficiência,
              qualidade e satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    {localizacoes.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {projetosFiltrados.length}{" "}
              {projetosFiltrados.length === 1 ? "projeto encontrado" : "projetos encontrados"}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {projetosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Nenhum projeto encontrado com os filtros selecionados.</p>
              <Button
                variant="outline"
                className="mt-6 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedLocation("all")
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projetosVisiveis.map((projeto, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={projeto.image || "/placeholder.svg"}
                        alt={projeto.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {projeto.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{projeto.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 text-pretty">{projeto.title}</h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Building2 className="w-4 h-4" />
                        <span>{projeto.location}</span>
                        <span>•</span>
                        <span>{projeto.area}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{projeto.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {projeto.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-secondary text-foreground text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {hasMoreProjects && (
                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" onClick={loadMoreProjects}>
                    Carregar Mais Projetos
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
