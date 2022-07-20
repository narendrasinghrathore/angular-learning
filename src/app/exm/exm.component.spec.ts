import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmComponent } from './exm.component';

describe('ExmComponent', () => {
  let component: ExmComponent;
  let fixture: ComponentFixture<ExmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
