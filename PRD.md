# Planning Guide

Interaktywna demonstracja kompletnego systemu "AI Recepcjonistka" dla gabinetów stomatologicznych, prezentująca 9 ekranów z pełnym przepływem automatyzacji – od odbierania telefonu przez AI, przez rezerwacje online, zarządzanie wizytami, panel pracownika, aż po raporty i statystyki.

**Experience Qualities**:
1. **Profesjonalny** - Wygląd premium przypominający aplikacje Apple iOS, budujący zaufanie do systemu automatyzacji dla biznesu medycznego
2. **Przejrzysty** - Każdy ekran pokazuje konkretną funkcjonalność systemu z jasnymi opisami technicznymi "za kulisami"
3. **Angażujący** - Płynne animacje, interaktywne elementy (zakładki, przełączniki), wizualne symulacje chatów i SMS-ów wciągają użytkownika w prezentację

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
- Aplikacja zawiera 9 różnych ekranów z nawigacją, progress barem, wieloma interaktywnymi komponentami (tabs, chat simulations, mockupy iPhone, kalendarz, statystyki), integracją stanów, animacjami przejść i złożoną logiką prezentacji kompletnego systemu B2B.

## Essential Features

**Nawigacja wieloekranowa z progress barem**
- Functionality: System 9 ekranów z przyciskami Dalej/Wstecz i wizualnym progress barem (1/9 do 9/9)
- Purpose: Prowadzi użytkownika przez pełną prezentację systemu krok po kroku
- Trigger: Kliknięcie przycisków nawigacyjnych
- Progression: Użytkownik klika "Dalej →" → animacja slide-in → nowy ekran → progress bar aktualizuje się → możliwość powrotu "← Wstecz"
- Success criteria: Płynne przejścia między ekranami, działające przyciski, poprawne liczniki

**Ekran 1: Problem - Animowany telefon i karty problemów**
- Functionality: Pokazuje problem nieodebranych połączeń z wizualną animacją dzwoniącego telefonu i trzema kartami scenariuszy
- Purpose: Ustanawia kontekst problemu biznesowego (straceni pacjenci) i wprowadza rozwiązanie (AI)
- Trigger: Wejście na aplikację
- Progression: Użytkownik widzi animowany telefon (20:35) → czyta 3 karty (nieodebrane ❌, automat ❌, AI ✅) → klika "Zobacz jak to działa →"
- Success criteria: Widoczna animacja wibracji telefonu, czytelne karty z ikonami, funkcjonujący CTA

**Ekran 2: 3 Tryby AI - Zakładki z symulacją czatu**
- Functionality: Trzy przełączane zakładki pokazujące różne tryby pracy AI (Pełna rezerwacja, SMS Link, FAQ)
- Purpose: Demonstracja elastyczności systemu - różne modele pracy dla różnych gabinetów
- Trigger: Kliknięcie zakładki trybu
- Progression: Użytkownik klika zakładkę → animacja przejścia → chat bubbles pokazują rozmowę AI z pacjentem → opis pod czatem wyjaśnia mechanizm
- Success criteria: Działające zakładki, animowane chat bubbles, różne scenariusze rozmów dla każdego trybu

**Ekran 3: System SMS - Mockupy iPhone**
- Functionality: Wizualizacja trzech typów SMS-ów (potwierdzenie linku, potwierdzenie rezerwacji, przypomnienie)
- Purpose: Pokazuje automatyzację komunikacji z pacjentem przez cały cykl wizyty
- Trigger: Nawigacja do ekranu 3
- Progression: Użytkownik widzi 3 mockupy telefonów → czyta treść każdego SMS-a → rozumie timeline wysyłki
- Success criteria: Realistyczne mockupy iPhone, różne kolory dla różnych typów, czytelne opisy

**Ekran 4: Strona rezerwacji online - Interfejs wyboru**
- Functionality: Interaktywny formularz rezerwacji z wyborem usługi, specjalisty i godziny
- Purpose: Pokazuje doświadczenie pacjenta rezerwującego online (po otrzymaniu linku SMS)
- Trigger: Nawigacja do ekranu 4
- Progression: Użytkownik widzi pre-wypełnione dane → dropdown usług z cenami → horizontal scroll specjalistów (z badgeą BRK) → siatkę godzin (z przekreślonymi przerwami) → przycisk potwierdzenia
- Success criteria: Funkcjonujące selecty, scroll specjalistów, wizualne oznaczenia BRK, info-box o Google Calendar

