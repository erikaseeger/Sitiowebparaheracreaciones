import { Instagram, Book, Sparkles, Heart, Package } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logo from 'figma:asset/f4fb01e454b317b1b23e0a55b01c9fb78426cf92.png';
import blockNotasImg1 from 'figma:asset/654af84c3fece9306635ebe7d3695de693b8d6a9.png';
import blockNotasImg2 from 'figma:asset/a4397051c3299f88968b6546e134a7be7e27131f.png';
import agendaPlanificadoraImg from 'figma:asset/1da43174b7c65c395c8880c0639ae25a38ecc474.png';
import cuadernoPocketImg from 'figma:asset/45f558f76039520319d5aaa3e2d6eb732e09b970.png';
import heroImg from 'figma:asset/389670579e697eca613e6390fcd1411958031726.png';
import cuadernoClassicImg from 'figma:asset/8ffeb8c00c01538b790f46a41870d80c02a10b32.png';
import cuadernoDisenioUnicoImg from 'figma:asset/70b4b316d57f634e1907ca61d6c71fc492ff8ada.png';
import sobreHeraImg from 'figma:asset/e8e6de234009c6fac7f2576697317ed325f904f1.png';

export default function App() {
  const products = [
    { 
      id: 1, 
      name: 'Cuaderno Pocket',
      specs: [
        'Tapa dura',
        'Tamaño: 16,5 x 10 cm',
        '96 hojas papel reciclado'
      ],
      description: 'Ideal para llevar contigo.',
      image: cuadernoPocketImg,
      objectFit: 'cover',
      bgColor: 'bg-gray-100'
    },
    { 
      id: 2, 
      name: 'Block Notas',
      specs: [
        'Tapa dura',
        'Tamaño: 11 x 14 cm',
        '96 hojas papel reciclado'
      ],
      description: '',
      image: blockNotasImg1,
      objectFit: 'cover',
      bgColor: 'bg-gray-100'
    },
    { 
      id: 3, 
      name: 'Agenda Planificadora Anual',
      specs: [
        'Tapa dura',
        'Tamaño: 15,5 x 20 cm'
      ],
      features: [
        'Calendario Anual',
        'Mis metas del mes',
        'Planner mensual',
        'Lista de Tareas',
        'Diario de Finanzas',
        'Mis notas'
      ],
      description: 'Perfecta para organizar tus metas mes a mes',
      image: agendaPlanificadoraImg,
      objectFit: 'cover',
      bgColor: 'bg-gray-100'
    },
    { 
      id: 4, 
      name: 'Cuaderno Classic',
      specs: [
        'Tapa dura',
        'Tamaño: 15,5 x 20 cm',
        '96 hojas papel reciclado'
      ],
      description: '',
      image: cuadernoClassicImg,
      objectFit: 'cover',
      bgColor: 'bg-gray-100'
    },
    { 
      id: 5, 
      name: 'Cuaderno con Diseño Único',
      specs: [],
      description: 'Crea algo totalmente tuyo, realizamos el diseño a tu gusto en la medida que se adapte más a tu estilo',
      image: cuadernoDisenioUnicoImg,
      objectFit: 'contain',
      bgColor: 'bg-black'
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-16 h-16" />,
      title: 'Diseños Únicos',
      description: 'Cada cuaderno es personalizado según tus preferencias y estilo.'
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: 'Hecho con Amor',
      description: 'Creamos cada pieza con dedicación y atención al detalle.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/10 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Hera Creaciones Logo" className="h-24 w-auto" />
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#productos" className="hover:opacity-60 transition-opacity font-bold text-xl">Productos</a>
              <a href="#sobre-nosotros" className="hover:opacity-60 transition-opacity font-bold text-xl">Sobre Nosotros</a>
              <a href="#contacto" className="hover:opacity-60 transition-opacity font-bold text-xl">Contacto</a>
            </nav>
            <a 
              href="https://instagram.com/heracreaciones.uy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
              <span>@heracreaciones.uy</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-6xl md:text-7xl">Cuadernos Personalizados</h1>
              <p className="mb-8 opacity-90 text-lg">
                Transforma tus ideas en realidad con cuadernos únicos, diseñados especialmente para ti.
                Cada pieza refleja tu personalidad y estilo.
              </p>
              <a href="#contacto">
                <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
                  Contáctanos
                </Button>
              </a>
            </div>
            <div className="bg-black aspect-square rounded-lg flex items-center justify-center">
              {/* Espacio para imagen principal */}
              <ImageWithFallback 
                src={heroImg} 
                alt="Cuaderno personalizado destacado"
                className="w-full h-full object-contain rounded-lg p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-4xl font-bold">Nuestros Productos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="border-black/10 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`aspect-square flex items-center justify-center ${product.bgColor}`}>
                    {/* Espacio para imagen del producto */}
                    <ImageWithFallback 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full h-full ${product.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold">{product.name}</h3>
                    
                    {product.specs && product.specs.length > 0 && (
                      <ul className="space-y-1 mb-3">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="opacity-70">{spec}</li>
                        ))}
                      </ul>
                    )}
                    
                    {product.features && (
                      <div className="mb-3">
                        <p className="opacity-70 mb-2">¿Qué contiene?</p>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="opacity-70">- {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {product.description && (
                      <p className="opacity-60 mt-3">{product.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-4">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-gray-100 aspect-[4/3] rounded-lg flex items-center justify-center">
              {/* Espacio para imagen sobre nosotros */}
              <ImageWithFallback 
                src={sobreHeraImg} 
                alt="Espacio de trabajo - Hera Creaciones"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="mb-6 text-center font-bold text-4xl">Sobre Hera Creaciones</h2>
              <p className="mb-4">
                En Hera Creaciones, nos apasiona crear cuadernos que inspiren y acompañen 
                tu creatividad. Cada pieza es diseñada con dedicación para reflejar tu 
                personalidad única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">¿Listo para Crear tu Cuaderno?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Contáctanos a través de Instagram para consultas, pedidos personalizados 
            o para ver más de nuestros diseños.
          </p>
          <a 
            href="https://instagram.com/heracreaciones.uy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-white/90">
              <Instagram className="w-5 h-5 mr-2" style={{ color: '#E4405F' }} />
              Síguenos en Instagram
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Hera Creaciones Logo" className="h-16 w-auto" />
            </div>
            <p className="opacity-60">
              © 2025 Hera Creaciones. Todos los derechos reservados.
            </p>
            <a 
              href="https://instagram.com/heracreaciones.uy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
              <span>@heracreaciones.uy</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}