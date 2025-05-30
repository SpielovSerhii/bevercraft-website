import { motion } from "framer-motion";

interface MinecraftIconProps {
  type: 'gold' | 'purple' | 'blue' | 'green';
  className?: string;
}

export default function MinecraftIcon({ type, className = "" }: MinecraftIconProps) {
  const getColors = () => {
    switch (type) {
      case 'gold':
        return {
          primary: 'bg-amber-gold',
          secondary: 'bg-amber-orange',
          tertiary: 'bg-yellow-300'
        };
      case 'purple':
        return {
          primary: 'bg-purple-500',
          secondary: 'bg-purple-400',
          tertiary: 'bg-purple-300'
        };
      case 'blue':
        return {
          primary: 'bg-blue-500',
          secondary: 'bg-blue-400',
          tertiary: 'bg-cyan-300'
        };
      case 'green':
        return {
          primary: 'bg-green-600',
          secondary: 'bg-green-500',
          tertiary: 'bg-green-300'
        };
      default:
        return {
          primary: 'bg-amber-gold',
          secondary: 'bg-amber-orange',
          tertiary: 'bg-yellow-300'
        };
    }
  };

  const colors = getColors();

  return (
    <motion.div 
      className={`grid grid-cols-4 gap-0.5 ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={colors.primary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.primary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.tertiary}></div>
      <div className={colors.tertiary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.primary}></div>
      <div className={colors.tertiary}></div>
      <div className={colors.tertiary}></div>
      <div className={colors.primary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.primary}></div>
      <div className={colors.secondary}></div>
      <div className={colors.primary}></div>
    </motion.div>
  );
}
