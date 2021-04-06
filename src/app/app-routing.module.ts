import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ReadingsComponent } from './readings/readings.component';
import { ResumeComponent } from './resume/resume.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'resume',component:ResumeComponent},
  {path:'blog',component:BlogComponent},
  {path:'art',component:ArtComponent},
  {path:'readings',component:ReadingsComponent},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
