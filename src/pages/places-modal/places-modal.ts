import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

//https://medium.com/@programadriano/ionic-3-criando-uma-modal-e-recebendo-os-seus-dados-em-uma-p%C3%A1gina-30ba5b80b261

/**
 * Generated class for the PlacesModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places-modal',
  templateUrl: 'places-modal.html',
})
export class PlacesModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesModalPage');
  }

}
