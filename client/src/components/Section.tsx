import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  background?: "white" | "muted" | "sage";
}

export function Section({ 
  id, 
  className, 
  children, 
  title, 
  subtitle,
  background = "white" 
}: SectionProps) {
  
  const bgColors = {
    white: "bg-background",
    muted: "bg-secondary/30",
    sage: "bg-primary/5",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-24 md:py-36 lg:py-40 w-full overflow-hidden", 
        bgColors[background],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-20">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-medium tracking-widest uppercase text-sm mb-3 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-foreground"
              >
                {title}
              </motion.h2>
            )}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full"
            />
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}
