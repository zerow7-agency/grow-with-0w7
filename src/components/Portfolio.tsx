import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Automation Hub",
      category: "Automation",
      description: "Built a comprehensive automation system connecting Shopify, inventory management, and customer support using Zapier and Make.com.",
      results: ["50% faster order processing", "30% reduction in manual tasks", "Improved customer satisfaction"],
      tags: ["Zapier", "Shopify", "Make.com"]
    },
    {
      title: "AI Customer Support Bot",
      category: "AI Consulting",
      description: "Developed and trained an intelligent chatbot for a SaaS company, handling 80% of customer inquiries automatically.",
      results: ["80% query automation", "24/7 support coverage", "$15K annual savings"],
      tags: ["AI Chatbot", "Training", "Support"]
    },
    {
      title: "Professional Services Website",
      category: "Web Design",
      description: "Designed and developed a modern, conversion-focused website for a consulting firm with integrated booking system.",
      results: ["300% increase in leads", "Mobile-first design", "SEO optimized"],
      tags: ["React", "SEO", "Responsive"]
    },
    {
      title: "Brand Identity & Strategy",
      category: "Creative",
      description: "Complete brand overhaul including logo design, brand guidelines, and content strategy for a tech startup.",
      results: ["Brand recognition up 150%", "Consistent messaging", "Professional presence"],
      tags: ["Branding", "Strategy", "Design"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and the measurable impact delivered for clients 
            across various industries.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
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
                  <h4 className="font-medium mb-3">Key Results:</h4>
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
            className="border-primary text-primary hover:bg-primary/5"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;