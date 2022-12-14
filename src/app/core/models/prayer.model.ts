export interface Prayer {
  id: number;
  userId: number;
  author: string;
  prayerFor: string;
  title: string;
  detail: string;
  groupId?: number;
}
