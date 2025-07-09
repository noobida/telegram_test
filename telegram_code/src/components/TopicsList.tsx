import React from 'react';
import { Topic } from '../types/profile';
import { Hash, MessageSquare } from 'lucide-react';

interface TopicsListProps {
  topics: Topic[];
  isDark: boolean;
}

export const TopicsList: React.FC<TopicsListProps> = ({ topics, isDark }) => {
  return (
    <div className={`p-4 border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-300`}>
      <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Topics
      </h3>
      <div className="space-y-2">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: topic.color }}
            >
              <Hash className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {topic.name}
                {topic.isGeneral && (
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                    General
                  </span>
                )}
              </div>
              {topic.lastMessage && (
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                  {topic.lastMessage}
                </div>
              )}
            </div>
            <div className="text-right">
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {topic.messageCount}
              </div>
              <MessageSquare className="w-4 h-4 text-gray-500 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};