import React, { useState } from 'react';
import { ProfileType } from './types/profile';
import { mockUser, mockBusiness, mockGroup, mockChannel, mockGifts } from './data/mockData';
import { ProfileHeader } from './components/ProfileHeader';
import { ActionButtons } from './components/ActionButtons';
import { TopicsList } from './components/TopicsList';
import { GiftDisplay } from './components/GiftDisplay';
import { ProfileTabs } from './components/ProfileTabs';
import { TabContent } from './components/TabContent';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfileInfo } from './components/ProfileInfo';

function App() {
  const activeType: ProfileType = 'user'; // Fixed to user profile
  const [activeTab, setActiveTab] = useState('posts');
  const [isDark, setIsDark] = useState(false);

  const getCurrentProfile = () => {
    return mockUser;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 min-h-screen shadow-xl overflow-hidden">
        <ProfileHeader
          profile={getCurrentProfile()}
          type={activeType}
          isDark={isDark}
        />
        
        <ProfileInfo
          profile={getCurrentProfile()}
          type={activeType}
          isDark={isDark}
        />
        
        {activeTab === 'gifts' && (
          <GiftDisplay gifts={mockGifts} isDark={isDark} />
        )}
        
        <ProfileTabs
          type={activeType}
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
          isDark={isDark}
        />
        
        <TabContent activeTab={activeTab} isDark={isDark} />
      </div>
    </div>
  );
}

export default App;