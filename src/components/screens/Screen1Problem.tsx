import { Phone } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

export default function Screen1Problem() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-primary/10 rounded-full">
          <Phone size={40} weight="fill" className="text-primary animate-wiggle" />
        </div>
        <h1 className="text-3xl font-bold text-card-foreground mb-2 leading-tight tracking-tight">
          20:35 — gabinet zamknięty
        </h1>
        <p className="text-lg text-card-foreground/70">
          Pacjent dzwoni. Kto odbiera?
        </p>
      </div>

      <div className="space-y-3">
        <Card className="p-4 border-2 border-destructive/20 bg-destructive/5">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">❌</span>
            <div>
              <h3 className="font-semibold text-card-foreground mb-1">
                Nieodebrane połączenie
              </h3>
              <p className="text-sm text-card-foreground/70">
                Pacjent idzie do konkurencji
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-2 border-destructive/20 bg-destructive/5">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">❌</span>
            <div>
              <h3 className="font-semibold text-card-foreground mb-1">
                Automat "zadzwoń jutro"
              </h3>
              <p className="text-sm text-card-foreground/70">
                Pacjent zapomina lub szuka dalej
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-2 border-success/30 bg-success/10">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <h3 className="font-semibold text-card-foreground mb-1">
                AI Recepcjonistka
              </h3>
              <p className="text-sm text-card-foreground/70">
                Umawia wizytę 24/7, automatycznie
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> AI odbiera telefon, 
          prowadzi naturalną rozmowę, sprawdza wolne terminy w Google Calendar i rezerwuje 
          wizytę — bez udziału człowieka.
        </p>
      </Card>
    </div>
  )
}
