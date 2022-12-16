import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PrayersPageRoutingModule } from './prayers-routing.module';

import { prayerRoutingComponents } from './prayers-routing.module';
import { PrayerListComponent } from './prayer-list/prayer-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, PrayersPageRoutingModule],
  declarations: [PrayerListComponent, prayerRoutingComponents],
})
export class PrayersPageModule {}
