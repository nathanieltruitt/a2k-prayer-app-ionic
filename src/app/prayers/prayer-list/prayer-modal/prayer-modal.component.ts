import { Component, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prayer-modal',
  templateUrl: './prayer-modal.component.html',
  styleUrls: ['./prayer-modal.component.scss'],
})
export class PrayerModalComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @ViewChild(IonModal) modal!: IonModal;
  isOpen = true;
  message = 'example modal';
  name!: string;

  setOpen(isOpen: boolean) {
    this.isOpen = isOpen;
    this.modal.dismiss();
    this.closeEvent.emit();
  }
}