**Ekran 5: Potwierdzenie wizyty - Sukces i automatyzacje**
- Functionality: Strona sukcesu z kodem wizyty i timeline automatycznych akcji
- Purpose: Pokazuje wartość dodaną - co system robi automatycznie po rezerwacji
- Trigger: Nawigacja do ekranu 5
- Progression: Użytkownik widzi zielony ✅ (animacja pop) → kartę podsumowania → kod "42" → przyciski dodaj do kalendarza i zarządzaj → timeline (wizyta w Calendar, SMS teraz, przypomnienie jutro, raport miesięczny)
- Success criteria: Animacja checkmark, duży kod wizyty, timeline z ikonami statusu

**Ekran 6: Zarządzanie wizytą - Self-service pacjenta**
- Functionality: Panel zarządzania dla pacjenta (przełóż, odwołaj)
- Purpose: Pokazuje redukcję obciążenia recepcji - pacjent sam zarządza wizytą
- Trigger: Nawigacja do ekranu 6
- Progression: Użytkownik widzi dane wizyty → przyciski "Przełóż" (pomarańczowy) i "Odwołaj" (czerwony) → opis "zero telefonów"
- Success criteria: Gradient buttons, wyraźne kolory akcji, komunikat o autonomii pacjenta

**Ekran 7: Panel pracownika - Rezerwacja kontrolna**
- Functionality: Mockup web-panelu dla personelu medycznego z listą wizyt i quick-booking
- Purpose: Pokazuje workflow w gabinecie - pracownik rezerwuje wizytę kontrolną bez angażowania recepcji
- Trigger: Nawigacja do ekranu 7
- Progression: Użytkownik widzi login (avatar Anny) → listę 3 wizyt dzisiaj → pasek wykorzystania 62% → sekcję szybkiej rezerwacji (dane + "za 6 miesięcy" + "ten sam specjalista") → przycisk "Zarezerwuj"
- Success criteria: Profesjonalny wygląd panelu, wizualizacja wykorzystania slotów, funkcja quick-book

**Ekran 8: Raporty i BRK - Analytics + zarządzanie przerwami**
- Functionality: Dwie sekcje - raport miesięczny ze statystykami i heatmapą + obsługa BRK (przerwy)
- Purpose: Pokazuje intelligence systemu - analytics dla właściciela i smart handling przerw
- Trigger: Nawigacja do ekranu 8
- Progression: Użytkownik widzi 4 karty KPI (przychód, wizyty, wykorzystanie, no-show) → tabelę pracowników → heatmapę obciążenia → top 5 usług → sekcję BRK (globalny vs indywidualny)
- Success criteria: Wizualizacja statystyk, kolorowa heatmapa, wyjaśnienie mechanizmu BRK

**Ekran 9: CTA - Podsumowanie i konwersja**
- Functionality: Finałowy ekran z listą wszystkich korzyści, ceną i przyciskiem kontaktu
- Purpose: Konwersja - przekształcenie zainteresowania w lead
- Trigger: Nawigacja do ekranu 9
- Progression: Użytkownik widzi 🚀 → listę 10 korzyści z ikonami → pudełko cenowe "od 497 zł/mies" → CTA "Umów darmową prezentację" → kontakt
- Success criteria: Przekonująca lista wartości, widoczna cena, wyraźny CTA button

## Edge Case Handling

**Ekran poza zakresem** - Walidacja numeracji ekranów 1-9, blokowanie "Wstecz" na ekranie 1, blokowanie "Dalej" na ekranie 9
**Brak danych w symulacjach** - Hardcoded przykładowe dane (pacjenci, godziny, statystyki) dla celów demo
**Responsive poniżej 320px** - Minimum mobile width, layout degrades gracefully
**Animacje na slow devices** - Fallback do instant transitions jeśli prefers-reduced-motion

## Design Direction

Design powinien wywoływać uczucie PROFESJONALIZMU i ZAUFANIA właściwe dla oprogramowania medycznego B2B, jednocześnie zachowując NOWOCZESNOŚĆ i ELEGANCJĘ Apple iOS. Użytkownik ma poczuć, że patrzy na produkt premium, gotowy do wdrożenia w prawdziwym gabinecie. Efekty frost-glass, płynne animacje i czyste typografie budują wrażenie jakości enterprise-grade.

## Color Selection

Paleta inspirowana Apple iOS z dodatkiem medycznych akcentów - clean, trustworthy, professional.

- **Primary Color**: `oklch(0.45 0.20 250)` - Deep blue charakterystyczny dla iOS, komunikuje technologię i zaufanie, używany w głównych CTA i akcentach
- **Secondary Colors**: 
  - Background gradient: `oklch(0.15 0.03 250)` → `oklch(0.20 0.04 270)` - Ciemnogranatowe tło za mockupem telefonu
  - Card backgrounds: `oklch(0.98 0.01 250)` - Prawie białe karty z delikatnym niebieskim odcieniem
