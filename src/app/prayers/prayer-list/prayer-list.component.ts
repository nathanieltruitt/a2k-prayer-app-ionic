import { Component, EventEmitter, Output } from '@angular/core';
import { Prayer } from 'src/app/core/models/prayer.model';
import { PrayerService } from 'src/app/core/services/prayer.service';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.scss'],
})
export class PrayerListComponent {
  @Output() modalOpenEvent = new EventEmitter<void>();
  constructor(private prayerService: PrayerService) {}

  getPrayers() {
    return this.prayerService.prayers$;
  }

  triggerModal(prayer: Prayer) {
    this.prayerService.selectedPrayer$.next(prayer);
    this.modalOpenEvent.emit();
  }
}
