'use client';

import { useEffect, useState } from 'react';
import StatsCards from './StatsCards';
import BarChart from './BarChart';
import StatusCards from './StatusCards';
import CategoriesSection from './CategoriesSection';
import CircularChart from './CircularChart';
import PANDataStats from './PANDataStats';
import LoadingSkeleton from './LoadingSkeleton';

interface MainDashboardProps {
  timeRange: 'today' | 'month' | 'custom';
  viewType: 'individual' | 'non-individual';
}

const MainDashboard = ({ timeRange, viewType }: MainDashboardProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/dashboard-data?timeRange=${timeRange}&viewType=${viewType}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Simulate API delay
    setTimeout(() => fetchData(), 800);
  }, [timeRange, viewType]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Showing data for {viewType} - {timeRange}</p>
        </div>

        {/* Stats Cards */}
        <StatsCards data={data?.stats} />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart data={data?.chartData} viewType={viewType} />
          <CircularChart data={data?.circularData} />
        </div>

        {/* Status Cards */}
        <StatusCards data={data?.statusData} />

        {/* Categories and PAN Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CategoriesSection data={data?.categoriesData} viewType={viewType} />
          <PANDataStats data={data?.panData} />
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;