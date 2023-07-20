import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';

// yaha pr hamare sba k sab route ban gyr hain
// means 5 components k liye
const routes: Routes = [
  {
   component:AddRestoComponent,
   path:'add' 
  },
  {
    component:ListRestoComponent,
    path:'list' 
   },
   {
    component:LoginComponent,
    path:'login' 
   },
   {
    component:RegistrationComponent,
    path:'register' 
   },
   {
    component:UpdateRestoComponent,
    path:'update/:id' 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
