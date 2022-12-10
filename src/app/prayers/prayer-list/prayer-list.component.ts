import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.scss'],
})
export class PrayerListComponent {
  @Input() openModal = false;
  @Output() modalClosed = new EventEmitter<void>();

  toggleModal() {
    this.openModal = !this.openModal;
    this.modalClosed.emit();
  }
}
