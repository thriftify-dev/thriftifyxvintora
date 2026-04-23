import { motion } from 'motion/react';
import { ShieldCheck, HeartPulse, Headphones, Check } from 'lucide-react';
import { SlideWrapper } from './slide-wrapper';

export function SlideSupportImpact() {
  return (
    <SlideWrapper 
      title="Support Impact"
      subtitle="KPI 3: Customer Support & Complaint Tracking"
    >
      <div className="h-full flex items-center justify-center pt-8">
        <div className="w-full max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-[40px] p-1 shadow-2xl relative overflow-hidden"
          >
            {/* Inner Content Container */}
            <div className="bg-white rounded-[36px] h-full w-full p-16 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(0,194,125,0.05)_0%,transparent_70%)] pointer-events-none" />
              
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-[#1E3A8A]/20 blur-2xl rounded-full scale-150 animate-pulse" />
                <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-3xl rotate-12 flex items-center justify-center shadow-lg relative z-10">
                  <div className="w-full h-full bg-white/10 absolute inset-0 backdrop-blur-sm rounded-3xl" />
                  <ShieldCheck className="w-16 h-16 text-white -rotate-12" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="text-[120px] font-black text-[#00C27D] leading-none tracking-tighter">0</span>
                <span className="text-3xl font-bold text-gray-400 self-end mb-6 uppercase tracking-widest">Complaints</span>
              </motion.div>

              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-3xl font-extrabold text-[#00C27D] mb-6"
              >
                Perfect Stability Maintained
              </motion.h3>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-6 max-w-2xl"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                  <HeartPulse className="w-6 h-6 text-[#1E3A8A]" />
                  <span className="font-semibold text-gray-700">No net increase post-rollout</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                  <Headphones className="w-6 h-6 text-[#00C27D]" />
                  <span className="font-semibold text-gray-700">Zero support escalations</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
