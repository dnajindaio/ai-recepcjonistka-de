import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

import Screen1Problem from '@/components/screens/Screen1Problem'
import Screen2Modes from '@/components/screens/Screen2Modes'
import Screen3SMS from '@/components/screens/Screen3SMS'
import Screen4Booking from '@/components/screens/Screen4Booking'
import Screen5Confirmed from '@/components/screens/Screen5Confirmed'
import Screen6Manage from '@/components/screens/Screen6Manage'
import Screen7Panel from '@/components/screens/Screen7Panel'
import Screen8Reports from '@/components/screens/Screen8Reports'
import Screen9CTA from '@/components/screens/Screen9CTA'

function App() {
  const [currentScreen, setCurrentScreen] = useKV<number>('current-screen', 1)
  const [direction, setDirection] = useState(1)

  const totalScreens = 9
  const screen = currentScreen ?? 1

  const goNext = () => {
    if (screen < totalScreens) {
      setDirection(1)
      setCurrentScreen((prev) => (prev ?? 1) + 1)
    }
  }

  const goBack = () => {
    if (screen > 1) {
      setDirection(-1)
      setCurrentScreen((prev) => (prev ?? 1) - 1)
    }
  }

  const screens = [
    <Screen1Problem />,
    <Screen2Modes />,
    <Screen3SMS />,
    <Screen4Booking />,
    <Screen5Confirmed />,
    <Screen6Manage />,
    <Screen7Panel />,
    <Screen8Reports />,
    <Screen9CTA />
  ]

  const progressPercent = (screen / totalScreens) * 100

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.15_0.03_250)] to-[oklch(0.20_0.04_270)] flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] mx-auto">
        <div className="bg-card rounded-[2.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-8 bg-card-foreground/5 rounded-t-[2.5rem] flex items-center justify-center">
            <div className="w-32 h-6 bg-card-foreground/10 rounded-full" />
          </div>

          <div className="pt-12 pb-6 px-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-semibold text-card-foreground/60">
                {screen}/{totalScreens}
              </div>
              {screen > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="gap-1"
                >
                  <ArrowLeft size={16} />
                  Wstecz
                </Button>
              )}
            </div>

            <Progress value={progressPercent} className="h-1.5 mb-8" />

            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={screen}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  {screens[screen - 1]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8">
              {screen < totalScreens ? (
                <Button
                  onClick={goNext}
                  className="w-full gap-2"
                  size="lg"
                >
                  Dalej
                  <ArrowRight size={20} weight="bold" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setDirection(-1)
                    setCurrentScreen(1)
                  }}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Powrót na początek
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-foreground/40 text-xs">
          Interaktywna prezentacja AI Recepcjonistka
        </div>
      </div>
    </div>
  )
}

export default App
