export type ThemeMode = 'light' | 'dark' | 'system';

export type Language = 'th' | 'en';

export interface Appliance {
  id: string;
  name: string;
  watts: number;
  hours: number;
  category?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: 'google' | 'guest';
  savedCount?: number;
}

export interface AIModelSuggestion {
  name: string;
  watt: number;
  hours: number;
  category?: string;
}
