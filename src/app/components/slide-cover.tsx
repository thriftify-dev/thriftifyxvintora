import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Presentation, LineChart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import oxfamLogo from 'figma:asset/52d04419336e691b9f2283b2baba7f36497dc5e8.png';
import thriftifyLogo from 'figma:asset/81f098794329921ca9bbb1b9248a0efef29051df.png';

export function SlideCover() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1E3A8A]/20 to-[#00C27D]/20 rounded-full blur-[100px] opacity-50 pointer-events-none mix-blend-multiply" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-5xl px-8 flex flex-col items-center"
      >
        <div className="flex items-center gap-6 mb-12">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <div className="h-8 flex items-center">
              <ImageWithFallback src={thriftifyLogo} alt="Thriftify" className="h-full w-auto object-contain" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-6 py-3 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <div className="h-8 flex items-center">
              <ImageWithFallback src={oxfamLogo} alt="Oxfam" className="h-full w-auto object-contain" />
            </div>
          </motion.div>
        </div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-7xl font-extrabold tracking-tight text-[#00C27D] leading-[1.1] mb-8"
        >
          Trial Performance <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#00C27D]">
            KPI Report
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          A comprehensive analysis of listing velocity, sell-through rates, and operational efficiency from the March trial period.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#00C27D]/5 text-[#00C27D] font-semibold border border-[#00C27D]/10">
            <Presentation className="w-5 h-5" />
            <span>March 2 – March 27</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-semibold border border-[#1E3A8A]/20">
            <BarChart3 className="w-5 h-5" />
            <span>10 Key Metrics</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-32 left-32 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-80"
      >
        <LineChart className="w-8 h-8 text-[#1E3A8A]" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-32 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-80"
      >
        <ArrowRight className="w-8 h-8 text-[#00C27D]" />
      </motion.div>
    </div>
  );
}
