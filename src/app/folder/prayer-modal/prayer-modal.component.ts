import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-prayer-modal',
  templateUrl: './prayer-modal.component.html',
  styleUrls: ['./prayer-modal.component.scss'],
})
export class PrayerModalComponent {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'example modal';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}`;
    }
  }
}
