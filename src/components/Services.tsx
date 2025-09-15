import { Settings, Bot, Globe, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Automation Setups",
      description: "Streamline your workflows with Zapier, Make, and Notion automation systems that save time and reduce manual tasks.",
      features: ["Zapier Integration", "Make.com Workflows", "Notion Systems", "Process Optimization"]
    },
    {
      icon: Bot,
      title: "AI Consulting",
      description: "Implement intelligent chatbots, automated workflows, and AI training solutions to enhance your business operations.",
      features: ["Custom Chatbots", "AI Workflows", "Staff Training", "AI Strategy"]
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Create simple, clean, and effective websites for small businesses that convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "User Experience"]
    },
    {
      icon: Palette,
      title: "Creative Projects",
      description: "Develop compelling brand identities and content strategies that resonate with your target audience.",
      features: ["Brand Identity", "Content Strategy", "Visual Design", "Marketing Materials"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow through strategic automation, 
            AI implementation, and creative excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
      </div>
    </section>
  );
};

export default Services;