import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import DonationIcon from "./donation-icons";
import { DonationPackage } from "@/lib/donation-packages";

interface DonationCardProps {
  package: DonationPackage;
  onPurchase: () => void;
}

export default function DonationCard({ package: pkg, onPurchase }: DonationCardProps) {
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

  return (
    <motion.div 
      className="donation-card glass-morphism rounded-xl p-6 neon-border"
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        rotateX: 5,
        z: 20
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4">
          <DonationIcon 
            type={pkg.id as 'bever' | 'anzara' | 'seraphim' | 'river' | 'ghost' | 'abyss' | 'snape'} 
            className="w-full h-full" 
          />
        </div>
        <h4 className={`text-2xl font-orbitron font-bold ${getColorClass()} mb-2`}>
          {pkg.name}
        </h4>
        <p className="cyber-gray text-sm mb-4">
          {pkg.description}
        </p>
      </div>
      
      <div className="space-y-3 mb-6">
        {pkg.pricing.map((price, index) => (
          <motion.div 
            key={index}
            className="flex justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-white font-semibold">{price.period}:</span>
            <span className={`${getColorClass()} font-bold`}>{price.price}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        onClick={onPurchase}
        className={`w-full py-3 bg-gradient-to-r ${getGradientClass()} rounded-lg font-rajdhani font-semibold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart className="w-5 h-5" />
        Купить
      </motion.button>
    </motion.div>
  );
}
