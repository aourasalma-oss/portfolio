import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', certificates: 'Certificates', languages: 'Languages', contact: 'Contact' },
    hero: {
      greeting: "Hello, I'm",
      title: 'Génie Informatique Student · PFE Internship Seeker',
      intro: "A passionate Génie Informatique student at the École Supérieure de Technologie (EST), studying Computer Engineering (DUT Génie Informatique). I build modern web applications with clean code and creative design, and I'm excited to find a PFE internship where I can grow and contribute.",
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      academicTitle: 'Academic Background',
      academicDesc: 'I am a Computer Engineering student pursuing a DUT Génie Informatique at the École Supérieure de Technologie (EST). My studies have given me a solid foundation in software development, algorithms, databases, and web technologies.',
      motivationTitle: 'Motivation',
      motivationDesc: "I'm driven by the desire to create innovative digital solutions that make a difference. Whether it's building intuitive user interfaces or robust backend systems, I thrive on turning ideas into reality through code. A PFE internship would be the perfect opportunity to apply my skills in a professional setting.",
    },
    skills: { title: 'Skills' },
    projects: {
      title: 'Projects',
      luxryAuto: 'LuxryAuto',
      luxryAutoDesc: 'A luxury car platform for browsing and showcasing premium vehicles. Features car listings with detailed specifications, search and filter functionality, and a modern user interface for car enthusiasts.',
      pcLicense: 'PC License Management System',
      pcLicenseDesc: 'A system for managing computer and Windows license information within an organization. Tracks license assignments, expiry dates, and hardware details with an intuitive admin interface.',
      universityPlatform: 'University Internship Management Platform',
      universityPlatformDesc: 'A comprehensive platform for managing university internships with multi-role authentication (students, supervisors, administrators). Streamlined workflow for applications, approvals, and tracking.',
      stagiaireApp: 'Stagiaire Management Application',
      stagiaireAppDesc: 'Developed during my internship at the Wilaya of Guelmim-Oued Noun. An application to manage trainee (stagiaire) information, assignments, and follow-ups for administrative efficiency.',
      librarySystem: 'Library Management System',
      librarySystemDesc: 'A full library management solution modeled with UML. Handles book inventory, borrowing, returns, and member management. Implemented in Java with object-oriented design principles.',
      recipeExplorer: 'Recipe Explorer',
      recipeExplorerDesc: 'A modern recipe discovery app with search, filtering, and favorites. Features a clean React UI with Firebase for authentication and real-time data. Responsive design for all devices.',
      taskFlow: 'TaskFlow - Task Manager',
      taskFlowDesc: 'A collaborative task management web app with drag-and-drop boards, real-time updates, and team assignments. Built with React frontend and Node.js/Express REST API backend.',
    },
    experience: {
      title: 'Experience',
      internship: 'Internship',
      event: 'Event',
      club: 'Club',
      exp1Title: 'Internship - Wilaya of Guelmim-Oued Noun',
      exp1Role: 'Stagiaire Developer',
      exp1Desc: 'Developed a Stagiaire Management Application to streamline trainee management and administrative workflows. Gained hands-on experience in PHP, MySQL, and working within a public administration context.',
      exp2Title: 'AI for Everyone',
      exp2Role: 'Event Coordinator & Participant',
      exp2Desc: 'Participated in the national scientific event "AI for Everyone" where I helped coordinate activities for more than 200 participants. Contributed to logistics, workshops, and ensuring a smooth experience for attendees.',
      exp3Title: 'Creative Club',
      exp3Role: 'Active Member · Designer',
      exp3Desc: 'Active member of a creative club, contributing as a designer. Participating in club projects, events, and creative initiatives while developing design skills and collaborating with the team.',
    },
    certificates: {
      title: 'Certificates',
      cert1Title: 'Certificate - AI Event (événement AI)',
      cert1Role: 'AI for Everyone',
      cert1Desc: 'Certificate of participation and contribution in the national AI event. Recognized for coordinating activities and supporting the success of the event for over 200 participants.',
      cert2Title: 'Certificate - Creative Club',
      cert2Role: 'Designer',
      cert2Desc: 'Certificate recognizing active involvement and design contributions within the creative club. Awarded for dedication and creative work in club projects and activities.',
    },
    languages: {
      title: 'Languages',
      arabic: 'Arabic',
      french: 'French',
      english: 'English',
      native: 'Native',
    },
    contact: {
      title: 'Contact',
      intro: "I'm open to PFE internship opportunities. Let's connect!",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
    },
    footer: '© 2025 Salma Aoura. Built with passion for Génie Informatique.',
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', certificates: 'Certificats', languages: 'Langues', contact: 'Contact' },
    hero: {
      greeting: "Bonjour, je suis",
      title: 'Étudiante en Génie Informatique · Recherche de stage PFE',
      intro: "Étudiante passionnée en Génie Informatique à l'École Supérieure de Technologie (EST). Je construis des applications web modernes avec un code propre et un design créatif, et je suis ravie de trouver un stage PFE où je pourrai progresser et contribuer.",
      viewProjects: 'Voir les projets',
      getInTouch: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      academicTitle: 'Parcours académique',
      academicDesc: "Je suis étudiante en Génie Informatique, en DUT à l'École Supérieure de Technologie (EST). Mes études m'ont donné une base solide en développement logiciel, algorithmes, bases de données et technologies web.",
      motivationTitle: 'Motivation',
      motivationDesc: "Je suis animée par le désir de créer des solutions numériques innovantes qui font la différence. Que ce soit des interfaces utilisateur intuitives ou des systèmes backend robustes, j'aime transformer les idées en réalité grâce au code. Un stage PFE serait l'occasion idéale d'appliquer mes compétences dans un contexte professionnel.",
    },
    skills: { title: 'Compétences' },
    projects: {
      title: 'Projets',
      luxryAuto: 'LuxryAuto',
      luxryAutoDesc: 'Une plateforme de voitures de luxe pour parcourir et présenter des véhicules premium. Annonces détaillées, recherche et filtres, interface moderne pour les passionnés.',
      pcLicense: 'Système de gestion de licences PC',
      pcLicenseDesc: "Un système pour gérer les licences informatiques et Windows dans une organisation. Suivi des attributions, dates d'expiration et détails matériels avec une interface admin intuitive.",
      universityPlatform: "Plateforme de gestion des stages universitaires",
      universityPlatformDesc: "Plateforme complète avec authentification multi-rôles (étudiants, superviseurs, administrateurs). Workflow optimisé pour candidatures, approbations et suivi des stages.",
      stagiaireApp: 'Application de gestion des stagiaires',
      stagiaireAppDesc: "Développée lors de mon stage à la Wilaya de Guelmim-Oued Noun. Application pour gérer les informations, affectations et suivis des stagiaires pour l'efficacité administrative.",
      librarySystem: 'Système de gestion de bibliothèque',
      librarySystemDesc: "Solution complète de gestion de bibliothèque modélisée en UML. Gestion des stocks, emprunts, retours et membres. Implémentée en Java avec les principes de la programmation orientée objet.",
      recipeExplorer: 'Recipe Explorer',
      recipeExplorerDesc: "Application moderne de découverte de recettes avec recherche, filtres et favoris. Interface React avec Firebase pour l'authentification et les données en temps réel. Design responsive.",
      taskFlow: 'TaskFlow - Gestionnaire de tâches',
      taskFlowDesc: "Application collaborative de gestion de tâches avec tableaux drag-and-drop, mises à jour en temps réel et assignation d'équipe. Frontend React et API REST Node.js/Express.",
    },
    experience: {
      title: 'Expérience',
      internship: 'Stage',
      event: 'Événement',
      club: 'Club',
      exp1Title: 'Stage - Wilaya de Guelmim-Oued Noun',
      exp1Role: 'Développeuse stagiaire',
      exp1Desc: "Développement d'une application de gestion des stagiaires pour rationaliser les flux administratifs. Expérience en PHP, MySQL et travail en contexte d'administration publique.",
      exp2Title: 'AI for Everyone',
      exp2Role: 'Coordinatrice & participante',
      exp2Desc: "Participation à l'événement scientifique national « AI for Everyone » : coordination des activités pour plus de 200 participants. Contribution à la logistique, ateliers et bon déroulement.",
      exp3Title: 'Club créatif',
      exp3Role: 'Membre active · Designer',
      exp3Desc: "Membre active d'un club créatif en tant que designer. Participation aux projets, événements et initiatives créatives du club tout en développant mes compétences en design.",
    },
    certificates: {
      title: 'Certificats',
      cert1Title: 'Certificat - Événement AI',
      cert1Role: 'AI for Everyone',
      cert1Desc: "Certificat de participation et de contribution à l'événement national sur l'IA. Reconnue pour la coordination des activités et le soutien au succès de l'événement pour plus de 200 participants.",
      cert2Title: 'Certificat - Club créatif',
      cert2Role: 'Designer',
      cert2Desc: "Certificat reconnaissant mon implication active et mes contributions en design au sein du club créatif. Décerné pour mon dévouement et mon travail créatif dans les projets du club.",
    },
    languages: {
      title: 'Langues',
      arabic: 'Arabe',
      french: 'Français',
      english: 'Anglais',
      native: 'Langue maternelle',
    },
    contact: {
      title: 'Contact',
      intro: "Je suis ouverte aux opportunités de stage PFE. Contactez-moi !",
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Envoyer le message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.com',
      messagePlaceholder: 'Votre message...',
    },
    footer: '© 2025 Salma Aoura. Construit avec passion pour le Génie Informatique.',
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من أنا', skills: 'المهارات', projects: 'المشاريع', experience: 'الخبرة', certificates: 'الشهادات', languages: 'اللغات', contact: 'تواصل' },
    hero: {
      greeting: 'مرحبا، أنا',
      title: 'طالبة Génie Informatique · أبحث عن تدريب PFE',
      intro: 'طالبة Génie Informatique شغوفة في المدرسة العليا للتكنولوجيا (EST). أبني تطبيقات ويب حديثة بكود نظيف وتصميم إبداعي، وأنا متحمسة للعثور على تدريب PFE حيث يمكنني النمو والمساهمة.',
      viewProjects: 'عرض المشاريع',
      getInTouch: 'تواصل معي',
    },
    about: {
      title: 'من أنا',
      academicTitle: 'الخلفية الأكاديمية',
      academicDesc: 'أنا طالبة هندسة حاسوب في المدرسة العليا للتكنولوجيا (EST). دراستي منحتني أساسا قويا في تطوير البرمجيات والخوارزميات وقواعد البيانات وتكنولوجيات الويب.',
      motivationTitle: 'الدافع',
      motivationDesc: 'أقودني الرغبة في إنشاء حلول رقمية مبتكرة تحدث فرقا. سواء كانت واجهات مستخدم بديهية أو أنظمة خلفية قوية، أزدهر في تحويل الأفكار إلى واقع من خلال البرمجة. تدريب PFE سيكون الفرصة المثالية لتطبيق مهاراتي في بيئة مهنية.',
    },
    skills: { title: 'المهارات' },
    projects: {
      title: 'المشاريع',
      luxryAuto: 'LuxryAuto',
      luxryAutoDesc: 'منصة سيارات فاخرة للتصفح وعرض المركبات المميزة. إعلانات مفصلة وبحث ومرشحات وواجهة عصرية لعشاق السيارات.',
      pcLicense: 'نظام إدارة تراخيص الحاسوب',
      pcLicenseDesc: 'نظام لإدارة معلومات تراخيص الحاسوب وويندوز في المؤسسة. تتبع التعيينات وتواريخ الانتهاء وتفاصيل الأجهزة بواجهة إدارية بديهية.',
      universityPlatform: 'منصة إدارة التداريب الجامعية',
      universityPlatformDesc: 'منصة شاملة مع مصادقة متعددة الأدوار (طلاب، مشرفون، إداريون). سير عمل محسّن للطلبات والموافقات والمتابعة.',
      stagiaireApp: 'تطبيق إدارة المتدربين',
      stagiaireAppDesc: 'تم تطويرها خلال تدريبي في ولاية كلميم واد نون. تطبيق لإدارة معلومات المتدربين والمهام والمتابعات.',
      librarySystem: 'نظام إدارة المكتبة',
      librarySystemDesc: 'حل شامل لإدارة المكتبة مصمم بـ UML. إدارة المخزون والإعارة والعودة والأعضاء. منفذ بلغة Java.',
      recipeExplorer: 'Recipe Explorer',
      recipeExplorerDesc: 'تطبيق حديث لاكتشاف الوصفات مع بحث ومرشحات ومفضلة. واجهة React مع Firebase. تصميم متجاوب.',
      taskFlow: 'TaskFlow - مدير المهام',
      taskFlowDesc: 'تطبيق تعاوني لإدارة المهام مع لوحات سحب وإفلات وتحديثات فورية. React و Node.js/Express.',
    },
    experience: {
      title: 'الخبرة',
      internship: 'تدريب',
      event: 'فعالية',
      club: 'نادي',
      exp1Title: 'تدريب - ولاية كلميم واد نون',
      exp1Role: 'مطورة متدربة',
      exp1Desc: 'تطوير تطبيق إدارة المتدربين. خبرة في PHP و MySQL والإدارة العامة.',
      exp2Title: 'AI for Everyone',
      exp2Role: 'منسقة ومشاركة',
      exp2Desc: 'مشاركة في الفعالية العلمية الوطنية «AI for Everyone»: تنسيق الأنشطة لأكثر من 200 مشارك.',
      exp3Title: 'نادي إبداعي',
      exp3Role: 'عضو نشط · مصممة',
      exp3Desc: 'عضو نشط في نادي إبداعي كمصممة. المشاركة في مشاريع وفعاليات النادي وتطوير مهارات التصميم.',
    },
    certificates: {
      title: 'الشهادات',
      cert1Title: 'شهادة - فعالية الذكاء الاصطناعي',
      cert1Role: 'AI for Everyone',
      cert1Desc: 'شهادة مشاركة ومساهمة في الفعالية الوطنية للذكاء الاصطناعي. الاعتراف بتنسيق الأنشطة ودعم نجاح الفعالية لأكثر من 200 مشارك.',
      cert2Title: 'شهادة - النادي الإبداعي',
      cert2Role: 'مصممة',
      cert2Desc: 'شهادة تقدير للمشاركة النشطة والمساهمات في التصميم داخل النادي الإبداعي.',
    },
    languages: {
      title: 'اللغات',
      arabic: 'العربية',
      french: 'الفرنسية',
      english: 'الإنجليزية',
      native: 'اللغة الأم',
    },
    contact: {
      title: 'تواصل',
      intro: 'أنا مفتوحة لفرص تدريب PFE. تواصلوا معي!',
      name: 'الاسم',
      email: 'البريد',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك@البريد.com',
      messagePlaceholder: 'رسالتك...',
    },
    footer: '© 2025 سلمى أورا. صُنع بشغف لـ Génie Informatique.',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
