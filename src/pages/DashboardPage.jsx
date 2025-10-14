import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LayoutDashboard, PlusCircle, Edit, Trash2, Save, X, LogOut, Settings, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [emprendimiento, setEmprendimiento] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('emprendimiento');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setEmprendimiento(parsedData);
      setFormData(parsedData);
    }
  }, []);

  const handleOpenForm = () => {
    if (emprendimiento) {
      setFormData(emprendimiento);
    } else {
      setFormData({
        titulo: '',
        descripcion: '',
        telefono: '',
        facebook: '',
        instagram: '',
        imagen: '',
        categoria: '',
        latitud: '',
        longitud: '',
        estado: 'editing',
      });
    }
    setIsFormOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('emprendimiento', JSON.stringify(formData));
    setEmprendimiento(formData);
    setIsFormOpen(false);
    toast({
      title: "¡Guardado con éxito! ✨",
      description: "Tu emprendimiento ha sido actualizado.",
      className: "bg-emerald-500 text-white",
    });
  };

  const handleDelete = () => {
    localStorage.removeItem('emprendimiento');
    setEmprendimiento(null);
    setFormData({});
    setIsDeleteAlertOpen(false);
    toast({
      title: "¡Emprendimiento eliminado! 🗑️",
      description: "Tu publicación ha sido borrada.",
      variant: "destructive",
    });
  };

  const handleLogout = () => {
    toast({
      title: "🚧 Funcionalidad no implementada",
      description: "¡Pronto podrás cerrar sesión de forma segura! 🚀",
    });
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Dashboard del Emprendedor - ComprEnde</title>
        <meta name="description" content="Gestiona tu emprendimiento en ComprEnde. Edita tu perfil, publica tu negocio y conecta con tu comunidad." />
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="text-emerald-600" />
              <span className="text-xl font-bold text-gray-800">Panel de Emprendedor</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => toast({ title: "🚧 Funcionalidad no implementada" })}>
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Salir
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl">¡Bienvenido, Emprendedor!</CardTitle>
                <CardDescription className="text-emerald-100">
                  Desde aquí puedes gestionar toda la información de tu negocio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg" onClick={handleOpenForm}>
                  {emprendimiento ? <><Edit className="mr-2 h-5 w-5" /> Editar mi Emprendimiento</> : <><PlusCircle className="mr-2 h-5 w-5" /> Publicar mi Emprendimiento</>}
                </Button>
              </CardContent>
            </Card>

            {emprendimiento && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{emprendimiento.titulo}</CardTitle>
                      <CardDescription>Así se ve tu publicación actualmente.</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={handleOpenForm}><Edit className="mr-2 h-4 w-4" /> Editar</Button>
                      <Button variant="destructive" size="sm" onClick={() => setIsDeleteAlertOpen(true)}><Trash2 className="mr-2 h-4 w-4" /> Eliminar</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                      {emprendimiento.imagen ? (
                        <img className="rounded-lg shadow-md w-full h-64 object-cover" alt="Imagen principal del emprendimiento" src="https://images.unsplash.com/photo-1456339445756-beb5120afc42" />
                      ) : (
                        <div className="rounded-lg shadow-md w-full h-64 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Sin imagen</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <p><strong className="text-gray-600">Descripción:</strong> {emprendimiento.descripcion}</p>
                      <p><strong className="text-gray-600">Teléfono:</strong> {emprendimiento.telefono}</p>
                      <p><strong className="text-gray-600">Categoría:</strong> <span className="capitalize">{emprendimiento.categoria}</span></p>
                      <p><strong className="text-gray-600">Ubicación:</strong> Lat: {emprendimiento.latitud}, Lon: {emprendimiento.longitud}</p>
                      <p><strong className="text-gray-600">Redes:</strong> {emprendimiento.facebook && `FB `} {emprendimiento.instagram && `IG`}</p>
                      <p><strong className="text-gray-600">Estado:</strong> <span className={`px-2 py-1 rounded-full text-xs font-semibold ${emprendimiento.estado === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'}`}>{emprendimiento.estado}</span></p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </main>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{emprendimiento ? 'Editar Emprendimiento' : 'Crear Emprendimiento'}</DialogTitle>
              <DialogDescription>Completa los datos para que los clientes puedan encontrarte.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="titulo" className="text-right">Título</Label>
                <Input id="titulo" name="titulo" value={formData.titulo || ''} onChange={handleInputChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descripcion" className="text-right">Descripción</Label>
                <Textarea id="descripcion" name="descripcion" value={formData.descripcion || ''} onChange={handleInputChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefono" className="text-right">Teléfono</Label>
                <Input id="telefono" name="telefono" value={formData.telefono || ''} onChange={handleInputChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="facebook" className="text-right">Facebook</Label>
                <Input id="facebook" name="facebook" value={formData.facebook || ''} onChange={handleInputChange} className="col-span-3" placeholder="URL de tu página de Facebook" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="instagram" className="text-right">Instagram</Label>
                <Input id="instagram" name="instagram" value={formData.instagram || ''} onChange={handleInputChange} className="col-span-3" placeholder="URL de tu perfil de Instagram" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="imagen" className="text-right">Imagen Principal</Label>
                <Input id="imagen" name="imagen" value={formData.imagen || ''} onChange={handleInputChange} className="col-span-3" placeholder="URL de la imagen" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="categoria" className="text-right">Categoría</Label>
                <Select onValueChange={(value) => handleSelectChange('categoria', value)} value={formData.categoria}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecciona un rubro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gastronomia">Gastronomía</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="servicios">Servicios</SelectItem>
                    <SelectItem value="belleza">Belleza</SelectItem>
                    <SelectItem value="salud">Salud</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Ubicación</Label>
                <div className="col-span-3 grid grid-cols-2 gap-2">
                  <Input id="latitud" name="latitud" value={formData.latitud || ''} onChange={handleInputChange} placeholder="Latitud" />
                  <Input id="longitud" name="longitud" value={formData.longitud || ''} onChange={handleInputChange} placeholder="Longitud" />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="estado" className="text-right">Estado</Label>
                <Select onValueChange={(value) => handleSelectChange('estado', value)} value={formData.estado}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Define el estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editing">En Edición (Borrador)</SelectItem>
                    <SelectItem value="ready">Listo para Publicar</SelectItem>
                    <SelectItem value="published">Publicado (Visible)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsFormOpen(false)}><X className="mr-2 h-4 w-4" /> Cancelar</Button>
              <Button onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Guardar Cambios</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-red-600 text-2xl">¿Estás absolutamente seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente la publicación de tu emprendimiento de nuestros servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">Sí, eliminar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default DashboardPage;