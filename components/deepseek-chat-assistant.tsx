// Add a client directive at the top of the file if it doesn't already have one
// This ensures the component only runs on the client side
"use client"

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Check, ChevronDown, ChevronUp } from "lucide-react"

// Add language detection and translation types
type Language = "en" | "ar" | "fr"
type TranslatedResponses = Record<Language, Record<string, string>>

type Message = {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
  html?: boolean
  language?: Language
}

// Language metadata for improved UI
type LanguageOption = {
  code: Language
  name: string
  nativeName: string
  flag: string
  direction: "ltr" | "rtl"
}

const languages: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    direction: "ltr",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    direction: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
    direction: "rtl",
  },
]

// Simple language detection function
const detectLanguage = (text: string): Language => {
  // Arabic character range check
  if (/[\u0600-\u06FF]/.test(text)) {
    return "ar"
  }

  // French detection - check for common French words and accented characters
  const frenchPatterns = /\b(bonjour|salut|merci|je|tu|nous|vous|comment|ça va|prix|services)\b|[éèêëàâäôöùûüÿçœæ]/i
  if (frenchPatterns.test(text)) {
    return "fr"
  }

  // Default to English
  return "en"
}

// Translated WhatsApp links with proper HTML
const whatsappLinks: Record<Language, string> = {
  en: '<a href="https://wa.me/15874296200" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium"><svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Click here to reach us on WhatsApp</a>',

  fr: '<a href="https://wa.me/15874296200" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium"><svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Cliquez ici pour nous contacter sur WhatsApp</a>',

  ar: '<a href="https://wa.me/15874296200" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium"><svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> انقر هنا للتواصل معنا عبر واتساب</a>',
}

