import { Component, Input, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { Prayer } from 'src/app/core/models/prayer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prayer-modal',
  templateUrl: './prayer-modal.component.html',
  styleUrls: ['./prayer-modal.component.scss'],
})
export class PrayerModalComponent {
  @Input() isEditMode!: boolean;
  @Input() prayer!: Prayer;
  @ViewChild(IonModal) modal!: IonModal;
  constructor(private router: Router, private route: ActivatedRoute) {}
  isOpen = true;
  message = 'example modal';
  name!: string;

  setOpen(isOpen: boolean) {
    this.isOpen = isOpen;
    this.modal.dismiss();
    this.router.navigate(['/prayers'], { relativeTo: this.route });
  }
}
