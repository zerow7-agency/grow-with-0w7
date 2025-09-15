import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Hub de Automatización E-commerce",
      category: "Automatización",
      description: "Construí un sistema integral de automatización conectando Shopify, gestión de inventario y soporte al cliente usando Zapier y Make.com.",
      results: ["50% más rápido procesamiento de pedidos", "30% reducción en tareas manuales", "Mejor satisfacción del cliente"],
      tags: ["Zapier", "Shopify", "Make.com"]
    },
    {
      title: "Bot de Soporte con IA",
      category: "Consultoría en IA",
      description: "Desarrollé y entrené un chatbot inteligente para una empresa SaaS, manejando el 80% de consultas de clientes automáticamente.",
      results: ["80% automatización de consultas", "Soporte 24/7", "$15K ahorro anual"],
      tags: ["Chatbot IA", "Entrenamiento", "Soporte"]
    },
    {
      title: "Sitio Web Servicios Profesionales",
      category: "Diseño Web",
      description: "Diseñé y desarrollé un sitio web moderno enfocado en conversión para una consultora con sistema de reservas integrado.",
      results: ["300% aumento en leads", "Diseño mobile-first", "Optimizado SEO"],
      tags: ["React", "SEO", "Responsivo"]
    },
    {
      title: "Identidad de Marca y Estrategia",
      category: "Creativo",
      description: "Renovación completa de marca incluyendo diseño de logo, guías de marca y estrategia de contenido para una startup tech.",
      results: ["Reconocimiento de marca +150%", "Mensajería consistente", "Presencia profesional"],
      tags: ["Branding", "Estrategia", "Diseño"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos <span className="text-primary">Recientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora algunos de mis trabajos recientes y el impacto medible entregado para clientes 
            de diversas industrias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Resultados Clave:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 hover-scale"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hablemos de tu Proyecto
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;