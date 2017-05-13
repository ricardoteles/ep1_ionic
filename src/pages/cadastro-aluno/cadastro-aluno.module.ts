import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroAlunoPage } from './cadastro-aluno';

@NgModule({
  declarations: [
    CadastroAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroAlunoPage),
  ],
  exports: [
    CadastroAlunoPage
  ]
})
export class CadastroAlunoPageModule {}
