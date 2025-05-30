import { motion } from "framer-motion";

interface SiteLogoProps {
  className?: string;
}

export default function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Pixel art style logo */}
        <g filter="url(#logoGlow)">
          {/* Main cube structure */}
          <rect x="2" y="8" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="6" y="8" width="4" height="4" fill="#38BDF8" />
          <rect x="10" y="8" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="14" y="8" width="4" height="4" fill="#38BDF8" />
          
          <rect x="2" y="12" width="4" height="4" fill="#38BDF8" />
          <rect x="6" y="12" width="4" height="4" fill="#FFD700" />
          <rect x="10" y="12" width="4" height="4" fill="#FFD700" />
          <rect x="14" y="12" width="4" height="4" fill="#38BDF8" />
          
          <rect x="2" y="16" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="6" y="16" width="4" height="4" fill="#38BDF8" />
          <rect x="10" y="16" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="14" y="16" width="4" height="4" fill="#38BDF8" />
          
          <rect x="2" y="20" width="4" height="4" fill="#38BDF8" />
          <rect x="6" y="20" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="10" y="20" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="14" y="20" width="4" height="4" fill="#38BDF8" />
          
          {/* Top highlight */}
          <rect x="18" y="6" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="22" y="6" width="4" height="4" fill="#38BDF8" />
          <rect x="26" y="6" width="4" height="4" fill="url(#logoGradient)" />
          
          <rect x="18" y="10" width="4" height="4" fill="#38BDF8" />
          <rect x="22" y="10" width="4" height="4" fill="#FFD700" />
          <rect x="26" y="10" width="4" height="4" fill="#38BDF8" />
          
          <rect x="18" y="14" width="4" height="4" fill="url(#logoGradient)" />
          <rect x="22" y="14" width="4" height="4" fill="#38BDF8" />
          <rect x="26" y="14" width="4" height="4" fill="url(#logoGradient)" />
          
          {/* Side panels */}
          <rect x="18" y="18" width="4" height="4" fill="#1E40AF" />
          <rect x="22" y="18" width="4" height="4" fill="#1E40AF" />
          <rect x="26" y="18" width="4" height="4" fill="#1E40AF" />
          
          <rect x="18" y="22" width="4" height="4" fill="#1E40AF" />
          <rect x="22" y="22" width="4" height="4" fill="#1E40AF" />
          <rect x="26" y="22" width="4" height="4" fill="#1E40AF" />
        </g>
      </svg>
    </motion.div>
  );
}