import Link from "next/link"
import { Wind, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    empresa: [
      { label: "Sobre Nós", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Parceiros", href: "#partners" },
      { label: "Contato", href: "#contact" },
    ],
    servicos: [
      { label: "Ventilação Industrial", href: "#services" },
      { label: "Climatização", href: "#services" },
      { label: "Distribuição de Ar", href: "#services" },
      { label: "Consultoria", href: "#services" },
    ],
  }

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Wind className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Roomvent</span>
                <span className="text-xs text-accent-foreground/70 leading-tight">Brazil</span>
              </div>
            </Link>
            <p className="text-accent-foreground/80 text-sm leading-relaxed mb-6">
              Especialistas em soluções de ventilação e climatização para ambientes industriais e comerciais.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-foreground/60 shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@roomventbrazil.com"
                  className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  contato@roomventbrazil.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-foreground/60 shrink-0 mt-0.5" />
                <a
                  href="tel:+551134567890"
                  className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  +55 (11) 3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-foreground/60 shrink-0 mt-0.5" />
                <span className="text-sm text-accent-foreground/80">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/70">
              © {currentYear} Roomvent Brazil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
