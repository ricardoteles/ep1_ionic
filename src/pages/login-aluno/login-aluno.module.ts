import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAlunoPage } from './login-aluno';

@NgModule({
  declarations: [
    LoginAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAlunoPage),
  ],
  exports: [
    LoginAlunoPage
  ]
})
export class LoginAlunoPageModule {}
