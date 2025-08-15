'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image, FileText } from 'lucide-react';

interface PANDataStatsProps {
  data?: {
    pansSolicited: { withImage: number; withoutImage: number };
    dataReceived: { withImage: number; withoutImage: number };
  };
}

const PANDataStats = ({ data }: PANDataStatsProps) => {
  const statsData = data || {
    pansSolicited: { withImage: 1342, withoutImage: 687 },
    dataReceived: { withImage: 567, withoutImage: 329 }
  };

  const StatItem = ({ 
    title, 
    withImageCount, 
    withoutImageCount, 
    withImageLabel = "With Image",
    withoutImageLabel = "Without Image"
  }: {
    title: string;
    withImageCount: number;
    withoutImageCount: number;
    withImageLabel?: string;
    withoutImageLabel?: string;
  }) => (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-900">{title}</h4>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Image className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">{withImageLabel}</span>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {withImageCount.toLocaleString()}
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{withoutImageLabel}</span>
          </div>
          <Badge variant="outline" className="bg-white">
            {withoutImageCount.toLocaleString()}
          </Badge>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">PAN & Data Stats</CardTitle>
        <p className="text-sm text-gray-600">Overview of PAN solicitation and data reception</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <StatItem
          title="No. of PANs Solicited"
          withImageCount={statsData.pansSolicited.withImage}
          withoutImageCount={statsData.pansSolicited.withoutImage}
        />
        
        <StatItem
          title="Data Received"
          withImageCount={statsData.dataReceived.withImage}
          withoutImageCount={statsData.dataReceived.withoutImage}
        />

        {/* Summary */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-800">
            <div className="font-medium mb-1">Summary</div>
            <div className="text-xs space-y-1">
              <div>Total PANs: {(statsData.pansSolicited.withImage + statsData.pansSolicited.withoutImage).toLocaleString()}</div>
              <div>Total Data: {(statsData.dataReceived.withImage + statsData.dataReceived.withoutImage).toLocaleString()}</div>
              <div>Success Rate: {Math.round(((statsData.dataReceived.withImage + statsData.dataReceived.withoutImage) / (statsData.pansSolicited.withImage + statsData.pansSolicited.withoutImage)) * 100)}%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PANDataStats;