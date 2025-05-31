import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DonationPackage } from "@/lib/donation-packages";

interface PurchaseModalProps {
  package: DonationPackage;
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ package: pkg, isOpen, onClose }: PurchaseModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const getColorClass = () => {
    switch (pkg.id) {
      case 'bever':
        return 'amber-gold';
      case 'anzara':
        return 'neon-purple';
      case 'seraphim':
        return 'cyber-blue';
      case 'river':
        return 'electric-green';
      case 'ghost':
        return 'neon-purple';
      case 'abyss':
        return 'cyber-blue';
      case 'snape':
        return 'electric-green';
      default:
        return 'cyber-blue';
    }
  };

  const getGradientClass = () => {
    switch (pkg.id) {
      case 'bever':
        return 'from-amber-gold to-amber-orange';
      case 'anzara':
        return 'from-neon-purple to-neon-purple-light';
      case 'seraphim':
        return 'from-cyber-blue to-cyber-blue-dark';
      case 'river':
        return 'from-electric-green to-electric-green-dark';
      case 'ghost':
        return 'from-neon-purple to-neon-purple-light';
      case 'abyss':
        return 'from-cyber-blue to-cyber-blue-dark';
      case 'snape':
        return 'from-electric-green to-electric-green-dark';
      default:
        return 'from-cyber-blue to-cyber-blue-dark';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPeriod || !nickname || !email) return;
    
    // Here you would handle the purchase logic
    console.log({ package: pkg.id, period: selectedPeriod, nickname, email });
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div 
          className="glass-morphism rounded-xl p-8 max-w-md w-full neon-border"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-2xl font-orbitron font-bold ${getColorClass()} mb-2`}>
                Покупка {pkg.name}
              </h3>
              <p className="cyber-gray text-sm">
                {pkg.description}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="cyber-gray hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Выберите период:</label>
              <div className="space-y-2">
                {pkg.pricing.map((price, index) => (
                  <motion.label 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-space-gray rounded-lg border border-transparent hover:border-cyber-blue/50 cursor-pointer transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input 
                      type="radio" 
                      name="period" 
                      value={price.period}
                      checked={selectedPeriod === price.period}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="text-cyber-blue focus:ring-cyber-blue"
                    />
                    <span className="flex-1">{price.period}</span>
                    <span className={`font-bold ${getColorClass()}`}>
                      {price.price}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Ваш никнейм в игре:</label>
              <input 
                type="text" 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Введите никнейм"
                className="w-full px-4 py-3 bg-space-gray border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-blue focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email для чека:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-space-gray border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-blue focus:outline-none"
                required
              />
            </div>
            
            <div className="flex gap-4 pt-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-cyber-blue/50 cyber-blue rounded-lg font-rajdhani font-semibold hover:bg-cyber-blue/10 transition-all"
              >
                Отмена
              </button>
              <motion.button 
                type="submit"
                disabled={!selectedPeriod || !nickname || !email}
                className={`flex-1 py-3 bg-gradient-to-r ${getGradientClass()} rounded-lg font-rajdhani font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                whileHover={{ scale: selectedPeriod && nickname && email ? 1.05 : 1 }}
                whileTap={{ scale: selectedPeriod && nickname && email ? 0.95 : 1 }}
              >
                Купить
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
