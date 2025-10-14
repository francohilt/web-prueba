import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const EmprendedoresSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    categoria: '',
    ubicacion: '',
    telefono: '',
    email: '',
    descripcion: ''
  });

  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-emerald-500" />,
      title: 'Mayor Visibilidad',
      description: 'Llega a más clientes en tu zona con presencia digital profesional'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: 'Bajo Costo',
      description: 'Solución económica para competir con grandes cadenas'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Comunidad Local',
      description: 'Conecta directamente con consumidores de tu barrio'
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-500" />,
      title: 'Crecimiento',
      description: 'Herramientas para hacer crecer tu emprendimiento'
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
    <section id="emprendedores" className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
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
              Para Emprendedores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a ComprEnde y dale visibilidad tecnológica a tu negocio. 
            Conecta con clientes locales y haz crecer tu emprendimiento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué elegir ComprEnde?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Cerramos la brecha digital para microempresas y te ayudamos a competir 
                en el mercado local con herramientas profesionales y accesibles.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
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
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">¡Registro Gratuito!</span>
              </div>
              <p className="text-emerald-100">
                Comienza sin costo y accede a todas las funcionalidades básicas 
                para dar visibilidad a tu emprendimiento.
              </p>
            </motion.div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Registra tu Emprendimiento
              </h3>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo
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
                    Nombre del Negocio
                  </label>
                  <input
                    type="text"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Nombre de tu emprendimiento"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría
                  </label>
                  <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="gastronomia">Gastronomía</option>
                    <option value="retail">Retail</option>
                    <option value="servicios">Servicios</option>
                    <option value="belleza">Belleza</option>
                    <option value="salud">Salud</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Barrio o zona"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="+54 11 1234-5678"
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
                  Descripción del Negocio
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu emprendimiento..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Registrar mi Emprendimiento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmprendedoresSection;