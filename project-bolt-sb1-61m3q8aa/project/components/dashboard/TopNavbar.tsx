'use client';

import { Search, Bell, Menu, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TopNavbarProps {
  onMenuClick: () => void;
  timeRange: 'today' | 'month' | 'custom';
  setTimeRange: (range: 'today' | 'month' | 'custom') => void;
  viewType: 'individual' | 'non-individual';
  setViewType: (type: 'individual' | 'non-individual') => void;
}

const TopNavbar = ({ onMenuClick, timeRange, setTimeRange, viewType, setViewType }: TopNavbarProps) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Home</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Dashboard</span>
            </nav>
          </div>

          {/* Center section - Time Range Tabs */}
          <div className="hidden md:flex">
            <Tabs value={timeRange} onValueChange={(value) => setTimeRange(value as any)} className="w-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 w-64"
              />
            </div>

            {/* View Type Toggle */}
            <Tabs value={viewType} onValueChange={(value) => setViewType(value as any)} className="w-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual" className="text-xs">Individual</TabsTrigger>
                <TabsTrigger value="non-individual" className="text-xs">Non-Individual</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">Parikshit Singh</p>
                <p className="text-xs text-gray-500">Dec 15, 2024</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;