- **Accent Color**: `oklch(0.60 0.18 30)` - Pomarańczowy dla akcji "Przełóż", warm i przyjazny
- **Foreground/Background Pairings**:
  - Primary button (Deep Blue `oklch(0.45 0.20 250)`): White text `oklch(1 0 0)` - Ratio 8.2:1 ✓
  - Background `oklch(0.98 0.01 250)`: Dark text `oklch(0.20 0 0)` - Ratio 14.1:1 ✓
  - Success green `oklch(0.65 0.18 150)`: White text `oklch(1 0 0)` - Ratio 5.8:1 ✓
  - Destructive red `oklch(0.60 0.22 20)`: White text `oklch(1 0 0)` - Ratio 5.1:1 ✓

## Font Selection

Inter - nowoczesny, czytelny, technologiczny font używany przez Apple i wiele aplikacji SaaS. Doskonale sprawdza się w interfejsach medycznych - nie rozpraszając uwagi, zachowując profesjonalizm.

- **Typographic Hierarchy**:
  - H1 (Nagłówki ekranów): Inter Bold / 32px / tight (-0.02em) - silna obecność
  - H2 (Sekcje): Inter Semibold / 24px / normal - struktura
  - H3 (Karty, labels): Inter Medium / 16px / normal - organizacja
  - Body (Opisy, chat): Inter Regular / 15px / relaxed (0.01em) - czytelność
  - Small (Info-boxy, hints): Inter Regular / 13px / normal - detale
  - Button text: Inter Semibold / 16px / normal - akcja

## Animations

Animacje służą ORIENTACJI (gdzie jestem w przepływie) i FEEDBACKOWI (co się stało). Inspirowane iOS - płynne, subtelne, szybkie.

**Transitions między ekranami**: Slide horizontal (300ms ease-out) - pokazuje kierunek nawigacji
**Chat bubbles**: Fade + slide-up staggered (150ms delay między bubbles) - symulacja pisania
**Checkmark na ekranie 5**: Scale + rotate pop (400ms spring) - moment radości
**Progress bar**: Width transition (250ms ease-in-out) - wizualne potwierdzenie postępu
**Hover na przyciskach**: Scale 1.02 + brightness increase (150ms) - affordance
**Phone vibration (ekran 1)**: Rotate wiggle animation (800ms infinite) - przyciąga uwagę

## Component Selection

- **Components**: 
  - `Button` - wszystkie CTA, nawigacja (warianty: default, outline, destructive, ghost)
  - `Card` - każdy blok contentu (frost-glass variant z backdrop-blur)
  - `Tabs` - ekran 2 dla 3 trybów AI
  - `Select` - wybór usługi na ekranie 4
  - `Progress` - linear progress bar na górze (custom 1/9 indicator)
  - `Badge` - "⛔ przerwa" na specjaliście Tomek, role badges
  - `Avatar` - specjaliści, panel pracownika
  - `Separator` - wizualne podziały sekcji
- **Customizations**: 
  - iPhone mockup frame - custom component z zaokrągleniami i notch
  - Chat bubble component - rounded rectangles z tail (lewo/prawo)
  - SMS mockup - iPhone screen z iOS-style message bubbles
  - Heatmap grid - custom component z color scale (zielony→czerwony)
  - Timeline component - vertical line z checkmarks/future states
- **States**: 
  - Buttons: hover (scale + brighten), active (scale down), disabled (opacity 40%)
  - Cards: hover (subtle lift shadow), active ekran (border accent)
  - Tabs: selected (blue background + white text), unselected (transparent + muted text)
  - Time slots: available (blue), booked (gray strikethrough BRK), selected (bold blue)
- **Icon Selection**: 
  - Phosphor icons: Phone, CalendarCheck, Clock, User, ChartBar, Bell, CheckCircle, XCircle
  - Emoji jako feature icons: 📞 🦷 📅 📱 ✅ ❌ 🚀 📊 🔔
- **Spacing**: 
  - Screen padding: `p-6` (24px)
  - Card gaps: `gap-4` (16px)
  - Section spacing: `space-y-8` (32px)
  - Button padding: `px-6 py-3` (24px / 12px)
  - Tight groups: `gap-2` (8px)
- **Mobile**: 
  - Max-width container: `max-w-[440px]` wycentrowany na desktop
  - Poniżej 440px: full-width `px-4`
  - Horizontal scroll dla specjalistów zamiast grid
  - Stacked SMS mockups zamiast side-by-side
  - Touch-friendly tap targets minimum 44px
  - Navigation sticky na dole ekranu
