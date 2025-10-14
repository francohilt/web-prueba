import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-emerald-500" />,
      title: 'Email',
      info: 'hola@comprende.com.ar',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Teléfono',
      info: '+54 11 1234-5678',
      description: 'Lunes a Viernes 9-18hs'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Ubicación',
      info: 'Buenos Aires, Argentina',
      description: 'Trabajamos en toda la ciudad'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
      title: 'WhatsApp',
      info: '+54 9 11 1234-5678',
      description: 'Atención inmediata'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Contactanos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tenés preguntas sobre ComprEnde? ¿Querés sumarte como emprendedor? 
            ¡Estamos acá para ayudarte a conectar con tu comunidad!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Hablemos de tu Proyecto
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Estamos comprometidos con el crecimiento de emprendedores argentinos. 
                Contactanos para conocer cómo ComprEnde puede ayudar a tu negocio 
                o para resolver cualquier consulta.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-900 font-medium mb-1">
                      {item.info}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-semibold">Horarios de Atención</span>
              </div>
              <div className="space-y-2 text-emerald-100">
                <p><strong>Lunes a Viernes:</strong> 9:00 - 18:00</p>
                <p><strong>Sábados:</strong> 10:00 - 14:00</p>
                <p><strong>WhatsApp:</strong> 24/7 para consultas urgentes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Envianos un Mensaje
              </h3>
              <p className="text-gray-600">
                Completá el formulario y te responderemos a la brevedad
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="registro-emprendedor">Quiero registrar mi emprendimiento</option>
                  <option value="consulta-general">Consulta general</option>
                  <option value="soporte-tecnico">Soporte técnico</option>
                  <option value="partnership">Propuesta de colaboración</option>
                  <option value="prensa">Consulta de prensa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                  placeholder="Contanos en qué podemos ayudarte..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-4">
                ¿Preferís contactarnos directamente?
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => toast({
                    title: "🚧 Esta funcionalidad no está implementada aún",
                    description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
                  })}
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button
                  onClick={() => toast({
                    title: "🚧 Esta funcionalidad no está implementada aún",
                    description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
                  })}
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;