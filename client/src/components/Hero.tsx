import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px] brightness-90 saturate-[0.85]"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="block text-xs md:text-sm font-medium uppercase mb-6 text-white/80 text-shadow-subtle"
          >
            Lokah Samastah Sukhino Bhavantu
          </motion.span>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-shadow-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Benvenuti nella nostra
            <span className="block mt-2 md:mt-4">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
                className="italic font-light text-white/95"
              >
                Oasi di Yoga
              </motion.span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="max-w-xl mx-auto text-base md:text-lg text-white/85 mb-10 font-light leading-relaxed text-shadow-subtle"
          >
            Rilassatevi e connettetevi con il vostro corpo e la vostra mente.
            Unitevi a noi per trovare la vostra pace interiore.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 h-auto font-serif shadow-soft-lg hover:shadow-warm-lg transition-all duration-300"
              onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri i Corsi
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white text-base px-8 py-6 h-auto border-white/40 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById('orari')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Orari Lezioni
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Scopri</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
