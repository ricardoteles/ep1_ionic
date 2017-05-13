import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaSeminarioProfessorPage } from '../lista-seminario-professor/lista-seminario-professor';
import { CadastroProfessorPage } from '../cadastro-professor/cadastro-professor';

/**
 * Generated class for the LoginProfessorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-professor',
  templateUrl: 'login-professor.html',
})
export class LoginProfessorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams.get('val'));
  }

  vaiParaListaSeminarioProfessor(){
  	this.navCtrl.push(ListaSeminarioProfessorPage, {
  		val: 'ListaSeminarioProfessorPage: Ricardo Oliveira Teles'
  	})
  }

	vaiParaCadastroProfessor(){
  	this.navCtrl.push(CadastroProfessorPage, {
  		val: 'CadastroProfessorPage: Ricardo Oliveira Teles'
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginProfessorPage');
  }

}
