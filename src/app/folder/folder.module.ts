import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { PrayerListComponent } from './prayer-list/prayer-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage, PrayerListComponent],
})
export class FolderPageModule {}
