import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface Ingredient {
  name: string;
  percentage: number;
  color: string;
}

interface CoffeeVisualizerProps {
  name: string;
  tagline: string;
  ingredients: Ingredient[];
}

export default function CoffeeVisualizer({ name, tagline, ingredients }: CoffeeVisualizerProps) {
  // We want to render the ingredients from bottom to top
  // To preserve actual drink construction order, we render in reverse order (bottom layer first)
  const sortedIngredients = [...ingredients];

  // Let's calculate cumulative heights for proper rendering inside the absolute positioned cup
  return (
    <div className="relative w-full max-w-sm mx-auto p-6 bg-coffee-950/40 border border-gold-900/30 rounded-3xl backdrop-blur-sm shadow-2xl flex flex-col items-center">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Visualizador de Taza</span>
        <h4 className="font-serif text-2xl font-bold text-gold-100 tracking-wide mt-1">{name}</h4>
        <p className="text-xs text-coffee-300 italic mt-0.5">{tagline}</p>
      </div>

      {/* Visual Cup container */}
      <div className="relative w-64 h-80 flex justify-center items-end pb-8">
        {/* Glass Handle */}
        <div className="absolute right-3 top-1/4 w-12 h-36 border-4 border-gold-800/40 rounded-r-3xl -mr-8 -z-10 transition-colors duration-500"></div>

        {/* Coffee Cup body */}
        <div className="relative w-48 h-64 border-4 border-gold-500/30 border-t-0 rounded-b-[3rem] bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm overflow-hidden flex flex-col justify-end shadow-inner z-10">
          {/* Liquid layers */}
          <div className="w-full flex flex-col justify-end h-full">
            {sortedIngredients.map((ing, idx) => (
              <motion.div
                key={ing.name + idx}
                initial={{ height: 0 }}
                animate={{ height: `${ing.percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: idx * 0.15 }}
                className="w-full relative flex items-center justify-center group overflow-hidden"
                style={{ backgroundColor: ing.color }}
              >
                {/* Visual texture for milk foam / steamed milk */}
                {ing.name.toLowerCase().includes('espuma') && (
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:6px_6px]"></div>
                )}
                {/* Sparkle effect on spices */}
                {ing.name.toLowerCase().includes('especias') && (
                  <div className="absolute inset-0 bg-gold-400/20 mix-blend-overlay animate-pulse"></div>
                )}

                {/* Layer Labels */}
                <span className="text-[10px] font-semibold text-coffee-950/90 tracking-wider uppercase text-center px-2 pointer-events-none drop-shadow-sm font-sans truncate">
                  {ing.name} ({ing.percentage}%)
                </span>
                
                {/* Liquid glow effect on hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Steam / Aroma effects floating above the cup */}
          <div className="absolute -top-12 left-0 right-0 h-10 flex justify-around pointer-events-none px-4">
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ 
                  y: [-10, -35, -50], 
                  opacity: [0, 0.6, 0], 
                  scale: [0.8, 1.2, 0.9],
                  x: [0, s * 4 - 8, s * -4 + 8]
                }}
                transition={{
                  duration: 2.5 + s * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: s * 0.6
                }}
                className="w-1.5 h-10 bg-gradient-to-t from-gold-300/40 to-transparent rounded-full blur-[2px]"
              ></motion.div>
            ))}
          </div>

          {/* Glass glare effect */}
          <div className="absolute inset-y-0 left-3 w-3 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-20"></div>
          <div className="absolute inset-y-0 right-4 w-1 bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Coaster shadow base */}
        <div className="absolute bottom-4 w-52 h-3 bg-coffee-950/60 blur-[3px] rounded-full -z-20"></div>
        <div className="absolute bottom-5 w-56 h-2 border border-gold-600/30 bg-coffee-900 rounded-full z-0"></div>
      </div>

      {/* Specialty Badge */}
      <div className="flex items-center space-x-2 bg-gold-400/10 border border-gold-400/20 px-3 py-1.5 rounded-full mt-2">
        <Sparkles className="w-3.5 h-3.5 text-gold-300" />
        <span className="text-[11px] font-mono font-medium text-gold-200 tracking-wider">
          Ingredientes Premium Seleccionados
        </span>
      </div>
    </div>
  );
}
