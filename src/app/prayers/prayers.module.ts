import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './prayers-routing.module';

import { PrayersPage } from './prayers.page';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { PrayerModalComponent } from './prayer-list/prayer-modal/prayer-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [PrayersPage, PrayerListComponent, PrayerModalComponent],
})
export class PrayersPageModule {}
