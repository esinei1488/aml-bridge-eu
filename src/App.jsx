import React, { useState } from "react";
import { ShieldCheck, FileText, Building2, SearchCheck, Globe2, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const pricing = {
  en: {
    title: "Pricing",
    subtitle: "Premium, case-based pricing for clients who need structured compliance documents and practical support.",
    note: "Final pricing depends on case complexity, number of entities, transaction volume, and urgency.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Exchange review response, source of funds explanation, transaction clarification, and document checklist."],
      ["Source of Funds Package", "€1,500 - €4,500", "Structured SOF/SOW explanation with supporting document map, timeline, transaction logic, and final client statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach, and internal controls."],
      ["Bank / EMI Onboarding Package", "€2,500 - €7,500", "Business model description, transaction flow explanation, source of funds documents, risk mitigation narrative, and response package."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Review of AML framework, gap analysis, risk findings, and written recommendations."],
      ["Monthly Compliance Support", "from €2,500 / month", "Ongoing document support, client risk reviews, internal procedures, and compliance response assistance."],
    ],
  },
  ua: {
    title: "Вартість послуг",
    subtitle: "Преміальний case-based pricing для клієнтів, яким потрібні структуровані compliance-документи та практична підтримка.",
    note: "Фінальна вартість залежить від складності кейсу, кількості компаній, обсягу транзакцій та терміновості.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Відповідь на запит біржі, пояснення походження коштів, transaction clarification та список документів."],
      ["Source of Funds Package", "€1,500 - €4,500", "Структуроване SOF/SOW пояснення з картою документів, timeline, логікою транзакцій та фінальним statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach та internal controls."],
      ["Bank / EMI Onboarding Package", "€2,500 - €7,500", "Опис бізнес-моделі, transaction flow explanation, Source of Funds документи, risk mitigation narrative та response package."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Перевірка AML framework, gap analysis, risk findings та письмові рекомендації."],
      ["Monthly Compliance Support", "від €2,500 / місяць", "Постійна підтримка з документами, client risk reviews, internal procedures та compliance responses."],
    ],
  },
  pl: {
    title: "Cennik",
    subtitle: "Premium case-based pricing dla klientów, którzy potrzebują uporządkowanych dokumentów compliance i praktycznego wsparcia.",
    note: "Ostateczna cena zależy od złożoności sprawy, liczby podmiotów, wolumenu transakcji i pilności.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Odpowiedź na zapytanie giełdy, wyjaśnienie źródła środków, transaction clarification i lista dokumentów."],
      ["Source of Funds Package", "€1,500 - €4,500", "Uporządkowane wyjaśnienie SOF/SOW z mapą dokumentów, timeline, logiką transakcji i końcowym statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach i internal controls."],
      ["Bank / EMI Onboarding Package", "€2,500 - €7,500", "Opis modelu biznesowego, transaction flow explanation, dokumenty Source of Funds, risk mitigation narrative i response package."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Przegląd AML framework, gap analysis, risk findings oraz pisemne rekomendacje."],
      ["Monthly Compliance Support", "od €2,500 / miesiąc", "Stałe wsparcie dokumentacyjne, client risk reviews, internal procedures i compliance responses."],
    ],
  },
};

