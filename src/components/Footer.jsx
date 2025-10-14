import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                ComprEnde
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Conectamos emprendedores locales con su comunidad, fortaleciendo la economía de barrio en toda Argentina.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-emerald-400">Navegación</span>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('directorio')}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Directorio
              </button>
              <button
                onClick={() => scrollToSection('emprendedores')}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Para Emprendedores
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Contacto
              </button>
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-blue-400">Servicios</span>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-300">Directorio de Negocios</span>
              <span className="text-gray-300">Registro de Emprendimientos</span>
              <span className="text-gray-300">Geolocalización</span>
              <span className="text-gray-300">Conexión con Clientes</span>
              <span className="text-gray-300">Soporte Digital</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-purple-400">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">hola@comprende.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 ComprEnde. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                Términos y Condiciones
              </span>
              <span className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                Política de Privacidad
              </span>
              <span className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                Cookies
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;