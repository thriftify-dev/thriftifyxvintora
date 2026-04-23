import { Outlet } from 'react-router';
import { SlideNavigation } from './slide-navigation';

export function SlideLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <SlideNavigation />
    </div>
  );
}
