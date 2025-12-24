import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { courses, teachers, schedule, events } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EMAIL = "robertazamborlin@gmail.com";
const PHONE = "3885876356";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Richiesta informazioni da ${formData.name} ${formData.surname}`;
    const body = `Nome: ${formData.name} ${formData.surname}
Email: ${formData.email}

Messaggio:
${formData.message}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />
      <Hero />

      {/* Intro / Philosophy */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <h3 className="text-3xl font-black text-primary mb-6">Il nostro approccio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Offriamo diverse classi di Yoga e Pilates, per tutte le età e livelli di esperienza. 
              Unitevi a noi per trovare la vostra pace interiore e migliorare la vostra salute e benessere generale.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Crediamo che il movimento sia medicina e che attraverso la pratica consapevole possiamo 
              riconnetterci con la nostra essenza più profonda.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-warm-lg"
          >
             <img 
               src="/images/approccio.jpg" 
               alt="Yoga Practice" 
               className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
             />
          </motion.div>
        </div>
      </Section>

      {/* Courses */}
      <Section 
        id="corsi" 
        title="I Nostri Corsi" 
        subtitle="Trova il tuo equilibrio" 
        background="muted"
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <Card className="overflow-hidden border-none shadow-soft hover:shadow-warm-lg transition-all duration-500 h-full flex flex-col group bg-white hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-black text-white text-shadow-subtle">{course.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Teachers */}
      <Section id="insegnanti" title="I Nostri Insegnanti" background="white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-center group"
            >
              <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-secondary/30 shadow-warm-lg relative group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-soft-xl">
                 <img
                   src={teacher.image}
                   alt={teacher.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              <h3 className="text-2xl font-black text-primary mb-3">{teacher.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 max-w-xs mx-auto">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {teacher.specialties.map(spec => (
                  <span key={spec} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full transition-colors hover:bg-primary/20">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Schedule */}
      <Section id="orari" title="Orario Settimanale" subtitle="Pianifica la tua pratica" background="sage">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-soft-lg overflow-hidden p-4 md:p-6"
        >
           {/* Desktop Table */}
           <div className="hidden md:block overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[700px]">
               <thead>
                 <tr className="bg-primary/5">
                   <th className="px-3 py-2.5 font-bold text-primary text-sm sticky left-0 bg-primary/5">Ora</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Lun</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Mar</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Mer</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Gio</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Ven</th>
                   <th className="px-3 py-2.5 font-bold text-foreground text-xs uppercase tracking-wide">Sab</th>
                 </tr>
               </thead>
               <motion.tbody
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                   hidden: { opacity: 0 },
                   visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
                 }}
               >
                 {schedule.map((row, idx) => (
                   <motion.tr
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className={`border-b border-border/30 hover:bg-secondary/20 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}
                   >
                     <td className={`px-3 py-2 font-semibold text-primary text-sm sticky left-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}>{row.time}</td>
                     <td className="px-3 py-2 text-foreground">{row.monday && <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[11px]">{row.monday}</span>}</td>
                     <td className="px-3 py-2 text-foreground">{row.tuesday && <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[11px]">{row.tuesday}</span>}</td>
                     <td className="px-3 py-2 text-foreground">{row.wednesday && <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[11px]">{row.wednesday}</span>}</td>
                     <td className="px-3 py-2 text-foreground">{row.thursday && <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[11px]">{row.thursday}</span>}</td>
                     <td className="px-3 py-2 text-foreground">{row.friday && <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[11px]">{row.friday}</span>}</td>
                     <td className="px-3 py-2 text-foreground">{row.saturday && <span className="bg-accent/10 text-accent px-1.5 py-0.5 rounded text-[11px]">{row.saturday}</span>}</td>
                   </motion.tr>
                 ))}
               </motion.tbody>
             </table>
           </div>

           {/* Mobile View */}
           <div className="md:hidden space-y-4">
             {["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"].map((day, dayIndex) => {
                const dayKey = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][dayIndex];
                const dayClasses = schedule.filter(row => row[dayKey as keyof typeof row]);

                if (dayClasses.length === 0) return null;

                return (
                  <div key={day} className="rounded-lg overflow-hidden bg-white shadow-soft">
                    <h3 className="text-sm font-bold text-white bg-primary px-4 py-2">{day}</h3>
                    <div className="divide-y divide-border/30">
                      {dayClasses.map((row, idx) => {
                        const classValue = row[dayKey as keyof typeof row];
                        if (!classValue) return null;
                        return (
                          <div key={idx} className="flex items-center gap-3 px-4 py-2.5">
                            <span className="font-semibold text-primary w-14 shrink-0 text-xs">{row.time}</span>
                            <span className="text-foreground text-xs flex-grow">{classValue}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
             })}
           </div>
        </motion.div>
      </Section>

      {/* Events */}
      <Section id="eventi" title="Eventi Speciali" subtitle="Workshop e Ritiri" background="white">
        <div className="relative">
          <Carousel
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {events.map((event, index) => (
                <CarouselItem key={index} className="basis-[80%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-soft hover:shadow-warm-lg transition-all duration-500 overflow-hidden group">
                      <CardContent className="flex flex-col aspect-[4/5] items-center justify-center p-0 overflow-hidden rounded-xl relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                          <span className="text-white text-xl font-black text-shadow-subtle">{event.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white shadow-soft hover:shadow-warm border-none" />
              <CarouselNext className="-right-12 bg-white shadow-soft hover:shadow-warm border-none" />
            </div>
          </Carousel>
          {/* Mobile swipe hint */}
          <div className="md:hidden flex justify-center items-center gap-2 mt-6 text-muted-foreground text-sm">
            <span>Scorri per vedere altri eventi</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contatti" title="Contattaci" subtitle="Inizia il tuo viaggio" background="muted">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-primary">Siamo qui per te</h3>
            <p className="text-muted-foreground">
              Hai domande sui nostri corsi o vuoi prenotare una lezione di prova? 
              Compila il modulo o vieni a trovarci.
            </p>
            
            <div className="space-y-6 mt-8">
              <a href="https://maps.google.com/?q=Via+Venezia+35B,+Lonigo,+VI,+Italy" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full text-primary shadow-soft group-hover:shadow-warm transition-shadow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Dove siamo</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">Via Venezia 35B, Lonigo (VI)</p>
                </div>
              </a>
              
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full text-primary shadow-soft group-hover:shadow-warm transition-shadow">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Telefono</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">388 587 6356</p>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full text-primary shadow-soft group-hover:shadow-warm transition-shadow">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">{EMAIL}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/_beyond_asana/?hl=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white">
                  <Instagram size={20} />
                </Button>
              </a>
              <a href="https://www.facebook.com/p/Beyond-Asana-Lonigo-61550615248927/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white">
                  <Facebook size={20} />
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-soft-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input
                    id="name"
                    placeholder="Il tuo nome"
                    className="bg-secondary/20"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="surname" className="text-sm font-medium">Cognome</label>
                  <Input
                    id="surname"
                    placeholder="Il tuo cognome"
                    className="bg-secondary/20"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@esempio.it"
                  className="bg-secondary/20"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                <Textarea
                  id="message"
                  placeholder="Scrivi qui il tuo messaggio..."
                  className="bg-secondary/20 min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full text-lg py-6">Invia Messaggio</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12 border-b border-white/10 pb-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Beyond Asana</h3>
              <p className="text-white/70 max-w-xs">
                Un santuario per il corpo e la mente, dove la pratica dello yoga incontra il benessere olistico.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Link Rapidi</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#corsi" className="hover:text-white transition-colors">Corsi</a></li>
                <li><a href="#insegnanti" className="hover:text-white transition-colors">Insegnanti</a></li>
                <li><a href="#eventi" className="hover:text-white transition-colors">Eventi</a></li>
                <li><a href="#contatti" className="hover:text-white transition-colors">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Seguici</h4>
              <p className="text-white/70 mb-4 text-sm">Rimani aggiornato su eventi e workshop.</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/_beyond_asana/?hl=en" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Instagram size={18} />
                  </Button>
                </a>
                <a href="https://www.facebook.com/p/Beyond-Asana-Lonigo-61550615248927/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Facebook size={18} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm">
            © 2026 by Roberta Zamborlin. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
