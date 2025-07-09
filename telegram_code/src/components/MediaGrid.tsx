import React from 'react';

interface MediaGridProps {
  isDark: boolean;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ isDark }) => {
  const mediaItems = [
    'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="grid grid-cols-3 gap-0.5 p-0">
        {mediaItems.map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <img
              src={src}
              alt={`Media ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};