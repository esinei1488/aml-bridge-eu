import React, { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Building2,
  SearchCheck,
  Globe2,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Landmark,
  LockKeyhole,
  BadgeCheck,
  WalletCards,
  Sparkles,
  Mail,
  CalendarDays,
  Scale,
  FileCheck2,
  CircleDollarSign,
  Layers3,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

const pricing = {
  en: {
    title: "Premium pricing",
    subtitle: "Case-based pricing for clients who need structured compliance documents, clear explanations, and practical support.",
    note: "Final pricing depends on complexity, urgency, number of entities, transaction volume, and the available documentation.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Exchange review response, source of funds explanation, transaction clarification, and document checklist."],
      ["Source of Funds Package", "€1,500 - €4,500", "Structured SOF/SOW explanation with document map, timeline, transaction logic, and final client statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach, and internal controls."],
      ["Bank / EMI Onboarding", "€2,500 - €7,500", "Business model description, transaction flow explanation, SOF documents, and risk mitigation narrative."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Review of AML framework, gap analysis, key risk findings, and written recommendations."],
      ["Monthly Compliance Support", "from €2,500 / month", "Ongoing document support, client risk reviews, internal procedures, and compliance response assistance."],
    ],
  },
  ua: {
    title: "Преміальна вартість",
    subtitle: "Case-based pricing для клієнтів, яким потрібні структуровані compliance-документи, чіткі пояснення та практична підтримка.",
    note: "Фінальна вартість залежить від складності, терміновості, кількості компаній, обсягу транзакцій та доступних документів.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Відповідь на запит біржі, пояснення походження коштів, transaction clarification та список документів."],
      ["Source of Funds Package", "€1,500 - €4,500", "Структуроване SOF/SOW пояснення з картою документів, timeline, логікою транзакцій та фінальним statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach та internal controls."],
      ["Bank / EMI Onboarding", "€2,500 - €7,500", "Опис бізнес-моделі, transaction flow explanation, SOF documents та risk mitigation narrative."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Перевірка AML framework, gap analysis, risk findings та письмові рекомендації."],
      ["Monthly Compliance Support", "від €2,500 / місяць", "Постійна підтримка з документами, client risk reviews, internal procedures та compliance responses."],
    ],
  },
  pl: {
    title: "Cennik premium",
    subtitle: "Case-based pricing dla klientów, którzy potrzebują uporządkowanych dokumentów compliance, jasnych wyjaśnień i praktycznego wsparcia.",
    note: "Ostateczna cena zależy od złożoności, pilności, liczby podmiotów, wolumenu transakcji i dostępnych dokumentów.",
    plans: [
      ["Crypto Compliance Response", "€750 - €2,500", "Odpowiedź na zapytanie giełdy, wyjaśnienie źródła środków, transaction clarification i lista dokumentów."],
      ["Source of Funds Package", "€1,500 - €4,500", "Uporządkowane wyjaśnienie SOF/SOW z mapą dokumentów, timeline, logiką transakcji i końcowym statement."],
      ["AML Policy Package", "€2,000 - €6,000", "AML/KYC policy, CDD/EDD procedure, sanctions screening procedure, risk-based approach i internal controls."],
      ["Bank / EMI Onboarding", "€2,500 - €7,500", "Opis modelu biznesowego, transaction flow explanation, SOF documents i risk mitigation narrative."],
      ["AML Audit / Health Check", "€3,000 - €9,000", "Przegląd AML framework, gap analysis, risk findings oraz pisemne rekomendacje."],
      ["Monthly Compliance Support", "od €2,500 / miesiąc", "Stałe wsparcie dokumentacyjne, client risk reviews, internal procedures i compliance responses."],
    ],
  },
};

