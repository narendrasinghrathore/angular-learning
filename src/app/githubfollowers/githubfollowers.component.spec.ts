import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowersComponent } from './githubfollowers.component';

describe('GithubfollowersComponent', () => {
  let component: GithubfollowersComponent;
  let fixture: ComponentFixture<GithubfollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubfollowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
