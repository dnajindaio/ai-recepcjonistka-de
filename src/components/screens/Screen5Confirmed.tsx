import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, CalendarPlus, GearSix } from '@phosphor-icons/react'

export default function Screen5Confirmed() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 animate-pop-in">
          <CheckCircle size={80} weight="fill" className="text-success" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          Wizyta potwierdzona!
        </h1>
      </div>

      <Card className="p-5 bg-success/10 border-success/30 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Pacjent</div>
            <div className="font-semibold">Anna Nowak</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Usługa</div>
            <div className="font-semibold">Przegląd</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Data</div>
            <div className="font-semibold">wtorek, 11.03</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Godzina</div>
            <div className="font-semibold">10:00</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Specjalista</div>
            <div className="font-semibold">Dr Anna</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Kod wizyty</div>
            <div className="text-2xl font-bold text-success">42</div>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <Button variant="outline" className="w-full gap-2">
          <CalendarPlus size={20} />
          Dodaj do kalendarza
        </Button>
        <Button variant="outline" className="w-full gap-2">
          <GearSix size={20} />
          Zarządzaj wizytą
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-card-foreground mb-3">
          Co dzieje się automatycznie
        </h3>
        <div className="space-y-2">
          {[
            { icon: '✅', text: 'Wizyta w Google Calendar', time: 'teraz' },
            { icon: '✅', text: 'SMS potwierdzenie', time: 'teraz' },
            { icon: '🔔', text: 'SMS przypomnienie', time: 'dzień przed, 11:00' },
            { icon: '📊', text: 'Wizyta w raporcie miesięcznym', time: '1. dzień miesiąca' },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{item.text}</div>
                <div className="text-xs text-card-foreground/60">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> System automatycznie 
          synchronizuje wizytę z kalendarzem, wysyła SMS-y i dodaje do raportów — zero ręcznej pracy.
        </p>
      </Card>
    </div>
  )
}
