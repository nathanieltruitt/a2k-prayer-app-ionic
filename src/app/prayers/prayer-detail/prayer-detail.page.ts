import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppState from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { selectPrayers } from '../state/prayers.selector';
import { Prayer } from 'src/app/core/models/prayer.model';

@Component({
  templateUrl: './prayer-detail.page.html',
  styleUrls: ['./prayer-detail.page.scss'],
})
export class PrayerDetailPage implements OnInit {
  routeId!: string;
  isEditMode = false;
  prayers$ = this.store.select(selectPrayers);
  prayer$!: Observable<Prayer>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // take the param object and grab id
    this.route.params.pipe(take(1)).subscribe((params) => {
      this.routeId = params['id'];
    });

    // check if this is a new prayer
    if (this.routeId === 'new') {
      this.isEditMode = true;
      return;
    }

    this.prayer$ = this.prayers$.pipe(
      map((prayers) => {
        const prayer = prayers.find(
          (prayer) => prayer.id === Number(this.routeId)
        );
        if (!prayer) throw new Error('Prayer was not found!');
        else return prayer;
      })
    );
  }

  onClose() {
    this.router.navigate(['/prayers'], { relativeTo: this.route });
  }
}
