'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CircularChartProps {
  data?: {
    solicited: number;
    received: number;
    consumed: number;
    pending: number;
  };
}

const CircularChart = ({ data }: CircularChartProps) => {
  const chartData = data || {
    solicited: 1342,
    received: 567,
    consumed: 1089,
    pending: 298
  };

  const pieData = [
    { name: 'Solicited', value: chartData.solicited, color: '#3B82F6' },
    { name: 'Received', value: chartData.received, color: '#10B981' },
    { name: 'Consumed', value: chartData.consumed, color: '#8B5CF6' },
    { name: 'Pending', value: chartData.pending, color: '#F59E0B' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p style={{ color: payload[0].payload.color }}>
            Count: {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Solicited & Unsolicited</CardTitle>
        <p className="text-sm text-gray-600">No. of PANs distribution</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                className="hover:opacity-80 transition-opacity"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry: any) => (
                  <span style={{ color: entry.color, fontSize: '12px' }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Stats below chart */}
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div className="text-xs">
                <span className="font-medium text-gray-900">{item.value.toLocaleString()}</span>
                <span className="text-gray-500 ml-1">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CircularChart;