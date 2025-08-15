'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import MainDashboard from './MainDashboard';

const KYCDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState<'today' | 'month' | 'custom'>('today');
  const [viewType, setViewType] = useState<'individual' | 'non-individual'>('individual');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <TopNavbar 
          onMenuClick={() => setSidebarOpen(true)} 
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          viewType={viewType}
          setViewType={setViewType}
        />
        <MainDashboard timeRange={timeRange} viewType={viewType} />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default KYCDashboard;