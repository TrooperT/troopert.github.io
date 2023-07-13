import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "@views/home/home.component";
import { BlogComponent } from "@views/blog/blog.component";
const routes: Routes = [
    { path: 'home', pathMatch:'full', component: HomeComponent },
    { path: 'blog',
    children:[
      { path: '', pathMatch: 'full', component: BlogComponent}, //, canActivate: [AuthGuard] },
      { path: 'post/:postid', component: BlogComponent}, //, canActivate: [AuthGuard] },
      // { path: 'post/:year/:month:/:postid', component: BlogComponent}, //, canActivate: [AuthGuard] },
    ],
  },    { path:'**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
