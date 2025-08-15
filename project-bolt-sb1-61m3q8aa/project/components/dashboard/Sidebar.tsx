'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Calculator, 
  FileSignature,
  Bell,
  Building2,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'applications', label: 'Applications', icon: FileText, href: '/applications' },
    { id: 'billing', label: 'Billing', icon: CreditCard, href: '/billing' },
    { id: 'rate-card', label: 'Rate Card', icon: Calculator, href: '/rate-card' },
    { id: 'agreement', label: 'Agreement Copy', icon: FileSignature, href: '/agreement' },
    { id: 'notices', label: 'Notices', icon: Bell, href: '/notices' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-6">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">KYC Portal</span>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                      activeItem === item.id
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <Icon className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      activeItem === item.id ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                    )} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-0 flex z-50 lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        <div className={cn(
          "relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={onClose}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">KYC Portal</span>
            </div>
            <nav className="mt-8 px-2 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "group flex items-center px-4 py-3 text-sm font-medium rounded-lg",
                      activeItem === item.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                    onClick={() => {
                      setActiveItem(item.id);
                      onClose();
                    }}
                  >
                    <Icon className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      activeItem === item.id ? "text-blue-600" : "text-gray-400"
                    )} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;