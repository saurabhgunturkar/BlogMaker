import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { ViewBlogsComponent } from './pages/view-blogs/view-blogs.component';

const routes: Routes = [
  {path: '',   redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component:HomeComponent  },
  {path:'create', component:CreateBlogComponent},
  {path:'view/:blogindex', component:ViewBlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
