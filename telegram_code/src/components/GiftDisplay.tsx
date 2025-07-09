import React from 'react';
import { Gift } from '../types/profile';
import { Star, Calendar } from 'lucide-react';

interface GiftDisplayProps {
  gifts: Gift[];
  isDark: boolean;
}

export const GiftDisplay: React.FC<GiftDisplayProps> = ({ gifts, isDark }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`p-4 border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-300`}>
      <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Gifts ({gifts.length})
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-3xl">{gift.icon}</div>
              {gift.isStarred && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
            <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
              {gift.name}
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              from {gift.fromUser}
            </div>
            <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <Calendar className="w-3 h-3" />
              {formatDate(gift.date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};