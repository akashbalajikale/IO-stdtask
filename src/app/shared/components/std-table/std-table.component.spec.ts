import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTableComponent } from './std-table.component';

describe('StdTableComponent', () => {
  let component: StdTableComponent;
  let fixture: ComponentFixture<StdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
