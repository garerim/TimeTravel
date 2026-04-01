"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role : conseiller les clients sur les meilleures destinations temporelles.
Ton ton :
- Professionnel mais chaleureux
- Passionne d'histoire
- Toujours enthousiaste sans etre trop familier
- Expertise en voyage temporel (fictif mais credible)

Tu connais parfaitement :
- Paris 1889 (Belle Epoque, Tour Eiffel, Exposition Universelle) - 12 500 EUR, 3 jours
- Cretace -65M (dinosaures, nature prehistorique) - 18 900 EUR, 2 jours
- Florence 1504 (Renaissance, art, Michel-Ange) - 14 200 EUR, 4 jours

Tu peux suggerer des destinations selon les interets du client.
Reponds toujours en francais et de maniere concise (max 3-4 phrases).`;

const FALLBACK_RESPONSES: Record<string, string> = {
  default:
    "Bienvenue chez TimeTravel Agency ! Je suis ravi de vous aider. Nous proposons trois destinations exceptionnelles : Paris 1889, le Cretace (-65M d'annees) et Florence 1504. Quelle epoque vous attire le plus ?",
  paris:
    "Paris 1889 est une destination magnifique ! Vous vivrez l'inauguration de la Tour Eiffel et l'Exposition Universelle. Le forfait est a 12 500 EUR pour 3 jours d'immersion dans la Belle Epoque. Souhaitez-vous plus de details ?",
  dino: "Le Cretace est notre destination la plus aventureuse ! Observez des dinosaures dans leur habitat naturel, survolez des forets prehistoriques. Le voyage est a 18 900 EUR pour 2 jours intenses. C'est une experience unique !",
  cretace:
    "Le Cretace est notre destination la plus aventureuse ! Observez des dinosaures dans leur habitat naturel, survolez des forets prehistoriques. Le voyage est a 18 900 EUR pour 2 jours intenses. C'est une experience unique !",
  florence:
    "Florence 1504, au coeur de la Renaissance ! Rencontrez Michel-Ange, visitez l'atelier de Leonard de Vinci, explorez les palais des Medicis. Le forfait est a 14 200 EUR pour 4 jours de pure beaute artistique.",
  prix: "Nos tarifs sont : Paris 1889 a 12 500 EUR (3 jours), Cretace a 18 900 EUR (2 jours), et Florence 1504 a 14 200 EUR (4 jours). Tous les forfaits incluent le transport temporel, l'hebergement d'epoque et un guide expert.",
  securite:
    "La securite est notre priorite absolue ! Chaque voyageur est equipe d'un bracelet de rappel temporel, accompagne d'un guide expert, et nos capsules sont testees des milliers de fois. Nous avons un taux de satisfaction de 99,8% !",
  reserver:
    "Pour reserver, vous pouvez utiliser notre formulaire en ligne ou me contacter directement. Un acompte de 30% est demande a la reservation. Quelle destination vous interesse ?",
};

function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("paris") || lower.includes("eiffel") || lower.includes("1889"))
    return FALLBACK_RESPONSES.paris;
  if (lower.includes("dino") || lower.includes("cretace") || lower.includes("prehist"))
    return FALLBACK_RESPONSES.dino;
  if (lower.includes("florence") || lower.includes("renaissance") || lower.includes("1504") || lower.includes("michel"))
    return FALLBACK_RESPONSES.florence;
  if (lower.includes("prix") || lower.includes("cout") || lower.includes("tarif") || lower.includes("combien"))
    return FALLBACK_RESPONSES.prix;
  if (lower.includes("secur") || lower.includes("danger") || lower.includes("risque") || lower.includes("sur"))
    return FALLBACK_RESPONSES.securite;
  if (lower.includes("reserver") || lower.includes("reservation") || lower.includes("book"))
    return FALLBACK_RESPONSES.reserver;
  return FALLBACK_RESPONSES.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis l'assistant de TimeTravel Agency. Comment puis-je vous aider a planifier votre voyage dans le temps ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch {
      // Fallback to pre-programmed responses
      const fallback = getFallbackResponse(userMsg.content);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallback },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform ${
          open ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Assistant TimeTravel</p>
                  <p className="text-xs text-muted-foreground">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-primary/20"
                        : "bg-secondary"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary text-secondary-foreground rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-secondary px-3 py-2 rounded-xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez vos questions..."
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={!input.trim() || loading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
