import { motion } from "framer-motion";

interface DonationIconProps {
  type: 'bever' | 'anzara' | 'seraphim' | 'river' | 'ghost' | 'abyss' | 'snape';
  className?: string;
}

export default function DonationIcon({ type, className = "" }: DonationIconProps) {
  const getIcon = () => {
    switch (type) {
      case 'bever':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Premium Golden Crown */}
            <defs>
              <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF8C00" />
              </linearGradient>
              <filter id="goldGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#goldGlow)">
              <path d="M32 8 L40 20 L52 18 L44 32 L52 46 L40 44 L32 56 L24 44 L12 46 L20 32 L12 18 L24 20 Z" 
                    fill="url(#goldenGradient)" stroke="#B8860B" strokeWidth="2"/>
              <circle cx="32" cy="32" r="8" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <circle cx="26" cy="26" r="2" fill="#FFF"/>
              <circle cx="38" cy="26" r="2" fill="#FFF"/>
              <circle cx="32" cy="38" r="3" fill="#FF6B6B"/>
            </g>
          </svg>
        );
      
      case 'anzara':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Magic Crystal */}
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9D4EDD" />
                <stop offset="50%" stopColor="#7B2CBF" />
                <stop offset="100%" stopColor="#5A189A" />
              </linearGradient>
              <filter id="purpleGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#purpleGlow)">
              <path d="M32 8 L48 24 L40 48 L24 48 L16 24 Z" 
                    fill="url(#purpleGradient)" stroke="#7209B7" strokeWidth="2"/>
              <path d="M32 8 L40 20 L32 28 L24 20 Z" fill="#C77DFF" opacity="0.7"/>
              <path d="M24 20 L32 28 L24 40 L20 24 Z" fill="#E0AAFF" opacity="0.5"/>
              <path d="M40 20 L44 24 L40 40 L32 28 Z" fill="#E0AAFF" opacity="0.5"/>
              <circle cx="32" cy="32" r="4" fill="#FFFFFF" opacity="0.8"/>
            </g>
          </svg>
        );
      
      case 'seraphim':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Cyber Shield */}
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
              <filter id="blueGlow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#blueGlow)">
              <path d="M32 8 L48 16 L48 40 L32 56 L16 40 L16 16 Z" 
                    fill="url(#blueGradient)" stroke="#0369A1" strokeWidth="2"/>
              <path d="M32 16 L40 20 L40 36 L32 44 L24 36 L24 20 Z" 
                    fill="#38BDF8" opacity="0.6"/>
              <rect x="28" y="24" width="8" height="2" fill="#FFFFFF"/>
              <rect x="26" y="28" width="12" height="2" fill="#FFFFFF"/>
              <rect x="28" y="32" width="8" height="2" fill="#FFFFFF"/>
            </g>
          </svg>
        );
      
      case 'river':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Simple Gem */}
            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <path d="M32 12 L44 24 L36 48 L28 48 L20 24 Z" 
                  fill="url(#greenGradient)" stroke="#065F46" strokeWidth="2"/>
            <path d="M32 12 L36 20 L32 24 L28 20 Z" fill="#34D399" opacity="0.7"/>
            <path d="M28 20 L32 24 L28 36 L24 24 Z" fill="#6EE7B7" opacity="0.5"/>
            <path d="M36 20 L40 24 L36 36 L32 24 Z" fill="#6EE7B7" opacity="0.5"/>
          </svg>
        );
      
      case 'ghost':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Ghost Icon */}
            <defs>
              <linearGradient id="ghostGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <filter id="ghostGlow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#ghostGlow)">
              <path d="M32 8 C20 8 12 18 12 30 L12 50 L16 46 L20 50 L24 46 L28 50 L32 46 L36 50 L40 46 L44 50 L48 46 L52 50 L52 30 C52 18 44 8 32 8 Z" 
                    fill="url(#ghostGradient)" stroke="#6D28D9" strokeWidth="2"/>
              <circle cx="26" cy="26" r="3" fill="#FFFFFF"/>
              <circle cx="38" cy="26" r="3" fill="#FFFFFF"/>
              <ellipse cx="32" cy="36" rx="4" ry="2" fill="#C084FC" opacity="0.7"/>
            </g>
          </svg>
        );
      
      case 'abyss':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Abyss Portal */}
            <defs>
              <linearGradient id="abyssGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="50%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <radialGradient id="abyssCenter">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </radialGradient>
            </defs>
            <circle cx="32" cy="32" r="24" fill="url(#abyssGradient)" stroke="#1E40AF" strokeWidth="2"/>
            <circle cx="32" cy="32" r="16" fill="url(#abyssCenter)" opacity="0.8"/>
            <circle cx="32" cy="32" r="8" fill="#60A5FA" opacity="0.6"/>
            <circle cx="32" cy="32" r="3" fill="#FFFFFF"/>
            <path d="M8 32 L24 32 M40 32 L56 32 M32 8 L32 24 M32 40 L32 56" stroke="#3B82F6" strokeWidth="2" opacity="0.7"/>
          </svg>
        );
      
      case 'snape':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`}>
            {/* Basic Crystal */}
            <defs>
              <linearGradient id="snapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="50%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>
            </defs>
            <path d="M32 16 L40 28 L36 48 L28 48 L24 28 Z" 
                  fill="url(#snapeGradient)" stroke="#166534" strokeWidth="2"/>
            <path d="M32 16 L36 24 L32 28 L28 24 Z" fill="#4ADE80" opacity="0.6"/>
            <path d="M28 24 L32 28 L28 40 L26 28 Z" fill="#86EFAC" opacity="0.4"/>
            <path d="M36 24 L38 28 L36 40 L32 28 Z" fill="#86EFAC" opacity="0.4"/>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {getIcon()}
    </motion.div>
  );
}