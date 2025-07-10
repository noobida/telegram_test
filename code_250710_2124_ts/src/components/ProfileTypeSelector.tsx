import React from 'react';
import { ProfileType } from '../types/profile';
import { User, Building, Users, Radio } from 'lucide-react';

interface ProfileTypeSelectorProps {
  activeType: ProfileType;
  onTypeChange: (type: ProfileType) => void;
  isDark: boolean;
}

export const ProfileTypeSelector: React.FC<ProfileTypeSelectorProps> = ({
  activeType,
  onTypeChange,
  isDark
}) => {
  const types = [
    { id: 'user' as ProfileType, label: 'User', icon: User },
    { id: 'business' as ProfileType, label: 'Business', icon: Building },
    { id: 'group' as ProfileType, label: 'Group', icon: Users },
    { id: 'channel' as ProfileType, label: 'Channel', icon: Radio }
  ];

  return (
    <div className={`p-4 border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-300`}>
      <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Profile Type
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
              activeType === type.id
                ? 'bg-blue-500 text-white shadow-lg'
                : isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <type.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};