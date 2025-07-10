import React from 'react';
import { Image, File, Link, Music, Mic, Users, Star, MessageSquare } from 'lucide-react';
import { MediaGrid } from './MediaGrid';

interface TabContentProps {
  activeTab: string;
  isDark: boolean;
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, isDark }) => {
  const EmptyState = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className={`flex flex-col items-center justify-center py-12 ${isDark ? 'text-gray-400 bg-gray-900' : 'text-gray-600 bg-white'} transition-colors duration-300`}>
      <Icon className="w-16 h-16 mb-4 opacity-50" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );

  const getTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return <MediaGrid isDark={isDark} />;
      case 'gifts':
        return (
          <EmptyState
            icon={Star}
            title="No Gifts"
            description="Gifts received will appear here"
          />
        );
      case 'media':
        return <MediaGrid isDark={isDark} />;
      case 'files':
        return (
          <EmptyState
            icon={File}
            title="No Files"
            description="Files shared in this conversation will appear here"
          />
        );
      case 'links':
        return (
          <EmptyState
            icon={Link}
            title="No Links"
            description="Links shared in this conversation will appear here"
          />
        );
      case 'music':
        return (
          <EmptyState
            icon={Music}
            title="No Music"
            description="Music shared in this conversation will appear here"
          />
        );
      case 'voice':
        return (
          <EmptyState
            icon={Mic}
            title="No Voice Messages"
            description="Voice messages from this conversation will appear here"
          />
        );
      case 'members':
        return (
          <div className={`p-4 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <div className="space-y-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <div className="w-32 h-4 bg-gray-300 rounded animate-pulse mb-1" />
                    <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className={`p-4 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>About</h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Leading technology solutions provider with over 10 years of experience in digital transformation.
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Services</h4>
                <ul className={`space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Web Development</li>
                  <li>• Mobile App Development</li>
                  <li>• Cloud Solutions</li>
                  <li>• AI & Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <EmptyState
            icon={Star}
            title="Services"
            description="Business services and offerings will be displayed here"
          />
        );
      case 'reviews':
        return (
          <EmptyState
            icon={MessageSquare}
            title="Reviews"
            description="Customer reviews and ratings will appear here"
          />
        );
      default:
        return (
          <EmptyState
            icon={File}
            title="Content"
            description="Content will appear here"
          />
        );
    }
  };

  return getTabContent();
};