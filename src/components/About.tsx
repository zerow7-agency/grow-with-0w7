const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary">0w7 Agency</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in business strategy and technology, I help companies 
                streamline operations, enhance customer experiences, and accelerate growth through 
                smart automation and creative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-base text-foreground leading-relaxed">
                My approach combines strategic thinking with hands-on technical expertise. 
                Whether you need to automate repetitive tasks, implement AI-powered workflows, 
                or create compelling digital experiences, I deliver solutions that drive real results.
              </p>
              
              <p className="text-base text-foreground leading-relaxed">
                I believe in building long-term partnerships with my clients, understanding their 
                unique challenges, and crafting tailored solutions that evolve with their business needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm font-medium text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;