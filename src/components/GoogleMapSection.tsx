import { useState } from 'react';
import { motion } from 'motion/react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Clock, Phone, Navigation, AlertTriangle, Key, ExternalLink, HelpCircle } from 'lucide-react';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

// Strict validity check as per GMP skill guidelines
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY !== 'MY_GOOGLE_MAPS_PLATFORM_KEY' && API_KEY.trim() !== '';

// Cuernavaca, Morelos location for Café Arábica
const CAFE_COORDINATES = { lat: 18.9663456, lng: -99.2463198 };

export default function GoogleMapSection() {
  const [showKeyInstructions, setShowKeyInstructions] = useState(true);

  const address = 'Av. Universidad 12 H, Buena Vista, 62130 Cuernavaca, Mor., México';
  const phone = '+52 777 311 3647';
  const hours = [
    { days: 'Lunes a Viernes', hours: '08:00 - 18:00' },
    { days: 'Sábados', hours: '08:00 - 15:00' },
    { days: 'Domingos', hours: '10:00 - 15:00' },
  ];

  return (
    <section id="ubicacion" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-mono text-gold-600 tracking-[0.3em] uppercase block mb-3">
            Visítanos en Cuernavaca
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-coffee-900">
            Localización & Contacto
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-coffee-600 max-w-2xl mx-auto font-sans text-sm sm:text-base">
            Estamos ubicados sobre la Avenida Universidad, en la colonia Buena Vista, Cuernavaca. Ven a disfrutar de un espacio diseñado para el deleite de los sentidos y la contemplación.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Info & Details (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Cards */}
            <div className="bg-coffee-50/70 border border-coffee-200/50 rounded-3xl p-6 sm:p-8 space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/10 border border-gold-400/30 text-gold-700 rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-coffee-950">Dirección Imperial</h4>
                  <p className="text-sm text-coffee-700 mt-1 font-sans leading-relaxed">
                    {address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700 font-mono tracking-wider mt-2 uppercase transition-colors"
                  >
                    <span>Cómo llegar en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/10 border border-gold-400/30 text-gold-700 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-coffee-950">Teléfono & Reservas</h4>
                  <p className="text-sm text-coffee-700 mt-1 font-sans">
                    {phone}
                  </p>
                  <p className="text-xs text-coffee-500 mt-1 italic">
                    Recomendamos reservar con antelación para catas guiadas.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/10 border border-gold-400/30 text-gold-700 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-coffee-950">Horas de Tertulia</h4>
                  <div className="mt-2 space-y-1.5 text-sm text-coffee-700 font-sans">
                    {hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between border-b border-coffee-100/50 pb-1 last:border-0 last:pb-0">
                        <span className="font-medium text-coffee-800">{h.days}:</span>
                        <span className="font-mono text-xs font-semibold text-coffee-900">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: MAP (Col Span 7) */}
          <div className="lg:col-span-7 h-[480px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-coffee-200 shadow-xl relative flex flex-col">
            <iframe
              src="https://storage.googleapis.com/maps-solutions-ocrl209nqs/locator-plus/7460/locator-plus.html"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', height: '100%' }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
