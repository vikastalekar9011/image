import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFarmerComponent } from './list-farmer.component';

describe('ListFarmerComponent', () => {
  let component: ListFarmerComponent;
  let fixture: ComponentFixture<ListFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
