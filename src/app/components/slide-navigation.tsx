import { useNavigate, useLocation } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const slides = [
  { path: '/', name: 'Cover' },
  { path: '/methodology', name: 'Methodology' },
  { path: '/listing-speed', name: 'Listing Speed' },
  { path: '/total-listings', name: 'Total Listings' },
  { path: '/user-satisfaction', name: 'User Satisfaction' },
  { path: '/support-impact', name: 'Support Impact' },
  { path: '/sell-through', name: 'Sell-Through Rate' },
  { path: '/listing-quality', name: 'Listing Quality' },
  { path: '/benchmarking', name: 'Benchmarking' },
  { path: '/thank-you', name: 'Thank You' }
];

export function SlideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = slides.findIndex(slide => slide.path === location.pathname);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < slides.length - 1;

  const handlePrev = () => { if (canGoPrev) navigate(slides[currentIndex - 1].path); };
  const handleNext = () => { if (canGoNext) navigate(slides[currentIndex + 1].path); };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, canGoNext, canGoPrev]); // Re-bind on state change

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className={`p-3 rounded-full transition-all flex items-center justify-center focus:outline-none backdrop-blur-md shadow-sm border ${
          canGoPrev
            ? 'bg-white/90 border-gray-200 hover:bg-white text-gray-700 hover:text-[#00C27D] hover:shadow-md active:scale-95'
            : 'bg-white/50 border-gray-100 text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        disabled={!canGoNext}
        className={`p-3 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm border ${
          canGoNext
            ? 'bg-[#1E3A8A] border-[#1E3A8A] hover:bg-[#172554] text-white hover:shadow-md active:scale-95'
            : 'bg-white/50 border-gray-100 text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
