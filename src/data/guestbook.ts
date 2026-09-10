export interface PrayerGreeting {
  id: string;
  name: string;
  relationship?: string;
  message: string;
  createdAt: string;
}

export const initialDummyPrayers: PrayerGreeting[] = [];
