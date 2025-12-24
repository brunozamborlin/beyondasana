import { motion } from "framer-motion";
import { assets } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like feel (static for now but fixed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${assets.hero})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-white/90">
            Lokah Samastah Sukhino Bhavantu
          </span>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Benvenuti nella nostra <br />
            <span className="relative inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="italic font-light block"
              >
                Oasi di Yoga
              </motion.span>
            </span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
            Rilassatevi e connettetevi con il vostro corpo e la vostra mente. 
            Unitevi a noi per trovare la vostra pace interiore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-serif"
              onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri i Corsi
            </Button>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto backdrop-blur-sm border border-white/20"
              onClick={() => document.getElementById('orari')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Orari Lezioni
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
