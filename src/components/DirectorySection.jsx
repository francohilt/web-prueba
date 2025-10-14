import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Star, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DirectorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedLocation, setSelectedLocation] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🏪' },
    { id: 'gastronomia', name: 'Gastronomía', icon: '🍕' },
    { id: 'retail', name: 'Retail', icon: '👕' },
    { id: 'servicios', name: 'Servicios', icon: '🔧' },
    { id: 'belleza', name: 'Belleza', icon: '💄' },
    { id: 'salud', name: 'Salud', icon: '🏥' }
  ];

  const locations = [
    { id: 'todos', name: 'Todas las ubicaciones' },
    { id: 'palermo', name: 'Palermo' },
    { id: 'belgrano', name: 'Belgrano' },
    { id: 'san-telmo', name: 'San Telmo' },
    { id: 'recoleta', name: 'Recoleta' },
    { id: 'villa-crespo', name: 'Villa Crespo' }
  ];

  const businesses = [
    {
      id: 1,
      name: 'Café Luna',
      category: 'gastronomia',
      location: 'palermo',
      address: 'Av. Córdoba 1234, Palermo',
      rating: 4.8,
      reviews: 127,
      hours: 'Abierto hasta 22:00',
      phone: '+54 11 1234-5678',
      image: 'Cozy coffee shop in Buenos Aires with local atmosphere'
    },
    {
      id: 2,
      name: 'Boutique Alma',
      category: 'retail',
      location: 'belgrano',
      address: 'Cabildo 2567, Belgrano',
      rating: 4.6,
      reviews: 89,
      hours: 'Abierto hasta 20:00',
      phone: '+54 11 2345-6789',
      image: 'Trendy clothing boutique with Argentine fashion'
    },
    {
      id: 3,
      name: 'Taller Mecánico Rodriguez',
      category: 'servicios',
      location: 'san-telmo',
      address: 'Defensa 890, San Telmo',
      rating: 4.9,
      reviews: 156,
      hours: 'Abierto hasta 18:00',
      phone: '+54 11 3456-7890',
      image: 'Local mechanic workshop in Buenos Aires neighborhood'
    },
    {
      id: 4,
      name: 'Peluquería Estilo',
      category: 'belleza',
      location: 'recoleta',
      address: 'Av. Santa Fe 1890, Recoleta',
      rating: 4.7,
      reviews: 203,
      hours: 'Abierto hasta 19:00',
      phone: '+54 11 4567-8901',
      image: 'Modern hair salon in upscale Buenos Aires neighborhood'
    },
    {
      id: 5,
      name: 'Farmacia del Barrio',
      category: 'salud',
      location: 'villa-crespo',
      address: 'Corrientes 3456, Villa Crespo',
      rating: 4.5,
      reviews: 78,
      hours: 'Abierto 24hs',
      phone: '+54 11 5678-9012',
      image: 'Neighborhood pharmacy in Buenos Aires with friendly service'
    },
    {
      id: 6,
      name: 'Parrilla Don Carlos',
      category: 'gastronomia',
      location: 'palermo',
      address: 'Thames 1567, Palermo',
      rating: 4.9,
      reviews: 342,
      hours: 'Abierto hasta 01:00',
      phone: '+54 11 6789-0123',
      image: 'Traditional Argentine parrilla restaurant with grilled meats'
    }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const categoryMatch = selectedCategory === 'todos' || business.category === selectedCategory;
    const locationMatch = selectedLocation === 'todos' || business.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  const handleContactBusiness = (businessName) => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section id="directorio" className="py-20 px-4 bg-white">
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
              Directorio de Emprendedores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre negocios locales en tu barrio. Filtra por ubicación y rubro para encontrar exactamente lo que buscas.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 mb-12 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar negocios..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Business Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img 
                  className="w-full h-48 object-cover"
                  alt={`${business.name} - ${business.category}`}
                 src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{business.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{business.name}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                  {business.address}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{business.hours}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {business.reviews} reseñas
                  </div>
                </div>

                <Button
                  onClick={() => handleContactBusiness(business.name)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-xl py-2 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-12 text-center"
        >
          <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Mapa Interactivo</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Próximamente: Visualiza todos los emprendedores en un mapa interactivo para encontrar los más cercanos a tu ubicación.
          </p>
          <Button
            onClick={() => toast({
              title: "🚧 Esta funcionalidad no está implementada aún",
              description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
            })}
            className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-3 rounded-full"
          >
            Ver Mapa
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectorySection;