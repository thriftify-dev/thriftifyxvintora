import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { Target, Trophy, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideWrapper } from './slide-wrapper';

export function SlideBenchmarking() {
  const data = [
    { name: 'Fresh Start', value: 225, category: 'Footwear', color: '#1E3A8A', id: 'fresh', isUser: false },
    { name: 'Hub Vintage', value: 125, category: 'Apparel', color: '#cbd5e1', id: 'hub', isUser: false },
    { name: 'Vintage Folk', value: 110, category: 'Apparel', color: '#cbd5e1', id: 'vintage', isUser: false },
    { name: 'Re Runs', value: 112, category: 'Apparel', color: '#cbd5e1', id: 'reruns', isUser: false },
    { name: 'Oxfam (Current)', value: 70, category: 'Apparel', color: '#00C27D', id: 'oxfam', isUser: true }
  ].sort((a, b) => b.value - a.value);

  return (
    <SlideWrapper 
      title="Performance Benchmarks"
      subtitle="Ecosystem Comparison"
    >
      <div className="grid grid-cols-[1fr_3fr] gap-8 h-full">
        {/* Left Column: Insight Cards */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center h-[240px] relative overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1E3A8A]/10 rounded-full" />
            <Trophy className="w-10 h-10 text-[#1E3A8A] mb-4" />
            <h3 className="text-4xl font-black text-gray-900 mb-1">225<span className="text-xl text-gray-400 font-bold">/day</span></h3>
            <p className="text-gray-500 font-medium">Top Performer (Fresh Start)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#00C27D] to-[#059669] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden flex-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
            <Target className="w-8 h-8 text-[#1E3A8A] mb-6" />
            <h4 className="text-xl font-bold mb-4">Growth Potential</h4>
            <p className="text-emerald-100 font-medium leading-relaxed">
              This comparison demonstrates the achievable scale with fully optimized workflows. Top performers consistently reach <strong className="text-white">100–250 listings/day</strong>.
            </p>
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
              <h3 className="text-2xl font-bold text-[#00C27D]">Listings per Day by Vendor</h3>
              <p className="text-gray-500 font-medium mt-1">Measuring Oxfam's current output vs network leaders</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00C27D]" />
                <span className="text-sm font-semibold text-gray-600">Oxfam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#cbd5e1]" />
                <span className="text-sm font-semibold text-gray-600">Network Avg</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1E3A8A]" />
                <span className="text-sm font-semibold text-gray-600">Leader</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 20, right: 60, left: 20, bottom: 20 }}>
                <CartesianGrid key="grid" strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis 
                  key="xaxis"
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }}
                />
                <YAxis 
                  key="yaxis"
                  dataKey="name" 
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e293b', fontSize: 14, fontWeight: 700 }}
                  width={140}
                />
                <Tooltip 
                  key="tooltip"
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '1px solid #f1f5f9', 
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    padding: '16px',
                  }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
                            <span className="font-bold text-gray-900 text-lg">{data.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 font-medium">
                            <Info className="w-4 h-4" />
                            <span>Category: {data.category}</span>
                          </div>
                          <div className="mt-2 text-2xl font-black" style={{ color: data.color }}>
                            {data.value} <span className="text-sm text-gray-500 font-bold uppercase">listings/day</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  key="bar"
                  dataKey="value" 
                  radius={[0, 8, 8, 0]} 
                  barSize={40}
                >
                  {data.map((entry) => (
                    <Cell key={`cell-${entry.id}`} fill={entry.color} />
                  ))}
                  <LabelList 
                    key="label-list"
                    dataKey="value" 
                    position="right" 
                    fill="#64748b"
                    fontWeight={700}
                    fontSize={14}
                    formatter={(val: number) => `${val}/day`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
