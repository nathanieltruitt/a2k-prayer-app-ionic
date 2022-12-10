import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PrayersPage } from './prayers.page';

describe('FolderPage', () => {
  let component: PrayersPage;
  let fixture: ComponentFixture<PrayersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrayersPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
