import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription, take } from 'rxjs';
import AppState from '../app.state';
import { Prayer } from '../core/models/prayer.model';
import { PrayerService } from '../core/services/prayer.service';
import { selectPrayers } from './state/prayers.selector';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage {
  public editPrayer = true;
  public prayers$ = this.store.select(selectPrayers);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  onAddPrayer() {
    this.router.navigate(['/', 'prayers', 'detail', 'new'], {
      relativeTo: this.route,
    });
  }
}
