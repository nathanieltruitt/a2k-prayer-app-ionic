import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Prayer } from '../models/prayer.model';

@Injectable({
  providedIn: 'root',
})
export class PrayerService {
  private _prayers: Prayer[] = [
    {
      id: 1,
      userId: 1,
      author: 'Nathan Truitt',
      prayerFor: 'Joe',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat laboriosam ut soluta suscipit blanditiis a ducimus optio placeat velit.',
      title: 'Test Prayer',
    },
  ];
  private _prayers$ = new BehaviorSubject<Prayer[]>(this._prayers);
  public selectedPrayer$ = new ReplaySubject<Prayer>(1);

  public get prayers$() {
    return this._prayers$.asObservable();
  }

  constructor() {}
}
