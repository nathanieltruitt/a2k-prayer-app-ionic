import { createAction, props } from '@ngrx/store';

export default class PrayerActions {
  public static createPrayer = createAction(
    '[Prayers Page] Create Prayer',
    props<{
      author: string;
      prayerFor: string;
      title: string;
      detail: string;
    }>()
  );

  public static updatePrayer = createAction(
    '[Prayers Page] Update Prayer',
    props<{
      id: number;
      author: string;
      prayerFor: string;
      title: string;
      detail: string;
    }>()
  );

  public static deletePrayer = createAction(
    '[Prayers Prage] Delete Prayer',
    props<{ id: number }>()
  );
}
