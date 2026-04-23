import { motion } from 'motion/react';
import { TrendingUp, ShoppingBag, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SlideWrapper } from './slide-wrapper';

export function SlideSellThrough() {
  const percentage = 24.45;
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <SlideWrapper 
      title="Sell-Through Rate (STR)"
      subtitle="Product Performance Metric"
    >
      <div className="h-full flex items-center justify-center pt-8">
        <div className="max-w-5xl w-full grid grid-cols-[1fr_1fr] gap-12">
          
          {/* Radial Chart Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="bg-white rounded-[40px] p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/5 to-transparent pointer-events-none" />
            <div className="relative mb-8">
              <svg width="320" height="320" className="transform -rotate-90 filter drop-shadow-[0_8px_16px_rgba(30,58,138,0.2)]">
                {/* Background Track */}
                <circle
                  cx="160"
                  cy="160"
                  r={radius}
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="24"
                />
                {/* Progress Track */}
                <motion.circle
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  cx="160"
                  cy="160"
                  r={radius}
                  fill="none"
                  stroke="url(#gradientBlue)"
                  strokeWidth="24"
                  strokeDasharray={circumference}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#172554" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1"
                >
                  Trial STR
                </motion.span>
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                  className="text-6xl font-extrabold text-[#00C27D] tracking-tighter"
                >
                  {percentage}<span className="text-4xl text-[#1E3A8A]">%</span>
                </motion.div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-100"
            >
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-bold">Above 20% Baseline Target</span>
            </motion.div>
          </motion.div>

          {/* Insights Column */}
          <div className="flex flex-col justify-center gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#00C27D] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#1E3A8A]/20 blur-3xl rounded-full" />
              <ShoppingBag className="w-10 h-10 text-[#1E3A8A] mb-6 relative z-10" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight relative z-10">Strong Market Performance</h3>
              <p className="text-emerald-100 text-lg leading-relaxed relative z-10">
                The improved listing workflow not only accelerated output but directly contributed to better product visibility and faster conversions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Drivers</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#00C27D]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#00C27D] text-lg mb-1">Higher Image Quality</h5>
                    <p className="text-gray-500 font-medium leading-relaxed">Better photos from the new app workflow increased buyer trust and click-through rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#00C27D] text-lg mb-1">Optimized Metadata</h5>
                    <p className="text-gray-500 font-medium leading-relaxed">Automated descriptions reduced missing details, helping items surface in more searches.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
