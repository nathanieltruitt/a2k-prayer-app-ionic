import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PrayersPageRoutingModule } from './prayers-routing.module';

import { PrayersPage } from './prayers.page';
import { PrayerListComponent } from './prayer-list/prayer-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, PrayersPageRoutingModule],
  declarations: [PrayersPage, PrayerListComponent],
})
export class PrayersPageModule {}
