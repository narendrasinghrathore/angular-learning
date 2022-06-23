import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'NotfoundComponent' },
  {path: 'post', component: PostComponent},
  {path: 'navbar', component: NavbarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
