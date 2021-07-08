import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubmitoneComponent } from './submitone/submitone.component';
import { SubmittwoComponent } from './submittwo/submittwo.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'submit1',
    component: SubmitoneComponent
  },
  {
    path: 'submit2',
    component: SubmittwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
