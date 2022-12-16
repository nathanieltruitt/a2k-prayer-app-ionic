import { createSelector } from '@ngrx/store';
import AppState from 'src/app/app.state';
import PrayerState from './prayers.state';

const selectPrayerState = (state: AppState) => state.prayers;
export const selectPrayers = createSelector(
  selectPrayerState,
  (state: PrayerState) => state.prayers
);
