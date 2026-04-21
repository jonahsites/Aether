import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Search } from 'lucide-react';

const categories = ["All", "Lamborghini", "Bentley", "Rolls Royce", "Mercedes", "BMW", "Corvette", "Tesla", "Cadillac", "Audi", "Toyota"];

const cars = [
  { id: 1, name: "Lamborghini Huracan Performante", category: "Lamborghini", price: 1495, hp: 631, speed: "201 MPH", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Miami Blue Lamborghini Urus", category: "Lamborghini", price: 1195, hp: 641, speed: "190 MPH", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Bentley Continental GT", category: "Bentley", price: 1195, hp: 626, speed: "207 MPH", image: "https://images.unsplash.com/photo-1621135802920-133df287f2a6?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Grey Lamborghini Urus", category: "Lamborghini", price: 1195, hp: 641, speed: "190 MPH", image: "https://images.unsplash.com/photo-1608508644127-ba99d77ee8f0?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Rolls Royce Ghost", category: "Rolls Royce", price: 995, hp: 563, speed: "155 MPH", image: "https://images.unsplash.com/photo-1631215233157-5b865668d90f?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Mercedes G Wagon", category: "Mercedes", price: 895, hp: 577, speed: "149 MPH", image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Maybach S650", category: "Maybach", price: 895, hp: 621, speed: "155 MPH", image: "https://images.unsplash.com/photo-1606148301667-463878b3112b?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Mercedes S580", category: "Mercedes", price: 795, hp: 496, speed: "155 MPH", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "BMW 760I", category: "BMW", price: 795, hp: 536, speed: "155 MPH", image: "https://images.unsplash.com/photo-1555215695-300498bba535?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Corvette C8 Lambo Doors", category: "Corvette", price: 595, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800" },
  { id: 11, name: "BMW M4 Comp Convertible", category: "BMW", price: 595, hp: 503, speed: "180 MPH", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "BMW M4 Comp x Drive Convertible", category: "BMW", price: 595, hp: 503, speed: "180 MPH", image: "https://images.unsplash.com/photo-1619330606963-71cd6dc34e5a?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "Black Cybertruck", category: "Tesla", price: 545, hp: 845, speed: "130 MPH", image: "https://images.unsplash.com/photo-1617788138017-80ad42243c2d?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "BMW M4 Comp", category: "BMW", price: 545, hp: 503, speed: "180 MPH", image: "https://images.unsplash.com/photo-1603811410716-86737c35ac8d?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "Yellow Corvette C8 Convertible", category: "Corvette", price: 545, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" },
  { id: 16, name: "Orange Corvette C8 Convertible", category: "Corvette", price: 545, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800" },
  { id: 17, name: "Red Corvette C8 Convertible", category: "Corvette", price: 545, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1594731802111-0739e821c99c?auto=format&fit=crop&q=80&w=800" },
  { id: 18, name: "Corvette C8 70th Anniversary", category: "Corvette", price: 495, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=800" },
  { id: 19, name: "BMW M2 Comp", category: "BMW", price: 495, hp: 405, speed: "174 MPH", image: "https://images.unsplash.com/photo-1600706432502-77a0e2e327fc?auto=format&fit=crop&q=80&w=800" },
  { id: 20, name: "Cadillac Escalade", category: "Cadillac", price: 495, hp: 420, speed: "130 MPH", image: "https://images.unsplash.com/photo-1604054945110-67e411b95ff8?auto=format&fit=crop&q=80&w=800" },
  { id: 21, name: "Red Corvette C8", category: "Corvette", price: 495, hp: 495, speed: "194 MPH", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800" },
  { id: 22, name: "BMW I8", category: "BMW", price: 495, hp: 369, speed: "155 MPH", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=800" },
  { id: 23, name: "Supra GR", category: "Toyota", price: 445, hp: 382, speed: "155 MPH", image: "https://images.unsplash.com/photo-1634063261765-b3e1003f9091?auto=format&fit=crop&q=80&w=800" },
  { id: 24, name: "Audi RS3", category: "Audi", price: 445, hp: 401, speed: "180 MPH", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800" },
];

interface InventoryProps {
  onClose: () => void;
}

const Inventory: React.FC<InventoryProps> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter(car => 
    (activeCategory === "All" || car.category === activeCategory) &&
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-4 z-[200] glass-morphism rounded-xl overflow-hidden flex flex-col md:inset-10"
    >
      <div className="flex-1 overflow-y-auto px-8 py-12 md:px-20 custom-scrollbar">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div>
            <div className="text-[10px] font-light tracking-[0.5em] text-aether-ice mb-6 block uppercase italic">THE AETHER FLEET</div>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white flex flex-col">
               Pure <span>Machines</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-end w-full md:w-auto">
             <button 
               onClick={onClose}
               className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] text-white/40 hover:text-white transition-all uppercase focus:outline-none"
             >
               <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all transition-slow" />
               CLOSE GALLERY
             </button>
             <div className="relative w-full md:w-80">
                <input 
                  type="text"
                  placeholder="SEARCH THE GENÈVE FLEET..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/[0.02] border-b border-white/10 py-4 px-2 font-sans text-[9px] uppercase tracking-[0.3em] font-light text-white focus:outline-none focus:border-aether-ice transition-colors placeholder:text-white/10"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-white/10" size={14} />
             </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-20">
          {categories.slice(0, 9).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full font-sans text-[9px] uppercase tracking-[0.2em] transition-all border ${
                activeCategory === cat ? 'bg-aether-ice text-aether-deep border-aether-ice' : 'bg-transparent text-white/30 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative flex flex-col gap-8 p-6 hover:bg-white/[0.02] transition-slow rounded-xl"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-slow"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 glass-morphism px-6 py-2 rounded-full border border-white/10">
                    <span className="font-sans text-[10px] font-bold text-white tracking-[0.2em]">€{car.price} <span className="opacity-40">/ DAY</span></span>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-2">
                       <span className="text-[9px] font-light uppercase tracking-[0.4em] text-white/20">{car.category}</span>
                       <h3 className="text-3xl font-serif italic text-white group-hover:text-aether-ice transition-colors">{car.name}</h3>
                    </div>
                    <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-aether-ice group-hover:text-aether-deep transition-slow">
                       <ArrowUpRight size={18} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-px bg-white/5">
                    <div className="bg-aether-deep md:bg-transparent py-4">
                      <div className="text-[8px] uppercase tracking-[0.3em] text-white/20 mb-1">FORCE</div>
                      <div className="text-sm font-light text-white italic font-serif">{car.hp} PS</div>
                    </div>
                    <div className="bg-aether-deep md:bg-transparent py-4 text-right">
                      <div className="text-[8px] uppercase tracking-[0.3em] text-white/20 mb-1">LIMIT</div>
                      <div className="text-sm font-light text-white italic font-serif">{car.speed}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCars.length === 0 && (
          <div className="py-60 text-center">
            <p className="font-serif italic text-2xl text-white/20">The requested machine is currently unavailable.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Inventory;
