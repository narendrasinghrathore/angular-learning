import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',component: HomeComponent ,
      },
      {
        path: 'followers/:id',component: GithubprofileComponent,
      },
      {
        path: 'followers',component: GithubfollowersComponent ,
      },
      {
        path: 'posts',component: PostComponent 
      },
      {
        path: '**',component: NotfoundComponent ,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
 
})
export class AppModule {
 }
