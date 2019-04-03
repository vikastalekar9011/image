import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkModalComponent } from './milk-modal.component';

describe('MilkModalComponent', () => {
  let component: MilkModalComponent;
  let fixture: ComponentFixture<MilkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
