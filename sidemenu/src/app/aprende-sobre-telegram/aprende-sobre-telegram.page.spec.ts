import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprendeSobreTelegramPage } from './aprende-sobre-telegram.page';

describe('AprendeSobreTelegramPage', () => {
  let component: AprendeSobreTelegramPage;
  let fixture: ComponentFixture<AprendeSobreTelegramPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendeSobreTelegramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprendeSobreTelegramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
