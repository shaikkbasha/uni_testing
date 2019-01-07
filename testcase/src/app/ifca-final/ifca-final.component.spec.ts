import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { IfcaFinalComponent } from './ifca-final.component';

describe('IfcaFinalComponent', () => {
  let component: IfcaFinalComponent;
  let fixture: ComponentFixture<IfcaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfcaFinalComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfcaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
