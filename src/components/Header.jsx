import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const goToDashboard = () => {
    navigate('/dashboard');
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              ComprEnde
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Inicio</button>
            <button onClick={() => scrollToSection('directorio')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Directorio</button>
            <button onClick={() => scrollToSection('emprendedores')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Para Emprendedores</button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Sobre Nosotros</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contacto</button>
            <Button onClick={goToDashboard} variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
              <UserCircle className="mr-2 h-4 w-4" />
              Área Emprendedor
            </Button>
            <Button onClick={() => scrollToSection('emprendedores')} className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Registrar Negocio
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">Inicio</button>
              <button onClick={() => scrollToSection('directorio')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">Directorio</button>
              <button onClick={() => scrollToSection('emprendedores')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">Para Emprendedores</button>
              <button onClick={() => scrollToSection('nosotros')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">Sobre Nosotros</button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contacto</button>
              <Button onClick={goToDashboard} variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 w-full justify-start">
                <UserCircle className="mr-2 h-4 w-4" />
                Área Emprendedor
              </Button>
              <Button onClick={() => scrollToSection('emprendedores')} className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                Registrar Negocio
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;