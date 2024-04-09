import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Createquotation } from './create-quotation/create-quotation.component'; 


export const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path: 'home', component: Createquotation },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
