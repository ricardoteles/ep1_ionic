import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSeminarioProfessorPage } from './lista-seminario-professor';

@NgModule({
  declarations: [
    ListaSeminarioProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSeminarioProfessorPage),
  ],
  exports: [
    ListaSeminarioProfessorPage
  ]
})
export class ListaSeminarioProfessorPageModule {}
