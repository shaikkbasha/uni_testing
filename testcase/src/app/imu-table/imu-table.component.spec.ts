import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImuTableComponent } from './imu-table.component';

describe('ImuTableComponent', () => {
  let component: ImuTableComponent;
  let fixture: ComponentFixture<ImuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
