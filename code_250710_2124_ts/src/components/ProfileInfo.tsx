import React from 'react';
import { User, Business, Group, Channel, ProfileType } from '../types/profile';
import { UserPlus, QrCode } from 'lucide-react';

interface ProfileInfoProps {
  profile: User | Business | Group | Channel;
  type: ProfileType;
  isDark: boolean;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile, type, isDark }) => {
  return (
    <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Bio/Description */}
      <div className="mb-6">
        <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
          25 y.o, CS streamer, San Francisco
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          Bio
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
            @ronald_copper
          </div>
          <QrCode className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Username
        </div>
      </div>

      {/* Add to Contacts */}
      <button className={`flex items-center gap-3 w-full p-4 rounded-lg transition-colors ${
        isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
      }`}>
        <UserPlus className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
          Add to Contacts
        </span>
      </button>
    </div>
  );
};