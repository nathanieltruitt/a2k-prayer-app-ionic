import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PrayerModalComponent } from './prayer-modal/prayer-modal.component';

@NgModule({
  declarations: [PrayerModalComponent],
  imports: [IonicModule],
  exports: [IonicModule, PrayerModalComponent],
})
export class SharedModule {}
