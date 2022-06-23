import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { PostComponent } from './post/post.component';
import { PractceDirective } from './practce.directive';
import { GithubFollowersComponent } from './github-followers/github-followers.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PractceDirective,
    GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'notfound', component: NotfoundComponent },
      {path: 'post', component: PostComponent},
      {path: 'navbar', component: NavbarComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
 
})
export class AppModule {
 }
