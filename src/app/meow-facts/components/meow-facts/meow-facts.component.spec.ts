import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowFactsComponent } from './meow-facts.component';

describe('MeowFactsComponent', () => {
  let component: MeowFactsComponent;
  let fixture: ComponentFixture<MeowFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeowFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeowFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
