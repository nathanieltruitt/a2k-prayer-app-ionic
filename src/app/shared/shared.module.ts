import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PrayerModalComponent } from './prayer-modal/prayer-modal.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [PrayerModalComponent, CommentBoxComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [IonicModule, PrayerModalComponent],
})
export class SharedModule {}
