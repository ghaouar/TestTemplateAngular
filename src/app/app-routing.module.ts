import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentModule } from './student/student.module';


const routes: Routes = [
  { path:'',  component: LoginComponent}, 
  { path: 'home', component: HomeComponent,
          children: [
             { path: 'student', loadChildren: './student/student.module#StudentModule'}  
          ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
