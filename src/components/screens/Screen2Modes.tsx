import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChatCircle } from '@phosphor-icons/react'

const ChatBubble = ({ message, isAI, delay = 0 }: { message: string; isAI: boolean; delay?: number }) => (
  <div
    className={`flex ${isAI ? 'justify-start' : 'justify-end'} animate-bubble-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
        isAI
          ? 'bg-muted text-card-foreground rounded-tl-sm'
          : 'bg-primary text-primary-foreground rounded-tr-sm'
      }`}
    >
      {message}
    </div>
  </div>
)

export default function Screen2Modes() {
  const [activeTab, setActiveTab] = useState('full')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
          <ChatCircle size={32} weight="fill" className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          3 Tryby AI Recepcjonistki
        </h1>
        <p className="text-sm text-card-foreground/70">
          Wybierz model pracy dla Twojego gabinetu
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="full" className="text-xs px-2 py-2">
            📅 Pełna
          </TabsTrigger>
          <TabsTrigger value="sms" className="text-xs px-2 py-2">
            📱 SMS
          </TabsTrigger>
          <TabsTrigger value="faq" className="text-xs px-2 py-2">
            📞 FAQ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="full" className="mt-4 space-y-3">
          <Card className="p-4 space-y-2 min-h-[200px]">
            <ChatBubble message="Dzień dobry, jak mogę pomóc?" isAI delay={0} />
            <ChatBubble message="Chcę umówić wizytę na przegląd" isAI={false} delay={200} />
            <ChatBubble message="Sprawdzam wolne terminy... Mogę zaproponować wtorek 11.03 o 10:00?" isAI delay={400} />
            <ChatBubble message="Tak, pasuje!" isAI={false} delay={600} />
            <ChatBubble message="Wizyta zarezerwowana. Kod: 42. SMS z potwierdzeniem za chwilę ✅" isAI delay={800} />
          </Card>
          <p className="text-xs text-center text-card-foreground/70 leading-relaxed">
            AI rezerwuje wizytę <strong>BEZ udziału człowieka</strong>
          </p>
        </TabsContent>

        <TabsContent value="sms" className="mt-4 space-y-3">
          <Card className="p-4 space-y-2 min-h-[200px]">
            <ChatBubble message="Dzień dobry! Jaką usługę Pani interesuje?" isAI delay={0} />
            <ChatBubble message="Plomba" isAI={false} delay={200} />
            <ChatBubble message="Jaki numer telefonu?" isAI delay={400} />
            <ChatBubble message="600 123 456" isAI={false} delay={600} />
            <ChatBubble message="Wysłałam SMS z linkiem do rezerwacji. Proszę wybrać specjalistę i termin 📲" isAI delay={800} />
          </Card>
          <p className="text-xs text-center text-card-foreground/70 leading-relaxed">
            Pacjent sam wybiera <strong>termin i specjalistę</strong> online
          </p>
        </TabsContent>

        <TabsContent value="faq" className="mt-4 space-y-3">
          <Card className="p-4 space-y-2 min-h-[200px]">
            <ChatBubble message="Ile kosztuje wybielanie?" isAI={false} delay={0} />
            <ChatBubble message="Wybielanie od 800 zł. Pracujemy pon-pt 8:00-17:00" isAI delay={200} />
            <ChatBubble message="Chciałbym się umówić" isAI={false} delay={400} />
            <ChatBubble message="Łączę z recepcją... 📞" isAI delay={600} />
          </Card>
          <p className="text-xs text-center text-card-foreground/70 leading-relaxed">
            AI odciąża recepcję od <strong>typowych pytań</strong>
          </p>
        </TabsContent>
      </Tabs>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-xs text-card-foreground/70 leading-relaxed">
          <strong className="text-card-foreground">Za kulisami:</strong> AI prowadzi naturalną rozmowę 
          głosową, rozpoznaje intencję pacjenta i dostosowuje scenariusz do potrzeb gabinetu.
        </p>
      </Card>
    </div>
  )
}