const content = {
  en: {
    nav: ["Services", "Pricing", "Process", "About", "FAQ", "Contact"],
    badge: "EU-focused AML & crypto compliance boutique",
    heroTitle: "AML & Crypto Compliance Support for EU Clients",
    heroText: "AML Bridge EU helps businesses and individuals prepare structured AML documentation, respond to bank and crypto exchange reviews, explain source of funds, and strengthen compliance readiness.",
    heroCta: "Request a consultation",
    heroAlt: "View services",
    heroNote: "AML policies • Source of funds packages • Bank / EMI onboarding • Crypto compliance responses",
    metrics: [["2", "AML certificates"], ["45+", "CPD hours"], ["EU", "Client focus"]],
    servicesTitle: "High-value compliance support",
    servicesSubtitle: "Built for real AML, banking, fintech, and crypto compliance cases.",
    caseTitle: "Real case examples",
    caseText: "Typical situations where structured AML documentation and clear compliance explanations can help reduce friction with banks, EMIs, and crypto platforms.",
    cases: [["Frozen crypto exchange account", "Preparing a clear response package for an exchange review, including source of funds explanation, transaction logic, and supporting documents."], ["Source of Funds request", "Building a structured SOF/SOW package with timeline, evidence map, bank statements, exchange records, and client statement."], ["Bank compliance review", "Explaining business activity, expected transaction flows, counterparties, risk controls, and document trail."], ["EMI onboarding", "Preparing a business profile, compliance narrative, AML/KYC materials, and transaction flow explanation for onboarding teams."], ["AML policy package", "Drafting AML/KYC policy, CDD/EDD procedure, sanctions screening process, and internal control documentation."], ["High-risk transfer explanation", "Organizing facts and evidence around large transfers, crypto-to-fiat conversion, business income, or international payments."]],
    services: [
      ["Crypto Compliance Support", "Support with exchange reviews, source of funds explanations, transaction history clarification, and document preparation.", WalletCards],
      ["AML Policy Development", "AML/KYC policies, risk-based procedures, CDD/EDD, sanctions screening, and internal controls.", FileText],
      ["Bank / EMI Preparation", "Business activity descriptions, transaction flow explanations, SOF documentation, and response packages.", Landmark],
      ["AML Audit / Health Check", "Review of current AML framework, gap analysis, risk findings, and practical recommendations.", SearchCheck],
    ],
    trustTitle: "Built for serious compliance cases",
    trustText: "Premium AML documentation support for clients who need clarity, structure, and defensible explanations.",
    trustCards: [["Certification background", "AML Foundations and Senior Specialist training with CPD hours.", BadgeCheck], ["Document-first approach", "Clear files, timelines, evidence maps, and structured explanations.", FileCheck2], ["Crypto-aware support", "Source of funds, transaction trails, exchange reviews, and wallet logic.", LockKeyhole], ["EU business focus", "Support for clients dealing with banks, EMIs, exchanges, and compliance teams.", Globe2]],
    whoTitle: "Who we help",
    who: ["Crypto users and companies facing compliance reviews", "Fintech and payment-related businesses", "Companies preparing for bank or EMI onboarding", "Businesses needing AML/KYC documentation", "Real estate, consulting, and service businesses", "Individuals needing structured source of funds explanations"],
    processTitle: "A structured process",
    process: [["Initial review", "You send the case details, business profile, or compliance request."], ["Document mapping", "We review facts, transaction logic, available evidence, and missing documents."], ["Package preparation", "We prepare tailored compliance documents and clear explanations."], ["Final delivery", "You receive a structured package ready for internal use or submission."]],
    certTitle: "AML training & certification background",
    certText: "AML Bridge EU is built on practical AML training, including Anti-Money Laundering Foundations and Certified Anti-Money Laundering Senior Specialist certification. These certifications support our document-focused consulting approach but do not represent a government license or regulator approval.",
    aboutTitle: "Practical compliance support, not theory",
    aboutText: "We focus on documents, explanations, and risk logic that banks, EMIs, crypto platforms, and compliance teams can actually review. Our role is to help clients organize their facts, prepare clear materials, and reduce avoidable compliance friction.",
    trust: ["Document-focused", "EU-oriented", "Crypto-aware", "Risk-based", "Clear language", "Premium support"],
    faqTitle: "FAQ",
    faq: [["Do you guarantee bank approval or account unfreezing?", "No. We prepare documents and provide compliance support, but final decisions are made by the relevant institution."], ["Do you provide legal or tax advice?", "No. We provide compliance consulting and documentation support. Legal and tax advice should be obtained from qualified professionals."], ["Do you work with individuals?", "Yes, especially in crypto-related source of funds and bank compliance cases."], ["Are documents tailored?", "Yes. Documents are prepared based on the client’s actual circumstances, business model, transaction logic, and risk profile."]],
    contactTitle: "Request a confidential review",
    contactText: "Send a short description of your case. We will review the situation and explain what type of compliance package may be needed.",
    form: ["Name", "Email", "Telegram / WhatsApp", "Country", "Type of case", "Short description"],
    send: "Send request",
    quickCta: "Need urgent compliance support?",
    quickCtaText: "For exchange freezes, bank reviews, or source of funds requests, send a short case summary and available documents.",
    disclaimer: "AML Bridge EU provides AML and compliance consulting, documentation support, and practical advisory services. We do not provide legal advice, tax advice, or guarantee approval by banks, crypto exchanges, payment institutions, or regulators. Final decisions are always made by the relevant institution.",
  },
  ua: {
    nav: ["Послуги", "Вартість", "Процес", "Про нас", "FAQ", "Контакти"],
    badge: "EU-focused AML & crypto compliance boutique",
    heroTitle: "AML та Crypto Compliance підтримка для клієнтів y ЄС",
    heroText: "AML Bridge EU допомагає бізнесу та приватним клієнтам готувати структуровані AML-документи, відповідати банкам and криптобіржам, пояснювати походження коштів та покращувати compliance readiness.",
    heroCta: "Отримати консультацію",
    heroAlt: "Переглянути послуги",
    heroNote: "AML-політики • Source of Funds пакети • Bank / EMI onboarding • Crypto compliance responses",
    metrics: [["2", "AML сертифікати"], ["45+", "CPD годин"], ["EU", "Фокус клієнтів"]],
    servicesTitle: "High-value compliance support",
    servicesSubtitle: "Для реальних AML, banking, fintech та crypto compliance кейсів.",
    caseTitle: "Приклади реальних кейсів",
    caseText: "Типові ситуації, де структурована AML-документація та чіткі compliance explanations можуть зменшити friction з банками, EMI та crypto platforms.",
    cases: [["Frozen crypto exchange account", "Підготовка response package для exchange review: Source of Funds explanation, transaction logic та supporting documents."], ["Source of Funds request", "Створення structured SOF/SOW package з timeline, evidence map, bank statements, exchange records та client statement."], ["Bank compliance review", "Пояснення business activity, expected transaction flows, counterparties, risk controls та document trail."], ["EMI onboarding", "Підготовка business profile, compliance narrative, AML/KYC materials та transaction flow explanation."], ["AML policy package", "Підготовка AML/KYC policy, CDD/EDD procedure, sanctions screening process та internal control documentation."], ["High-risk transfer explanation", "Організація фактів і доказів щодо large transfers, crypto-to-fiat conversion, business income або international payments."]],
    services: [
      ["Crypto Compliance Support", "Допомога з exchange reviews, Source of Funds поясненнями, transaction history clarification та підготовкою документів.", WalletCards],
      ["Розробка AML Policy", "AML/KYC policies, risk-based procedures, CDD/EDD, sanctions screening та internal controls.", FileText],
      ["Bank / EMI Preparation", "Опис бізнесу, transaction flow explanations, SOF documentation та response packages.", Landmark],
      ["AML Audit / Health Check", "Перевірка AML framework, gap analysis, risk findings та практичні рекомендації.", SearchCheck],
    ],
    trustTitle: "Для серйозних compliance кейсів",
    trustText: "Преміальна AML documentation support для клієнтів, яким потрібні чіткість, структура та defensible explanations.",
    trustCards: [["Certification background", "AML Foundations та Senior Specialist training з CPD hours.", BadgeCheck], ["Document-first approach", "Clear files, timelines, evidence maps та structured explanations.", FileCheck2], ["Crypto-aware support", "Source of funds, transaction trails, exchange reviews та wallet logic.", LockKeyhole], ["EU business focus", "Підтримка клієнтів у взаємодії з banks, EMIs, exchanges та compliance teams.", Globe2]],
    whoTitle: "Кому ми допомагаємо",
    who: ["Crypto users та компаніям із compliance reviews", "Fintech та payment-related businesses", "Компаніям перед bank чи EMI onboarding", "Бізнесам, яким потрібна AML/KYC документація", "Real estate, consulting та service businesses", "Приватним клієнтам з Source of Funds поясненнями"],
    processTitle: "Структурований процес",
    process: [["Первинний аналіз", "Ви надсилаєте опис кейсу, бізнес-профіль or compliance-запит."], ["Document mapping", "Ми перевіряємо факти, логіку транзакцій, докази та відсутні документи."], ["Підготовка пакета", "Ми готуємо індивідуальні compliance-документи та зрозумілі пояснення."], ["Фінальна передача", "Ви отримуєте structured package для внутрішнього використання або подання."]],
    certTitle: "AML training & certification background",
    certText: "AML Bridge EU базується на практичному AML training, включаючи Anti-Money Laundering Foundations та Certified Anti-Money Laundering Senior Specialist certification. Ці сертифікати підтримують наш document-focused consulting approach, але не є державною ліцензією або regulator approval.",
    aboutTitle: "Практична compliance підтримка, не теорія",
    aboutText: "Ми фокусуємося на документах, поясненнях та risk logic, які банки, EMIs, crypto platforms та compliance teams можуть реально перевірити.",
    trust: ["Фокус на документах", "EU-oriented", "Crypto-aware", "Risk-based", "Зрозуміла мова", "Premium support"],
    faqTitle: "FAQ",
    faq: [["Ви гарантуєте approval банку чи розблокування акаунта?", "Ми не готуємо документи та надаємо compliance support, але остаточне рішення приймає відповідна установа."], ["Ви надаєте юридичні або податкові консультації?", "Ні. Ми надаємо compliance consulting та documentation support. Legal/tax advice має надаватися кваліфікованими спеціалістами."], ["Ви працюєте з приватними клієнтами?", "Так, особливо у crypto-related Source of Funds та bank compliance cases."], ["Документи індивідуальні?", "Так. Документи готуються на основі реальних обставин, бізнес-моделі, transaction logic та risk profile."]],
    contactTitle: "Отримати конфіденційний review",
    contactText: "Надішліть короткий опис кейсу. Ми перевіримо ситуацію та пояснимо, який compliance package може бути потрібен.",
    form: ["Імʼя", "Email", "Telegram / WhatsApp", "Країна", "Тип кейсу", "Короткий опис"],
    send: "Надіслати запит",
    quickCta: "Потрібна термінова compliance підтримка?",
    quickCtaText: "Для exchange freezes, bank reviews чи Source of Funds requests надішліть короткий опис кейсу та доступні документи.",
    disclaimer: "AML Bridge EU надає AML та compliance consulting, documentation support and practical advisory services. Ми не надаємо юридичні або податкові консультації та не гарантуємо approval з боку банків, криптобірж, платіжних установ або регуляторів. Остаточне рішення завжди приймає відповідна установа.",
  },
  pl: {
    nav: ["Usługi", "Cennik", "Proces", "O nas", "FAQ", "Kontakt"],
    badge: "EU-focused AML & crypto compliance boutique",
    heroTitle: "Wsparcie AML i Crypto Compliance dla klientów w UE",
    heroText: "AML Bridge EU pomaga firmom i klientom indywidualnym przygotować uporządkowane dokumenty AML, odpowiedzi dla banków i giełd kryptowalut, wyjaśnienia źródła środków oraz poprawić compliance readiness.",
    heroCta: "Poproś o konsultację",
    heroAlt: "Zobacz usługi",
    heroNote: "Polityki AML • Pakiety Source of Funds • Bank / EMI onboarding • Crypto compliance responses",
    metrics: [["2", "Certyfikaty AML"], ["45+", "Godzin CPD"], ["EU", "Fokus klientów"]],
    servicesTitle: "High-value compliance support",
    servicesSubtitle: "Dla realnych spraw AML, banking, fintech i crypto compliance.",
    caseTitle: "Przykłady realnych spraw",
    caseText: "Typowe sytuacje, w których uporządkowana dokumentacja AML i jasne wyjaśnienia compliance mogą ograniczyć friction z bankami, EMI i crypto platforms.",
    cases: [["Frozen crypto exchange account", "Przygotowanie response package dla exchange review: Source of Funds explanation, transaction logic i supporting documents."], ["Source of Funds request", "Przygotowanie structured SOF/SOW package z timeline, evidence map, bank statements, exchange records i client statement."], ["Bank compliance review", "Wyjaśnienie business activity, expected transaction flows, counterparties, risk controls i document trail."], ["EMI onboarding", "Przygotowanie business profile, compliance narrative, AML/KYC materials i transaction flow explanation."], ["AML policy package", "Przygotowanie AML/KYC policy, CDD/EDD procedure, sanctions screening process i internal control documentation."], ["High-risk transfer explanation", "Uporządkowanie faktów i dowodów dotyczących large transfers, crypto-to-fiat conversion, business income lub international payments."]],
    services: [
      ["Crypto Compliance Support", "Wsparcie przy exchange reviews, Source of Funds explanations, transaction history clarification i przygotowaniu dokumentów.", WalletCards],
      ["Opracowanie AML Policy", "AML/KYC policies, risk-based procedures, CDD/EDD, sanctions screening i internal controls.", FileText],
      ["Bank / EMI Preparation", "Opis działalności, transaction flow explanations, SOF documentation i response packages.", Landmark],
      ["AML Audit / Health Check", "Przegląd AML framework, gap analysis, risk findings i praktyczne rekomendacje.", SearchCheck],
    ],
    trustTitle: "Dla poważnych spraw compliance",
    trustText: "Premium AML documentation support dla klientów, którzy potrzebują jasności, struktury i defensible explanations.",
    trustCards: [["Certification background", "AML Foundations i Senior Specialist training z CPD hours.", BadgeCheck], ["Document-first approach", "Clear files, timelines, evidence maps i structured explanations.", FileCheck2], ["Crypto-aware support", "Source of funds, transaction trails, exchange reviews i wallet logic.", LockKeyhole], ["EU business focus", "Wsparcie klientów w kontaktach z banks, EMIs, exchanges i compliance teams.", Globe2]],
    whoTitle: "Komu pomagamy",
    who: ["Użytkownikom i firmom crypto z compliance reviews", "Firmom fintech i payment-related", "Firmom przed bank lub EMI onboarding", "Biznesom potrzebującym dokumentacji AML/KYC", "Firmom real estate, consulting i service", "Klientom indywidualnym z Source of Funds explanations"],
    processTitle: "Uporządkowany proces",
    process: [["Wstępna analiza", "Przesyłasz opis sprawy, profil firmy lub zapytanie compliance."], ["Document mapping", "Sprawdzamy fakty, logikę transakcji, dowody i brakujące dokumenty."], ["Przygotowanie pakietu", "Przygotowujemy indywidualne dokumenty compliance i jasne wyjaśnienia."], ["Finalne przekazanie", "Otrzymujesz structured package do użytku wewnętrznego lub przekazania instytucji."]],
    certTitle: "AML training & certification background",
    certText: "AML Bridge EU bazuje na praktycznym AML training, w tym Anti-Money Laundering Foundations oraz Certified Anti-Money Laundering Senior Specialist certification. Certyfikaty wspierają nasze podejście document-focused consulting, ale nie stanowią licencji państwowej ani regulator approval.",
    aboutTitle: "Praktyczne wsparcie compliance, nie teoria",
    aboutText: "Koncentrujemy się na dokumentach, wyjaśnieniach i risk logic, które banki, EMIs, crypto platforms i compliance teams mogą realnie przeanalizować.",
    trust: ["Dokumentacyjnie", "EU-oriented", "Crypto-aware", "Risk-based", "Jasny język", "Premium support"],
    faqTitle: "FAQ",
    faq: [["Czy gwarantujecie akceptację przez bank lub odblokowanie konta?", "Nie. Przygotowujemy dokumenty i zapewniamy wsparcie compliance, ale ostateczne decyzje podejmuje właściwa instytucja."], ["Czy świadczycie porady prawne lub podatkowe?", "Nie. Świadczymy compliance consulting i documentation support. Porady prawne/podatkowe powinny być uzyskane od kwalifikowanych specjalistów."], ["Czy pracujecie z klientami indywidualnymi?", "Tak, szczególnie w sprawach crypto-related Source of Funds oraz bank compliance."], ["Czy dokumenty są indywidualne?", "Tak. Dokumenty są przygotowywane na podstawie rzeczywistych okoliczności, modelu biznesowego, transaction logic i risk profile."]],
    contactTitle: "Poproś o poufny review",
    contactText: "Wyślij krótki opis sprawy. Sprawdzimy sytuację i wyjaśnimy, jaki compliance package może być potrzebny.",
    form: ["Imię i nazwisko", "Email", "Telegram / WhatsApp", "Kraj", "Rodzaj sprawy", "Krótki opis"],
    send: "Wyślij zapytanie",
    quickCta: "Potrzebujesz pilnego wsparcia compliance?",
    quickCtaText: "Dla exchange freezes, bank reviews lub Source of Funds requests wyślij krótki opis sprawy i dostępne dokumenty.",
    disclaimer: "AML Bridge EU świadczy usługi AML i compliance consulting, documentation support oraz practical advisory services. Nie świadczymy usług prawnych ani podatkowych i nie gwarantujemy akceptacji przez banki, giełdy kryptowalut, instytucje płatnicze ani regulatorów. Ostateczne decyzje zawsze podejmuje właściwa instytucja.",
  },
};

