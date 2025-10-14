import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart, TrendingUp, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      title: 'Nuestra Misión',
      description: 'Cerrar la brecha digital entre microempresas locales y consumidores de proximidad, fortaleciendo la economía de barrio.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Comunidad Local',
      description: 'Creamos conexiones reales entre emprendedores y vecinos, fomentando el comercio de proximidad y la confianza.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Tecnología Simple',
      description: 'Herramientas digitales accesibles que permiten a cualquier emprendedor competir en el mercado actual.'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'Impacto Social',
      description: 'Apoyamos el crecimiento de MiPyMEs argentinas, generando empleo y desarrollo económico local.'
    }
  ];

  const stats = [
    { number: '85%', label: 'de las empresas argentinas son MiPyMEs' },
    { number: '70%', label: 'prefiere comprar local cuando es fácil encontrarlo' },
    { number: '60%', label: 'de microempresas no tiene presencia digital' },
    { number: '90%', label: 'de consumidores usa internet para buscar negocios' }
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Sobre ComprEnde
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos la plataforma que conecta el talento emprendedor argentino con su comunidad, 
            cerrando la brecha tecnológica y fortaleciendo la economía local.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                El Problema que Resolvemos
              </h3>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  En Argentina, las microempresas representan el <strong>85% del tejido empresarial</strong>, 
                  pero muchas luchan por competir digitalmente con grandes cadenas.
                </p>
                <p>
                  Mientras tanto, los consumidores buscan apoyar el comercio local pero 
                  no encuentran herramientas fáciles para descubrir y conectar con emprendedores de su zona.
                </p>
                <p>
                  <strong>ComprEnde</strong> es la solución: una plataforma que democratiza 
                  el acceso a la tecnología para emprendedores y facilita el descubrimiento 
                  de negocios locales para consumidores.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-emerald-600" />
                <span className="text-lg font-semibold text-gray-800">Nuestra Visión</span>
              </div>
              <p className="text-gray-700">
                Ser la plataforma líder en Argentina para el descubrimiento y apoyo 
                de emprendimientos locales, creando un ecosistema digital inclusivo 
                que fortalezca las economías de barrio.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              className="w-full h-auto rounded-3xl shadow-2xl"
              alt="Emprendedores argentinos trabajando en sus negocios locales"
             src="https://images.unsplash.com/photo-1672751588293-4e643c706ac0" />
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Datos que nos Motivan</h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Estas estadísticas muestran la oportunidad única que tenemos para 
              transformar el comercio local en Argentina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-emerald-100 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;