import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { Prayer } from 'src/app/core/models/prayer.model';
import PrayerActions from 'src/app/prayers/state/prayers.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';

@Component({
  selector: 'app-prayer-modal',
  templateUrl: './prayer-modal.component.html',
  styleUrls: ['./prayer-modal.component.scss'],
})
export class PrayerModalComponent implements OnInit {
  @Input() isEditMode!: boolean;
  @Input() prayer!: Prayer;
  @Output() closeEvent = new EventEmitter<void>();
  @ViewChild(IonModal) modal!: IonModal;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}
  isOpen = true;
  message = 'example modal';
  name!: string;
  prayerForm = this.formBuilder.group({
    title: ['', Validators.required],
    prayerFor: ['', Validators.required],
    detail: ['', Validators.required],
  });

  ngOnInit(): void {
    // populate form if prayer exists
    if (this.prayer) {
      this.prayerForm.setValue({
        title: this.prayer.title,
        prayerFor: this.prayer.prayerFor,
        detail: this.prayer.detail,
      });
    }
  }

  setOpen(isOpen: boolean) {
    this.isOpen = isOpen;
    this.modal.dismiss();
    this.closeEvent.emit();
  }

  onSavePrayer() {
    // TODO: need to add author functionality
    // return if prayer form is invalid
    if (!this.prayerForm.valid) return;

    // grab values and check if not null
    const { detail, prayerFor, title } = this.prayerForm.value;
    if (!(detail && prayerFor && title)) return;

    // check to see if we are modifying a prayer
    if (this.prayer) {
      this.store.dispatch(
        PrayerActions.updatePrayer({
          id: this.prayer.id,
          author: 'Nathan Truitt',
          prayerFor: prayerFor,
          title: title,
          detail: detail,
        })
      );
    } else {
      // dispatch new prayer if not existing
      this.store.dispatch(
        PrayerActions.createPrayer({
          author: 'Nathan Truitt',
          detail: detail,
          prayerFor: prayerFor,
          title: title,
        })
      );
    }

    // close modal on save
    this.setOpen(false);
  }
}
