import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PlacesModalPage } from '../places-modal/places-modal';
import { FiltersModalPage } from '../filters-modal/filters-modal';
import { Place } from '../../providers/place-service/place';
import { PlaceService } from '../../providers/place-service/place-service';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  places: Place[];
  placesServiceInstance: PlaceService;
  filter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    // Filters
    this.filter = {
      search:'',
      category:['Psicossocial'],
      tags:['Gratuito', 'Acessibilidade']
    };
    this.placesServiceInstance = new PlaceService();
    //First load place list with no filter
    this.places = this.placesServiceInstance.getPlaces(this.filter);
  }

  onSearchInput(event: any) {
    this.places = this.placesServiceInstance.getPlaces(this.filter);
  }

  openFiltersModal() {
    let data = { filter: this.filter };
    let modal = this.modalCtrl.create(FiltersModalPage, data);
    modal.present();
    modal.onDidDismiss(data => {  
      console.log(data);
    });
  }

  openPlaceModal(place:Place) {
    let data = { place: place };
    let modal = this.modalCtrl.create(PlacesModalPage, data);
    modal.present();
    modal.onDidDismiss(data => {  
      console.log(data);
    });
  }

  noOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}
