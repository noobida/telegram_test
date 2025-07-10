import React from 'react';
import { ProfileType } from '../types/profile';

interface ProfileTabsProps {
  type: ProfileType;
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDark: boolean;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ type, activeTab, onTabChange, isDark }) => {
  const getTabs = () => {
    switch (type) {
      case 'user':
        return [
          { id: 'posts', label: 'Posts' },
          { id: 'gifts', label: 'Gifts 🍩🐸🧸' },
          { id: 'media', label: 'Media' },
          { id: 'files', label: 'Files' },
          { id: 'links', label: 'Links' }
        ];
      case 'business':
        return [
          { id: 'about', label: 'About' },
          { id: 'services', label: 'Services' },
          { id: 'reviews', label: 'Reviews' },
          { id: 'media', label: 'Media' }
        ];
      case 'group':
        return [
          { id: 'members', label: 'Members' },
          { id: 'media', label: 'Media' },
          { id: 'files', label: 'Files' },
          { id: 'links', label: 'Links' }
        ];
      case 'channel':
        return [
          { id: 'posts', label: 'Posts' },
          { id: 'media', label: 'Media' },
          { id: 'files', label: 'Files' },
          { id: 'links', label: 'Links' }
        ];
      default:
        return [];
    }
  };

  const tabs = getTabs();

  return (
    <div className={`border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-300`}>
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-3 font-medium whitespace-nowrap transition-all duration-200 border-b-2 text-sm ${
              activeTab === tab.id
                ? `border-blue-500 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
                : `border-transparent ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};