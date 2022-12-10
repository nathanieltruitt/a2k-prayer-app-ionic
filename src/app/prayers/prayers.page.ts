import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage implements OnInit {
  public folder!: string;
  public openModal = false;
  public editPrayer = true;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  toggleModal(isEditMode: boolean) {
    this.editPrayer = isEditMode;
    this.openModal = !this.openModal;
  }
}
