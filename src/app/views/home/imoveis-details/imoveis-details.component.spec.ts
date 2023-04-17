import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisDetailsComponent } from './imoveis-details.component';

describe('ImoveisDetailsComponent', () => {
  let component: ImoveisDetailsComponent;
  let fixture: ComponentFixture<ImoveisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImoveisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