const floating = [
  { icon: ShieldCheck, label: "AML" },
  { icon: WalletCards, label: "SOF" },
  { icon: Landmark, label: "BANK" },
  { icon: LockKeyhole, label: "EDD" },
];

function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];
  const p = pricing[lang];

  return (
    <div className="min-h-screen bg-[#061816] text-white selection:bg-emerald-300 selection:text-emerald-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-70">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.09)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061816]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="AML Bridge EU logo" className="h-12 w-12 rounded-2xl object-cover shadow-xl shadow-emerald-950/20 ring-1 ring-white/20" />
            <div>
              <div className="text-lg font-black tracking-tight">AML Bridge EU</div>
              <div className="text-xs text-emerald-100/70">AML • Crypto • Banking</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-emerald-50/70 lg:flex">
            {t.nav.map((item, idx) => (
              <a key={item} href={["#services", "#pricing", "#process", "#about", "#faq", "#contact"][idx]} className="transition hover:text-white">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-sm">
            {["en", "ua", "pl"].map((x) => (
              <button key={x} onClick={() => setLang(x)} className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition ${lang === x ? "bg-emerald-300 text-emerald-950" : "text-white/60 hover:bg-white/10"}`}>{x}</button>
            ))}
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-16 md:grid-cols-[1.08fr_0.92fr] md:pb-24 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 shadow-2xl shadow-emerald-900/20">
              <Sparkles size={16} /> {t.badge}
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-white md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/70 md:text-xl">{t.heroText}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-6 py-4 text-sm font-black text-emerald-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-white">
                {t.heroCta} <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 text-sm font-bold text-white/90 transition hover:bg-white/10">{t.heroAlt}</a>
            </div>
            <p className="mt-5 text-sm font-medium text-emerald-100/60">{t.heroNote}</p>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {t.metrics.map((m) => (
                <div key={m[1]} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                  <div className="text-2xl font-black text-emerald-200">{m[0]}</div>
                  <div className="mt-1 text-xs font-medium text-white/55">{m[1]}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative hidden md:block">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/25 via-white/10 to-cyan-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[2rem] border border-white/10 bg-[#0b211f]/90 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-emerald-100/60">Compliance package</div>
                    <div className="mt-1 text-3xl font-black">AML Review</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-300 p-3 text-emerald-950"><LockKeyhole /></div>
                </div>
                <div className="space-y-3">
                  {t.services.map((s) => {
                    const Icon = s[2];
                    return (
                      <div key={s[0]} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-xl bg-emerald-300/10 p-2 text-emerald-200"><Icon size={18} /></div>
                          <div>
                            <div className="font-bold text-white">{s[0]}</div>
                            <div className="mt-1 text-sm leading-6 text-white/55">{s[1]}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-10">
          <div className="grid gap-4 md:grid-cols-4">
            {t.trustCards.map((card) => {
              const Icon = card[2];
              return (
                <div key={card[0]} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-300/15 text-emerald-200"><Icon size={20} /></div>
                  <div className="font-black text-white">{card[0]}</div>
                  <div className="mt-2 text-sm leading-6 text-white/55">{card[1]}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.servicesTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/60">{t.servicesSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.services.map((s) => {
              const Icon = s[2];
              return (
                <div key={s[0]} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.09]">
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-300 p-3 text-emerald-950 shadow-lg shadow-emerald-500/20"><Icon /></div>
                  <h3 className="text-lg font-black">{s[0]}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{s[1]}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
              <Layers3 size={16} /> Case examples
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.caseTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/60">{t.caseText}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.cases.map((item) => (
              <div key={item[0]} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.09]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/15 text-emerald-200">
                  <FileCheck2 size={21} />
                </div>
                <h3 className="text-lg font-black text-white">{item[0]}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item[1]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.04] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.trustTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/55">{t.trustText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {t.who.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#071f1c]/70 p-4 text-sm leading-6 text-white/70">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">{p.title}</h2>
              <p className="mt-4 text-lg leading-8 text-white/60">{p.subtitle}</p>
            </div>
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-5 py-4 text-sm font-bold text-emerald-100">
              <CircleDollarSign className="mb-2 text-emerald-300" /> Premium boutique positioning
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.plans.map((plan, idx) => (
              <div key={plan[0]} className={`relative overflow-hidden rounded-[1.75rem] border p-6 shadow-2xl backdrop-blur-xl ${idx === 1 ? "border-emerald-300/50 bg-emerald-300 text-emerald-950" : "border-white/10 bg-white/[0.06] text-white"}`}>
                {idx === 1 && <div className="absolute right-5 top-5 rounded-full bg-emerald-950 px-3 py-1 text-xs font-black uppercase text-emerald-100">Most requested</div>}
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${idx === 1 ? "bg-emerald-950/10" : "bg-white/10"}`}>Premium</div>
                <h3 className="pr-16 text-xl font-black">{plan[0]}</h3>
                <div className="mt-5 text-3xl font-black tracking-tight">{plan[1]}</div>
                <p className={`mt-5 text-sm leading-6 ${idx === 1 ? "text-emerald-950/70" : "text-white/55"}`}>{plan[2]}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/45">{p.note}</p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-8">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300 to-cyan-100 p-8 text-emerald-950 shadow-2xl shadow-emerald-950/20 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">{t.quickCta}</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-emerald-950/70">{t.quickCtaText}</p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-950 px-6 py-4 text-sm font-black text-white transition hover:bg-black">
                {t.heroCta} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-white/[0.04] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.processTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {t.process.map((step, i) => (
                <div key={step[0]} className="rounded-[1.75rem] border border-white/10 bg-[#071f1c]/70 p-6">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-300 text-sm font-black text-emerald-950">{i + 1}</div>
                  <h3 className="font-black">{step[0]}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
                <BadgeCheck size={16} /> Certifications & Trust
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">International AML Certifications</h2>
              <p className="mt-5 text-lg leading-8 text-white/60">
                AML Bridge EU is supported by AML training in anti-money laundering foundations, senior AML specialist topics, compliance controls, source of funds logic, sanctions screening, and crypto-related review workflows.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl"
              >
                <img src="/Cert1.jpg" alt="Certified Anti-Money Laundering Senior Specialist certificate" className="w-full border-b border-white/10 object-cover" />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-white">Certified Anti-Money Laundering Senior Specialist</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Advanced AML certification with 45 CPD hours, supporting work on AML frameworks, risk-based controls, source of funds documentation, transaction logic, and crypto compliance reviews.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">45 CPD Hours</span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Senior AML</span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Compliance Controls</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl"
              >
                <img src="/Cert2.jpg" alt="Certified in Anti-Money Laundering Foundations certificate" className="w-full border-b border-white/10 object-cover" />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-white">Certified in Anti-Money Laundering Foundations</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    AML foundations certification with 10 CPD hours, covering customer due diligence, screening logic, AML documentation, risk controls, and source of funds basics.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">10 CPD Hours</span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/70">AML Foundations</span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/70">CDD / KYC</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
              <BadgeCheck size={16} /> {t.certTitle}
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.aboutTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">{t.aboutText}</p>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm leading-7 text-white/55">{t.certText}</p>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {t.trust.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 font-black text-white/85">{item}</div>
            ))}
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5 sm:col-span-2">
              <div className="flex items-center gap-3 font-black text-emerald-100"><Clock3 className="text-emerald-300" /> Confidential case review</div>
              <p className="mt-2 text-sm leading-6 text-white/55">Initial review can be used to understand what documents are missing before approaching a bank, EMI, or exchange compliance team.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {t.faq.map((f) => (
              <details key={f[0]} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  <span>{f[0]}</span><ChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-white/55">{f[1]}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/60">{t.contactText}</p>
              <div className="mt-8 space-y-4 text-white/70">
                <a href="mailto:amlbridgeeu@gmail.com" className="flex items-center gap-3 transition hover:text-emerald-300"><Mail className="text-emerald-300" /> amlbridgeeu@gmail.com</a>
                <a href="tel:+19413028318" className="flex items-center gap-3 transition hover:text-emerald-300"><MessageCircle className="text-emerald-300" /> +1 (941) 302-8318</a>
                <a href="https://t.me/amlbridge" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-emerald-300"><MessageCircle className="text-emerald-300" /> Telegram: @amlbridge</a>
                <a href="https://www.linkedin.com/in/andrii-stopin-2264a6325" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-emerald-300"><CalendarDays className="text-emerald-300" /> LinkedIn: Andrii Stopin</a>
              </div>
            </div>
            <form action="https://formspree.io/f/mlgvogqv" method="POST" className="bg-white p-6 text-slate-950 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {t.form.slice(0, 5).map((label) => (
                  <label key={label} className="text-sm font-bold text-slate-600">
                    {label}
                    <input name={label.toLowerCase().replaceAll(" ", "_").replaceAll("/", "_")} required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-800 focus:bg-white" />
                  </label>
                ))}
                <label className="text-sm font-bold text-slate-600 sm:col-span-2">
                  {t.form[5]}
                  <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-800 focus:bg-white" />
                </label>
              </div>
              <input type="hidden" name="_subject" value="New AML Bridge EU inquiry" />
              <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-950 px-6 py-4 text-sm font-black text-white transition hover:bg-emerald-800">
                {t.send} <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-xs leading-5 text-slate-500">By submitting a request, you agree that AML Bridge EU may review your message for the purpose of responding to your inquiry.</p>
            </form>
          </div>
        </section>
      </main>

      <a href="#contact" className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-emerald-950 shadow-2xl shadow-emerald-950/30 transition hover:bg-white md:flex">
        <MessageCircle size={18} /> Contact
      </a>

      <footer className="relative border-t border-white/10 px-5 py-8 text-sm text-white/45">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 font-black text-white">
            <img src="/logo.png" alt="AML Bridge EU logo" className="h-8 w-8 rounded-xl object-cover" /> AML Bridge EU
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-white/55">
            <span className="rounded-full border border-white/10 px-3 py-1">Privacy Policy</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Terms</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Cookies</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Disclaimer</span>
            <a href="mailto:amlbridgeeu@gmail.com" className="rounded-full border border-white/10 px-3 py-1 transition hover:text-emerald-300">amlbridgeeu@gmail.com</a>
            <a href="https://t.me/amlbridge" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1 transition hover:text-emerald-300">@amlbridge</a>
          </div>
          <p className="mt-4 max-w-5xl leading-6">{t.disclaimer}</p>
          <div className="mt-6 border-t border-white/10 pt-6">© 2026 AML Bridge EU. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
