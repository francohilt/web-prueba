import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Conectamos
                </span>
                <br />
                <span className="text-gray-800">tu barrio con sus</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent">
                  emprendedores
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                La plataforma digital que une microempresas locales con consumidores de proximidad. 
                Descubre, apoya y conecta con el comercio de tu comunidad.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('directorio')}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Explorar Directorio
              </Button>
              
              <Button
                onClick={() => scrollToSection('emprendedores')}
                variant="outline"
                size="lg"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Sumar mi Negocio
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Emprendedores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Barrios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Conexiones</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                className="w-full h-auto rounded-3xl shadow-2xl"
                alt="Emprendedores locales trabajando en sus negocios"
               src="https://images.unsplash.com/photo-1690129069871-7a0c5612c73e" />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 z-0"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;