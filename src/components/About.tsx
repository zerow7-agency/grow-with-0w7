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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con años de experiencia en estrategia empresarial y tecnología, ayudo a empresas 
                a optimizar operaciones, mejorar experiencias de cliente y acelerar el crecimiento a través 
                de automatización inteligente y soluciones creativas.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-base text-foreground leading-relaxed">
                Mi enfoque combina pensamiento estratégico con experiencia técnica práctica. 
                Ya sea que necesites automatizar tareas repetitivas, implementar flujos de trabajo con IA, 
                o crear experiencias digitales atractivas, entrego soluciones que generan resultados reales.
              </p>
              
              <p className="text-base text-foreground leading-relaxed">
                Creo en construir alianzas a largo plazo con mis clientes, entendiendo sus 
                desafíos únicos y creando soluciones personalizadas que evolucionan con sus necesidades empresariales.
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