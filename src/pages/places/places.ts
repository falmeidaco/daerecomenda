import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PlacesModalPage } from '../places-modal/places-modal';
import { Place } from '../../providers/place-service/place';
import { PlaceService } from '../../providers/place-service/place-service';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  places: Place[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.places = new PlaceService().getPlaces(null);
  }

  logIn() {
    let profileModal = this.modalCtrl.create(PlacesModalPage);
    profileModal.present();
    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }

  noOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}
