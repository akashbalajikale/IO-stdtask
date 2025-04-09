import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFormComponent } from './std-form.component';

describe('StdFormComponent', () => {
  let component: StdFormComponent;
  let fixture: ComponentFixture<StdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
