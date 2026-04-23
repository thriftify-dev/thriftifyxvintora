import { Eye, FileText, Database, GitMerge, LineChart, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideWrapper } from './slide-wrapper';

export function SlideMethodology() {
  const methods = [
    {
      icon: Eye,
      color: '#1E3A8A',
      bg: 'bg-blue-50',
      title: 'User Session Observations',
      subtitle: 'Microsoft Clarity',
      points: [
        'Product Creation Time',
        'Product Review Time',
        'Product Listing Time'
      ],
      description: 'Observed active user behavior to identify UI friction points:'
    },
    {
      icon: FileText,
      color: '#00C27D',
      bg: 'bg-emerald-50',
      title: 'Merchandising Logs',
      subtitle: 'System Audit',
      points: [
        'Frequently updated fields',
        'Workflow inefficiencies',
        'Error correction rates'
      ],
      description: 'Analyzed historical logs to track data entry patterns:'
    },
    {
      icon: Database,
      color: '#6366f1',
      bg: 'bg-indigo-50',
      title: 'Internal Database',
      subtitle: 'Quantitative Data',
      points: [
        'Total listings per day',
        'User activity clusters',
        'Time-based performance'
      ],
      description: 'Extracted structured telemetry directly from our backend:'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <SlideWrapper 
      title="Methodology Used"
      subtitle="Data Collection & Analysis Approach"
    >
      <div className="h-full flex flex-col justify-center pt-8">
        
        {/* Connection visualization header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center max-w-4xl mx-auto w-full mb-12 relative"
        >
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-200 via-emerald-200 to-indigo-200 -z-10" />
          
          <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <LineChart className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Track</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <GitMerge className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Analyze</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Optimize</span>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
        >
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div 
                key={index}
                variants={itemAnim}
                className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl ${method.bg} flex items-center justify-center mb-6 transition-colors`}>
                  <Icon className="w-8 h-8" style={{ color: method.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                  {method.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 mb-6 w-fit">
                  {method.subtitle}
                </span>
                
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <div className="mt-auto bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                  <ul className="space-y-3">
                    {method.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: method.color }} />
                        <span className="text-gray-700 font-medium text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
