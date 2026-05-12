import type { ProjectItem } from "./ProjectFilter";

export const PROJECTS: ProjectItem[] = [
  {
    slug: "estructura-metalica-villa-zaita",
    cat: "CIVIL",
    tagLabel: "CIVIL",
    title: {
      es: "Estructura Metálica — Estación Metro Villa Zaita",
      en: "Steel Structure — Villa Zaita Metro Station",
    },
    desc: {
      es: "Instalación de estructura metálica en la estación del Metro de Villa Zaita.",
      en: "Steel structure installation at the Villa Zaita Metro station.",
    },
    location: "Villa Zaita, Panamá",
    year: "2023",
    img: "/images/estructura-metalica/5.jpg",
    gallery: [
      "/images/estructura-metalica/5.jpg",
      "/images/estructura-metalica/6.jpg",
      "/images/estructura-metalica/7.jpg",
      "/images/estructura-metalica/8.jpg",
      "/images/estructura-metalica/9.jpg",
    ],
  },
  {
    slug: "76-sitios-tigo",
    cat: "TELECOM",
    tagLabel: "TELECOM",
    title: {
      es: "76 Sitios Tigo — Llave en Mano",
      en: "76 Tigo Sites — Turnkey",
    },
    desc: {
      es: "Construcción llave en mano de 76 sitios para la red Tigo de Millicom.",
      en: "Turnkey construction of 76 sites for Millicom's Tigo network.",
    },
    location: "Nacional",
    year: "En ejecución",
    img: "/images/76-sitios-tigo/41.jpg",
    gallery: [
      "/images/76-sitios-tigo/41.jpg",
      "/images/76-sitios-tigo/42.jpg",
      "/images/76-sitios-tigo/43.jpg",
    ],
  },
  {
    slug: "20-sitios-bts-phoenix-tower",
    cat: "TELECOM",
    tagLabel: "TELECOM",
    title: {
      es: "20 Sitios BTS — Phoenix Tower",
      en: "20 BTS Sites — Phoenix Tower",
    },
    desc: {
      es: "Proyecto llave en mano para la construcción de 20 sitios BTS.",
      en: "Turnkey project for the construction of 20 BTS sites.",
    },
    location: "Panamá",
    year: "En ejecución",
    img: "/images/20-sitios-bts/48.jpg",
    gallery: [
      "/images/20-sitios-bts/48.jpg",
      "/images/20-sitios-bts/49.jpg",
      "/images/20-sitios-bts/50.jpg",
      "/images/20-sitios-bts/51.jpg",
    ],
  },
  {
    slug: "mantenimiento-206-sitios",
    cat: "MAINT",
    tagLabel: "MAINT",
    title: {
      es: "Mantenimiento Preventivo — 206 Sitios",
      en: "Preventive Maintenance — 206 Sites",
    },
    desc: {
      es: "Programa de mantenimiento preventivo a 206 sitios de telecomunicaciones.",
      en: "Preventive maintenance program covering 206 telecom sites.",
    },
    location: "Nacional",
    year: "En ejecución",
    img: "/images/76-sitios-tigo/42.jpg",
  },
  {
    slug: "mantenimiento-113-sitios",
    cat: "MAINT",
    tagLabel: "MAINT",
    title: {
      es: "Mantenimiento Preventivo Semestral — 113 Sitios",
      en: "Semi-annual Preventive Maintenance — 113 Sites",
    },
    desc: {
      es: "Mantenimiento preventivo semestral a 113 sitios de Phoenix Tower International.",
      en: "Semi-annual preventive maintenance for 113 Phoenix Tower sites.",
    },
    location: "Nacional",
    year: "En ejecución",
    img: "/images/20-sitios-bts/49.jpg",
  },
  {
    slug: "ampliacion-anden-cabuya",
    cat: "CIVIL",
    tagLabel: "CIVIL",
    title: {
      es: "Ampliación Andén de Recibo — Cabuya",
      en: "Receiving Dock Expansion — Cabuya",
    },
    desc: {
      es: "Mano de obra y equipos para la ampliación del andén de recibo en planta de Empresas Melo.",
      en: "Labor and equipment for the receiving dock expansion at the Melo plant.",
    },
    location: "Cabuya, Panamá",
    year: "2022 — 2023",
    img: "/images/ampliacion-anden-cabuya/24.jpg",
    gallery: [
      "/images/ampliacion-anden-cabuya/24.jpg",
      "/images/ampliacion-anden-cabuya/26.jpg",
      "/images/ampliacion-anden-cabuya/27.jpg",
    ],
  },
  {
    slug: "pesa-camionera-muelle-16",
    cat: "CIVIL",
    tagLabel: "CIVIL",
    title: {
      es: "Pesa Camionera — Muelle 16, Cristóbal",
      en: "Truck Weighing Station — Pier 16, Cristóbal",
    },
    desc: {
      es: "Construcción de pesa camionera, pavimento y drenajes en la terminal de granos del Muelle 16.",
      en: "Truck weighing station, paving and drainage at Pier 16 grain terminal.",
    },
    location: "Puerto Cristóbal, Colón",
    year: "2022",
    img: "/images/muelle-16/28.jpg",
    gallery: [
      "/images/muelle-16/28.jpg",
      "/images/muelle-16/29.jpg",
      "/images/muelle-16/30.jpg",
    ],
  },
  {
    slug: "datacenter-fusion-claro",
    cat: "DATA",
    tagLabel: "DATA",
    title: {
      es: "Datacenter Fusion Module 2000 — Claro",
      en: "Fusion Module 2000 Datacenter — Claro",
    },
    desc: {
      es: "Adecuación civil e instalación de Datacenter Fusion Module 2000 para Claro Panamá.",
      en: "Civil retrofit and Fusion Module 2000 datacenter installation for Claro Panamá.",
    },
    location: "Ciudad de Panamá",
    year: "2018 — 2019",
    img: "/images/datacenter-fusion/59.jpg",
    gallery: [
      "/images/datacenter-fusion/59.jpg",
      "/images/datacenter-fusion/60.jpg",
      "/images/datacenter-fusion/61.jpg",
    ],
  },
  {
    slug: "postes-mimetizados-jmj",
    cat: "TELECOM",
    tagLabel: "TELECOM",
    title: {
      es: "Postes Mimetizados JMJ — Cinta Costera",
      en: "Camouflaged Poles JMJ — Cinta Costera",
    },
    desc: {
      es: "Diseño y construcción de fundaciones e instalación de postes mimetizados para la JMJ.",
      en: "Foundation design and camouflaged pole installation for World Youth Day.",
    },
    location: "Cinta Costera, Panamá",
    year: "2018 — 2019",
    img: "/images/postes-mimetizados/52.jpg",
    gallery: [
      "/images/postes-mimetizados/52.jpg",
      "/images/postes-mimetizados/53.jpg",
      "/images/postes-mimetizados/54.jpg",
      "/images/postes-mimetizados/55.jpg",
    ],
  },
  {
    slug: "124-sitios-3g-cable-wireless",
    cat: "TELECOM",
    tagLabel: "TELECOM",
    title: {
      es: "124 Sitios 3G — Cable & Wireless",
      en: "124 3G Sites — Cable & Wireless",
    },
    desc: {
      es: "Construcción de 124 sitios 3G para +Móvil: herrajes, antenas, equipos Ericsson y obra civil.",
      en: "124 3G site builds for +Móvil: hardware, antennas, Ericsson gear and civil works.",
    },
    location: "Nacional",
    year: "2009 — 2013",
    img: "/images/124-sitios-3g/105.jpg",
    gallery: [
      "/images/124-sitios-3g/105.jpg",
      "/images/124-sitios-3g/106.jpg",
      "/images/124-sitios-3g/107.jpg",
      "/images/124-sitios-3g/108.jpg",
      "/images/124-sitios-3g/109.jpg",
      "/images/124-sitios-3g/110.jpg",
    ],
  },
  {
    slug: "116-sitios-cosite-mas-movil",
    cat: "TELECOM",
    tagLabel: "TELECOM",
    title: {
      es: "116 Sitios COSITE y Expansión — +Móvil",
      en: "116 COSITE & Expansion Sites — +Móvil",
    },
    desc: {
      es: "Sistema de tierra, antenas, radio bases GSM, TMA, fibra óptica y obra civil para 116 sitios.",
      en: "Grounding, antennas, GSM base stations, TMA, fiber optics and civil works on 116 sites.",
    },
    location: "Nacional",
    year: "2008 — 2012",
    img: "/images/116-sitios-cosite/97.jpg",
    gallery: [
      "/images/116-sitios-cosite/97.jpg",
      "/images/116-sitios-cosite/98.jpg",
      "/images/116-sitios-cosite/99.jpg",
      "/images/116-sitios-cosite/100.jpg",
      "/images/116-sitios-cosite/101.jpg",
    ],
  },
];
