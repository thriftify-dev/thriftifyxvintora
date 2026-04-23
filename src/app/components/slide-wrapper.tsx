import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import oxfamLogo from 'figma:asset/52d04419336e691b9f2283b2baba7f36497dc5e8.png';
import thriftifyLogo from 'figma:asset/81f098794329921ca9bbb1b9248a0efef29051df.png';

interface SlideWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SlideWrapper({ title, subtitle, children }: SlideWrapperProps) {
  return (
    <div className="relative h-full w-full bg-white overflow-hidden flex flex-col">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#00C27D]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-12 pt-12 pb-6 border-b border-gray-100/50 bg-white/50 backdrop-blur-md flex items-end justify-between"
      >
        <div>
          {subtitle && (
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#00C27D] bg-[#00C27D]/10 rounded-full uppercase">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl font-bold text-[#00C27D] tracking-tight">
            {title}
          </h1>
        </div>
        
        {/* Branding */}
        <div className="flex items-center gap-4">
          <div className="h-6 flex items-center">
            <ImageWithFallback src={thriftifyLogo} alt="Thriftify" className="h-full w-auto object-contain" />
          </div>
          <span className="text-gray-300">×</span>
          <div className="h-5 flex items-center">
            <ImageWithFallback src={oxfamLogo} alt="Oxfam" className="h-full w-auto object-contain" />
          </div>
        </div>
      </motion.div>

      {/* Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex-1 px-12 py-8 overflow-y-auto"
      >
        {children}
      </motion.div>
    </div>
  );
}
