import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, TrendingDown, AlertTriangle, X, RefreshCw } from "lucide-react";

interface InventoryDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const InventoryDemo = ({ isOpen, onClose }: InventoryDemoProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const products = [
    {
      id: 1,
      name: "Camiseta Básica",
      stock: 5,
      minStock: 10,
      category: "Ropa",
      supplier: "TextilMax",
      status: "low"
    },
    {
      id: 2,
      name: "Zapatillas Deportivas",
      stock: 25,
      minStock: 15,
      category: "Calzado", 
      supplier: "SportGear",
      status: "ok"
    },
    {
      id: 3,
      name: "Auriculares Bluetooth",
      stock: 2,
      minStock: 8,
      category: "Electrónicos",
      supplier: "TechSupply",
      status: "critical"
    },
    {
      id: 4,
      name: "Mochila Escolar",
      stock: 18,
      minStock: 12,
      category: "Accesorios",
      supplier: "BagCorp",
      status: "ok"
    },
    {
      id: 5,
      name: "Smartphone Modelo X",
      stock: 1,
      minStock: 5,
      category: "Electrónicos",
      supplier: "MobileTech",
      status: "critical"
    }
  ];

  const handleAutoUpdate = () => {
    setIsUpdating(true);
    
    setTimeout(() => {
      setIsUpdating(false);
      setLastUpdate(new Date());
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'destructive';
      case 'low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      case 'low':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const criticalItems = products.filter(p => p.status === 'critical').length;
  const lowStockItems = products.filter(p => p.status === 'low').length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl mx-auto h-[700px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-primary" />
              </div>
              <DialogTitle>Demo: Control de Inventario Automatizado</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Dashboard resumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-card p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Stock Crítico</p>
                  <p className="text-2xl font-bold text-red-500">{criticalItems}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Stock Bajo</p>
                  <p className="text-2xl font-bold text-yellow-500">{lowStockItems}</p>
                </div>
                <TrendingDown className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Productos Total</p>
                  <p className="text-2xl font-bold text-primary">{products.length}</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Inventario en Tiempo Real</h3>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
                Última actualización: {lastUpdate.toLocaleTimeString()}
              </span>
              <Button 
                onClick={handleAutoUpdate}
                disabled={isUpdating}
                size="sm"
                className="primary-gradient"
              >
                {isUpdating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                {isUpdating ? 'Actualizando...' : 'Actualizar'}
              </Button>
            </div>
          </div>

          {/* Tabla de productos */}
          <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Producto</th>
                    <th className="text-left p-4 font-medium">Stock Actual</th>
                    <th className="text-left p-4 font-medium">Stock Mínimo</th>
                    <th className="text-left p-4 font-medium">Proveedor</th>
                    <th className="text-left p-4 font-medium">Estado</th>
                    <th className="text-left p-4 font-medium">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`text-lg font-semibold ${
                          product.status === 'critical' ? 'text-red-500' : 
                          product.status === 'low' ? 'text-yellow-500' : 'text-green-500'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4">{product.minStock}</td>
                      <td className="p-4">{product.supplier}</td>
                      <td className="p-4">
                        <Badge variant={getStatusColor(product.status)} className="flex items-center space-x-1 w-fit">
                          {getStatusIcon(product.status)}
                          <span>
                            {product.status === 'critical' ? 'Crítico' : 
                             product.status === 'low' ? 'Bajo' : 'OK'}
                          </span>
                        </Badge>
                      </td>
                      <td className="p-4">
                        {product.status !== 'ok' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs"
                          >
                            Auto-Reordenar
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 p-4 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Automatización real:</strong> Conecta tu sistema de ventas con hojas de Google o Notion. 
            Cuando el stock baje del mínimo, se envían automáticamente alertas y órdenes de compra a proveedores.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InventoryDemo;