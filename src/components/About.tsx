const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Acerca de <span className="text-primary">0w7 Agency</span>
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                No soy una agencia de palabras bonitas. Soy quien te quita de encima lo que te hace perder dinero y energía. 
                Automatizo procesos, pongo la IA a trabajar para ti y hago que tu negocio se mueva más rápido.
              </p>
              
              <p className="text-base text-foreground leading-relaxed">
                Mientras otros se pelean con su bandeja de entrada, tú estarás cerrando ventas o yéndote a comer tranquilo.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm font-medium text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm font-medium text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm font-medium text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-muted-foreground">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;