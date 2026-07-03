import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestra Esencia', href: '#esencia' },
    { name: 'Menú Interactivo', href: '#menu' },
    { name: 'Contacto', href: 'https://wa.me/525665407383?text=hola%20me%20interesaria%20comprar%20cafe' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-coffee-50 border-b border-coffee-200 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center space-x-3 group">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-coffee-900 text-coffee-50'
                  : 'bg-gold-500 text-coffee-950'
              }`}>
                <span className="font-serif text-xl font-semibold leading-none">A</span>
              </div>
              <span className={`font-serif text-xl sm:text-2xl tracking-tight uppercase transition-colors duration-300 ${
                isScrolled ? 'text-coffee-900' : 'text-gold-100 group-hover:text-white'
              }`}>
                CAFÉ ARÁBICA
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors relative py-1 group ${
                      isScrolled
                        ? 'text-coffee-800 hover:text-gold-600'
                        : 'text-coffee-100 hover:text-gold-300'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-gold-500' : 'bg-gold-400'
                    }`}></span>
                  </a>
                );
              })}
              <a
                href="#ubicacion"
                className={`px-6 py-2 border rounded-full text-xs uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? 'border-coffee-900 text-coffee-900 hover:bg-coffee-900 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-coffee-950'
                }`}
              >
                Visítanos
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none transition-colors ${
                  isScrolled ? 'text-coffee-900 hover:bg-coffee-100' : 'text-coffee-200 hover:text-white'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-coffee-950 border-b border-gold-800/30 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navItems.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-base font-medium text-coffee-200 hover:text-gold-300 hover:bg-coffee-900 transition-all"
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-3 px-3">
                  <a
                    href="#ubicacion"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-coffee-950 font-bold tracking-wider text-sm uppercase transition-all shadow-md"
                  >
                    Visítanos
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
