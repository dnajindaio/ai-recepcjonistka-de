import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CalendarCheck, Clock, Tooth } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export default function Screen4Booking() {
  const [selectedStaff, setSelectedStaff] = useState('anna')
  const [selectedTime, setSelectedTime] = useState('10:00')

  const staff = [
    { id: 'any', name: 'Dowolny', color: 'bg-muted', slots: 12 },
    { id: 'anna', name: 'Anna', color: 'bg-primary', slots: 5 },
    { id: 'kasia', name: 'Kasia', color: 'bg-accent', slots: 3 },
    { id: 'magda', name: 'Magda', color: 'bg-success', slots: 4 },
    { id: 'tomek', name: 'Tomek', color: 'bg-muted', slots: 0, brk: true },
  ]

  const times = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '15:30']
  const brkTimes = ['13:00']

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 mb-3 bg-primary/10 rounded-full">
          <Tooth size={28} weight="fill" className="text-primary" />
        </div>
        <h2 className="text-xl font-bold text-card-foreground mb-1">
          🦷 Stomatologia Kowalski
        </h2>
        <p className="text-xs text-card-foreground/70">
          Potwierdź wizytę · Zarządzaj wizytą
        </p>
      </div>

      <Card className="p-4 space-y-4">
        <div>
          <label className="text-xs font-semibold text-card-foreground/70 mb-1.5 block">
            PACJENT
          </label>
          <div className="text-sm font-medium">Anna Nowak</div>
        </div>

        <div>
          <label className="text-xs font-semibold text-card-foreground/70 mb-1.5 block">
            USŁUGA
          </label>
          <Select defaultValue="przeglad">
            <SelectTrigger className="text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="przeglad">Przegląd stomatologiczny - 30 min · 150 zł</SelectItem>
              <SelectItem value="plomba">Plomba - 45 min · 250 zł</SelectItem>
              <SelectItem value="higiena">Higiena - 60 min · 300 zł</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-xs font-semibold text-card-foreground/70 mb-2 block">
            SPECJALISTA
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {staff.map((person) => (
              <button
                key={person.id}
                onClick={() => !person.brk && setSelectedStaff(person.id)}
                className={cn(
                  'flex-shrink-0 relative',
                  person.brk && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div
                  className={cn(
                    'flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all',
                    selectedStaff === person.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-card hover:border-primary/30'
                  )}
                >
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className={person.color}>
                      {person.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs font-semibold">{person.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {person.brk ? '⛔ przerwa' : `${person.slots} terminy`}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-card-foreground/70 mb-2 block flex items-center gap-1.5">
            <CalendarCheck size={14} weight="bold" />
            DZIEŃ WIZYTY
          </label>
          <Select defaultValue="wtorek">
            <SelectTrigger className="text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wtorek">wtorek, 11.03</SelectItem>
              <SelectItem value="sroda">środa, 12.03</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-xs font-semibold text-card-foreground/70 mb-2 block flex items-center gap-1.5">
            <Clock size={14} weight="bold" />
            DOSTĘPNE GODZINY
          </label>
          <div className="grid grid-cols-4 gap-2">
            {times.map((time) => {
              const isBrk = brkTimes.includes(time)
              return (
                <button
                  key={time}
                  onClick={() => !isBrk && setSelectedTime(time)}
                  disabled={isBrk}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-semibold transition-all',
                    isBrk
                      ? 'bg-muted/50 text-muted-foreground line-through cursor-not-allowed'
                      : selectedTime === time
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                  )}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </div>

        <div className="pt-2">
          <Button className="w-full" size="lg">
            Potwierdź wizytę
          </Button>
        </div>

        <div className="flex items-start gap-2 text-xs text-card-foreground/60 bg-primary/5 p-3 rounded-lg">
          <div className="text-base">💡</div>
          <div>
            Wolne terminy pobierane <strong>na żywo</strong> z Google Calendar
          </div>
        </div>
      </Card>
    </div>
  )
}
