// Imports from public folder need to be referenced as strings relative to public root
// But since we are in Vite, we can just use the string paths directly.

import logoImage from '@assets/generated_images/elegant_sunburst_logo_for_yoga_studio.png';
import heroImage from '@assets/generated_images/peaceful_yoga_studio_hero_image.png'; // Keep generated hero if no specific hero provided

import { schedule } from "./schedule";

export { schedule };

export const assets = {
  logo: "/images/logo.avif",
  hero: "/images/background.jpeg", 
};

export const courses = [
  {
    id: 1,
    title: "Power Yoga",
    description: "Una pratica vigorosa e dinamica, che fonde forza fisica, flessibilità e resistenza con una profonda concentrazione mentale, offrendo un allenamento completo.",
    image: "/images/corsi_images/poweryoga.avif",
  },
  {
    id: 2,
    title: "Vinyasa Yoga",
    description: "Un fluire armonioso di movimenti e respirazione, dove ogni posizione si intreccia alla successiva in una danza fluida, creando una meditazione in movimento.",
    image: "/images/corsi_images/vinyasa.avif",
  },
  {
    id: 3,
    title: "Yogalates",
    description: "Il connubio perfetto di forza e flessibilità, unendo l'antica saggezza dello yoga con la dinamica tonificazione del pilates per un'esperienza olistica.",
    image: "/images/corsi_images/yogalates.avif",
  },
  {
    id: 4,
    title: "Pilates Attrezzi",
    description: "Una pratica rinvigorente che introduce strumenti come palle, bande elastiche e cerchi per intensificare gli esercizi e migliorare l'allineamento.",
    image: "/images/corsi_images/pilates_matwork.avif", // Using matwork image as fallback or representative
  },
  {
    id: 5,
    title: "Body Align",
    description: "Pilates posturale concentrato sul rafforzamento del core e sull'allineamento del corpo, progettato per correggere le disarmonie posturali.",
    image: "/images/corsi_images/bodyalign.avif",
  },
  {
    id: 6,
    title: "A.R.P.D.",
    description: "Auto Rieducazione Posturale Dinamica con il metodo BodyCode. Mira a migliorare postura e benessere fisico correggendo squilibri muscolari.",
    image: "/images/corsi_images/autorieducazione.avif",
  },
  {
    id: 7,
    title: "Stretch & Tone",
    description: "Combinazione bilanciata di forza e flessibilità. 30 minuti di esercizi intensi seguiti da 30 minuti di stretching profondo.",
    image: "/images/corsi_images/stretch_and_tone.avif",
  },
  {
    id: 8,
    title: "MasterStretch",
    description: "Utilizza scarpe con suola sferica per far dondolare le caviglie. Agisce sulla catena muscolare posteriore, migliorando elasticità e postura.",
    image: "/images/corsi_images/masterstretch.avif",
  },
  {
    id: 9,
    title: "BarreFit",
    description: "Allenamento completo che combina danza classica, pilates, yoga e fitness alla sbarra per tonificare, allungare e rafforzare il corpo.",
    image: "/images/corsi_images/barrefit.avif",
  },
  {
    id: 10,
    title: "Lezioni Private",
    description: "Un'esperienza personalizzata e intensiva, su misura per incontrare le esigenze e gli obiettivi individuali.",
    image: "/images/corsi_images/lezioniprivate.avif",
  },
];