const content = {
  en: {
    nav: ["Services", "Pricing", "Process", "About", "FAQ", "Contact"],
    heroTitle: "AML & Crypto Compliance Support in the EU",
    heroText: "AML Bridge EU helps businesses and individuals prepare compliance documents, respond to bank and crypto exchange reviews, explain source of funds, and improve AML readiness.",
    heroCta: "Request a consultation",
    heroNote: "AML policies • Source of funds packages • Bank onboarding • Crypto compliance responses",
    badge: "Practical AML support for EU clients",
    servicesTitle: "Services",
    servicesSubtitle: "Focused, practical compliance support for real cases — not generic templates.",
    services: [
      ["Crypto Compliance Support", "Support with crypto exchange reviews, source of funds explanations, transaction history clarification, and document preparation for crypto-related compliance cases."],
      ["AML Policy Development", "Preparation of AML/KYC policies, risk-based procedures, customer due diligence frameworks, sanctions screening procedures, and internal compliance documentation."],
      ["Bank / EMI Compliance Preparation", "Support with business activity descriptions, transaction flow explanations, source of funds documentation, and structured responses for banks and electronic money institutions."],
      ["AML Audit / Health Check", "Review of existing AML procedures, identification of risk gaps, and practical recommendations to improve compliance readiness."],
    ],
    whoTitle: "Who we help",
    who: ["Crypto users and businesses facing exchange reviews", "Fintech and payment-related companies", "Companies preparing for bank or EMI onboarding", "Businesses that need AML/KYC documentation", "Real estate, consulting, and service businesses", "Individuals who need structured source of funds explanations"],
    processTitle: "How it works",
    process: [["Initial review", "You send the case details, business profile, or compliance request."], ["Document analysis", "We review the facts, transaction logic, available documents, and potential compliance gaps."], ["Document preparation", "We prepare a structured compliance package tailored to your situation."], ["Final delivery", "You receive clear documents ready for internal use or submission to the relevant institution."]],
    aboutTitle: "About AML Bridge EU",
    aboutText: "AML Bridge EU is a practical compliance consultancy focused on AML documentation, crypto compliance cases, source of funds explanations, and bank/EMI preparation for clients in Poland and across the European Union.",
    trust: ["Document-focused approach", "Clear communication", "Tailored materials", "Crypto compliance focus", "AML training background", "EU-oriented support"],
    faqTitle: "FAQ",
    faq: [["Do you guarantee bank approval or account unfreezing?", "No. We prepare documents and provide compliance support, but final decisions are made by the relevant institution."], ["Do you work with individuals?", "Yes, especially in crypto-related source of funds and bank compliance cases."], ["Do you work only in Poland?", "We focus on Poland and the EU, depending on the case."], ["Are your documents tailored?", "Yes. Documents are prepared based on the client’s actual circumstances, business model, and risk profile."]],
    contactTitle: "Request a consultation",
    contactText: "Tell us briefly what kind of AML or compliance support you need.",
    form: ["Name", "Email", "Telegram / WhatsApp", "Country", "Type of case", "Short description"],
    send: "Send request",
    disclaimer: "AML Bridge EU provides AML and compliance consulting, documentation support, and practical advisory services. We do not provide legal advice, tax advice, or guarantee approval by banks, crypto exchanges, payment institutions, or regulators. Final decisions are always made by the relevant institution.",
  },
  ua: {
    nav: ["Послуги", "Вартість", "Процес", "Про нас", "FAQ", "Контакти"],
    heroTitle: "AML та Crypto Compliance підтримка в ЄС",
    heroText: "AML Bridge EU допомагає бізнесу та приватним клієнтам готувати compliance-документи, відповідати банкам і криптобіржам, пояснювати походження коштів та покращувати AML readiness.",
    heroCta: "Отримати консультацію",
    heroNote: "AML-політики • Source of Funds пакети • Bank onboarding • Crypto compliance responses",
    badge: "Практична AML підтримка для клієнтів y ЄС",
    servicesTitle: "Послуги",
    servicesSubtitle: "Практична compliance підтримка для реальних кейсів — не шаблонні документи.",
    services: [
      ["Crypto Compliance Support", "Допомога з compliance-запитами криптобірж, поясненням походження коштів, аналізом історії транзакцій та підготовкою документів для crypto-related кейсів."],
      ["Розробка AML Policy", "Підготовка AML/KYC політик, risk-based procedures, customer due diligence, sanctions screening та внутрішньої compliance-документації."],
      ["Підготовка до банку / EMI", "Допомога з описом бізнес-моделі, логікою грошових потоків, документами щодо походження коштів та структурованими відповідями для банків і EMI."],
      ["AML Audit / Health Check", "Перевірка наявних AML-процедур, виявлення ризиків та практичні рекомендації для покращення compliance readiness."],
    ],
    whoTitle: "Кому ми допомагаємо",
    who: ["Crypto users та бізнесам із compliance-запитами", "Fintech та payment-related компаніям", "Компаніям перед bank або EMI onboarding", "Бізнесам, яким потрібна AML/KYC документація", "Real estate, consulting та service businesses", "Приватним клієнтам, яким потрібне пояснення походження коштів"],
    processTitle: "Як це працює",
    process: [["Первинний аналіз", "Ви надсилаєте опис кейсу, бізнес-профіль or compliance-запит."], ["Аналіз документів", "Ми перевіряємо факти, логіку транзакцій, наявні документи та можливі compliance gaps."], ["Підготовка документів", "Ми готуємо структурований compliance package під вашу ситуацію."], ["Фінальна передача", "Ви отримуєте зрозумілі документи для внутрішнього використання або подання до відповідної установи."]],
    aboutTitle: "Про AML Bridge EU",
    aboutText: "AML Bridge EU — практична compliance consultancy, сфокусована на AML-документації, crypto compliance кейсах, Source of Funds поясненнях та підготовці до банків/EMI для клієнтів у Польщі та ЄС.",
    trust: ["Фокус на документах", "Чітка комунікація", "Індивідуальні матеріали", "Crypto compliance focus", "AML training background", "Підтримка по ЄС"],
    faqTitle: "FAQ",
    faq: [["Ви гарантуєте approval банку or розблокування акаунта?", "No. Ми готуємо документи та надаємо compliance support, але остаточне рішення приймає відповідна установа."], ["Ви працюєте з приватними клієнтами?", "Так, особливо у crypto-related Source of Funds та bank compliance cases."], ["Ви працюєте тільки в Польщі?", "Ми фокусуємося на Польщі та ЄС, залежно від конкретного кейсу."], ["Документи індивідуальні чи шаблонні?", "Документи готуються на основі реальних обставин клієнта, бізнес-моделі та risk profile."]],
    contactTitle: "Отримати консультацію",
    contactText: "Коротко опишіть, яка AML or compliance підтримка вам потрібна.",
    form: ["Імʼя", "Email", "Telegram / WhatsApp", "Країна", "Тип кейсу", "Короткий опис"],
    send: "Надіслати запит",
    disclaimer: "AML Bridge EU надає AML та compliance consulting, documentation support and practical advisory services. Ми не надаємо юридичні або податкові консультації та не гарантуємо approval з боку банків, криптобірж, платіжних установ або регуляторів. Остаточне рішення завжди приймає відповідна установа.",
  },
  pl: {
    nav: ["Usługi", "Cennik", "Proces", "O nas", "FAQ", "Kontakt"],
    heroTitle: "Wsparcie AML i Crypto Compliance w UE",
    heroText: "AML Bridge EU pomaga firmom i klientom indywidualnym przygotować dokumenty compliance, odpowiedzi dla banków i giełd kryptowalut, wyjaśnienia źródła pochodzenia środków oraz poprawić gotowość AML.",
    heroCta: "Poproś o konsultację",
    heroNote: "Polityki AML • Pakiety Source of Funds • Onboarding bankowy • Odpowiedzi crypto compliance",
    badge: "Praktyczne wsparcie AML dla klientów w UE",
    servicesTitle: "Usługi",
    servicesSubtitle: "Praktyczne wsparcie compliance dla realnych spraw — nie ogólne szablony.",
    services: [
      ["Crypto Compliance Support", "Wsparcie przy zapytaniach compliance ze strony giełd kryptowalut, wyjaśnieniach źródła pochodzenia środków, analizie historii transakcji oraz przygotowaniu dokumentów."],
      ["Opracowanie AML Policy", "Przygotowanie polityk AML/KYC, procedur risk-based, customer due diligence, sanctions screening oraz wewnętrznej dokumentacji compliance."],
      ["Przygotowanie do banku / EMI", "Wsparcie w opisie działalności, wyjaśnieniu przepływów finansowych, dokumentacji źródła pochodzenia środków oraz odpowiedziach dla banków i EMI."],
      ["AML Audit / Health Check", "Przegląd istniejących procedur AML, identyfikacja luk ryzyka oraz praktyczne rekomendacje poprawiające gotowość compliance."],
    ],
    whoTitle: "Komu pomagamy",
    who: ["Użytkownikom i firmom crypto z zapytaniami compliance", "Firmom fintech i payment-related", "Firmom przygotowującym się do onboardingu bankowego lub EMI", "Biznesom potrzebującym dokumentacji AML/KYC", "Firmom z branży nieruchomości, konsultingu i usług", "Klientom indywidualnym potrzebującym wyjaśnienia źródła środków"],
    processTitle: "Jak pracujemy",
    process: [["Wstępna analiza", "Przesyłasz opis sprawy, profil firmy lub zapytanie compliance."], ["Analiza dokumentów", "Sprawdzamy fakty, logikę transakcji, dostępne dokumenty oraz potencjalne luki compliance."], ["Przygotowanie dokumentów", "Przygotowujemy uporządkowany pakiet compliance dopasowany do Twojej sytuacji."], ["Finalne przekazanie", "Otrzymujesz jasne dokumenty gotowe do użytku wewnętrznego lub przekazania odpowiedniej instytucji."]],
    aboutTitle: "O AML Bridge EU",
    aboutText: "AML Bridge EU to praktyczna firma compliance consultancy skoncentrowana na dokumentacji AML, sprawach crypto compliance, wyjaśnieniach Source of Funds oraz przygotowaniu do banków/EMI dla klientów w Polsce i całej UE.",
    trust: ["Podejście dokumentacyjne", "Jasna komunikacja", "Materiały indywidualne", "Crypto compliance focus", "AML training background", "Wsparcie w UE"],
    faqTitle: "FAQ",
    faq: [["Czy gwarantujecie akceptację przez bank lub odblokowanie konta?", "Nie. Przygotowujemy dokumenty i zapewniamy wsparcie compliance, ale ostateczne decyzje podejmuje właściwa instytucja."], ["Czy pracujecie z klientami indywidualnymi?", "Tak, szczególnie w sprawach crypto-related Source of Funds oraz bank compliance."], ["Czy działacie tylko w Polsce?", "Koncentrujemy się na Polsce i UE, w zależności od konkretnej sprawy."], ["Czy dokumenty są indywidualne?", "Tak. Dokumenty są przygotowywane na podstawie rzeczywistych okoliczności klienta, modelu biznesowego i profilu ryzyka."]],
    contactTitle: "Poproś o konsultację",
    contactText: "Krótko opisz, jakiego wsparcia AML lub compliance potrzebujesz.",
    form: ["Imię i nazwisko", "Email", "Telegram / WhatsApp", "Kraj", "Rodzaj sprawy", "Krótki opis"],
    send: "Wyślij zapytanie",
    disclaimer: "AML Bridge EU świadczy usługi AML i compliance consulting, documentation support oraz practical advisory services. Nie świadczymy usług prawnych ani podatkowych i nie gwarantujemy akceptacji przez banki, giełdy kryptowalut, instytucje płatnicze ani regulatorów. Ostateczne decyzje zawsze podejmuje właściwa instytucja.",
  },
};

