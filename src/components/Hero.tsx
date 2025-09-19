import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto container-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ¿Quieres dejar de perder horas en tareas que{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  una máquina puede hacer mejor que tú?
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Yo monto los sistemas. Tú disfrutas de más clientes, más ventas y más tiempo libre.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="primary-gradient hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover-scale"
              >
                Quiero Ahorrar Tiempo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary/5 hover-scale"
              >
                Muéstrame Cómo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl shadow-large overflow-hidden hover-scale transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Espacio de trabajo profesional de agencia digital" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;