import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaSeminarioAlunoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-seminario-aluno',
  templateUrl: 'lista-seminario-aluno.html',
})
export class ListaSeminarioAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaSeminarioAlunoPage');
  }

}
