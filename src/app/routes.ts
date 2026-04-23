import { createBrowserRouter } from 'react-router';
import { SlideCover } from './components/slide-cover';
import { SlideMethodology } from './components/slide-methodology';
import { SlideListingSpeed } from './components/slide-listing-speed';
import { SlideTotalListings } from './components/slide-total-listings';
import { SlideUserSatisfaction } from './components/slide-user-satisfaction';
import { SlideSupportImpact } from './components/slide-support-impact';
import { SlideSellThrough } from './components/slide-sell-through';
import { SlideListingQuality } from './components/slide-listing-quality';
import { SlideBenchmarking } from './components/slide-benchmarking';
import { SlideThankYou } from './components/slide-thank-you';
import { SlideLayout } from './components/slide-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SlideLayout,
    children: [
      { index: true, Component: SlideCover },
      { path: 'methodology', Component: SlideMethodology },
      { path: 'listing-speed', Component: SlideListingSpeed },
      { path: 'total-listings', Component: SlideTotalListings },
      { path: 'user-satisfaction', Component: SlideUserSatisfaction },
      { path: 'support-impact', Component: SlideSupportImpact },
      { path: 'sell-through', Component: SlideSellThrough },
      { path: 'listing-quality', Component: SlideListingQuality },
      { path: 'benchmarking', Component: SlideBenchmarking },
      { path: 'thank-you', Component: SlideThankYou }
    ]
  }
]);
