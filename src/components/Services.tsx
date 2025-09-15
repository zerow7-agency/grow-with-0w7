import { useState } from "react";
import { Settings, Bot, Globe, Palette } from "lucide-react";
import ChatbotDemo from "./ChatbotDemo";

const Services = () => {
  const [isChatbotDemoOpen, setIsChatbotDemoOpen] = useState(false);

  const services = [
    {
      icon: Settings,
      title: "Configuraciones de Automatización",
      description: "Optimiza tus flujos de trabajo con sistemas de automatización de Zapier, Make y Notion que ahorran tiempo y reducen tareas manuales.",
      features: ["Integración Zapier", "Flujos Make.com", "Sistemas Notion", "Optimización de Procesos"],
      interactive: false
    },
    {
      icon: Bot,
      title: "Consultoría en IA",
      description: "Implementa chatbots inteligentes, flujos automatizados y soluciones de entrenamiento en IA para potenciar tus operaciones empresariales.",
      features: ["Chatbots Personalizados", "Flujos de IA", "Capacitación", "Estrategia de IA"],
      interactive: true
    },
    {
      icon: Globe,
      title: "Diseño Web",
      description: "Crea sitios web simples, limpios y efectivos para pequeñas empresas que convierten visitantes en clientes.",
      features: ["Diseño Responsivo", "Optimización SEO", "Carga Rápida", "Experiencia de Usuario"],
      interactive: false
    },
    {
      icon: Palette,
      title: "Proyectos Creativos",
      description: "Desarrolla identidades de marca convincentes y estrategias de contenido que resuenan con tu audiencia objetivo.",
      features: ["Identidad de Marca", "Estrategia de Contenido", "Diseño Visual", "Materiales de Marketing"],
      interactive: false
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mis <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para ayudar a tu negocio a crecer a través de automatización estratégica, 
            implementación de IA y excelencia creativa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const handleServiceClick = () => {
              if (service.interactive && service.title.includes("IA")) {
                setIsChatbotDemoOpen(true);
              }
            };

            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50 animate-fade-in hover-scale ${
                  service.interactive ? 'cursor-pointer hover:border-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={handleServiceClick}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                    {service.interactive && (
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ¡Prueba la demo!
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <ChatbotDemo 
          isOpen={isChatbotDemoOpen} 
          onClose={() => setIsChatbotDemoOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Services;