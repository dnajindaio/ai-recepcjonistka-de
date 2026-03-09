import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { UserGear, CheckCircle } from '@phosphor-icons/react'
import { Progress } from '@/components/ui/progress'

export default function Screen7Panel() {
  const visits = [
    { time: '09:00', patient: 'Jan Kowalski', service: 'Plomba', code: '38' },
    { time: '10:30', patient: 'Maria Nowak', service: 'Przegląd', code: '41' },
    { time: '14:00', patient: 'Piotr Wiśniewski', service: 'Higiena', code: '45' },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-3 bg-primary/10 rounded-full">
          <UserGear size={32} weight="fill" className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-1">
          Panel pracownika
        </h1>
        <p className="text-sm text-card-foreground/70">
          Rezerwacja bez angażowania recepcji
        </p>
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground">
              A
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-card-foreground">Dr Anna</div>
            <Badge variant="secondary" className="text-xs">worker_1</Badge>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Wizyty dzisiaj</h3>
            <span className="text-xs text-muted-foreground">wtorek, 11.03</span>
          </div>
          <div className="space-y-2">
            {visits.map((visit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="text-sm font-bold text-primary">{visit.time}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{visit.patient}</div>
                  <div className="text-xs text-muted-foreground">{visit.service}</div>
                </div>
                <Badge variant="outline" className="text-xs">#{visit.code}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-card-foreground/70">Wykorzystanie dnia</span>
            <span className="text-xs font-bold text-primary">62%</span>
          </div>
          <Progress value={62} className="h-2" />
          <div className="text-xs text-muted-foreground mt-1">5/8 slotów zajętych</div>
        </div>

        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <CheckCircle size={16} weight="bold" />
            Szybka rezerwacja kontrolna
          </h4>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between">
              <span className="text-card-foreground/70">Pacjent obecny:</span>
              <span className="font-semibold">Maria Nowak</span>
            </div>
            <div className="flex justify-between">
              <span className="text-card-foreground/70">Za:</span>
              <span className="font-semibold">6 miesięcy</span>
            </div>
            <div className="flex justify-between">
              <span className="text-card-foreground/70">Ten sam specjalista:</span>
              <span className="font-semibold">Tak ✔</span>
            </div>
          </div>
          <Button className="w-full" size="sm">
            ✅ Zarezerwuj wizytę kontrolną
          </Button>
        </div>
      </Card>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> Pracownik rezerwuje wizytę 
          kontrolną bezpośrednio podczas wizyty pacjenta. Bez angażowania recepcji, z automatycznym SMS-em.
        </p>
      </Card>
    </div>
  )
}
