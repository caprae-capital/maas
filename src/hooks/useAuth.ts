import { useState } from 'react';

export type UserProfile = {
  email: string;
  name: string;
  userType: 'buyer' | 'seller';
  avatar?: string;
  businessInfo?: {
    name: string;
    industry: string;
    revenue: string;
    employees: string;
    location: string;
    description: string;
  };
  personalityTraits?: any;
};

// Create a simple storage helper
const storage = {
  setItem: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  },
  getItem: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  }
};

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => 
    Boolean(storage.getItem('auth'))
  );
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => 
    storage.getItem('userProfile')
  );

  const login = (email: string, password: string) => {
    // Basic validation only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // For prototype: Create a mock profile and allow login
    const mockProfile = {
      email,
      name: email.split('@')[0],
      userType: 'buyer' as const,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };

    setIsAuthenticated(true);
    setUserProfile(mockProfile);
    storage.setItem('auth', true);
    storage.setItem('userProfile', mockProfile);
  };

  const signup = (email: string, password: string, userType: 'buyer' | 'seller') => {
    // Basic validation only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // For prototype: Create a mock profile and allow signup
    const mockProfile = {
      email,
      name: email.split('@')[0],
      userType,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };

    setIsAuthenticated(true);
    setUserProfile(mockProfile);
    storage.setItem('auth', true);
    storage.setItem('userProfile', mockProfile);
  };

  const updateProfile = (profileData: Partial<UserProfile>) => {
    const updatedProfile = userProfile ? { ...userProfile, ...profileData } : null;
    setUserProfile(updatedProfile);
    if (updatedProfile) {
      storage.setItem('userProfile', updatedProfile);
    }
  };

  const updateBusinessInfo = (businessInfo: UserProfile['businessInfo']) => {
    const updatedProfile = userProfile ? { ...userProfile, businessInfo } : null;
    setUserProfile(updatedProfile);
    if (updatedProfile) {
      storage.setItem('userProfile', updatedProfile);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
    storage.removeItem('auth');
    storage.removeItem('userProfile');
  };

  return {
    isAuthenticated,
    userProfile,
    login,
    signup,
    logout,
    updateProfile,
    updateBusinessInfo,
  };
}