import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Por favor completa todos los campos",
        description: "Todos los campos son requeridos para enviar tu mensaje.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Te responderé dentro de 24 horas.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hablemos de tu <span className="text-primary">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Si ya estás harto de perder tiempo en tonterías y quieres que tu negocio funcione con piloto automático, escríbeme.
          </p>
          <p className="text-base text-foreground max-w-2xl mx-auto">
            No te prometo humo ni magia. Te prometo sistemas que trabajan por ti y que te hacen ganar más.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu correo electrónico"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Detalles del proyecto *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntame qué necesitas automatizar o mejorar en tu negocio..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto primary-gradient hover:shadow-medium transition-all duration-300 hover-scale"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  👉 <span className="font-medium">Respondo en menos de 24 horas. (Y sí, soy yo, no un bot).</span>
                </p>
              </div>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-semibold mb-4">Contacto Directo</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@0w7agency.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group hover-scale"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>hello@0w7agency.com</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/0w7agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group hover-scale"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Conecta conmigo</span>
                </a>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <h4 className="font-semibold mb-3">Tiempo de Respuesta</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Típicamente respondo a todas las consultas dentro de 24 horas. Para proyectos urgentes, 
                siéntete libre de contactarme directamente por email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;