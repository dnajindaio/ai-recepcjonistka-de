import { Card } from '@/components/ui/card'
import { ChartBar } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export default function Screen8Reports() {
  const stats = [
    { label: 'Przychód', value: '24 850 zł', change: '+12%', positive: true },
    { label: 'Wizyty', value: '156', change: '+8%', positive: true },
    { label: 'Wykorzystanie', value: '78%', change: '+5pp', positive: true },
    { label: 'No-show', value: '4.2%', change: '-3pp', positive: true },
  ]

  const heatmapData = [
    ['08:00', 20, 30, 45, 60, 35],
    ['10:00', 40, 55, 70, 80, 45],
    ['12:00', 80, 90, 85, 70, 60],
    ['14:00', 60, 70, 65, 55, 50],
    ['16:00', 30, 40, 35, 30, 25],
  ]

  const getHeatColor = (value: number) => {
    if (value >= 70) return 'bg-destructive/80'
    if (value >= 50) return 'bg-accent/70'
    if (value >= 30) return 'bg-success/50'
    return 'bg-muted'
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-3 bg-primary/10 rounded-full">
          <ChartBar size={32} weight="fill" className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-1">
          Raporty i BRK
        </h1>
        <p className="text-sm text-card-foreground/70">
          Analytics + zarządzanie przerwami
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-card-foreground mb-3">
          📊 Raport miesięczny
        </h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-3">
              <div className="text-xs text-card-foreground/60 mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-card-foreground">{stat.value}</div>
              <div
                className={cn(
                  'text-xs font-semibold',
                  stat.positive ? 'text-success' : 'text-destructive'
                )}
              >
                {stat.change}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-4 mb-3">
          <div className="text-xs font-semibold text-card-foreground/70 mb-3">
            Heatmapa obciążenia (pon-pt)
          </div>
          <div className="space-y-1">
            {heatmapData.map((row, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="text-xs font-mono text-card-foreground/60 w-12">{row[0]}</div>
                <div className="flex gap-1 flex-1">
                  {(row.slice(1) as number[]).map((value, j) => (
                    <div
                      key={j}
                      className={cn(
                        'flex-1 h-6 rounded',
                        getHeatColor(value)
                      )}
                      title={`${value}%`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-card-foreground/60">
            <span>Pn</span>
            <span>Wt</span>
            <span>Śr</span>
            <span>Czw</span>
            <span>Pt</span>
          </div>
        </Card>

        <div className="text-xs text-center text-card-foreground/70 mb-4">
          Raport wysyłany automatycznie emailem 1. dnia miesiąca
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-card-foreground mb-3">
          🛡️ Obsługa BRK (przerwy)
        </h3>
        <div className="space-y-2">
          <Card className="p-3">
            <div className="flex items-start gap-2">
              <span className="text-base">⛔</span>
              <div className="flex-1">
                <div className="text-sm font-semibold">BRK globalny</div>
                <div className="text-xs text-card-foreground/70">
                  "BRK" w kalendarzu = cały gabinet zamknięty. AI odpowiada: "gabinet nieczynny"
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-start gap-2">
              <span className="text-base">👤</span>
              <div className="flex-1">
                <div className="text-sm font-semibold">BRK indywidualny</div>
                <div className="text-xs text-card-foreground/70">
                  "BRK (Anna)" = tylko Anna niedostępna. Reszta pracuje normalnie.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-3 bg-primary/5 border-primary/20">
            <div className="text-xs text-card-foreground/70">
              <strong>Obsługiwane w:</strong> AI, stronie rezerwacji, przełożeniu wizyty, panelu pracownika
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> System generuje raporty 
          automatycznie z danych wizyt. Heatmapa pokazuje obciążenie godzinowe i identyfikuje optymalne sloty.
        </p>
      </Card>
    </div>
  )
}
