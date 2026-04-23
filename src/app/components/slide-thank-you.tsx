import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import thriftifyLogo from 'figma:asset/81f098794329921ca9bbb1b9248a0efef29051df.png';

export function SlideThankYou() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1E3A8A]/20 to-[#00C27D]/20 rounded-full blur-[100px] opacity-50 pointer-events-none mix-blend-multiply" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl px-8 flex flex-col items-center"
      >
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
          className="relative mb-12 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#1E3A8A] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative z-10">
            <Heart className="w-14 h-14 text-[#1E3A8A]" fill="#1E3A8A" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[5rem] font-extrabold tracking-tight text-[#00C27D] leading-none mb-8"
        >
          Thank You
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We are excited about the positive results of this trial and look forward to scaling this success with <strong className="text-[#00C27D]">Oxfam</strong>.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 flex items-center gap-3 px-8 py-4 bg-[#00C27D] hover:bg-[#059669] text-white rounded-full font-bold text-lg shadow-xl transition-colors"
          >
            <span>Discuss Next Steps</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 h-8 flex items-center justify-center"
      >
        <ImageWithFallback src={thriftifyLogo} alt="Thriftify" className="h-full w-auto object-contain" />
      </motion.div>
    </div>
  );
}
