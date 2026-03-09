import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Rocket } from '@phosphor-icons/react'

export default function Screen9CTA() {
  const features = [
    { icon: '📞', text: 'AI odbiera telefony 24/7 (3 tryby)' },
    { icon: '📨', text: 'System SMS: link + potwierdzenie + przypomnienie' },
    { icon: '📅', text: 'Integracja z Google Calendar (live)' },
    { icon: '👤', text: 'Pacjent wybiera specjalistę i termin online' },
    { icon: '✏️', text: 'Pacjent sam przekłada lub odwołuje' },
    { icon: '🧑‍⚕️', text: 'Panel pracownika — rezerwacja bez recepcji' },
    { icon: '🛡️', text: 'System BRK — inteligentne przerwy i zamknięcia' },
    { icon: '📊', text: 'Raporty miesięczne z heatmapą' },
    { icon: '🔔', text: 'Przypomnienia SMS dzień przed' },
    { icon: '📉', text: '-80% no-show' },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-primary to-accent rounded-full">
          <Rocket size={40} weight="fill" className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          To może działać<br />w Twoim gabinecie
        </h1>
        <p className="text-sm text-card-foreground/70">
          Kompletny system automatyzacji
        </p>
      </div>

      <Card className="p-5 space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">{feature.icon}</span>
            <div className="text-sm font-medium text-card-foreground pt-0.5">
              {feature.text}
            </div>
          </div>
        ))}
      </Card>

      <Card className="p-5 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
        <div className="text-center">
          <div className="text-3xl font-bold text-card-foreground mb-1">
            od 497 zł/mies
          </div>
          <div className="text-sm text-card-foreground/70">
            bez umowy · 14 dni testów gratis
          </div>
        </div>
      </Card>

      <Button
        className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
        size="lg"
      >
        📞 Umów darmową prezentację
      </Button>

      <Card className="p-4 bg-muted/30 border-muted text-center">
        <div className="text-xs font-semibold text-card-foreground mb-1">
          Kontakt
        </div>
        <div className="text-xs text-card-foreground/70">
          kontakt@ai-recepcjonistka.pl<br />
          +48 600 123 456
        </div>
      </Card>

      <div className="text-center pt-4">
        <p className="text-xs text-card-foreground/50">
          Zmień swoje dane kontaktowe w Screen9CTA.tsx
        </p>
      </div>
    </div>
  )
}