// Multilingual responses for common queries
const translatedResponses: TranslatedResponses = {
  en: {
    greeting: `Hello! I'm the Black Layers AI assistant. How can I help you today? Feel free to ask about our services, process, or anything else related to our digital solutions.\n\nYou can also reach our team directly: ${whatsappLinks.en}`,

    pricing: `Our pricing varies based on project requirements. For a custom quote, please fill out our contact form or email us at contact@blacklayers.ca. We offer competitive rates for our white-label services and custom development work.\n\nYou can also reach us directly: ${whatsappLinks.en}`,

    services: `Black Layers specializes in white-label application development, custom web solutions, UI/UX design, and digital branding. Our team can build everything from simple websites to complex web applications tailored to your specific business needs.\n\nWant to discuss your project? ${whatsappLinks.en}`,

    contact: `You can reach our team at contact@blacklayers.ca, via our contact form on the website, or directly through WhatsApp:\n\n${whatsappLinks.en}\n\nWe typically respond to inquiries within 24 hours during business days.`,

    portfolio: `Our portfolio includes a diverse range of projects across various industries. We've developed e-commerce platforms, business management systems, marketing websites, and custom web applications. Each project is tailored to meet the specific needs and goals of our clients.\n\nInterested in discussing your project? ${whatsappLinks.en}`,

    timeline: `Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements.\n\nReady to discuss your timeline? ${whatsappLinks.en}`,

    process: `Our development process includes: 1) Initial consultation to understand your requirements, 2) Proposal and planning phase, 3) Design and prototyping, 4) Development and testing, 5) Launch and deployment, 6) Ongoing support and maintenance. We keep you involved throughout the entire process with regular updates and feedback sessions.\n\nWant to start the process? ${whatsappLinks.en}`,

    whitelabel: `Our white-label services allow you to offer our development solutions under your own brand. This is perfect for agencies and businesses that want to expand their service offerings without hiring additional staff. We handle the technical work while you maintain the client relationship.\n\nInterested in our white-label services? ${whatsappLinks.en}`,

    whatsapp: `You can reach us directly on WhatsApp:\n\n${whatsappLinks.en}\n\nOur team is available to discuss your project requirements and answer any questions you might have.`,

    default: `Thank you for your question. Black Layers specializes in custom web development and white-label solutions. For more specific information about your inquiry, please contact our team directly at contact@blacklayers.ca, fill out our contact form, or reach us on WhatsApp:\n\n${whatsappLinks.en}`,
  },

  fr: {
    greeting: `Bonjour ! Je suis l'assistant IA de Black Layers. Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser des questions sur nos services, notre processus ou tout autre sujet lié à nos solutions numériques.\n\nVous pouvez également contacter notre équipe directement : ${whatsappLinks.fr}`,

    pricing: `Nos tarifs varient en fonction des exigences du projet. Pour un devis personnalisé, veuillez remplir notre formulaire de contact ou nous envoyer un email à contact@blacklayers.ca. Nous offrons des tarifs compétitifs pour nos services en marque blanche et nos travaux de développement sur mesure.\n\nVous pouvez également nous contacter directement : ${whatsappLinks.fr}`,

    services: `Black Layers est spécialisé dans le développement d'applications en marque blanche, les solutions web personnalisées, la conception UI/UX et l'image de marque numérique. Notre équipe peut créer tout, des sites web simples aux applications web complexes adaptées à vos besoins spécifiques.\n\nVous souhaitez discuter de votre projet ? ${whatsappLinks.fr}`,

    contact: `Vous pouvez contacter notre équipe à contact@blacklayers.ca, via notre formulaire de contact sur le site web, ou directement via WhatsApp :\n\n${whatsappLinks.fr}\n\nNous répondons généralement aux demandes dans les 24 heures pendant les jours ouvrables.`,

    portfolio: `Notre portfolio comprend une gamme diversifiée de projets dans différents secteurs. Nous avons développé des plateformes e-commerce, des systèmes de gestion d'entreprise, des sites web marketing et des applications web personnalisées. Chaque projet est adapté pour répondre aux besoins et objectifs spécifiques de nos clients.\n\nIntéressé à discuter de votre projet ? ${whatsappLinks.fr}`,

    timeline: `Les délais des projets varient en fonction de la complexité et de l'étendue. Un site web simple peut prendre 2 à 4 semaines, tandis que des applications plus complexes peuvent prendre 2 à 3 mois ou plus. Nous vous fournirons un calendrier détaillé lors de notre consultation initiale en fonction de vos exigences spécifiques.\n\nPrêt à discuter de votre calendrier ? ${whatsappLinks.fr}`,

    process: `Notre processus de développement comprend : 1) Consultation initiale pour comprendre vos besoins, 2) Phase de proposition et de planification, 3) Conception et prototypage, 4) Développement et tests, 5) Lancement et déploiement, 6) Support et maintenance continus. Nous vous impliquons tout au long du processus avec des mises à jour régulières et des sessions de feedback.\n\nVous souhaitez démarrer le processus ? ${whatsappLinks.fr}`,

    whitelabel: `Nos services en marque blanche vous permettent d'offrir nos solutions de développement sous votre propre marque. C'est parfait pour les agences et les entreprises qui souhaitent élargir leur offre de services sans embaucher de personnel supplémentaire. Nous nous occupons du travail technique pendant que vous maintenez la relation client.\n\nIntéressé par nos services en marque blanche ? ${whatsappLinks.fr}`,

    whatsapp: `Vous pouvez nous contacter directement sur WhatsApp :\n\n${whatsappLinks.fr}\n\nNotre équipe est disponible pour discuter de vos besoins de projet et répondre à toutes vos questions.`,

    default: `Merci pour votre question. Black Layers est spécialisé dans le développement web personnalisé et les solutions en marque blanche. Pour des informations plus spécifiques sur votre demande, veuillez contacter notre équipe directement à contact@blacklayers.ca, remplir notre formulaire de contact, ou nous contacter sur WhatsApp :\n\n${whatsappLinks.fr}`,
  },

  ar: {
    greeting: `مرحباً! أنا مساعد Black Layers الذكي. كيف يمكنني مساعدتك اليوم؟ لا تتردد في السؤال عن خدماتنا، عملياتنا، أو أي شيء آخر متعلق بحلولنا الرقمية.\n\nيمكنك أيضاً التواصل مع فريقنا مباشرة: ${whatsappLinks.ar}`,

    pricing: `تختلف أسعارنا بناءً على متطلبات المشروع. للحصول على عرض سعر مخصص، يرجى ملء نموذج الاتصال الخاص بنا أو مراسلتنا عبر البريد الإلكتروني على contact@blacklayers.ca. نقدم أسعاراً تنافسية لخدماتنا ذات العلامة البيضاء وأعمال التطوير المخصصة.\n\nيمكنك أيضاً التواصل معنا مباشرة: ${whatsappLinks.ar}`,

    services: `تتخصص Black Layers في تطوير التطبيقات ذات العلامة البيضاء، وحلول الويب المخصصة، وتصميم واجهة المستخدم/تجربة المستخدم، والعلامات التجارية الرقمية. يمكن لفريقنا بناء كل شيء من مواقع الويب البسيطة إلى تطبيقات الويب المعقدة المصممة خصيصاً لتلبية احتياجات عملك المحددة.\n\nهل ترغب في مناقشة مشروعك؟ ${whatsappLinks.ar}`,

    contact: `يمكنك التواصل مع فريقنا على contact@blacklayers.ca، عبر نموذج الاتصال على موقعنا، أو مباشرة عبر واتساب:\n\n${whatsappLinks.ar}\n\nنحن عادة ما نرد على الاستفسارات في غضون 24 ساعة خلال أيام العمل.`,

    portfolio: `تتضمن محفظة أعمالنا مجموعة متنوعة من المشاريع عبر مختلف الصناعات. لقد قمنا بتطوير منصات التجارة الإلكترونية، وأنظمة إدارة الأعمال، ومواقع التسويق، وتطبيقات الويب المخصصة. كل مشروع مصمم لتلبية الاحتياجات والأهداف المحددة لعملائنا.\n\nهل أنت مهتم بمناقشة مشروعك؟ ${whatsappLinks.ar}`,

    timeline: `تختلف الجداول الزمنية للمشاريع حسب التعقيد والنطاق. قد يستغرق موقع ويب بسيط من 2 إلى 4 أسابيع، بينما قد تستغرق التطبيقات الأكثر تعقيداً من 2 إلى 3 أشهر أو أكثر. سنقدم لك جدولاً زمنياً مفصلاً خلال استشارتنا الأولية بناءً على متطلباتك المحددة.\n\nهل أنت مستعد لمناقشة جدولك الزمني؟ ${whatsappLinks.ar}`,

    process: `تتضمن عملية التطوير لدينا: 1) استشارة أولية لفهم متطلباتك، 2) مرحلة الاقتراح والتخطيط، 3) التصميم والنماذج الأولية، 4) التطوير والاختبار، 5) الإطلاق والنشر، 6) الدعم والصيانة المستمرة. نحرص على إشراكك طوال العملية بأكملها مع تحديثات منتظمة وجلسات للتعليقات.\n\nهل ترغب في بدء العملية؟ ${whatsappLinks.ar}`,

    whitelabel: `تتيح لك خدماتنا ذات العلامة البيضاء تقديم حلول التطوير الخاصة بنا تحت علامتك التجارية الخاصة. هذا مثالي للوكالات والشركات التي ترغب في توسيع عروض خدماتها دون توظيف موظفين إضافيين. نحن نتعامل مع العمل التقني بينما تحافظ أنت على علاقة العميل.\n\nهل أنت مهتم بخدماتنا ذات العلامة البيضاء؟ ${whatsappLinks.ar}`,

    whatsapp: `يمكنك التواصل معنا مباشرة على واتساب:\n\n${whatsappLinks.ar}\n\nفريقنا متاح لمناقشة متطلبات مشروعك والإجابة على أي أسئلة قد تكون لديك.`,

    default: `شكراً على سؤالك. تتخصص Black Layers في تطوير الويب المخصص وحلول العلامة البيضاء. للحصول على معلومات أكثر تحديداً حول استفسارك، يرجى الاتصال بفريقنا مباشرة على contact@blacklayers.ca، أو ملء نموذج الاتصال الخاص بنا، أو التواصل معنا على واتساب:\n\n${whatsappLinks.ar}`,
  },
}

