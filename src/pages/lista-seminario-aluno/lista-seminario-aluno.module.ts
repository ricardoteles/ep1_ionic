import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSeminarioAlunoPage } from './lista-seminario-aluno';

@NgModule({
  declarations: [
    ListaSeminarioAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSeminarioAlunoPage),
  ],
  exports: [
    ListaSeminarioAlunoPage
  ]
})
export class ListaSeminarioAlunoPageModule {}
