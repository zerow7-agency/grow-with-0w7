import { useState } from "react";
import { Bot, Mail, Package, Zap, MessageSquare, Filter } from "lucide-react";
import ChatbotDemo from "./ChatbotDemo";
import EmailFilterDemo from "./EmailFilterDemo";
import InventoryDemo from "./InventoryDemo";

const Services = () => {
  const [isChatbotDemoOpen, setIsChatbotDemoOpen] = useState(false);
  const [isEmailDemoOpen, setIsEmailDemoOpen] = useState(false);
  const [isInventoryDemoOpen, setIsInventoryDemoOpen] = useState(false);

  const services = [
    {
      icon: MessageSquare,
      title: "Chatbots Inteligentes",
      description: "Atiende a tus clientes 24/7 con chatbots personalizados que resuelven consultas, generan leads y mejoran la experiencia de usuario automáticamente.",
      features: ["Respuestas Automáticas", "Integración WhatsApp", "Lead Generation", "Análisis de Conversaciones"],
      interactive: true,
      demoType: "chatbot",
      savings: "Ahorra 80% del tiempo en atención al cliente"
    },
    {
      icon: Filter,
      title: "Automatización de Emails",
      description: "Organiza, filtra y responde emails automáticamente. Clasifica mensajes por prioridad, deriva consultas y mantén tu bandeja siempre ordenada.",
      features: ["Filtrado Inteligente", "Respuestas Automáticas", "Clasificación por Prioridad", "Integración CRM"],
      interactive: true,
      demoType: "email",
      savings: "Reduce 2-3 horas diarias de gestión email"
    },
    {
      icon: Package,
      title: "Control de Inventario",
      description: "Monitorea stock en tiempo real, recibe alertas de productos agotados y automatiza pedidos a proveedores sin intervención manual.",
      features: ["Alertas de Stock Bajo", "Reorden Automático", "Sincronización Ventas", "Reportes en Tiempo Real"],
      interactive: true,
      demoType: "inventory",
      savings: "Evita roturas de stock y sobre-inventario"
    },
    {
      icon: Zap,
      title: "Flujos de Trabajo Personalizados",
      description: "Conecta todas tus herramientas empresariales: CRM, contabilidad, marketing y ventas trabajando en sincronía perfecta.",
      features: ["Integración Zapier/Make", "Conexión de Apps", "Flujos Personalizados", "Notificaciones Automáticas"],
      interactive: false,
      demoType: "",
      savings: "Hasta 20 horas semanales automatizadas"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Automatizaciones
              </span>{" "}
              <span className="text-foreground">que Transforman</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Libera el potencial de tu negocio con automatizaciones inteligentes que trabajan 24/7. 
              <span className="text-primary font-semibold"> Ahorra tiempo, reduce errores y enfócate en hacer crecer tu empresa.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Implementación en 48-72h</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>ROI promedio del 300%</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Soporte técnico incluido</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const handleServiceClick = () => {
              if (service.interactive) {
                switch (service.demoType) {
                  case 'chatbot':
                    setIsChatbotDemoOpen(true);
                    break;
                  case 'email':
                    setIsEmailDemoOpen(true);
                    break;
                  case 'inventory':
                    setIsInventoryDemoOpen(true);
                    break;
                }
              }
            };

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-card via-card to-card/50 p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-500 group border border-border/50 animate-fade-in overflow-hidden ${
                  service.interactive ? 'cursor-pointer hover:border-primary/40 hover:scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={handleServiceClick}
              >
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-soft">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center">
                        {service.title}
                        {service.interactive && (
                          <span className="ml-3 text-xs bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full animate-pulse shadow-soft">
                            ¡Ver Demo!
                          </span>
                        )}
                      </h3>
                      
                      <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block">
                        <span className="text-sm font-semibold text-primary">{service.savings}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mt-4 text-base">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Incluye:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.interactive && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-center font-medium">
                        <span className="text-primary">👆 Haz clic para ver la demo interactiva</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <ChatbotDemo 
          isOpen={isChatbotDemoOpen} 
          onClose={() => setIsChatbotDemoOpen(false)} 
        />
        <EmailFilterDemo 
          isOpen={isEmailDemoOpen} 
          onClose={() => setIsEmailDemoOpen(false)} 
        />
        <InventoryDemo 
          isOpen={isInventoryDemoOpen} 
          onClose={() => setIsInventoryDemoOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Services;