const icons = [ShieldCheck, FileText, Building2, SearchCheck];

export default function AMLBridgeEUWebsite() {
  const [lang, setLang] = useState("en");
  const t = content[lang];
  const p = pricing[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-950 text-white shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">AML Bridge EU</div>
              <div className="text-xs text-slate-500">Compliance Support</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            {t.nav.map((item, idx) => (
              <a key={item} href={["#services", "#pricing", "#process", "#about", "#faq", "#contact"][idx]} className="hover:text-emerald-800">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {["en", "ua", "pl"].map((x) => (
              <button key={x} onClick={() => setLang(x)} className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${lang === x ? "bg-emerald-950 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{x}</button>
            ))}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-950">
              <Globe2 size={16} /> {t.badge}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-emerald-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-900">{t.heroCta}</a>
              <p className="text-sm font-medium text-slate-500">{t.heroNote}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-2xl shadow-slate-200/80">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-500">Compliance package</div>
                  <div className="text-2xl font-bold text-slate-950">AML Review</div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-900"><SearchCheck /></div>
              </div>
              {t.services.slice(0, 4).map((s, i) => (
                <div key={s[0]} className="flex items-start gap-3 border-t border-slate-100 py-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-700" size={18} />
                  <div>
                    <div className="font-semibold text-slate-950">{s[0]}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-500">{s[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.servicesTitle}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.servicesSubtitle}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.services.map((s, i) => {
            const Icon = icons[i];
            return <div key={s[0]} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-900"><Icon /></div>
              <h3 className="text-lg font-bold">{s[0]}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s[1]}</p>
            </div>
          })}
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{p.title}</h2>
            <p className="mt-4 text-lg text-slate-600">{p.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.plans.map((plan) => <div key={plan[0]} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">{plan[0]}</h3>
              <div className="mt-4 text-2xl font-black text-emerald-950">{plan[1]}</div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{plan[2]}</p>
            </div>)}
          </div>
          <p className="mt-6 text-sm text-slate-500">{p.note}</p>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.whoTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.who.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-sm leading-6 text-emerald-50"><CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={18} />{item}</div>)}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.processTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {t.process.map((p, i) => <div key={p[0]} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{i + 1}</div>
            <h3 className="font-bold">{p[0]}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{p[1]}</p>
          </div>)}
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.aboutText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.trust.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-700">{item}</div>)}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8 space-y-4">
          {t.faq.map((f) => <details key={f[0]} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold"><span>{f[0]}</span><ChevronDown className="transition group-open:rotate-180" /></summary>
            <p className="mt-4 leading-7 text-slate-600">{f[1]}</p>
          </details>)}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t.contactText}</p>
            <div className="mt-8 flex items-center gap-3 text-slate-300"><MessageCircle className="text-emerald-300" /> contact@amlbridge.eu</div>
          </div>
          <form className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {t.form.slice(0, 5).map((label) => <label key={label} className="text-sm font-semibold text-slate-600">{label}<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-800" /></label>)}
              <label className="text-sm font-semibold text-slate-600 sm:col-span-2">{t.form[5]}<textarea rows={5} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-800" /></label>
            </div>
            <button type="button" className="mt-5 w-full rounded-2xl bg-emerald-950 px-6 py-4 text-sm font-bold text-white hover:bg-emerald-900">{t.send}</button>
          </form>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 text-sm text-slate-500">
        <div className="mx-auto max-w-7xl">
          <div className="font-bold text-slate-900">AML Bridge EU</div>
          <p className="mt-3 max-w-4xl leading-6">{t.disclaimer}</p>
          <div className="mt-6 border-t border-slate-200 pt-6">© 2026 AML Bridge EU. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
