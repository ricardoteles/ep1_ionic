import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginProfessorPage } from './login-professor';

@NgModule({
  declarations: [
    LoginProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginProfessorPage),
  ],
  exports: [
    LoginProfessorPage
  ]
})
export class LoginProfessorPageModule {}
