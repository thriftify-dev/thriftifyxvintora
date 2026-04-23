import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideWrapper } from './slide-wrapper';

export function SlideTotalListings() {
  const data = [
    { date: 'Mar 2', listings: 30, id: 'mar2' },
    { date: 'Mar 3', listings: 0, id: 'mar3' },
    { date: 'Mar 4', listings: 55, id: 'mar4' },
    { date: 'Mar 5', listings: 39, id: 'mar5' },
    { date: 'Mar 6', listings: 16, id: 'mar6' },
    { date: 'Mar 9', listings: 55, id: 'mar9' },
    { date: 'Mar 10', listings: 41, id: 'mar10' },
    { date: 'Mar 11', listings: 0, id: 'mar11' },
    { date: 'Mar 12', listings: 80, id: 'mar12' },
    { date: 'Mar 13', listings: 64, id: 'mar13' },
    { date: 'Mar 16', listings: 60, id: 'mar16' },
    { date: 'Mar 17', listings: 61, id: 'mar17' },
    { date: 'Mar 18', listings: 4, id: 'mar18' },
    { date: 'Mar 19', listings: 1, id: 'mar19' },
    { date: 'Mar 20', listings: 56, id: 'mar20' },
    { date: 'Mar 23', listings: 1, id: 'mar23' },
    { date: 'Mar 24', listings: 72, id: 'mar24' },
    { date: 'Mar 25', listings: 66, id: 'mar25' },
    { date: 'Mar 26', listings: 61, id: 'mar26' },
    { date: 'Mar 27', listings: 0, id: 'mar27' }
  ];

  const maxListings = Math.max(...data.map(d => d.listings));

  return (
    <SlideWrapper 
      title="Trial Performance Overview"
      subtitle="Total Listings & Activity"
    >
      <div className="grid grid-cols-[1fr_3fr] gap-8 h-full">
        {/* Left Column: KPI Cards */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E3A8A]/20 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 rounded-2xl bg-[#1E3A8A]/10">
                <CheckCircle2 className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Output</p>
                <h3 className="text-4xl font-extrabold text-[#00C27D]">762</h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">+12% vs Target</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00C27D]/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            <div className="flex items-center gap-4 mb-2 relative z-10">
              <div className="p-3 rounded-2xl bg-[#00C27D]/5 border border-[#00C27D]/10">
                <Calendar className="w-8 h-8 text-[#00C27D]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Duration</p>
                <h3 className="text-2xl font-bold text-[#00C27D]">20 Days</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mt-4">
              March 2 – March 27 <br/> <span className="text-xs">(Excluding weekends)</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-[#00C27D] to-[#064e3b] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <p className="text-[#1E3A8A] text-sm font-bold uppercase tracking-wider mb-2">Key Insight</p>
            <p className="text-lg font-medium leading-relaxed opacity-90">
              Listing momentum accelerated significantly, peaking at <strong className="text-white">80 listings</strong> on Mar 12.
            </p>
          </motion.div>
        </div>
        
        {/* Right Column: Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-[calc(100vh-[some-value]-2rem)]" // Height handling
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00C27D]">Daily Listings Distribution</h3>
              <p className="text-gray-500 font-medium mt-1">Consistency analysis across the trial period</p>
            </div>
          </div>
          <div className="flex-1 min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 60 }}>
                <defs key="custom-defs">
                  <linearGradient key="grad1" id="colorListings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E3A8A" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient key="grad2" id="colorPeak" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C27D" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#00C27D" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  key="xaxis"
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                  angle={-45}
                  textAnchor="end"
                  dy={15}
                  height={60}
                  interval={0}
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
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #f1f5f9', 
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    padding: '12px 16px',
                    fontWeight: 600,
                  }}
                  itemStyle={{ color: '#00C27D' }}
                  labelStyle={{ color: '#64748b', marginBottom: '4px' }}
                />
                <Bar 
                  key="bar"
                  dataKey="listings" 
                  radius={[8, 8, 8, 8]} 
                  barSize={32}
                >
                  {data.map((entry) => (
                    <Cell 
                      key={`cell-${entry.id}`} 
                      fill={entry.listings === maxListings ? 'url(#colorPeak)' : 'url(#colorListings)'} 
                    />
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
