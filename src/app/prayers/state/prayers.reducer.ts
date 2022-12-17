import { createReducer, on } from '@ngrx/store';
import PrayerActions from './prayers.actions';
import PrayerState from './prayers.state';

export const initialState: PrayerState = {
  prayers: [
    {
      id: 1,
      userId: 1,
      author: 'Nathan Truitt',
      prayerFor: 'Joe',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat laboriosam ut soluta suscipit blanditiis a ducimus optio placeat velit.',
      title: 'Test Prayer 1',
    },
    {
      id: 2,
      userId: 2,
      author: 'Nathan Truitt',
      prayerFor: 'Joe',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat laboriosam ut soluta suscipit blanditiis a ducimus optio placeat velit.',
      title: 'Test Prayer 2',
    },
    {
      id: 2,
      userId: 2,
      author: 'Nathan Truitt',
      prayerFor: 'Joe',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat laboriosam ut soluta suscipit blanditiis a ducimus optio placeat velit.',
      title: 'Test Prayer 3',
    },
  ],
};

export const prayersReducer = createReducer(
  initialState,
  on(
    PrayerActions.createPrayer,
    (state, { author, prayerFor, title, detail }) => {
      let id;
      if (state.prayers.length > 0) {
        id = state.prayers.length + 1;
      } else {
        id = 1;
      }
      return {
        prayers: [
          ...state.prayers,
          {
            id: id,
            userId: 1,
            author: author,
            prayerFor: prayerFor,
            title: title,
            detail: detail,
            groupId: 1,
          },
        ],
      };
    }
  ),
  on(
    PrayerActions.updatePrayer,
    (state, { id, author, prayerFor, title, detail }) => {
      // TODO: need to change once userId and groupId are passed in
      const prayer = state.prayers.filter((prayer) => prayer.id === id)[0];
      const idx = state.prayers.indexOf(prayer);
      state.prayers[idx] = {
        id: id,
        userId: 1,
        author: author,
        prayerFor: prayerFor,
        title: title,
        detail: detail,
        groupId: 1,
      };
      return { prayers: state.prayers };
    }
  ),
  on(PrayerActions.deletePrayer, (state, { id }) => {
    const prayer = state.prayers.find((prayer) => prayer.id === id);

    // if no prayer, return new state as is
    if (!prayer) return { prayers: state.prayers };

    // splice prayer and return new state
    const idx = state.prayers.indexOf(prayer);
    state.prayers.splice(idx, 1);
    return { prayers: state.prayers };
  })
);
