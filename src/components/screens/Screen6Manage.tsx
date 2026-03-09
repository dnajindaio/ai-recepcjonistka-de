import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarX, ArrowsClockwise } from '@phosphor-icons/react'

export default function Screen6Manage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          Zarządzanie wizytą
        </h1>
        <p className="text-sm text-card-foreground/70">
          Pacjent sam zarządza swoją wizytą
        </p>
      </div>

      <Card className="p-5 space-y-3">
        <div className="pb-3 border-b border-border">
          <div className="text-xs text-card-foreground/60 mb-1">Kod wizyty</div>
          <div className="text-3xl font-bold text-primary">42</div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm pt-2">
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Pacjent</div>
            <div className="font-semibold">Anna Nowak</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Usługa</div>
            <div className="font-semibold">Przegląd</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Data i godzina</div>
            <div className="font-semibold">wt, 11.03 · 10:00</div>
          </div>
          <div>
            <div className="text-xs text-card-foreground/60 mb-1">Specjalista</div>
            <div className="font-semibold">Dr Anna</div>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <Button
          className="w-full gap-2 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70"
          size="lg"
        >
          <ArrowsClockwise size={20} weight="bold" />
          Przełóż wizytę
        </Button>

        <Button
          variant="destructive"
          className="w-full gap-2 bg-gradient-to-r from-destructive to-destructive/80"
          size="lg"
        >
          <CalendarX size={20} weight="bold" />
          Odwołaj wizytę
        </Button>
      </div>

      <Card className="p-4 bg-muted/30 border-muted text-center">
        <p className="text-sm font-medium text-card-foreground mb-1">
          Zero telefonów do gabinetu
        </p>
        <p className="text-xs text-card-foreground/70">
          Pacjent samodzielnie zarządza wizytą przez link z SMS-a
        </p>
      </Card>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> System automatycznie 
          aktualizuje Google Calendar i powiadamia gabinet o zmianach. Recepcja nie jest angażowana.
        </p>
      </Card>
    </div>
  )
}
