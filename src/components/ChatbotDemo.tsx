import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bot, User, Send, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotDemo = ({ isOpen, onClose }: ChatbotDemoProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de 0w7 Agency. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    "hola": "¡Hola! Estoy aquí para ayudarte con información sobre nuestros servicios de automatización, IA y diseño web.",
    "servicios": "Ofrecemos automatización con Zapier/Make, consultoría en IA, diseño web y proyectos creativos. ¿Te interesa alguno en particular?",
    "automatización": "Puedo ayudarte a automatizar procesos con Zapier, Make.com y Notion. Esto puede ahorrarte hasta 20 horas semanales en tareas repetitivas.",
    "chatbot": "Los chatbots como yo pueden atender el 80% de las consultas de tus clientes automáticamente, disponibles 24/7. ¿Quieres saber más?",
    "precio": "Los precios varían según el proyecto. Te recomiendo contactar directamente para una cotización personalizada.",
    "contacto": "Puedes contactarnos a través del formulario en la web o directamente a hello@0w7agency.com",
    "default": "Interesante pregunta. Para darte una respuesta más específica, te recomiendo contactar directamente con nuestro equipo."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hola") || message.includes("buenas")) return botResponses.hola;
    if (message.includes("servicio")) return botResponses.servicios;
    if (message.includes("automatiz") || message.includes("zapier") || message.includes("make")) return botResponses.automatización;
    if (message.includes("chatbot") || message.includes("bot") || message.includes("ia")) return botResponses.chatbot;
    if (message.includes("precio") || message.includes("costo") || message.includes("cuanto")) return botResponses.precio;
    if (message.includes("contacto") || message.includes("email")) return botResponses.contacto;
    
    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <DialogTitle>Demo del Chatbot</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 animate-fade-in ${
                message.isBot ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.isBot && (
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3 h-3 text-primary" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  message.isBot
                    ? 'bg-card border border-border/50 text-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>

              {!message.isBot && (
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-3 h-3 text-primary" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-3 animate-fade-in">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-3 h-3 text-primary" />
              </div>
              <div className="bg-card border border-border/50 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-border/50 p-4">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="sm"
              className="primary-gradient"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Esta es una demo. En producción, el chatbot estaría conectado a tu base de conocimientos.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotDemo;