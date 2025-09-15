import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 0w7 Agency. All rights reserved.
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            Built with <Heart className="w-4 h-4 mx-1 text-primary" fill="currentColor" /> for amazing businesses
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;