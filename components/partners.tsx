import { Card } from "@/components/ui/card"

export function Partners() {
  const partners = [
    { name: "SCANVAC", logo: "SCANVAC" },
    { name: "FIPT", logo: "FIPT" },
    { name: "PUC Goiás", logo: "PUC" },
    { name: "SAREK", logo: "SAREK" },
    { name: "ASHRAE", logo: "ASHRAE" },
    { name: "REHVA", logo: "REHVA" },
  ]

  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Parceiros</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Colaboradores e Instituições
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabalhamos em parceria com as principais instituições técnicas e sociedades internacionais de engenharia de
            climatização.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-8 flex items-center justify-center border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group aspect-square"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.logo}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Membro ativo da SCANVAC (Sociedades Escandinavas de Aquecimento, Ventilação e Ar-condicionado) e
            participante regular de congressos internacionais de distribuição de ar em compartimentos.
          </p>
        </div>
      </div>
    </section>
  )
}
