import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class PrayersPage implements OnInit, OnDestroy {
  private _prayerSub!: Subscription;
  public folder!: string;
  public openModal = false;
  public editPrayer = true;
  public selectedPrayer!: Prayer;
  public prayers$ = this.store.select(selectPrayers);

  constructor(
    private activatedRoute: ActivatedRoute,
    private prayerService: PrayerService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this._prayerSub = this.prayerService.selectedPrayer$.subscribe({
      next: (prayer) => (this.selectedPrayer = prayer),
      error: (err) => console.log(err),
    });
  }

  toggleModal(isEditMode: boolean): void {
    this.editPrayer = isEditMode;
    this.openModal = !this.openModal;
  }

  ngOnDestroy(): void {
    this._prayerSub.unsubscribe();
  }
}
