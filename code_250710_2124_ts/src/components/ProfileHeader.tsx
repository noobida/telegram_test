import React from 'react';
import { User, Business, Group, Channel, ProfileType } from '../types/profile';
import { 
  Shield, 
  Crown, 
  MapPin, 
  Globe, 
  Phone, 
  Clock, 
  Star,
  Users,
  Hash,
  CheckCircle,
  ArrowLeft,
  MoreVertical,
  MessageSquare, 
  BellOff,
  Video
} from 'lucide-react';

interface ProfileHeaderProps {
  profile: User | Business | Group | Channel;
  type: ProfileType;
  isDark: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, type, isDark }) => {
  const getStatusColor = () => {
    if (type === 'user' && (profile as User).isOnline) {
      return 'bg-green-500';
    }
    return 'bg-gray-400';
  };

  const getVerificationIcon = () => {
    if (type === 'user' && (profile as User).isPremium) {
      return <Crown className="w-5 h-5 text-yellow-500" />;
    }
    if ((profile as any).isVerified) {
      return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
    return null;
  };

  // Floating gift emojis data
  const floatingGifts = [
    // Top row
    { src: '/frog_1_enhanced-removebg-preview.png', top: '15%', left: '15%', delay: '0s' },
    { src: '/frog_2_enhanced-removebg-preview.png', top: '13%', right: '15%', delay: '0.5s' },
    
    // Middle left and right
    { src: '/frog_6_enhanced-removebg-preview.png', top: '30%', left: '8%', delay: '1s' },
    { src: '/frog_4_enhanced-removebg-preview.png', top: '28%', right: '8%', delay: '1.5s' },
    
    // Bottom row
    { src: '/frog_3_enhanced-removebg-preview.png', top: '45%', left: '12%', delay: '2s' },
    { src: '/frog_6_enhanced-removebg-preview.png', top: '43%', right: '12%', delay: '2.5s' },
  ];

  const buttonClass = `flex flex-col items-center justify-center gap-2 p-4 rounded-2xl font-medium transition-all duration-200 hover:scale-105 active:scale-95 min-w-[80px] bg-white/20 text-white backdrop-blur-sm border border-white/10 hover:bg-white/30`;

  return (
    <div className="relative overflow-hidden">
      {/* Extended background using profile image */}
      <div className="absolute inset-0">
        {/* Pattern overlay from background image */}
        <img
          src="/background_only_image.png"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Floating gift emojis */}
      {floatingGifts.map((icon, index) => (
        <div
          key={index}
          className="absolute animate-bounce opacity-70 z-20"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            animationDelay: icon.delay,
            animationDuration: '3s',
            animationIterationCount: 'infinite'
          }}
        >
          <img 
            src={icon.src} 
            alt="Floating icon" 
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
        </div>
      ))}

      {/* Header bar */}
      <div className="relative z-30 flex items-center justify-between p-4 pt-12">
        <ArrowLeft className="w-6 h-6 text-white drop-shadow-lg" />
        <MoreVertical className="w-6 h-6 text-white drop-shadow-lg" />
      </div>

      {/* Profile content */}
      <div className="relative z-30 flex flex-col items-center pb-6 px-6">
        {/* Avatar with holographic effect */}
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
            <div className="w-32 h-32 rounded-full bg-purple-600"></div>
          </div>
          <img
            src="/profile image.png"
            alt={profile.name}
            className="relative w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl"
          />
          {type === 'user' && (
            <div className={`absolute -bottom-1 -right-1 w-8 h-8 ${getStatusColor()} rounded-full border-4 border-white shadow-lg`} />
          )}
        </div>

        {/* Name and status */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              {profile.name}
            </h1>
            <img 
              src="/helmet_7_enhanced-removebg-preview.png" 
              alt="Helmet" 
              className="w-8 h-8 object-contain drop-shadow-lg"
            />
          </div>
          
          {type === 'user' && (
            <p className="text-white/90 text-lg drop-shadow-md">
              {(profile as User).isOnline ? 'online' : (profile as User).lastSeen || 'last seen recently'}
            </p>
          )}
        </div>

        {/* Action Buttons integrated into the extended background */}
        <div className="w-full max-w-sm">
          <div className="flex gap-3 justify-center">
            <button className={buttonClass}>
              <MessageSquare className="w-6 h-6" />
              <span className="text-sm">Message</span>
            </button>
            <button className={buttonClass}>
              <BellOff className="w-6 h-6" />
              <span className="text-sm">Unmute</span>
            </button>
            <button className={buttonClass}>
              <Phone className="w-6 h-6" />
              <span className="text-sm">Call</span>
            </button>
            <button className={buttonClass}>
              <Video className="w-6 h-6" />
              <span className="text-sm">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};