import { Component } from '@angular/core';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.scss'],
})
export class PrayerListComponent {
  openModal = false;

  toggleModal() {
    this.openModal = !this.openModal;
  }
}
