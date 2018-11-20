import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Place } from '../../providers/place-service/place';

//https://medium.com/@programadriano/ionic-3-criando-uma-modal-e-recebendo-os-seus-dados-em-uma-p%C3%A1gina-30ba5b80b261

@IonicPage()
@Component({
  selector: 'page-places-modal',
  templateUrl: 'places-modal.html',
})
export class PlacesModalPage {

  place:Place;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.place = navParams.get('place');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesModalPage');
  }

}
