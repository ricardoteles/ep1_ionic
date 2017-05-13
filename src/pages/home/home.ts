import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginAlunoPage } from '../login-aluno/login-aluno';
import { LoginProfessorPage } from '../login-professor/login-professor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  vaiParaLoginAluno(){
  	this.navCtrl.push(LoginAlunoPage, {
  		val: 'LoginAluno: Ricardo Oliveira Teles'
  	})
  }

	vaiParaLoginProfessor(){
  	this.navCtrl.push(LoginProfessorPage, {
  		val: 'LoginProfessor: Ricardo Oliveira Teles'
  	})
  }

}