export const teachers = [
  {
    name: "Roberta",
    role: "",
    specialties: ["Vinyasa", "Power Yoga", "Pilates", "Matwork Posturale"],
    bio: "Dalla danza classica allo yoga, scoperto a Londra e approfondito in Sri Lanka e India.",
    image: "/images/insegnanti_images/robi.jpg",
  },
  {
    name: "Silvia B.",
    role: "",
    specialties: ["Pilates Matwork", "Pilates Attrezzi", "Stretch & Tone"],
    bio: "Professionista della danza e del fitness, unisce arte del movimento e approccio scientifico. Formata alla Rambert School di Londra.",
    image: "/images/insegnanti_images/silvia b.avif",
  },
  {
    name: "Silvia O.",
    role: "",
    specialties: ["Yoga", "Yin Yoga", "Pilates"],
    bio: "Insegnante certificata CSEN. Il mio obiettivo è aiutare le persone a connettersi con se stesse attraverso il movimento consapevole.",
    image: "/images/insegnanti_images/silvia o.avif",
  },
  {
    name: "Debora",
    role: "",
    specialties: ["Vinyasa Yoga"],
    bio: "La ginnastica artistica è stata la mia prima scuola. In Indonesia ho completato la formazione in Vinyasa Yoga, arricchita da un approccio somatico.",
    image: "/images/insegnanti_images/debora.avif",
  },
  {
    name: "Annalisa",
    role: "",
    specialties: ["Hatha Yoga", "Vinyasa Yoga"],
    bio: "Insegnante appassionata che unisce la tradizione dello yoga con un approccio moderno e dinamico.",
    image: "/images/insegnanti_images/annalisa.avif",
  },
  {
    name: "Nicoletta",
    role: "",
    specialties: ["A.R.P.D.", "Masterstretch"],
    bio: "Insegnante specializzata in Auto Rieducazione Posturale Dinamica e Masterstretch.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // No specific image found in folder
  }
];

// export const schedule = [
//   { time: "06:30", monday: "", tuesday: "Vinyasa Yoga (Roberta)", wednesday: "", thursday: "", friday: "" },
//   { time: "08:00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "Pilates-BarreFit (Silvia B)" },
//   { time: "08:30", monday: "Pilates (Silvia O)", tuesday: "", wednesday: "", thursday: "Stretch & Tone (Silvia B)", friday: "" },
//   { time: "09:00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "A Rotazione" },
//   { time: "09:45", monday: "Posturale (Silvia O)", tuesday: "", wednesday: "", thursday: "", friday: "" },
//   { time: "11:00", monday: "", tuesday: "", wednesday: "A.R.P.D. (Nicoletta)", thursday: "A.R.P.D. (Nicoletta)", friday: "" },
//   { time: "13:00", monday: "Yogalates (Silvia O)", tuesday: "Pilates Matwork (Silvia B)", wednesday: "Elvis The Key (Nicoletta)", thursday: "", friday: "Yogalates (Roberta)" },
//   { time: "16:30", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "Masterstretch (Nicoletta)" },
//   { time: "18:00", monday: "Gentle flow (Debora)", tuesday: "Vinyasa (Roberta)", wednesday: "Pilates Matwork (Roberta)", thursday: "Active Flexibility (Valentina)", friday: "A.R.P.D. (Nicoletta)" },
//   { time: "19:15", monday: "Vinyasa Yoga (Debora)", tuesday: "Power Yoga (Roberta)", wednesday: "Power Yoga", thursday: "Inversion & arm balance (Valentina)", friday: "QiGong (Nicola)" },
// ];

export const events = [
  { title: "Bagno di Suoni", image: "/images/events_images/01 bagno_di_suoni.avif" },
  { title: "Costellazioni Familiari", image: "/images/events_images/02 Costellazioni familiari spirituali.avif" },
  { title: "Vinyasa Yoga a Ca Rovere", image: "/images/events_images/03 Vinyasa Yoga a Ca Rovere  .avif" },
  { title: "Yoga & Rituali Aromatici", image: "/images/events_images/04 Yoga & rituali aromatici  .avif" },
  { title: "Yoga & Brunch", image: "/images/events_images/05 Yoga & Brunch  .avif" },
  { title: "Yoga Trek", image: "/images/events_images/06 Yoga Trek  .avif" },
  { title: "Gong Bath", image: "/images/events_images/07 Gong bath  .avif" },
  { title: "Viaggio Sciamanico", image: "/images/events_images/08 Viaggio sciamanico  .avif" },
  { title: "Bagno di Gong", image: "/images/events_images/10 Bagno di gong  .avif" },
  { title: "Stress Workshop", image: "/images/events_images/11 Stress - questo grande (s)conosciuto  .avif" },
];
