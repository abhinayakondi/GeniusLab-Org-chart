import React, { useState } from 'react';
import { Sidebar } from './components/SideBar';
import { UserManagement } from './components/UserManagement';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('user-management');

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'user-management':
        return <UserManagement />;
      case 'dashboard':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Dashboard content coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl text-gray-900 mb-2">Settings</h1>
              <p className="text-gray-600">Settings content coming soon...</p>
            </div>
          </div>
        );
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-50 overflow-hidden">
      <Sidebar 
        activeItem={activeMenuItem} 
        onItemClick={handleMenuItemClick} 
      />
      {renderContent()}
      <Toaster />
    </div>
  );
}