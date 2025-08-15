'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  RefreshCw, 
  CheckCircle, 
  Shield, 
  Pause, 
  FileX 
} from 'lucide-react';

interface StatusCardsProps {
  data?: {
    initiated: number;
    underProcess: number;
    registered: number;
    validated: number;
    hold: number;
    docsPending: number;
  };
}

const StatusCards = ({ data }: StatusCardsProps) => {
  const statusData = data || {
    initiated: 387,
    underProcess: 92,
    registered: 523,
    validated: 891,
    hold: 156,
    docsPending: 234
  };

  const statusItems = [
    {
      label: 'KYC Initiated',
      value: statusData.initiated,
      icon: Clock,
      color: 'bg-blue-50 text-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      label: 'Under Process',
      value: statusData.underProcess,
      icon: RefreshCw,
      color: 'bg-yellow-50 text-yellow-600',
      iconColor: 'text-yellow-500'
    },
    {
      label: 'Registered',
      value: statusData.registered,
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600',
      iconColor: 'text-green-500'
    },
    {
      label: 'Validated',
      value: statusData.validated,
      icon: Shield,
      color: 'bg-emerald-50 text-emerald-600',
      iconColor: 'text-emerald-500'
    },
    {
      label: 'Hold',
      value: statusData.hold,
      icon: Pause,
      color: 'bg-orange-50 text-orange-600',
      iconColor: 'text-orange-500'
    },
    {
      label: 'Docs Pending',
      value: statusData.docsPending,
      icon: FileX,
      color: 'bg-red-50 text-red-600',
      iconColor: 'text-red-500'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">KYC Status Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statusItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              <CardContent className="p-4">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${item.color} mb-3`}>
                  <Icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StatusCards;