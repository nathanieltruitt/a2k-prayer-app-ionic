import { Component, Input, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { Prayer } from 'src/app/core/models/prayer.model';

@Component({
  selector: 'app-prayer-modal',
  templateUrl: './prayer-modal.component.html',
  styleUrls: ['./prayer-modal.component.scss'],
})
export class PrayerModalComponent {
  @Input() isEditMode!: boolean;
  @Input() prayer!: Prayer;
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
