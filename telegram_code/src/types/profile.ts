export interface User {
  id: string;
  name: string;
  username: string;
  bio?: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
  phone?: string;
  isVerified?: boolean;
  isPremium?: boolean;
  mutualContacts?: number;
  sharedGroups?: number;
}

export interface Business {
  id: string;
  name: string;
  username: string;
  description: string;
  avatar: string;
  category: string;
  location?: string;
  website?: string;
  phone?: string;
  workingHours?: string;
  isVerified: boolean;
  subscribers: number;
  rating?: number;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  avatar: string;
  members: number;
  isTopicEnabled: boolean;
  topics?: Topic[];
  admins: number;
  isPublic: boolean;
  username?: string;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  avatar: string;
  subscribers: number;
  isVerified: boolean;
  username?: string;
  isPublic: boolean;
  category?: string;
}

export interface Topic {
  id: string;
  name: string;
  color: string;
  messageCount: number;
  lastMessage?: string;
  isGeneral?: boolean;
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  fromUser: string;
  date: string;
  isStarred?: boolean;
}

export type ProfileType = 'user' | 'business' | 'group' | 'channel';