import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, URLSearchParams } from '@angular/http';

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
  cadastro: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public formBuilder: FormBuilder) {
 		this.cadastro = this.formBuilder.group({
 			nome:['', Validators.required],
 			nusp:['', Validators.required],
 			senha:['', Validators.required],
 			cnfsenha:['', Validators.required],
 		});

 		console.log(navParams.get('val'));
  }

  postRequest() {
		let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('nusp', this.cadastro.value.nusp);
    urlSearchParams.append('pass', this.cadastro.value.senha);
    urlSearchParams.append('name', this.cadastro.value.nome);
    let body = urlSearchParams.toString()

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    this.http
        .post("http://207.38.82.139:8001/student/add", body, { headers: headers })
        .map(response => response.json()).subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAlunoPage');
  }

}
