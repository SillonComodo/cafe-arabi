import { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, ArrowDown, ChevronRight, Compass, ShieldCheck, Heart, Sparkles, Mail, Instagram, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import BeanOrigins from './components/BeanOrigins';
import InteractiveMenu from './components/InteractiveMenu';
import GoogleMapSection from './components/GoogleMapSection';
import ImageCarousel from './components/ImageCarousel';

export default function App() {
  return (
    <div className="bg-coffee-50 text-coffee-950 font-sans min-h-screen overflow-x-hidden selection:bg-gold-500/30 selection:text-coffee-900">

      {/* 1. Header/Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <header id="inicio" className="relative min-h-screen flex items-center justify-center bg-coffee-950 overflow-hidden pt-20">

        {/* Background visual - high resolution roasted coffee beans macro photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="./carrusel/imagen1.png"
            alt="Interior de Café Arábica"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_10s_infinite_alternate]"
          />
          {/* Subtle elegant gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950 via-coffee-950/70 to-coffee-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/80 via-transparent to-coffee-950/80"></div>
        </div>

        {/* Floating background elements for depth */}
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[130px] pointer-events-none animate-pulse delay-700"></div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">


          {/* Majestic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Tu Café de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 font-serif italic font-normal">
              Especialidad
            </span>
          </motion.h1>

          {/* Elegant Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="h-0.5 bg-gold-400 mb-8"
          ></motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-coffee-200 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Descubre una mezcla diferente donde cada nota de sabor tiene sentido. En <strong className="font-semibold text-gold-300">Café Arábica</strong>, cada taza cuenta una historia ancestral.
          </motion.p>

          {/* CTA Button Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/525653882279?text=hola%20me%20interesaria%20comprar%20cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-coffee-950 font-serif font-bold tracking-widest text-sm uppercase rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-500/10 active:scale-95 duration-300 flex items-center space-x-2"
            >
              <span>Contáctanos</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </motion.div>

        </div>


      </header>

      {/* Galería / Carrusel de Fotos */}
      <ImageCarousel />

      {/* 3. Section: Bean Origins & Roasts (Granos Tostados Photos, Roast Meters) */}
      <BeanOrigins />

      <InteractiveMenu />

      {/* 6. Section: Google Maps Section */}
      <GoogleMapSection />


      {/* 8. Elegant Footer */}
      <footer className="bg-coffee-950 text-coffee-300 py-16 border-t border-gold-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-coffee-900 pb-12 mb-12">

            {/* Col 1: About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="w-5 h-5 text-gold-400" />
                <span className="font-serif text-lg font-bold tracking-[0.2em] text-gold-100">CAFÉ ARÁBICA</span>
              </div>
              <p className="text-xs text-coffee-400 leading-relaxed font-sans">
                Un santuario gastronómico dedicado al café de especialidad arábigo tradicional y moderno, enmarcado en un ambiente sofisticado y de meditación sensorial.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="font-serif text-sm font-semibold tracking-wider text-gold-200 mb-4 uppercase">Explorar</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#inicio" className="hover:text-gold-300 transition-colors">Inicio</a></li>
                <li><a href="#esencia" className="hover:text-gold-300 transition-colors">Nuestra Esencia</a></li>
                <li><a href="#menu" className="hover:text-gold-300 transition-colors">Menú Interactivo</a></li>
                <li><a href="#quiz" className="hover:text-gold-300 transition-colors">Test de Sabor</a></li>
              </ul>
            </div>

            {/* Col 3: Hours & Location */}
            <div>
              <h4 className="font-serif text-sm font-semibold tracking-wider text-gold-200 mb-4 uppercase">Contacto</h4>
              <ul className="space-y-2.5 text-xs font-sans">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Av. Universidad 12 H, Buena Vista, Cuernavaca, Mor.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>info@cafearabica.mx</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href="https://instagram.com/cafearabica" target="_blank" rel="noreferrer" className="hover:text-gold-300 transition-colors">@cafearabica</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal / Rights */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-coffee-500 font-mono">
            <p>© {new Date().getFullYear()} Café Arábica. Todos los derechos reservados.</p>
            <p className="mt-2 sm:mt-0">Diseñado con Pasión en Cuernavaca, Morelos.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
