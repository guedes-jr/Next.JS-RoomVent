"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Play, X } from "lucide-react"

export function InstitutionalVideo() {
  const [open, setOpen] = useState(false)
  const VIDEO_ID = "Rxrg_TYrF8w"

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Conheça Nossa História</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Vídeo Institucional</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubra como transformamos ambientes através da excelência em engenharia de climatização
            </p>
          </div>

          <Card className="overflow-hidden border-border shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
              {!open ? (
                <>
                  {/* Thumbnail do YouTube (fallback para hqdefault se maxres não existir) */}
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Thumbnail do vídeo institucional - RoomVent"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src =
                        `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`
                    }}
                  />

                  {/* overlay leve para melhorar contraste */}
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button
                      onClick={() => setOpen(true)}
                      aria-haspopup="dialog"
                      className="w-20 h-20 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl group"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm mt-32">Clique para assistir ao vídeo institucional</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    title="Vídeo institucional - RoomVent"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Fechar vídeo"
                    className="absolute top-3 right-3 z-20 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </Card>

          {/* ...existing code... (estatísticas abaixo do card) */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}