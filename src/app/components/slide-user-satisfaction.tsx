import { motion } from 'motion/react';
import { MessageSquareHeart, ShieldCheck, ThumbsUp, Activity, UserCheck } from 'lucide-react';
import { SlideWrapper } from './slide-wrapper';

export function SlideUserSatisfaction() {
  const stats = [
    { label: 'Uptime recorded', value: '100%', icon: Activity, color: '#1E3A8A' },
    { label: 'Support tickets', value: '0', icon: ShieldCheck, color: '#00C27D' },
    { label: 'System alerts', value: 'None', icon: ThumbsUp, color: '#6366f1' },
  ];

  return (
    <SlideWrapper 
      title="User Satisfaction & Stability"
      subtitle="KPI 2: Ease of Use Assessment"
    >
      <div className="h-full flex items-center justify-center pt-8">
        <div className="w-full max-w-5xl grid grid-cols-[1.5fr_1fr] gap-8">
          
          {/* Main Assessment Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[40px] p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00C27D]/5 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
            
            <div className="flex items-center gap-6 mb-10 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-[#00C27D]/5 flex items-center justify-center border border-[#00C27D]/10">
                <MessageSquareHeart className="w-10 h-10 text-[#00C27D]" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#00C27D] tracking-tight mb-2">Subjective Assessment</h3>
                <p className="text-gray-500 font-medium text-lg">Awaiting structured survey results</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 mb-8">
                <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 bg-white border border-gray-200 rounded-full shadow-sm text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Current Status
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  While formal survey data from the Oxfam team is pending, our monitoring indicates a highly stable trial period.
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-3xl p-6 flex items-start gap-4"
              >
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-green-100">
                  <UserCheck className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-1">Zero Friction Reported</h4>
                  <p className="text-green-700/80 font-medium leading-relaxed">No complaints or workflow blockages were raised by operators throughout the 20-day duration.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Side Stats */}
          <div className="flex flex-col gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-6 group hover:-translate-y-1 transition-transform"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-1">{stat.value}</h4>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
