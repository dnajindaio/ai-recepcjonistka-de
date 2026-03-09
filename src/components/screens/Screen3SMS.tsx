import { Card } from '@/components/ui/card'
import { DeviceMobileSpeaker } from '@phosphor-icons/react'

const PhoneMockup = ({ color, title, body, description }: { color: string; title: string; body: string; description: string }) => (
  <div className="flex-1 min-w-[260px]">
    <Card className={`relative overflow-hidden border-2 ${color}`}>
      <div className="absolute top-0 left-0 right-0 h-6 bg-card-foreground/5 rounded-t-lg flex items-center justify-center">
        <div className="w-16 h-3 bg-card-foreground/10 rounded-full" />
      </div>
      <div className="pt-10 pb-6 px-4">
        <div className="text-xs font-semibold text-card-foreground/60 mb-2">🦷 Stomatologia Kowalski</div>
        <div className="bg-muted rounded-2xl rounded-tl-sm p-3 text-xs leading-relaxed text-card-foreground">
          {body}
        </div>
      </div>
    </Card>
    <div className="mt-2 text-center">
      <div className="text-xs font-semibold text-card-foreground">{title}</div>
      <div className="text-xs text-card-foreground/60">{description}</div>
    </div>
  </div>
)

export default function Screen3SMS() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
          <DeviceMobileSpeaker size={32} weight="fill" className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          Automatyczny system SMS
        </h1>
        <p className="text-sm text-card-foreground/70">
          Komunikacja na każdym etapie wizyty
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-2">
        <PhoneMockup
          color="border-primary/30 bg-primary/5"
          title="Link do potwierdzenia"
          body="Przegląd stomatologiczny, wtorek 11.03 o 10:00. Potwierdź wizytę: https://kowalski.pl/confirm/abc123"
          description="Wysyłany zaraz po rozmowie z AI"
        />
        <PhoneMockup
          color="border-success/30 bg-success/5"
          title="Potwierdzenie rezerwacji"
          body="✅ Wizyta potwierdzona! Kod: 42. Dr Anna, wtorek 11.03, 10:00. Zarządzaj wizytą: https://kowalski.pl/v/42"
          description="Wysyłany po potwierdzeniu online"
        />
        <PhoneMockup
          color="border-accent/30 bg-accent/5"
          title="Przypomnienie"
          body="🔔 Przypominamy: jutro (wtorek 11.03) wizyta o 10:00 u Dr Anny. Kod: 42. Do zobaczenia!"
          description="Dzień przed, o 11:00"
        />
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> System automatycznie wysyła SMS-y 
          w odpowiednich momentach. Zabezpieczenie przed podwójnym wysyłaniem przypomnień.
        </p>
      </Card>
    </div>
  )
}
