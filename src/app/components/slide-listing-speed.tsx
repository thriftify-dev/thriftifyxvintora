import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { TrendingUp, Zap, Target, Timer } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideWrapper } from './slide-wrapper';

export function SlideListingSpeed() {
  const data = [
    { name: 'Baseline (Manual)', value: 35, color: '#e2e8f0', id: 'before', icon: Timer },
    { name: 'Folder Workflow', value: 45, color: '#93c5fd', id: 'select', icon: Zap },
    { name: 'Image Upload', value: 80, color: '#1E3A8A', id: 'upload', icon: TrendingUp },
    { name: 'Target KPI', value: 160, color: '#00C27D', id: 'target', icon: Target }
  ];

  return (
    <SlideWrapper 
      title="Listing Speed Impact"
      subtitle="KPI 1: Productivity Improvements"
    >
      <div className="grid grid-cols-[300px_1fr] gap-8 h-full">
        {/* Left Column: Metrics & Insight */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#00C27D] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden flex-1 flex flex-col justify-center group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            <div className="relative z-10">
              <Zap className="w-10 h-10 text-[#1E3A8A] mb-6" />
              <h3 className="text-5xl font-extrabold mb-2 tracking-tight">+128%</h3>
              <p className="text-[#6ee7b7] font-medium tracking-wide uppercase text-sm mb-6">
                Efficiency Gain
              </p>
              <div className="h-px w-full bg-white/10 mb-6" />
              <p className="text-white/80 leading-relaxed font-medium">
                Transitioning to the <strong className="text-white">Image Upload</strong> workflow more than doubled daily output compared to the baseline manual process.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#1E3A8A]/10 text-[#1E3A8A]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#00C27D] mb-1">Path to 160/Day</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  The gap to our target requires further streamlining of the QA step and bulk-processing tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00C27D]">Listings per Day Progression</h3>
              <p className="text-gray-500 font-medium mt-1">Comparing workflows against baseline</p>
            </div>
          </div>
          <div className="flex-1 min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 40 }} barSize={64}>
                <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  key="xaxis"
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }}
                  dy={20}
                />
                <YAxis 
                  key="yaxis"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                  dx={-10}
                />
                <Tooltip 
                  key="tooltip"
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '1px solid #f1f5f9', 
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    padding: '16px 20px',
                  }}
                  itemStyle={{ fontWeight: 700, fontSize: '18px' }}
                  labelStyle={{ color: '#64748b', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}
                />
                <ReferenceLine key="ref-line" y={160} stroke="#00C27D" strokeDasharray="3 3" opacity={0.3} />
                <Bar 
                  key="bar"
                  dataKey="value" 
                  radius={[12, 12, 12, 12]}
                >
                  {data.map((entry) => (
                    <Cell key={`cell-${entry.id}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
