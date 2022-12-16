import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppState from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Prayer } from 'src/app/core/models/prayer.model';
import { selectPrayers } from '../state/prayers.selector';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.scss'],
})
export class PrayerListComponent {
  prayers$ = this.store.select(selectPrayers);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  triggerModal(prayer: Prayer) {
    this.router.navigate(['/', 'prayers', 'detail', prayer.id], {
      relativeTo: this.route,
    });
  }
}
