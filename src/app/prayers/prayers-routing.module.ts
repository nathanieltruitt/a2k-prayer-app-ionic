import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrayerDetailPage } from './prayer-detail/prayer-detail.page';
import { PrayersPage } from './prayers.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersPage,
    children: [
      {
        path: 'detail/:id',
        component: PrayerDetailPage,
      },
      {
        path: 'detail/new',
        component: PrayerDetailPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersPageRoutingModule {}
export const prayerRoutingComponents = [PrayerDetailPage, PrayersPage];
