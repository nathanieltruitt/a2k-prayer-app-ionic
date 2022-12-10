import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.scss'],
})
export class PrayerListComponent {
  @Output() modalOpenEvent = new EventEmitter<void>();

  triggerModal() {
    this.modalOpenEvent.emit();
  }
}
