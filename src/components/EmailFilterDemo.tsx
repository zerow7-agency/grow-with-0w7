import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Filter, X, CheckCircle, AlertTriangle } from "lucide-react";

interface EmailFilterDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailFilterDemo = ({ isOpen, onClose }: EmailFilterDemoProps) => {
  const [filterKeyword, setFilterKeyword] = useState("");
  const [filteredEmails, setFilteredEmails] = useState<any[]>([]);

  const sampleEmails = [
    {
      id: 1,
      from: "cliente@empresa.com",
      subject: "URGENTE: Problema con facturación",
      snippet: "Necesito ayuda inmediata con mi factura del mes pasado...",
      priority: "high",
      category: "facturacion"
    },
    {
      id: 2,
      from: "proveedor@supplies.com",
      subject: "Nueva cotización disponible",
      snippet: "Le enviamos la cotización solicitada para los productos...",
      priority: "medium",
      category: "proveedores"
    },
    {
      id: 3,
      from: "marketing@newsletter.com",
      subject: "Ofertas especiales este mes",
      snippet: "No se pierda nuestras increíbles ofertas de temporada...",
      priority: "low",
      category: "marketing"
    },
    {
      id: 4,
      from: "soporte@cliente.com",
      subject: "Consulta sobre garantía",
      snippet: "Quisiera saber sobre la garantía de mi producto...",
      priority: "medium",
      category: "soporte"
    },
    {
      id: 5,
      from: "spam@promociones.com",
      subject: "¡¡¡GANA DINERO RÁPIDO!!!",
      snippet: "Increíble oportunidad de negocio, gana miles...",
      priority: "low",
      category: "spam"
    }
  ];

  const handleFilter = (category: string) => {
    const filtered = sampleEmails.filter(email => email.category === category);
    setFilteredEmails(filtered);
    setFilterKeyword(category);
  };

  const handleCustomFilter = () => {
    if (!filterKeyword.trim()) {
      setFilteredEmails([]);
      return;
    }
    
    const filtered = sampleEmails.filter(email => 
      email.subject.toLowerCase().includes(filterKeyword.toLowerCase()) ||
      email.from.toLowerCase().includes(filterKeyword.toLowerCase()) ||
      email.snippet.toLowerCase().includes(filterKeyword.toLowerCase())
    );
    setFilteredEmails(filtered);
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <CheckCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Mail className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl mx-auto h-[700px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Filter className="w-4 h-4 text-primary" />
              </div>
              <DialogTitle>Demo: Filtrado Automático de Emails</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex">
          {/* Filtros laterales */}
          <div className="w-64 bg-muted/30 p-4 border-r border-border/50">
            <h3 className="font-semibold mb-4">Filtros Automáticos</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFilter("facturacion")}
              >
                <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                Facturación Urgente
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFilter("proveedores")}
              >
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                Proveedores
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFilter("soporte")}
              >
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Soporte Cliente
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => handleFilter("spam")}
              >
                <X className="w-4 h-4 mr-2 text-gray-500" />
                Spam/Promociones
              </Button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Filtro Personalizado</h4>
              <div className="space-y-2">
                <Input
                  placeholder="Buscar en emails..."
                  value={filterKeyword}
                  onChange={(e) => setFilterKeyword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomFilter()}
                />
                <Button 
                  onClick={handleCustomFilter}
                  size="sm"
                  className="w-full"
                >
                  Aplicar Filtro
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setFilteredEmails([]);
                    setFilterKeyword("");
                  }}
                >
                  Limpiar
                </Button>
              </div>
            </div>
          </div>

          {/* Lista de emails */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {filteredEmails.length > 0 ? 'Emails Filtrados' : 'Todos los Emails'} 
                  <Badge variant="secondary" className="ml-2">
                    {filteredEmails.length > 0 ? filteredEmails.length : sampleEmails.length}
                  </Badge>
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {(filteredEmails.length > 0 ? filteredEmails : sampleEmails).map((email) => (
                <div
                  key={email.id}
                  className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getPriorityIcon(email.priority)}
                      <span className="font-medium text-sm">{email.from}</span>
                      <Badge 
                        variant={email.category === 'spam' ? 'destructive' : 'outline'}
                        className="text-xs"
                      >
                        {email.category}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {email.subject}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {email.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 p-4 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Automatización real:</strong> Zapier + Gmail filtran automáticamente emails por palabras clave, 
            remitente y contenido, organizando tu bandeja de entrada sin intervención manual.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailFilterDemo;