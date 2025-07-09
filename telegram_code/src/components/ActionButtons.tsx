import React from 'react';
import { ProfileType } from '../types/profile';

interface ActionButtonsProps {
  type: ProfileType;
  isDark: boolean;
}

// This component is now integrated into ProfileHeader
// Keeping it as a placeholder for potential future use
export const ActionButtons: React.FC<ActionButtonsProps> = ({ type, isDark }) => {
  return null;
};