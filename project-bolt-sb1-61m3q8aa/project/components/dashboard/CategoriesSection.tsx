'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CategoriesSectionProps {
  data?: {
    individual: { ri: number; nri: number };
    nonIndividual: { ri: number; nri: number };
  };
  viewType: 'individual' | 'non-individual';
}

const CategoriesSection = ({ data, viewType }: CategoriesSectionProps) => {
  const categoriesData = data || {
    individual: { ri: 82, nri: 58 },
    nonIndividual: { ri: 67, nri: 41 }
  };

  const currentData = viewType === 'individual' ? categoriesData.individual : categoriesData.nonIndividual;

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Categories</CardTitle>
        <p className="text-sm text-gray-600">
          {viewType === 'individual' ? 'Individual' : 'Non-Individual'} breakdown
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* RI Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">RI (Resident Indian)</span>
            <span className="text-sm font-semibold text-gray-900">{currentData.ri}%</span>
          </div>
          <Progress value={currentData.ri} className="h-3" />
          <p className="text-xs text-gray-500">Resident Indian applications</p>
        </div>

        {/* NRI Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">NRI (Non-Resident Indian)</span>
            <span className="text-sm font-semibold text-gray-900">{currentData.nri}%</span>
          </div>
          <Progress value={currentData.nri} className="h-3" />
          <p className="text-xs text-gray-500">Non-resident Indian applications</p>
        </div>

        {/* Summary */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            Total completion rate: <span className="font-semibold text-gray-900">
              {Math.round((currentData.ri + currentData.nri) / 2)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoriesSection;