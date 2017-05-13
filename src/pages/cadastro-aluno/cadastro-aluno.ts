import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroAlunoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class CadastroAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 	console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAlunoPage');
  }

}
