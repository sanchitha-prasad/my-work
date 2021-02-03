import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizhubComponent } from './quizhub.component';

describe('QuizhubComponent', () => {
  let component: QuizhubComponent;
  let fixture: ComponentFixture<QuizhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
