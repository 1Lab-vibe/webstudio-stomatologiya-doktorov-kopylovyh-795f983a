import heroClinic from "@/assets/hero-clinic.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import doctor from "@/assets/doctor.jpg";
import { Phone, MapPin, Clock, Star, ShieldCheck, Sparkles, Stethoscope, Smile, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ADDRESS = "ул. Пречистенка, 33/19 строение 1, Москва, 119034";
const PHONE = "8 (495) 637-55-77";
const PHONE_TEL = "+74956375577";
const YANDEX_QUERY = encodeURIComponent("Стоматология докторов Копыловых, Пречистенка 33/19 строение 1, Москва");

const services = [
  { icon: Stethoscope, title: "Терапия и лечение", desc: "Лечение кариеса, пульпита, реставрация под микроскопом.", img: serviceTreatment, from: "от 4 500 ₽" },
  { icon: ShieldCheck, title: "Имплантация и протезирование", desc: "Импланты Straumann, Nobel. Коронки и виниры.", img: serviceImplants, from: "от 35 000 ₽" },
  { icon: Sparkles, title: "Гигиена и отбеливание", desc: "Профессиональная чистка Air Flow, отбеливание Zoom.", img: serviceHygiene, from: "от 6 000 ₽" },
];

const reviews = [
  { name: "Анна К.", text: "Очень внимательное отношение, всё подробно объяснили. Лечилась без боли и страха.", rating: 5 },
  { name: "Дмитрий В.", text: "Поставил два импланта. Понравился системный подход и честные цены — без навязанных услуг.", rating: 5 },
  { name: "Мария С.", text: "Хожу всей семьёй уже третий год. Дети не боятся — это о многом говорит.", rating: 5 },
];

const steps = [
  { n: "01", t: "Запись", d: "Звонок или заявка с сайта" },
  { n: "02", t: "Консультация", d: "Осмотр и план лечения" },
  { n: "03", t: "Лечение", d: "Согласованный объём работ" },
  { n: "04", t: "Контроль", d: "Сопровождение и гарантия" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container-tight flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground grid place-items-center font-bold">К</div>
            <div className="leading-tight">
              <div className="font-semibold text-sm">Доктора Копыловы</div>
              <div className="text-[11px] text-muted-foreground">Стоматология на Пречистенке</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#process" className="hover:text-foreground transition">Как мы работаем</a>
            <a href="#reviews" className="hover:text-foreground transition">Отзывы</a>
            <a href="#contacts" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-tight grid lg:grid-cols-2 gap-10 lg:gap-14 py-12 lg:py-20 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Принимаем по записи · Хамовники
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] mb-5">
              Стоматология,<br />которой <span className="text-primary">доверяют</span> с 2020 года
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Семейная клиника докторов Копыловых на Пречистенке: терапия, имплантация, гигиена и эстетика. Без навязанных услуг — только то, что действительно нужно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href="#request">Записаться на приём <ArrowRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4 mr-2" /> {PHONE}</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <span className="font-semibold">4,9</span>
                <span className="text-muted-foreground">· 17 отзывов на Яндекс Картах</span>
              </div>
              <div className="text-muted-foreground">5 лет на рынке</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <img src={heroClinic} alt="Интерьер стоматологической клиники докторов Копыловых на Пречистенке" width={1600} height={1100} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-card shadow-card rounded-xl p-4 flex items-center gap-3 max-w-[260px]">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="text-xs leading-snug">
                <div className="font-semibold text-foreground">Пречистенка, 33/19 с1</div>
                <div className="text-muted-foreground">м. Кропоткинская · 7 минут пешком</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 sm:-right-6 bg-card shadow-card rounded-xl px-4 py-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <div className="text-xs">
                <div className="font-semibold">Сегодня открыто</div>
                <div className="text-muted-foreground">пн–сб · 9:00–21:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          {[
            { v: "4,9★", l: "рейтинг на Яндекс Картах" },
            { v: "17", l: "отзывов от пациентов" },
            { v: "5 лет", l: "на Пречистенке" },
            { v: "1 год", l: "гарантия на лечение" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="max-w-2xl mb-10">
            <div className="text-sm font-medium text-primary mb-2">Услуги</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Полный спектр стоматологической помощи</h2>
            <p className="text-muted-foreground">Лечим взрослых и детей. Используем современное оборудование и материалы — без лишних процедур.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/60 hover:-translate-y-1 transition-transform">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-secondary text-primary grid place-items-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">Стоимость</span>
                      <span className="font-semibold text-primary">{s.from}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor / Before-after */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={doctor} alt="Врач клиники" loading="lazy" width={1000} height={1200} className="rounded-2xl shadow-card aspect-[4/5] object-cover" />
            <img src={beforeAfter} alt="Результат лечения — улыбка пациента" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-card aspect-[4/5] object-cover mt-8" />
          </div>
          <div>
            <div className="text-sm font-medium text-primary mb-2">Врачи и результат</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Команда, которой доверяют семьи</h2>
            <p className="text-muted-foreground mb-6">
              Все наши врачи — практикующие специалисты с опытом от 8 лет. Ведём пациентов поэтапно: от первой консультации до контрольного осмотра через полгода.
            </p>
            <ul className="space-y-3">
              {[
                "Честный план лечения с альтернативами и ценами",
                "Лечение под микроскопом и анестезия без боли",
                "Фотопротокол до/после на каждом этапе",
                "Гарантия на работы и материалы",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process — animated SVG */}
      <section id="process" className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="max-w-2xl mb-10">
            <div className="text-sm font-medium text-primary mb-2">Как мы работаем</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Понятный процесс — от записи до результата</h2>
          </div>

          {/* SVG path animation */}
          <div className="relative mb-8 hidden md:block">
            <svg viewBox="0 0 1000 80" className="w-full h-16" preserveAspectRatio="none" aria-hidden>
              <path
                d="M 20 60 Q 250 0 500 50 T 980 30"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="400"
                strokeLinecap="round"
                className="animate-draw"
              />
              {[125, 375, 625, 875].map((cx, i) => (
                <circle key={i} cx={cx} cy={i % 2 === 0 ? 30 : 45} r="6" fill="hsl(var(--primary))" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </svg>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="text-3xl font-bold text-primary/30 mb-3">{s.n}</div>
                <div className="font-semibold mb-1">{s.t}</div>
                <div className="text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 lg:py-20 bg-secondary/40">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-sm font-medium text-primary mb-2">Отзывы</div>
              <h2 className="text-3xl lg:text-4xl font-bold">4,9 на Яндекс Картах · 17 отзывов</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Smile className="w-4 h-4 text-primary" /> Реальные пациенты клиники
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <article key={r.name} className="bg-card rounded-2xl p-6 shadow-card border border-border/60">
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/90 mb-4 leading-relaxed">«{r.text}»</p>
                <div className="text-sm font-medium">{r.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-16 lg:py-24">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-sm font-medium text-primary mb-2">Запись на приём</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Оставьте заявку — перезвоним в течение 15 минут</h2>
            <p className="text-muted-foreground mb-6">Подберём удобное время и врача. Первичная консультация — бесплатно при последующем лечении.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Без предоплаты</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Точное время приёма</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Прозрачная смета до начала лечения</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Ваше имя</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Как к вам обращаться"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Телефон</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Услуга (необязательно)</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Выберите услугу</option>
                <option>Консультация</option>
                <option>Лечение / терапия</option>
                <option>Имплантация</option>
                <option>Гигиена и отбеливание</option>
                <option>Эстетика / виниры</option>
              </select>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 text-base">Записаться</Button>
            <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
          </form>
        </div>
      </section>

      {/* Contacts + Map */}
      <section id="contacts" className="py-16 lg:py-20 bg-secondary/40">
        <div className="container-tight grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-sm font-medium text-primary mb-2">Контакты</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Мы в центре Москвы</h2>
              <p className="text-muted-foreground">7 минут пешком от метро Кропоткинская</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-muted-foreground text-sm">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Телефон</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-muted-foreground text-sm hover:text-primary">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">График работы</div>
                  <div className="text-muted-foreground text-sm">Пн–Сб: 9:00 – 21:00<br />Вс: по записи</div>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4 mr-2" /> Позвонить в клинику</a>
            </Button>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card border border-border min-h-[360px]">
            <iframe
              title="Стоматология докторов Копыловых на карте"
              src={`https://yandex.ru/map-widget/v1/?text=${YANDEX_QUERY}&z=17`}
              className="w-full h-full min-h-[360px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-tight flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Стоматология докторов Копыловых</div>
          <div>{ADDRESS}</div>
        </div>
      </footer>

      {/* Mobile sticky call */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="sm:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 h-12 rounded-full shadow-soft font-medium"
      >
        <Phone className="w-4 h-4" /> Позвонить
      </a>
    </div>
  );
};

export default Index;
