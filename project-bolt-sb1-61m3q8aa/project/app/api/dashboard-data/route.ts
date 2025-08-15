import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const timeRange = searchParams.get('timeRange') || 'today';
  const viewType = searchParams.get('viewType') || 'individual';

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock data based on parameters
  const baseMultiplier = viewType === 'individual' ? 1 : 0.7;
  const timeMultiplier = timeRange === 'month' ? 30 : timeRange === 'custom' ? 15 : 1;

  const data = {
    stats: {
      newKYC: {
        count: Math.floor(4782 * baseMultiplier * timeMultiplier),
        change: viewType === 'individual' ? 18.7 : -3.2,
        isPositive: viewType === 'individual'
      },
      modifiedKYC: {
        count: Math.floor(1247 * baseMultiplier * timeMultiplier),
        change: viewType === 'individual' ? -12.4 : 22.8,
        isPositive: viewType !== 'individual'
      }
    },
    chartData: [
      {
        name: 'Today',
        individual: Math.floor(625 * baseMultiplier),
        nonIndividual: Math.floor(485 * baseMultiplier)
      },
      {
        name: 'Yesterday',
        individual: Math.floor(578 * baseMultiplier),
        nonIndividual: Math.floor(692 * baseMultiplier)
      }
    ],
    statusData: {
      initiated: Math.floor(387 * baseMultiplier * timeMultiplier),
      underProcess: Math.floor(92 * baseMultiplier * timeMultiplier),
      registered: Math.floor(523 * baseMultiplier * timeMultiplier),
      validated: Math.floor(891 * baseMultiplier * timeMultiplier),
      hold: Math.floor(156 * baseMultiplier * timeMultiplier),
      docsPending: Math.floor(234 * baseMultiplier * timeMultiplier)
    },
    categoriesData: {
      individual: {
        ri: viewType === 'individual' ? 82 : 71,
        nri: viewType === 'individual' ? 58 : 43
      },
      nonIndividual: {
        ri: viewType === 'individual' ? 67 : 79,
        nri: viewType === 'individual' ? 41 : 52
      }
    },
    circularData: {
      solicited: Math.floor(1342 * baseMultiplier * timeMultiplier),
      received: Math.floor(567 * baseMultiplier * timeMultiplier),
      consumed: Math.floor(1089 * baseMultiplier * timeMultiplier),
      pending: Math.floor(298 * baseMultiplier * timeMultiplier)
    },
    panData: {
      pansSolicited: {
        withImage: Math.floor(1342 * baseMultiplier * timeMultiplier),
        withoutImage: Math.floor(687 * baseMultiplier * timeMultiplier)
      },
      dataReceived: {
        withImage: Math.floor(567 * baseMultiplier * timeMultiplier),
        withoutImage: Math.floor(329 * baseMultiplier * timeMultiplier)
      }
    }
  };

  return NextResponse.json(data);
}