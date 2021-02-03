import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsebarComponent } from './usebar.component';

describe('UsebarComponent', () => {
  let component: UsebarComponent;
  let fixture: ComponentFixture<UsebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
