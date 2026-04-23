import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle, Sparkles, AlertTriangle, ExternalLink } from 'lucide-react';
import { SlideWrapper } from './slide-wrapper';

export function SlideListingQuality() {
  const before = [
    "Inconsistent image quality and framing",
    "Limited product angles and lower detail visibility",
    "Descriptions varied in structure and completeness",
    "Missing or incomplete size information",
    "Item specifics often partially filled",
    "Reduced product visibility in search results"
  ];

  const after = [
    "High-quality, consistent images with better framing",
    "Multiple image dimensions for better product visibility",
    "Clear, structured, and consistent descriptions",
    "Complete and standardized size information",
    "Fully populated item specifics",
    "Improved search visibility and buyer confidence"
  ];

  const examples = [
    {
      title: "Manual Listing Example",
      text: "View a standard, manually created listing",
      url: "https://www.ebay.co.uk/itm/358376616828?itmmeta=01KMQCQBDX3CSW2KQRNFDJDYJA&hash=item5370e9337c:g:ppUAAeSwgERpxQFW"
    },
    {
      title: "Thriftify Listing Example",
      text: "View an optimized, Thriftify-processed listing",
      url: "https://www.ebay.co.uk/itm/206169233953?_skw=m%26s+women%27s+denim+jeans+blue+pockets+wide+ankle+grazer+wide+fit&itmmeta=01KMQCE5WKTSVJ2Q5JDKVX4BDZ&hash=item3000a4da21%3Ag%3A%7EZsAAeSwzkppxVwI&var=506928900000"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <SlideWrapper 
      title="Listing Quality Improvement with Thriftify"
      subtitle="Workflow Impact on Product Output"
    >
      <div className="h-full flex flex-col gap-6 mt-4">
        
        {/* Two Column Comparison */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch flex-1">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Before Thriftify</h3>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 flex-1"
            >
              {before.map((item, index) => (
                <motion.div 
                  variants={itemAnim}
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Arrow */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#00C27D]/5 rounded-3xl p-8 border border-[#00C27D]/20 shadow-sm flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C27D]/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#00C27D]/20 flex items-center justify-center border border-[#00C27D]/30">
                <Sparkles className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">After Thriftify</h3>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 flex-1 relative z-10"
            >
              {after.map((item, index) => (
                <motion.div 
                  variants={itemAnim}
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00C27D] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#172554] rounded-2xl p-6 shadow-lg text-center mx-auto w-full max-w-4xl"
        >
          <p className="text-white text-lg sm:text-xl font-medium tracking-wide">
            "Thriftify standardizes listing quality across all products — improving discoverability and buyer trust."
          </p>
        </motion.div>

        {/* Live Examples Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-2"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">View Real Listing Examples</h3>
          <div className="grid grid-cols-2 gap-6">
            {examples.map((example, i) => (
              <a 
                key={i}
                href={example.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#00C27D] hover:shadow-[0_8px_30px_rgb(0,194,125,0.12)] transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#00C27D] transition-colors">{example.title}</h4>
                  <p className="text-sm text-gray-500 font-medium">{example.text}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#00C27D] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Live Listing
                  </span>
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#00C27D] group-hover:text-white transition-all duration-300 shadow-sm">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
        
      </div>
    </SlideWrapper>
  );
}
