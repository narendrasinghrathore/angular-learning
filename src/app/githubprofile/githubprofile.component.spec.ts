import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofileComponent } from './githubprofile.component';

describe('GithubprofileComponent', () => {
  let component: GithubprofileComponent;
  let fixture: ComponentFixture<GithubprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