// This is a placeholder for the actual DeepSeek API integration
// In production, you would replace this with actual API calls
const simulateDeepSeekResponse = async (
  message: string,
): Promise<{ text: string; html?: boolean; language: Language }> => {
  // Detect language
  const language = detectLanguage(message)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Get responses for the detected language
  const responses = translatedResponses[language]

  // Common questions about Black Layers
  const lowerMessage = message.toLowerCase()

  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey") ||
    lowerMessage.includes("bonjour") ||
    lowerMessage.includes("salut") ||
    lowerMessage.includes("مرحبا") ||
    lowerMessage.includes("السلام عليكم")
  ) {
    return {
      text: responses.greeting,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("pricing") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("prix") ||
    lowerMessage.includes("coût") ||
    lowerMessage.includes("سعر") ||
    lowerMessage.includes("تكلفة") ||
    lowerMessage.includes("أسعار")
  ) {
    return {
      text: responses.pricing,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("services") ||
    lowerMessage.includes("offer") ||
    lowerMessage.includes("services") ||
    lowerMessage.includes("offre") ||
    lowerMessage.includes("خدمات") ||
    lowerMessage.includes("تقدم")
  ) {
    return {
      text: responses.services,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("contacter") ||
    lowerMessage.includes("joindre") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("اتصال") ||
    lowerMessage.includes("تواصل") ||
    lowerMessage.includes("بريد")
  ) {
    return {
      text: responses.contact,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("work") ||
    lowerMessage.includes("projects") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("travail") ||
    lowerMessage.includes("projets") ||
    lowerMessage.includes("أعمال") ||
    lowerMessage.includes("مشاريع") ||
    lowerMessage.includes("سابقة")
  ) {
    return {
      text: responses.portfolio,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("timeline") ||
    lowerMessage.includes("how long") ||
    lowerMessage.includes("deadline") ||
    lowerMessage.includes("délai") ||
    lowerMessage.includes("combien de temps") ||
    lowerMessage.includes("échéance") ||
    lowerMessage.includes("مدة") ||
    lowerMessage.includes("وقت") ||
    lowerMessage.includes("موعد")
  ) {
    return {
      text: responses.timeline,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("process") ||
    lowerMessage.includes("how do you work") ||
    lowerMessage.includes("processus") ||
    lowerMessage.includes("comment travaillez") ||
    lowerMessage.includes("عملية") ||
    lowerMessage.includes("كيف تعمل")
  ) {
    return {
      text: responses.process,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("white label") ||
    lowerMessage.includes("white-label") ||
    lowerMessage.includes("marque blanche") ||
    lowerMessage.includes("علامة بيضاء")
  ) {
    return {
      text: responses.whitelabel,
      html: true,
      language,
    }
  }

  if (
    lowerMessage.includes("whatsapp") ||
    lowerMessage.includes("chat") ||
    lowerMessage.includes("message") ||
    lowerMessage.includes("whatsapp") ||
    lowerMessage.includes("discuter") ||
    lowerMessage.includes("message") ||
    lowerMessage.includes("واتساب") ||
    lowerMessage.includes("دردشة") ||
    lowerMessage.includes("رسالة")
  ) {
    return {
      text: responses.whatsapp,
      html: true,
      language,
    }
  }

  // Default response for other queries
  return {
    text: responses.default,
    html: true,
    language,
  }
}

export function DeepseekChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: translatedResponses.en.greeting,
      sender: "assistant",
      timestamp: new Date(),
      html: true,
      language: "en",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  // UI text translations
  const uiText = {
    en: {
      placeholder: "Type your message...",
      typing: "Typing...",
      title: "Black Layers AI Assistant",
      poweredBy: "Powered by DeepSeek",
      languageSelector: "Language",
    },
    fr: {
      placeholder: "Tapez votre message...",
      typing: "En train d'écrire...",
      title: "Assistant IA Black Layers",
      poweredBy: "Propulsé par DeepSeek",
      languageSelector: "Langue",
    },
    ar: {
      placeholder: "اكتب رسالتك...",
      typing: "جاري الكتابة...",
      title: "مساعد Black Layers الذكي",
      poweredBy: "مدعوم بواسطة DeepSeek",
      languageSelector: "اللغة",
    },
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language)
    setIsLanguageMenuOpen(false)

    // Add a system message about language change
    const langOption = languages.find((l) => l.code === language)

    const systemMessage: Message = {
      id: Date.now().toString(),
      text: `Language changed to ${langOption?.name}`,
      sender: "assistant",
      timestamp: new Date(),
      language,
    }

    setMessages((prev) => [...prev, systemMessage])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
      language: currentLanguage,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // Get response from DeepSeek (simulated for now)
      const response = await simulateDeepSeekResponse(userMessage.text)

      // Update current language based on detected language
      if (response.language !== currentLanguage) {
        setCurrentLanguage(response.language)
      }

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "assistant",
        timestamp: new Date(),
        html: response.html,
        language: response.language,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error getting response:", error)
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again or contact our team directly.",
        sender: "assistant",
        timestamp: new Date(),
        language: currentLanguage,
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  // Determine text direction based on language
  const getTextDirection = (lang: Language) => {
    const langOption = languages.find((l) => l.code === lang)
    return langOption?.direction || "ltr"
  }

  // Get current language option
  const currentLangOption = languages.find((l) => l.code === currentLanguage) || languages[0]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-medium">{uiText[currentLanguage].title}</h3>
              <p className="text-xs opacity-80">{uiText[currentLanguage].poweredBy}</p>
            </div>

            {/* New Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 rounded-full px-3 py-1 text-sm transition-colors"
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
              >
                <span className="mr-1">{currentLangOption.flag}</span>
                <span className="hidden sm:inline">{currentLangOption.code.toUpperCase()}</span>
                {isLanguageMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-10 border border-gray-200">
                  <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
                    {uiText[currentLanguage].languageSelector}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 ${
                        currentLanguage === lang.code ? "bg-gray-50 font-medium" : ""
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span className="flex-1 text-left">{lang.nativeName}</span>
                      {currentLanguage === lang.code && <Check size={16} className="text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                  dir={getTextDirection(message.language || currentLanguage)}
                >
                  {message.html ? (
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={uiText[currentLanguage].placeholder}
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
              dir={getTextDirection(currentLanguage)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
