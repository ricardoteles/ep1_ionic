import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaSeminarioAlunoPage } from '../lista-seminario-aluno/lista-seminario-aluno';
import { CadastroAlunoPage } from '../cadastro-aluno/cadastro-aluno';

/**
 * Generated class for the LoginAlunoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-aluno',
  templateUrl: 'login-aluno.html',
})
export class LoginAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams.get('val'));
  }


  vaiParaListaSeminarioAluno(){
  	this.navCtrl.push(ListaSeminarioAlunoPage, {
  		val: 'ListaSeminarioAlunoPage: Ricardo Oliveira Teles'
  	})
  }

	vaiParaCadastroAluno(){
  	this.navCtrl.push(CadastroAlunoPage, {
  		val: 'CadastroAlunoPage: Ricardo Oliveira Teles'
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginAlunoPage');
  }

}
