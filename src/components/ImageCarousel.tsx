import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const slides = [
  {
    src: './carrusel/imagen1.png',
    alt: 'Interior de Café Arábica — barra principal',
    title: 'Nuestro Espacio',
    subtitle: 'Un rincón cálido donde el café cuenta historias',
  },
  {
    src: './carrusel/imagen2.png',
    alt: 'Detalle de servilleta y croissant Café Arábica',
    title: 'Café 100% Orgánico',
    subtitle: 'Cada detalle habla de autenticidad y frescura',
  },
  {
    src: './carrusel/imagen3.png',
    alt: 'Capuccino y brownie sobre mesa de granos',
    title: 'Momentos Especiales',
    subtitle: 'Un deleite para los sentidos en cada visita',
  },
  {
    src: './carrusel/imagen4.png',
    alt: 'Clientes disfrutando en Café Arábica',
    title: 'Comunidad & Sabor',
    subtitle: 'Un lugar de encuentro para los amantes del buen café',
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.08,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="galeria"
      className="relative bg-coffee-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="relative z-20 pt-20 pb-10 text-center">
        <span className="text-xs sm:text-sm font-mono text-gold-600 tracking-[0.3em] uppercase block mb-3">
          Galería Fotográfica
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Conoce Café Arábica
        </h2>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-4"></div>
        <p className="text-coffee-300 max-w-2xl mx-auto font-sans text-sm sm:text-base px-4">
          Imágenes de nuestro espacio, nuestros productos y la comunidad que nos rodea.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-gold-900/20">

          {/* Slides */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 200, damping: 30, mass: 1 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="w-full h-full object-cover"
                loading={current === 0 ? 'eager' : 'lazy'}
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-coffee-950/20 to-coffee-950/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Camera className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-[10px] font-mono text-gold-400 tracking-widest uppercase font-semibold">
                    {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {slides[current].title}
                </h3>
                <p className="text-sm sm:text-base text-coffee-200 mt-1 font-sans font-light max-w-md">
                  {slides[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee-950/50 backdrop-blur-sm border border-gold-500/20 text-white hover:bg-gold-500/20 hover:border-gold-400/40 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee-950/50 backdrop-blur-sm border border-gold-500/20 text-white hover:bg-gold-500/20 hover:border-gold-400/40 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Dot Indicators + Progress Bar */}
        <div className="flex items-center justify-center mt-8 space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Ir a imagen ${idx + 1}`}
              className="relative group"
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ${idx === current
                    ? 'w-10 bg-gold-400'
                    : 'w-2 bg-coffee-600 hover:bg-coffee-400'
                  }`}
              />
              {/* Auto-play progress indicator on active dot */}
              {idx === current && !isPaused && (
                <motion.div
                  className="absolute top-0 left-0 h-2 rounded-full bg-gold-200/50"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                  key={`progress-${current}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
