import { User, Business, Group, Channel, Gift } from '../types/profile';

export const mockUser: User = {
  id: '1',
  name: 'Ronald Copper',
  username: 'ronald_copper',
  bio: '25 y.o, CS streamer, San Francisco',
  avatar: '/profile image.png',
  isOnline: true,
  phone: '+1 (555) 123-4567',
  isVerified: true,
  isPremium: true,
  mutualContacts: 12,
  sharedGroups: 5
};

export const mockBusiness: Business = {
  id: '2',
  name: 'TechCorp Solutions',
  username: 'techcorp',
  description: 'Leading technology solutions provider. We help businesses transform with cutting-edge digital solutions.',
  avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
  category: 'Technology',
  location: 'San Francisco, CA',
  website: 'techcorp.com',
  phone: '+1 (555) 987-6543',
  workingHours: 'Mon-Fri 9AM-6PM PST',
  isVerified: true,
  subscribers: 15420,
  rating: 4.8
};

export const mockGroup: Group = {
  id: '3',
  name: 'React Developers',
  description: 'A community for React developers to share knowledge, discuss best practices, and help each other grow.',
  avatar: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
  members: 2847,
  isTopicEnabled: true,
  topics: [
    { id: '1', name: 'General', color: '#0088CC', messageCount: 1205, isGeneral: true },
    { id: '2', name: 'Beginner Questions', color: '#17A2B8', messageCount: 847 },
    { id: '3', name: 'Advanced Topics', color: '#28A745', messageCount: 623 },
    { id: '4', name: 'Job Postings', color: '#FFC107', messageCount: 312 },
    { id: '5', name: 'Resources', color: '#DC3545', messageCount: 189 }
  ],
  admins: 8,
  isPublic: true,
  username: 'reactdevs'
};

export const mockChannel: Channel = {
  id: '4',
  name: 'Tech News Daily',
  description: 'Your daily dose of technology news, updates, and insights from the tech world.',
  avatar: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400',
  subscribers: 89230,
  isVerified: true,
  username: 'technewsdaily',
  isPublic: true,
  category: 'News & Media'
};

export const mockGifts: Gift[] = [
  {
    id: '1',
    name: 'Premium Star',
    icon: '⭐',
    fromUser: 'Sarah Miller',
    date: '2024-01-15',
    isStarred: true
  },
  {
    id: '2',
    name: 'Telegram Premium',
    icon: '💎',
    fromUser: 'Mike Chen',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Birthday Gift',
    icon: '🎂',
    fromUser: 'Emma Wilson',
    date: '2024-01-05'
  },
  {
    id: '4',
    name: 'Coffee Cup',
    icon: '☕',
    fromUser: 'David Brown',
    date: '2024-01-01'
  }
];