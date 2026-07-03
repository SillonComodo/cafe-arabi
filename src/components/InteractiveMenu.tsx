import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Snowflake, Check, Heart, MessageSquare } from 'lucide-react';
import { CoffeeItem } from '../types';
import CoffeeVisualizer from './CoffeeVisualizer';

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState<'hot' | 'iced'>('hot');
  const [selectedItemId, setSelectedItemId] = useState<string>('expresso_sencillo');
  const [favorites, setFavorites] = useState<string[]>([]);

  const menuItems: CoffeeItem[] = [
    // --- EXPRESSO ---
    {
      id: 'expresso_sencillo',
      name: 'Expresso Sencillo',
      tagline: 'Shot clásico de café expresso ($20.00)',
      price: 20.00,
      description: 'Extracción pura y concentrada de granos seleccionados con crema densa color avellana.',
      category: 'hot',
      image: './espresso_shot.png',
      intensity: 5,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Crema de café densa', percentage: 20, color: '#936224' },
        { name: 'Espresso concentrado', percentage: 80, color: '#271201' },
      ],
    },
    {
      id: 'expresso_cortado',
      name: 'Expresso Cortado',
      tagline: 'Expresso con un corte de leche vaporizada ($22.00)',
      price: 22.00,
      description: 'Shot de expresso cortado con una pequeña cantidad de leche caliente espumada para suavizar la acidez.',
      category: 'hot',
      image: './espresso_shot.png',
      intensity: 4,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Espuma de leche ligera', percentage: 20, color: '#ffffff' },
        { name: 'Espresso clásico', percentage: 80, color: '#271201' },
      ],
    },
    {
      id: 'expresso_doble',
      name: 'Expresso Doble',
      tagline: 'Doble shot de expresso clásico ($22.00)',
      price: 22.00,
      description: 'Dos extracciones de expresso que duplican la intensidad y el cuerpo de tu bebida favorita.',
      category: 'hot',
      image: './espresso_shot.png',
      intensity: 5,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Crema de café densa', percentage: 20, color: '#936224' },
        { name: 'Doble Espresso concentrado', percentage: 80, color: '#271201' },
      ],
    },
    {
      id: 'expresso_doble_cortado',
      name: 'Expresso Doble Cortado',
      tagline: 'Doble shot de expresso con leche vaporizada ($25.00)',
      price: 25.00,
      description: 'Doble shot de expresso cortado con una generosa nube de leche vaporizada.',
      category: 'hot',
      image: './espresso_shot.png',
      intensity: 4,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Leche vaporizada cremosa', percentage: 30, color: '#f5edd6' },
        { name: 'Doble Espresso clásica', percentage: 70, color: '#271201' },
      ],
    },
    // --- AMERICANO ---
    {
      id: 'americano_regular',
      name: 'Americano Regular',
      tagline: 'Espresso diluido en agua caliente ($20.00)',
      price: 20.00,
      description: 'El clásico americano suave y balanceado para comenzar el día con aroma inigualable.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Agua purificada caliente', percentage: 65, color: '#34495e' },
        { name: 'Espresso de especialidad', percentage: 35, color: '#4a2c11' },
      ],
    },
    {
      id: 'americano_cortado',
      name: 'Americano Cortado',
      tagline: 'Americano con un corte de leche vaporizada ($22.00)',
      price: 22.00,
      description: 'La suavidad del café americano con un ligero corte de leche cremosa.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Leche cremosa', percentage: 15, color: '#f5edd6' },
        { name: 'Agua caliente', percentage: 50, color: '#34495e' },
        { name: 'Espresso aromático', percentage: 35, color: '#4a2c11' },
      ],
    },
    {
      id: 'americano_12',
      name: 'Americano 12 Onz',
      tagline: 'Americano en presentación grande de 12 oz ($22.00)',
      price: 22.00,
      description: 'Una generosa porción de nuestro café americano para prolongar tu experiencia aromática.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Agua purificada caliente', percentage: 70, color: '#34495e' },
        { name: 'Espresso de la casa', percentage: 30, color: '#4a2c11' },
      ],
    },
    {
      id: 'americano_cortado_12',
      name: 'Americano Cortado 12 Onz',
      tagline: 'Americano grande de 12 oz cortado con leche ($25.00)',
      price: 25.00,
      description: 'Americano de 12 onzas cortado con una sutil capa de leche vaporizada.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Leche cremosa', percentage: 15, color: '#f5edd6' },
        { name: 'Agua caliente', percentage: 55, color: '#34495e' },
        { name: 'Espresso aromático', percentage: 30, color: '#4a2c11' },
      ],
    },
    // --- CAPUCCINO ---
    {
      id: 'capuccino_regular',
      name: 'Capuccino Regular',
      tagline: 'Equilibrio perfecto de espresso, leche y abundante espuma ($25.00)',
      price: 25.00,
      description: 'Un shot de espresso, leche vaporizada y una corona de espuma densa y suave.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Espuma de leche densa', percentage: 35, color: '#ffffff' },
        { name: 'Leche vaporizada', percentage: 35, color: '#f4ede2' },
        { name: 'Espresso de especialidad', percentage: 30, color: '#42240c' },
      ],
    },
    {
      id: 'capuccino_12',
      name: 'Capuccino 12 Onz',
      tagline: 'Capuccino en tamaño grande de 12 oz ($28.00)',
      price: 28.00,
      description: 'La tradicional receta del capuccino con mayor volumen de leche cremosa y espuma nube.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Mezcla de la Casa',
      ingredients: [
        { name: 'Espuma de leche densa', percentage: 35, color: '#ffffff' },
        { name: 'Leche vaporizada', percentage: 40, color: '#f4ede2' },
        { name: 'Espresso de especialidad', percentage: 25, color: '#42240c' },
      ],
    },
    // --- LATTE ---
    {
      id: 'latte_regular',
      name: 'Latte Regular',
      tagline: 'Café suave y muy cremoso con fina capa de espuma ($25.00)',
      price: 25.00,
      description: 'Doble shot de espresso vertido suavemente sobre leche caliente vaporizada, coronado con microespuma.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Espuma de leche fina', percentage: 15, color: '#ffffff' },
        { name: 'Leche cremosa batida', percentage: 55, color: '#f7f1e5' },
        { name: 'Espresso de especialidad', percentage: 30, color: '#301804' },
      ],
    },
    {
      id: 'latte_12',
      name: 'Latte 12 Onz',
      tagline: 'Café Latte en presentación grande de 12 oz ($28.00)',
      price: 28.00,
      description: 'Una porción extra cremosa de latte, ideal para los amantes de las texturas sedosas y sutiles.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Pluma Hidalgo OAX',
      ingredients: [
        { name: 'Espuma de leche fina', percentage: 15, color: '#ffffff' },
        { name: 'Leche cremosa batida', percentage: 60, color: '#f7f1e5' },
        { name: 'Espresso de especialidad', percentage: 25, color: '#301804' },
      ],
    },
    // --- MOKA ---
    {
      id: 'moka_regular',
      name: 'Moka Regular',
      tagline: 'La perfecta armonía con chocolate gourmet ($28.00)',
      price: 28.00,
      description: 'Doble shot de espresso mezclado con jarabe de chocolate de alta calidad y leche vaporizada.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Natural',
      ingredients: [
        { name: 'Espuma de leche', percentage: 15, color: '#ffffff' },
        { name: 'Leche vaporizada', percentage: 50, color: '#f4ede2' },
        { name: 'Espresso de especialidad', percentage: 25, color: '#42240c' },
        { name: 'Chocolate premium', percentage: 10, color: '#1a0d04' },
      ],
    },
    {
      id: 'moka_12',
      name: 'Moka 12 Onz',
      tagline: 'Café Moka en presentación grande de 12 oz ($30.00)',
      price: 30.00,
      description: 'Nuestra deliciosa mezcla de café, leche cremosa y chocolate fino en formato de 12 onzas.',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Natural',
      ingredients: [
        { name: 'Espuma de leche', percentage: 15, color: '#ffffff' },
        { name: 'Leche vaporizada', percentage: 55, color: '#f4ede2' },
        { name: 'Espresso de especialidad', percentage: 20, color: '#42240c' },
        { name: 'Chocolate premium', percentage: 10, color: '#1a0d04' },
      ],
    },
    // --- FRAPPÉ ---
    {
      id: 'frappe_regular',
      name: 'Frappé Regular',
      tagline: 'Deliciosa bebida helada licuada de café ($38.00)',
      price: 38.00,
      description: 'Café premium licuado con hielo, leche y azúcar para dar una textura frappé inigualable, coronado con crema batida. (Carga extra de espresso por +$7.00 MXN).',
      category: 'iced',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
      intensity: 3,
      originDefault: 'Natural',
      ingredients: [
        { name: 'Crema chantilly', percentage: 15, color: '#ffffff' },
        { name: 'Base frappé helada de café', percentage: 85, color: '#3e1d05' },
      ],
    },
    // --- TÉ ---
    {
      id: 'te_caliente_frio',
      name: 'Té (Caliente o Frío)',
      tagline: 'Infusión herbal/frutal en agua purificada ($28.00)',
      price: 28.00,
      description: 'Una taza aromática y reconfortante. Elige tu sabor favorito al ordenar: Moras, Relax, Manzana, Hurricane, Cherry Festival, Fruta Caribeña, Oma\'s Garden, Cherry Banana, Pasion Orange, Oriental Spice o Fresa Kiwi.',
      category: 'iced', // Will appear in both tabs using custom filter
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      intensity: 1,
      originDefault: 'Infusión Especial',
      ingredients: [
        { name: 'Té de especialidad', percentage: 100, color: '#cca43b' },
      ],
    },
  ];

  const selectedItem = menuItems.find((item) => item.id === selectedItemId) || menuItems[0];

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Custom filter: 'Té' is shown in both Calientes (hot) and Frías (iced)
  const activeItems = menuItems.filter(
    (item) => item.category === activeCategory || item.id === 'te_caliente_frio'
  );

  return (
    <section id="menu" className="py-24 bg-coffee-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-mono text-gold-600 tracking-[0.3em] uppercase block mb-3">
            Explora Nuestra Carta
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-coffee-900">
            Menú de Especialidad
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-coffee-600 max-w-2xl mx-auto font-sans text-sm sm:text-base">
            Selecciona cualquier bebida para ver la proporción exacta de sus ingredientes dentro del vaso y ordénala directamente por WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'hot', name: 'Infusiones Calientes', icon: Coffee },
            { id: 'iced', name: 'Creaciones Frías / Frappés', icon: Snowflake },
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  const firstOfCat = menuItems.find((i) => i.category === cat.id || i.id === 'te_caliente_frio');
                  if (firstOfCat) {
                    setSelectedItemId(firstOfCat.id);
                  }
                }}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-full font-serif text-sm font-semibold tracking-wider transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-coffee-900 text-gold-300 border-gold-400 shadow-xl'
                    : 'bg-white text-coffee-700 hover:text-coffee-900 hover:bg-coffee-100 border-coffee-200/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
 
        {/* Core Layout Grid - Two Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Menu Items List (Col Span 8) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-serif text-lg font-bold text-coffee-800 px-2 tracking-wide">
              Selecciona tu Bebida
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {activeItems.map((item) => {
                const isSelected = item.id === selectedItemId;
                const isFav = favorites.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`menu-card-${item.id}`}
                    onClick={() => {
                      setSelectedItemId(item.id);
                    }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border relative group flex items-center space-x-4 ${
                      isSelected
                        ? 'bg-white border-gold-400 shadow-md ring-1 ring-gold-400/30 scale-[1.01]'
                        : 'bg-white/60 hover:bg-white border-coffee-200/40 hover:border-coffee-300 shadow-sm'
                    }`}
                  >
                    {/* Item Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-coffee-100 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
 
                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-coffee-950 truncate pr-2">
                          {item.name}
                        </h4>
                        <span className="font-sans text-sm font-semibold text-gold-600 shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-coffee-500 line-clamp-2 mt-0.5 font-sans leading-relaxed">
                        {item.tagline}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-coffee-100/10">
                        {/* Rating or Intensity dots */}
                        <div className="flex items-center space-x-0.5">
                          <span className="text-[9px] font-mono font-bold tracking-wider text-coffee-400 uppercase mr-1">Tueste:</span>
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`w-1.5 h-1.5 rounded-full ${
                                dot <= item.intensity ? 'bg-gold-500' : 'bg-coffee-200'
                              }`}
                            ></span>
                          ))}
                        </div>
 
                        {/* Favorite button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                          className="text-coffee-300 hover:text-red-500 p-1 rounded-full transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
 
          {/* Right Panel: Visualizer & Ordering Button (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visualizer card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-coffee-200/50 flex flex-col">
              <span className="text-[10px] font-mono text-gold-600 font-semibold uppercase tracking-widest text-center mb-2 block">
                Visualizador de Capas
              </span>
              
              <CoffeeVisualizer
                name={selectedItem.name}
                tagline={selectedItem.tagline}
                ingredients={selectedItem.ingredients}
              />
              
              {/* Product Info Description */}
              <div className="mt-6 border-t border-coffee-100 pt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-coffee-950">
                    {selectedItem.name}
                  </h4>
                  <span className="font-mono font-extrabold text-gold-600 text-base">
                    ${selectedItem.price.toFixed(2)} MXN
                  </span>
                </div>
                
                <p className="text-xs text-coffee-600 font-sans leading-relaxed">
                  {selectedItem.description}
                </p>

                {selectedItem.id === 'frappe_regular' && (
                  <div className="bg-gold-50/50 border border-gold-200/30 p-2.5 rounded-xl text-[10px] text-gold-800 font-sans leading-normal">
                    💡 <strong>Carga extra:</strong> Puedes solicitar una carga de espresso adicional al ordenar por solo +$7.00 MXN.
                  </div>
                )}
                
                <a
                  href={`https://wa.me/525665407383?text=Hola,%20me%20gustaría%20ordenar%20un%20${encodeURIComponent(selectedItem.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3.5 bg-gold-500 hover:bg-gold-400 text-coffee-950 font-serif font-bold text-sm tracking-widest uppercase rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95 duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-coffee-950" />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>
            </div>
            
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
