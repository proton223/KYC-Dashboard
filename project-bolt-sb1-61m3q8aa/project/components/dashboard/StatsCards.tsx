'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardsProps {
  data?: {
    newKYC: {
      count: number;
      change: number;
      isPositive: boolean;
    };
    modifiedKYC: {
      count: number;
      change: number;
      isPositive: boolean;
    };
  };
}

const StatsCards = ({ data }: StatsCardsProps) => {
  const stats = data || {
    newKYC: { count: 4782, change: 18.7, isPositive: true },
    modifiedKYC: { count: 1247, change: -12.4, isPositive: false }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* New KYC Card */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-blue-100">
            <span>New KYC</span>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">
                {stats.newKYC.isPositive ? '+' : ''}{stats.newKYC.change}%
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.newKYC.count.toLocaleString()}</div>
          <p className="text-blue-100 text-sm mt-1">Total new applications</p>
        </CardContent>
      </Card>

      {/* Modified KYC Card */}
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-orange-100">
            <span>Modified KYC</span>
            <div className="flex items-center space-x-1">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-medium">
                {stats.modifiedKYC.change}%
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.modifiedKYC.count.toLocaleString()}</div>
          <p className="text-orange-100 text-sm mt-1">Modified applications</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;