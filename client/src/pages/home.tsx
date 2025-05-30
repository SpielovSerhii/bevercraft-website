import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/particle-background";
import DonationCard from "@/components/donation-card";
import PurchaseModal from "@/components/purchase-modal";
import SiteLogo from "@/components/site-logo";
import ScrollReveal from "@/components/scroll-reveal";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { donationPackages, type DonationPackage } from "@/lib/donation-packages";
import { Copy, Check, ExternalLink, Info } from "lucide-react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<DonationPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { copyToClipboard, hasCopied } = useCopyToClipboard();
  const { toast } = useToast();

  const handleCopyIP = async () => {
    await copyToClipboard("bevercraft.ru:25565");
  };

  const handlePurchase = (pkg: DonationPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const handleTelegramClick = () => {
    toast({
      title: "Telegram канал",
      description: "Telegram канал ещё не готов. Попробуйте позже!",
      variant: "default",
    });
  };

  const handleDiscordClick = () => {
    window.open("https://discord.gg/MgntdU3F", "_blank");
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const cards = document.querySelectorAll('.donation-card');
      cards.forEach((card, index) => {
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        (card as HTMLElement).style.transform = `translate(${moveX * (index % 2 === 0 ? 1 : -1)}px, ${moveY * (index % 2 === 0 ? 1 : -1)}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen space-dark text-white overflow-x-hidden relative">
      <ParticleBackground />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-morphism">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SiteLogo className="w-12 h-12" />
            <h1 className="text-2xl font-orbitron font-bold cyber-blue glow-text">
              BeverCraft
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-right">
              <p className="text-sm cyber-gray">IP сервера:</p>
              <button 
                onClick={handleCopyIP}
                className="cyber-blue hover:text-white transition-colors font-rajdhani font-medium flex items-center gap-2"
              >
                bevercraft.ru:25565 
                {hasCopied ? (
                  <Check className="w-4 h-4 electric-green" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="text-right">
              <p className="text-sm cyber-gray">Версия:</p>
              <p className="electric-green font-rajdhani font-medium">1.20.1</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 
              className="text-6xl md:text-8xl font-orbitron font-black mb-6 glow-text cyber-blue animate-float"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              BEVERCRAFT
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl cyber-gray mb-8 max-w-3xl mx-auto font-rajdhani"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Уникальный Minecraft сервер с кастомными предметами и эпическими боссами. 
              Погрузитесь в мир невероятных приключений и получите эксклюзивные привилегии!
            </motion.p>
          </ScrollReveal>
        </div>
        
        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-electric-green opacity-20 rotate-45"
          animate={{ 
            y: [0, -20, 0],
            rotate: [45, 65, 45]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-neon-purple opacity-20 rotate-12"
          animate={{ 
            y: [0, -15, 0],
            rotate: [12, 32, 12]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: -2
          }}
        />
      </section>

      {/* Donation Packages */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 cyber-blue glow-text">
                Донат Привилегии
              </h3>
              <p className="text-xl cyber-gray font-rajdhani">
                Выберите подходящий пакет привилегий для максимального комфорта игры
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationPackages.map((pkg, index) => (
              <ScrollReveal key={pkg.id} delay={index * 0.1}>
                <DonationCard 
                  package={pkg} 
                  onPurchase={() => handlePurchase(pkg)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 electric-green glow-text">
              Связь с нами
            </h3>
            <p className="text-xl cyber-gray mb-12 font-rajdhani max-w-2xl mx-auto">
              Присоединяйтесь к нашему сообществу в Discord для получения поддержки и общения с другими игроками
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                onClick={handleDiscordClick}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-rajdhani font-semibold text-lg neon-border hover:scale-105 transition-all flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDiscord className="w-5 h-5" />
                Присоединиться к Discord
              </motion.button>
              <motion.button 
                onClick={handleTelegramClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-rajdhani font-semibold text-lg neon-border hover:scale-105 transition-all flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram className="w-5 h-5" />
                Telegram канал
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 glass-morphism border-t border-cyber-blue/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-xl font-orbitron font-bold cyber-blue mb-4">BeverCraft</h4>
              <p className="cyber-gray">Minecraft сервер с уникальными возможностями</p>
            </div>
            
            <div>
              <h4 className="text-lg font-rajdhani font-semibold mb-4">Подключение</h4>
              <p className="cyber-gray">IP: bevercraft.ru:25565</p>
              <p className="cyber-gray">Версия: 1.20.1</p>
            </div>
            
            <div>
              <h4 className="text-lg font-rajdhani font-semibold mb-4">Социальные сети</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="cyber-blue hover:text-white transition-colors">
                  <FaDiscord className="w-6 h-6" />
                </a>
                <a href="#" className="cyber-blue hover:text-white transition-colors">
                  <FaTelegram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyber-blue/20 mt-8 pt-8 text-center">
            <p className="cyber-gray">&copy; 2024 BeverCraft. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      {selectedPackage && (
        <PurchaseModal 
          package={selectedPackage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
