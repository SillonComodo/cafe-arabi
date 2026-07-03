import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Info, Award, ShoppingBag } from 'lucide-react';
import { BeanOrigin } from '../types';

export default function BeanOrigins() {
  const [selectedBeanId, setSelectedBeanId] = useState<string>('pluma_hidalgo');

  const origins: BeanOrigin[] = [
    {
      id: 'pluma_hidalgo',
      name: 'Pluma Hidalgo OAX',
      country: 'Oaxaca, México',
      elevation: '1,200m - 1,400m',
      process: 'Lavado Húmedo Tradicional',
      notes: 'Chocolate, nuez y cuerpo medio terso',
      description: 'Cultivado en la mítica región de Pluma Hidalgo, este grano de variedad Typica es famoso por su acidez balanceada, dulzor noble y postgusto prolongado y achocolatado.',
      acidity: 65,
      body: 60,
      sweetness: 80,
      bitterness: 40,
      priceKg: 250.00,
    },
    {
      id: 'natural',
      name: 'Natural',
      country: 'Veracruz, México',
      elevation: '1,200m - 1,350m',
      process: 'Secado Natural al Sol',
      notes: 'Frutos rojos maduros, cereza negra y dulzor de caña',
      description: 'Un proceso natural que permite al grano absorber todos los azúcares de la pulpa durante el secado lento al sol. Destaca por su cuerpo robusto y notas frutales intensas.',
      acidity: 75,
      body: 80,
      sweetness: 90,
      bitterness: 50,
      priceKg: 200.00,
    },
    {
      id: 'maragogype',
      name: 'Maragogype',
      country: 'Chiapas, México',
      elevation: '1,400m - 1,600m',
      process: 'Lavado con Fermentación Controlada',
      notes: 'Flor de azahar, té de limón y acidez brillante',
      description: 'Conocido como el "grano gigante de café", esta variedad exótica ofrece una taza de gran claridad, acidez brillante, cuerpo sedoso y notas florales delicadas.',
      acidity: 85,
      body: 45,
      sweetness: 75,
      bitterness: 30,
      priceKg: 340.00,
    },
    {
      id: 'mezcla_casa',
      name: 'Mezcla de la Casa',
      country: 'CDMX Blend',
      elevation: '1,200m - 1,500m',
      process: 'Mezcla Selecta de Procesos',
      notes: 'Caramelo denso, chocolate oscuro y balance perfecto',
      description: 'Nuestra receta insignia que balancea granos de Oaxaca y Veracruz. Diseñada especialmente para dar un espresso perfecto o un americano aromático con excelente cuerpo.',
      acidity: 50,
      body: 75,
      sweetness: 85,
      bitterness: 55,
      priceKg: 210.00,
    },
    {
      id: 'caracolillo',
      name: 'Caracolillo',
      country: 'Puebla, México',
      elevation: '1,100m - 1,300m',
      process: 'Lavado y Clasificación Manual',
      notes: 'Avellana, almendra tostada y cuerpo cremoso',
      description: 'Granos redondos de caracolillo que concentran todo el sabor en un solo embrión. Ofrece un perfil cremoso con notas pronunciadas a frutos secos y acidez sutil.',
      acidity: 45,
      body: 70,
      sweetness: 80,
      bitterness: 50,
      priceKg: 230.00,
    },
    {
      id: 'prima_lavado',
      name: 'Prima Lavado',
      country: 'Veracruz, México',
      elevation: '1,000m - 1,200m',
      process: 'Lavado en Húmedo Clásico',
      notes: 'Piloncillo, cacao ligero y acidez balanceada',
      description: 'El clásico café veracruzano de altura. Balanceado, limpio en taza, con notas tradicionales dulces que evocan al piloncillo y chocolate ligero.',
      acidity: 60,
      body: 60,
      sweetness: 75,
      bitterness: 45,
      priceKg: 220.00,
    },
    {
      id: 'cubano',
      name: 'Cubano',
      country: 'Veracruz (Tueste Oscuro)',
      elevation: '1,100m - 1,300m',
      process: 'Lavado y Tueste Intenso',
      notes: 'Chocolate amargo, notas de madera ahumada y cuerpo denso',
      description: 'Un grano tostado al estilo caribeño (tueste oscuro o italiano). Elimina casi toda la acidez para potenciar un cuerpo sumamente denso y notas amargas y achocolatadas potentes.',
      acidity: 20,
      body: 90,
      sweetness: 50,
      bitterness: 85,
      priceKg: 230.00,
    },
    {
      id: 'descafeinado',
      name: 'Descafeinado',
      country: 'Chiapas (Descafeinado al Agua)',
      elevation: '1,200m - 1,400m',
      process: 'Proceso de Descafeinado por Agua Sin Químicos',
      notes: 'Malta dulce, azúcar quemado y acidez baja',
      description: 'Descafeinado mediante el método natural de agua de montaña que conserva los aceites y sabores originales del grano de Chiapas sin rastros de solventes químicos.',
      acidity: 40,
      body: 60,
      sweetness: 70,
      bitterness: 45,
      priceKg: 230.00,
    },
  ];

  const selectedBean = origins.find(b => b.id === selectedBeanId) || origins[0];

  return (
    <section id="esencia" className="py-24 bg-coffee-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-mono text-gold-600 tracking-[0.3em] uppercase block mb-3">
            Nuestros Granos Seleccionados
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-coffee-900">
            Venta por Kilo
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-coffee-600 max-w-2xl mx-auto font-sans text-sm sm:text-base leading-relaxed">
            Lleva a casa el auténtico sabor de Café Arábica. Contamos con granos nacionales y recetas exclusivas, tostados con precisión y disponibles en venta por kilo con molienda personalizada a tu gusto.
          </p>
        </div>

        {/* Dynamic Beans & Roasting Grid */}
        <div className="space-y-10">
          
          {/* Quick selectors cards (8 Coffees) */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-coffee-800 flex items-center space-x-2">
              <Compass className="w-4 h-4 text-gold-500" />
              <span>Selecciona una variedad de grano</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {origins.map((bean) => (
                <button
                  key={bean.id}
                  onClick={() => setSelectedBeanId(bean.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between h-36 ${
                    selectedBeanId === bean.id
                      ? 'bg-gradient-to-br from-coffee-800 to-coffee-950 text-white border-gold-400 shadow-xl shadow-coffee-950/10 scale-[1.02]'
                      : 'bg-white hover:bg-coffee-100/40 text-coffee-900 border-coffee-200/60'
                  }`}
                >
                  <div>
                    <span className={`text-[9px] font-mono tracking-wider uppercase font-semibold block ${
                      selectedBeanId === bean.id ? 'text-gold-300' : 'text-gold-600'
                    }`}>
                      {bean.country}
                    </span>
                    <h4 className="font-serif text-base font-bold mt-1 line-clamp-1">
                      {bean.name}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end text-xs mt-3 font-sans border-t border-coffee-100/10 pt-2">
                    <span className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                      selectedBeanId === bean.id
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30'
                        : 'bg-coffee-900/5 text-coffee-800 border border-coffee-900/10'
                    }`}>
                      ${bean.priceKg.toFixed(0)}/kg
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Bean Card Detail (Divided into 2 columns on desktop) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBean.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-coffee-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/5 rounded-bl-full -z-10"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left Column: Descriptions, Price & Action */}
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-coffee-100">
                    <div>
                      <span className="text-xs font-mono text-gold-600 font-semibold tracking-wider block uppercase">
                        Origen Certificado • {selectedBean.country}
                      </span>
                      <h4 className="font-serif text-3xl font-bold text-coffee-900 mt-1">
                        {selectedBean.name}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-1.5 bg-gold-50 text-gold-700 px-3 py-1.5 rounded-full border border-gold-200/50 shrink-0 self-start sm:self-auto">
                      <Award className="w-4 h-4 text-gold-500" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">Grado Especial</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-coffee-50 rounded-xl">
                      <span className="text-[10px] font-mono uppercase text-coffee-500 block">Proceso de Curado</span>
                      <span className="text-sm font-semibold text-coffee-800 mt-0.5 block">{selectedBean.process}</span>
                    </div>
                    <div className="p-3 bg-coffee-50 rounded-xl">
                      <span className="text-[10px] font-mono uppercase text-coffee-500 block">Notas de Cata Clave</span>
                      <span className="text-sm font-semibold text-coffee-800 mt-0.5 block italic">{selectedBean.notes}</span>
                    </div>
                  </div>

                  <p className="text-coffee-600 text-sm leading-relaxed font-sans">
                    {selectedBean.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
                    <div className="flex items-center space-x-3 bg-gold-500/10 border border-gold-400/30 px-4 py-2.5 rounded-2xl text-gold-800 font-serif font-bold text-base shrink-0 self-start sm:self-auto">
                      <ShoppingBag className="w-5 h-5 text-gold-600" />
                      <span>Venta por Kilo:</span>
                      <span className="text-coffee-950 font-mono font-extrabold text-lg">${selectedBean.priceKg.toFixed(2)} MXN</span>
                    </div>

                    <a
                      href={`https://wa.me/525665407383?text=Hola,%20me%20interesaría%20comprar%20un%20kilo%20de%20café%20${encodeURIComponent(selectedBean.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-coffee-900 hover:bg-coffee-850 text-gold-200 text-xs font-serif font-bold tracking-widest uppercase rounded-2xl transition-all shadow-md inline-flex items-center space-x-2 self-start sm:self-auto"
                    >
                      <span>Comprar por WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Original Sensory Profile Chart */}
                <div className="bg-coffee-50/50 p-6 rounded-2xl border border-coffee-100 space-y-4">
                  <h5 className="text-[11px] font-mono text-coffee-400 uppercase tracking-widest font-semibold flex items-center justify-between">
                    <span>Perfil Sensorial Natural</span>
                    <span className="text-[10px] text-gold-600 font-sans">Análisis de taza</span>
                  </h5>

                  {/* Acidity Progress */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-coffee-800 mb-1">
                      <span>Acidez (Brillo frutal)</span>
                      <span className="font-mono">{selectedBean.acidity}%</span>
                    </div>
                    <div className="w-full h-2 bg-coffee-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${selectedBean.acidity}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gold-400"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Body Progress */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-coffee-800 mb-1">
                      <span>Cuerpo (Textura y densidad)</span>
                      <span className="font-mono">{selectedBean.body}%</span>
                    </div>
                    <div className="w-full h-2 bg-coffee-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${selectedBean.body}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-coffee-800"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Sweetness Progress */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-coffee-800 mb-1">
                      <span>Dulzura (Azúcares naturales)</span>
                      <span className="font-mono">{selectedBean.sweetness}%</span>
                    </div>
                    <div className="w-full h-2 bg-coffee-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${selectedBean.sweetness}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-orange-400"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Bitterness Progress */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-coffee-800 mb-1">
                      <span>Amargor (Intensidad de tueste)</span>
                      <span className="font-mono">{selectedBean.bitterness}%</span>
                    </div>
                    <div className="w-full h-2 bg-coffee-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${selectedBean.bitterness}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-stone-600"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Tips block */}
                  <div className="p-3 bg-white border border-coffee-200/50 rounded-xl flex items-start space-x-2">
                    <Info className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-coffee-500 leading-relaxed font-sans">
                      Los porcentajes reflejan el perfil de taza evaluado por nuestros catadores bajo el estándar SCA. La dulzura y acidez naturales son nativas de la variedad y altura del suelo de cultivo.
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sensory Visual Row - Granos Tostados photos block */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden group shadow-md">
            <img
              src="./lotes_pequeños.png"
              alt="Granos tostándose"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase">Tostado de Precisión</span>
              <h4 className="font-serif text-lg font-bold text-white mt-1">Lotes Pequeños Diarios</h4>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden group shadow-md">
            <img
              src="./cosecha_sostenible.jfif"
              alt="Granos arábigos húmedos"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase">Selección Ética</span>
              <h4 className="font-serif text-lg font-bold text-white mt-1">Cosecha Sostenible Directa</h4>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden group shadow-md">
            <img
              src="./frescura_cada_taza.png"
              alt="Café recién molido"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase">Molienda Perfecta</span>
              <h4 className="font-serif text-lg font-bold text-white mt-1">Frescura en Cada Taza</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
