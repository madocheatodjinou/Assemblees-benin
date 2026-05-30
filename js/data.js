/* ══════════════════════════════════════════════════════
   DONNÉES — ASSEMBLÉES DU BÉNIN
══════════════════════════════════════════════════════ */

const ASSEMBLEES = [
  {
    nom: "Assemblée de Djeffa",
    departement: "Ouémé",
    commune: "Sèmè-Kpodji",
    img: "img/card-1.jpg",
    horaires: [
      { j: "Mardi",    h: "20h00 – 21h00 · Prière" },
      { j: "Jeudi",    h: "19h30 – 21h00 · Étude biblique" },
      { j: "Dimanche", h: "09h00–10h00 Ecodim · 10h00–12h/13h Culte" },
    ],
    map: null,
    contacts: [
      { nom: "Frère ABOKI Valentin",    tel: "+22968010216" },
      { nom: "Frère AHOHE Dieu-Donné", tel: "+22962011757" },
    ]
  },
  {
    nom: "Assemblée d'Êkpè",
    departement: "Ouémé",
    commune: "Sèmè-Kpodji",
    img: "img/card-2.jpg",
    horaires: [
      { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
      { j: "Mercredi", h: "20h00 – 21h00 · Prière" },
      { j: "Vendredi", h: "20h00 – 21h30 · Exhortation" },
    ],
    map: null,
    contacts: [
      { nom: "Frère Marc AYELO",        tel: "+22996964103" },
      { nom: "Frère Fernando ATODJINOU", tel: "+22966125753" },
    ]
  },
  {
    nom: "Assemblée d'Affotonou",
    departement: "Ouémé",
    commune: "Sèmè-Kpodji",
    img: "img/card-3.jpg",
    horaires: [
      { j: "Mardi",          h: "20h00 – 21h00 · Prière" },
      { j: "Jeudi",          h: "20h00 – 21h30 · Étude biblique" },
      { j: "Dimanche matin", h: "10h00 – 12h00 · Culte" },
      { j: "Dimanche soir",  h: "19h30 – 20h30 · Prière de Maison" },
    ],
    map: "https://maps.app.goo.gl/oeYzNKRq83DqCY9j6?g_st=aw",
    contacts: [
      { nom: "Frère Ebéniézer TCHINTCHINME", tel: "+22996882663" },
      { nom: "Frère Alphonse HONFFO",        tel: "+22997034080" },
    ]
  },
  {
    nom: "Assemblée de Gankpodo",
    departement: "Ouémé",
    commune: "Sèmè-Kpodji",
    img: "img/card-4.jpg",
    horaires: [
      { j: "Dimanche", h: "09h00–10h00 Ecodim · 10h00–12h30 Culte" },
      { j: "Mercredi", h: "20h00 – 21h30 · Étude biblique" },
      { j: "Vendredi", h: "20h00–21h00 Prière / 22h–00h Veillée (1er vendredi)" },
    ],
    map: "https://maps.app.goo.gl/gzU8PV1pD8QwKtc79?g_st=aw",
    contacts: [
      { nom: "Frère Jean-Louis GANFLE", tel: "+22997695752" },
      { nom: "Frère Robert MONTEIRO",   tel: "+22997767465" },
    ]
  },
  {
    nom: "Assemblée d'Agbanta",
    departement: "Ouémé",
    commune: "Porto-Novo",
    img: "img/card-1.jpg",
    horaires: [
      { j: "Mardi",    h: "17h00 – 19h00 · Étude biblique" },
      { j: "Jeudi",    h: "17h00 – 19h00 · Enseignement" },
      { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée d'Aguégués",
    departement: "Ouémé",
    commune: "Aguégués",
    img: "img/card-2.jpg",
    horaires: [
      { j: "Mardi",    h: "17h00 – 18h30 · Réunion de prière" },
      { j: "Jeudi",    h: "17h00 – 18h30 · Étude biblique" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Dannou",
    departement: "Ouémé",
    commune: "Dangbo",
    img: "img/card-3.jpg",
    horaires: [
      { j: "Mardi",    h: "18h00 – 20h00 · Étude biblique" },
      { j: "Mercredi", h: "20h00 – 20h30 · Réunion de prière" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Gangban",
    departement: "Ouémé",
    commune: "Adjohoun",
    img: "img/card-4.jpg",
    horaires: [
      { j: "Mercredi", h: "16h00 – 18h00 · Étude biblique" },
      { j: "Samedi",   h: "19h00 – 20h00 · Réunion de prière" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Kesounou",
    departement: "Ouémé",
    commune: "Akpro-Missérété",
    img: "img/card-5.jpg",
    horaires: [],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Dowa",
    departement: "Ouémé",
    commune: "Bonou",
    img: "img/card-6.jpg",
    horaires: [
      { j: "Mardi",    h: "19h00 – 20h30 · Réunion de prière" },
      { j: "Mercredi", h: "19h00 – 20h30 · Étude biblique" },
      { j: "Vendredi", h: "19h00 – 20h30 · Réunion de prière" },
      { j: "Dimanche", h: "09h00 – 11h30 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée d'Agonsagbo",
    departement: "Ouémé",
    commune: "Adjarra",
    img: "img/card-7.jpg",
    horaires: [
      { j: "Mercredi", h: "15h00 – 17h00 · Étude biblique" },
      { j: "Vendredi", h: "15h00 – 17h00 · Réunion de prière" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Sèto-gbodjè",
    departement: "Ouémé",
    commune: "Avrankou",
    img: "img/card-8.jpg",
    horaires: [
      { j: "Mardi",    h: "19h00 – 20h30 · Réunion de prière" },
      { j: "Vendredi", h: "19h00 – 20h30 · Étude biblique" },
      { j: "Dimanche", h: "10h00 – 12h30 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Pobè",
    departement: "Ouémé",
    commune: "Pobè",
    img: "img/card-1.jpg",
    horaires: [
      { j: "Mercredi", h: "17h00 – 19h30 · Étude biblique et prière" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Tatonnoukon",
    departement: "Ouémé",
    commune: "Ifangni",
    img: "img/card-2.jpg",
    horaires: [
      { j: "Mercredi", h: "19h00 – 20h30 · Étude biblique" },
      { j: "Vendredi", h: "19h00 – 20h00 · Réunion de prière" },
      { j: "Dimanche", h: "10h00 – 12h00 · Culte" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Cadjèhoun",
    departement: "Littoral",
    commune: "Cotonou",
    img: "img/card-5.jpg",
    horaires: [
      { j: "Lundi",    h: "19h30 – 20h30 · Prière" },
      { j: "Mercredi", h: "19h30 – 21h00 · Étude biblique" },
      { j: "Dimanche", h: "09h00–11h00 Culte & Exhortation / École dim. (4ème dim.)" },
    ],
    map: "https://maps.app.goo.gl/SB2qQGmyCZzAQpFw9?g_st=aw",
    contacts: [
      { nom: "Frère AKOWE Gabriel", tel: "+22995343875" },
      { nom: "Frère Arnaud DOGNON", tel: "+22961152441" },
    ]
  },
  {
    nom: "Assemblée de Tankpè",
    departement: "Atlantique",
    commune: "Abomey-Calavi",
    img: "img/card-6.jpg",
    horaires: [
      { j: "Jeudi",    h: "20h00 – 21h00 · Prière" },
      { j: "Dimanche", h: "10h00 – 12h30 · Culte / Étude biblique" },
    ],
    map: null,
    contacts: [
      { nom: "Frère Ephraïm COOVI",     tel: "+22997005814" },
      { nom: "Frère Casimir KOUNYETON", tel: "+22994398748" },
    ]
  },
  {
    nom: "Assemblée de Calavi",
    departement: "Atlantique",
    commune: "Abomey-Calavi",
    img: "img/card-7.jpg",
    horaires: [
      { j: "Mercredi", h: "19h30 – 20h30 · Prière" },
      { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
      { j: "Dimanche", h: "Étude biblique (par quinzaine)" },
    ],
    map: null,
    contacts: []
  },
  {
    nom: "Assemblée de Godomey",
    departement: "Atlantique",
    commune: "Abomey-Calavi",
    img: "img/card-8.jpg",
    horaires: [
      { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
      { j: "Jeudi",    h: "19h30 – 21h00 · Étude biblique" },
      { j: "Samedi",   h: "19h00 – 20h30 · Prière" },
    ],
    map: null,
    contacts: [
      { nom: "Frère Abraham", tel: "+22891540859" },
    ]
  },
  {
    nom: "Assemblée de Gbodjè",
    departement: "Atlantique",
    commune: "Abomey-Calavi",
    img: "img/card-1.jpg",
    horaires: [
      { j: "Mardi",    h: "20h00 – 21h00 · Prière" },
      { j: "Jeudi",    h: "20h00 – 21h00 · Étude biblique" },
      { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
    ],
    map: null,
    contacts: [
      { nom: "Frère Sylvain AKPAKOSSOU", tel: "+22997597806" },
    ]
  },
];
