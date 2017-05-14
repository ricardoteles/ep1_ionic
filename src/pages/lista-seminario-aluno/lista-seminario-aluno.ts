import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Http } from '@angular/http';

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
  public items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	console.log(navParams.get('val'));
  }

  itemClicked(event,itemData){
    console.log("item clicked");
    // console.log(event);
    console.log(itemData);
  }

  ionViewDidLoad(){
  
  	this.http.get('http://207.38.82.139:8001/seminar').map(res => res.json()).subscribe(data => {
	  		console.log(data);
        	this.items = data['data'];
        	console.log(this.items[0]);
        	console.log(typeof(this.items));
        }, error=>{
            console.log(error);// Error getting the data
  	});

  }

}
