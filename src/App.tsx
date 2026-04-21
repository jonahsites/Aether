import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2, Compass, Shield, Wind, Sparkles } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "THE FLEET", type: "page" },
  { name: "EXPEDITIONS", href: "#expeditions" },
  { name: "PHILOSOPHY", href: "#philosophy" },
  { name: "RESERVATIONS", href: "#reservations" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.1], [0, 10]);

  return (
    <div className="relative bg-aether-deep font-sans selection:bg-aether-ice selection:text-aether-deep overflow-x-hidden">
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>

      {/* Atmospheric Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none atmosphere-bg" />

      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-8 md:px-20 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-px h-12 bg-white/20" />
          <span className="font-serif italic text-2xl tracking-widest text-white uppercase">AETHER</span>
        </motion.div>
        
        <div className="hidden lg:flex gap-16">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.type === "page" ? setShowInventory(true) : null}
              className="text-[10px] font-light tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase"
            >
              <a href={link.href}>{link.name}</a>
            </button>
          ))}
        </div>

        <button className="glass-morphism px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-slow uppercase">
          INITIATE
        </button>
      </nav>

      {/* Immersive Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, filter: `blur(${blurValue}px)` }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Swiss Alps Backdrop" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-aether-deep/80 via-transparent to-aether-deep" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="text-[10px] font-light tracking-[0.8em] text-aether-ice mb-8 block uppercase">GENEVA • LUXURY • TRANSCENDENCE</span>
          <h1 className="text-7xl md:text-[10vw] font-serif italic leading-[0.9] mb-12 text-white">
            Beyond the <br/> 
            <span className="text-glow-ice">Atmosphere</span>
          </h1>
          <div className="flex flex-col items-center gap-12">
            <p className="max-w-xl text-white/40 text-lg font-light leading-relaxed font-serif italic">
              "To drive an AETHER machine is to leave the terrestrial behind. Explore the Alpine passes with the world's most refined automotive poetry."
            </p>
            <button 
              onClick={() => setShowInventory(true)}
              className="group flex flex-col items-center gap-4 focus:outline-none"
            >
              <div className="w-px h-24 bg-linear-to-b from-aether-ice to-transparent group-hover:h-32 transition-all duration-700" />
              <span className="text-[10px] tracking-[0.4em] font-light text-white/40 group-hover:text-white transition-colors uppercase">VIEW COLLECTION</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3D Experience (Showcase) */}
      <section id="experience" className="relative z-10 py-40 border-t border-white/5">
        <div className="text-center mb-0">
          <span className="text-[10px] font-light tracking-[0.5em] text-aether-ice mb-4 block uppercase italic">01 — SELECTION</span>
          <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-20">The Alpine Gallery</h2>
        </div>
        <Showcase />
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative z-10 py-60 px-8 md:px-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] glass-morphism p-4 rounded-sm rotate-2 overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200" 
                 alt="The Drive" 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-slow"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-10 left-10 text-white/20 font-serif italic text-8xl">A</div>
            </div>
          </motion.div>

          <div>
             <span className="text-[10px] font-light tracking-[0.5em] text-aether-ice mb-8 block uppercase">02 — PHILOSOPHY</span>
             <h2 className="text-6xl md:text-7xl font-serif italic text-white mb-10 leading-tight">The Art of <br/> Presence</h2>
             <p className="text-white/40 text-xl font-light leading-relaxed italic font-serif mb-16">
                "We do not merely rent vehicles. We curate moments of total synchronicity between man, machine, and the sharp mountain air of the Alps."
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                   <Compass className="text-aether-ice w-10 h-10 font-light" />
                   <h3 className="text-2xl text-white">Mountain Pass Access</h3>
                   <p className="text-white/40 text-[11px] leading-loose uppercase tracking-widest font-sans">Exclusive route maps through the most challenging and scenic passes in the Swiss Alps.</p>
                </div>
                <div className="flex flex-col gap-4">
                   <Shield className="text-aether-ice w-10 h-10 font-light" />
                   <h3 className="text-2xl text-white">Alpine Safety</h3>
                   <p className="text-white/40 text-[11px] leading-loose uppercase tracking-widest font-sans">Full-spectrum concierge security and weather monitoring for absolute peace of mind.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Expeditions / Services Section */}
      <section id="expeditions" className="relative z-10 py-60 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 md:px-20 text-center">
          <span className="text-[10px] font-light tracking-[0.5em] text-aether-ice mb-6 block uppercase">03 — EXPEDITIONS</span>
          <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-32">Elevated Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Peak Cinematography", icon: Sparkles, desc: "A dedicated crew following your journey to capture the ethereal beauty of your drive amidst the peaks.", price: "FROM €1,200" },
              { title: "Private Hangar Delivery", icon: Wind, desc: "Your selected machine awaiting your arrival at Geneva or Zurich executive terminals.", price: "INCLUDED" },
              { title: "Summit Concierge", icon: Compass, desc: "Personal mountain guides and gourmet logistics for multi-day expeditions through the range.", price: "FROM €850/DAY" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass-morphism p-16 rounded-sm text-center flex flex-col items-center gap-8 group hover:bg-white/[0.06] transition-slow"
              >
                <service.icon className="w-12 h-12 text-aether-ice stroke-[1px]" />
                <h3 className="text-3xl text-white italic">{service.title}</h3>
                <p className="text-white/40 text-[10px] leading-loose uppercase tracking-widest">{service.desc}</p>
                <div className="h-px w-12 bg-white/10" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-aether-ice">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer id="reservations" className="relative z-10 py-40 px-8 md:px-20 bg-aether-deep flex flex-col items-center">
        <div className="flex flex-col items-center gap-20 w-full max-w-4xl">
          <h2 className="text-7xl md:text-9xl font-serif italic text-white text-center opacity-10">AETHER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full pt-20 border-t border-white/5">
            <div className="flex flex-col gap-6">
               <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">GENEVA HQ</span>
               <p className="text-white/40 text-[10px] leading-loose uppercase font-sans tracking-widest italic">Route de Malagnou 22, <br/> 1208 Genève, Switzerland</p>
            </div>
            <div className="flex flex-col gap-6">
               <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">INQUIRIES</span>
               <p className="text-white/40 text-[10px] leading-loose uppercase font-sans tracking-widest italic underline hover:text-white transition-colors cursor-pointer text-ellipsis overflow-hidden">CONCIERGE@AETHER.CH</p>
               <p className="text-white/40 text-[10px] leading-loose uppercase font-sans tracking-widest italic">+41 22 731 22 11</p>
            </div>
            <div className="flex flex-col gap-6">
               <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">LEGAL</span>
               <div className="flex flex-col gap-3 text-white/40 text-[9px] uppercase tracking-widest font-sans italic">
                  <p className="hover:text-white transition-colors cursor-pointer">PRIVACY PROTOCOL</p>
                  <p className="hover:text-white transition-colors cursor-pointer">TERMS OF ASCENSION</p>
                  <p className="hover:text-white transition-colors cursor-pointer">FLEET INTEGRITY</p>
               </div>
            </div>
          </div>
          
          <div className="mt-40 text-[9px] font-light tracking-[0.8em] text-white/20 uppercase">
             © 2026 AETHER AUTOMOTIVE GENÈVE • THE PINNACLE OF PRESENCE
          </div>
        </div>
      </footer>
    </div>
  );
}
