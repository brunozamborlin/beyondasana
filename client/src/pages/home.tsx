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

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />

      {/* Intro / Philosophy */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <h3 className="text-3xl font-serif text-primary mb-6">Il nostro approccio</h3>
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
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col group bg-white hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-serif text-white font-bold drop-shadow-md translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">{course.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow relative">
                  <p className="text-muted-foreground leading-relaxed relative z-10">{course.description}</p>
                  <div className="absolute inset-0 bg-secondary/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out -z-0" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Teachers */}
      <Section id="insegnanti" title="I Nostri Insegnanti" subtitle="Guide esperte" background="white">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              className="text-center group"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/50 shadow-lg relative group-hover:border-primary transition-colors duration-500">
                 <img 
                   src={teacher.image} 
                   alt={teacher.name}
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-1">{teacher.name}</h3>
              <span className="text-accent font-medium text-sm tracking-wide uppercase block mb-4">{teacher.role}</span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4 px-4">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {teacher.specialties.map(spec => (
                  <span key={spec} className="text-xs bg-secondary/50 px-2 py-1 rounded-full text-secondary-foreground transition-colors hover:bg-secondary">
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
          className="bg-white rounded-xl shadow-xl overflow-hidden p-4 md:p-8"
        >
           {/* Desktop Table */}
           <div className="hidden md:block overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                 <tr className="border-b-2 border-primary/20">
                   <th className="p-4 font-serif text-primary text-xl sticky left-0 bg-white">Ora</th>
                   <th className="p-4 font-serif text-foreground font-medium">Lunedì</th>
                   <th className="p-4 font-serif text-foreground font-medium">Martedì</th>
                   <th className="p-4 font-serif text-foreground font-medium">Mercoledì</th>
                   <th className="p-4 font-serif text-foreground font-medium">Giovedì</th>
                   <th className="p-4 font-serif text-foreground font-medium">Venerdì</th>
                   <th className="p-4 font-serif text-foreground font-medium">Sabato</th>
                 </tr>
               </thead>
               <motion.tbody
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                   hidden: { opacity: 0 },
                   visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                 }}
               >
                 {schedule.map((row, idx) => (
                   <motion.tr 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                   >
                     <td className="p-4 font-bold text-accent sticky left-0 bg-white md:bg-transparent">{row.time}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.monday}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.tuesday}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.wednesday}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.thursday}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.friday}</td>
                     <td className="p-4 text-muted-foreground text-sm">{row.saturday}</td>
                   </motion.tr>
                 ))}
               </motion.tbody>
             </table>
           </div>

           {/* Mobile View */}
           <div className="md:hidden space-y-8">
             {["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"].map((day, dayIndex) => {
                const dayKey = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][dayIndex];
                const dayClasses = schedule.filter(row => row[dayKey as keyof typeof row]);
                
                if (dayClasses.length === 0) return null;

                return (
                  <div key={day} className="border rounded-lg p-4 bg-muted/20">
                    <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b pb-2">{day}</h3>
                    <div className="space-y-3">
                      {dayClasses.map((row, idx) => (
                        <div key={idx} className="flex justify-between items-start">
                          <span className="font-bold text-accent w-20 shrink-0">{row.time}</span>
                          <span className="text-foreground flex-grow">{row[dayKey as keyof typeof row]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
             })}
           </div>
        </motion.div>
      </Section>

      {/* Events */}
      <Section id="eventi" title="Eventi Speciali" subtitle="Workshop e Ritiri" background="white">
        <div className="md:hidden flex justify-center items-center gap-2 mb-6 text-muted-foreground text-sm">
           <span className="animate-pulse">Scorri le foto</span>
           <ArrowRight className="w-4 h-4 animate-bounce" />
        </div>
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {events.map((event, index) => (
              <CarouselItem key={index} className="basis-[85%] md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-0 overflow-hidden rounded-xl relative group">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <span className="text-white font-serif text-xl font-bold">{event.title}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section>

      {/* Contact */}
      <Section id="contatti" title="Contattaci" subtitle="Inizia il tuo viaggio" background="muted">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-primary">Siamo qui per te</h3>
            <p className="text-muted-foreground">
              Hai domande sui nostri corsi o vuoi prenotare una lezione di prova? 
              Compila il modulo o vieni a trovarci.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Dove siamo</h4>
                  <p className="text-muted-foreground">Via Venezia 35B, Lonigo (VI)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Telefono</h4>
                  <p className="text-muted-foreground">388 587 6356</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">beyondasana2022@gmail.com</p>
                </div>
              </div>
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
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Il tuo nome" className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="surname" className="text-sm font-medium">Cognome</label>
                  <Input id="surname" placeholder="Il tuo cognome" className="bg-secondary/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="nome@esempio.it" className="bg-secondary/20" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                <Textarea id="message" placeholder="Scrivi qui il tuo messaggio..." className="bg-secondary/20 min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full text-lg py-6">Invia Messaggio</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-white/10 pb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Beyond Asana</h3>
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
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-white/70 mb-4 text-sm">Rimani aggiornato su eventi e workshop.</p>
              <div className="flex gap-2">
                <Input placeholder="La tua email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Button variant="secondary">Iscriviti</Button>
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
