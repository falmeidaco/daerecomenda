import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PlacesModalPage } from '../places-modal/places-modal';
import { FiltersModalPage } from '../filters-modal/filters-modal';
import { Place } from '../../providers/place-service/place';
import { PlaceService } from '../../providers/place-service/place-service';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  map: any;
  map_ready:boolean;
  mode_list_class: string;
  mode_map_class: string;
  places: Place[];
  placesServiceInstance: PlaceService;
  filter: any;
  view_mode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, private geolocation: Geolocation) {
    this.view_mode = 'list';
    this.mode_list_class = 'list-show';
    this.mode_map_class = 'map-hide';
    this.map_ready = false;
    this.placesServiceInstance = new PlaceService();
    // Filters
    this.filter = {
      search:'',
      c:[
        this.placesServiceInstance.categories.psicologico.name
      ],
      t:[]
    };
    //First load place list with no filter
    this.places = this.placesServiceInstance.getPlaces(this.filter);
  }

  viewModeChange(event: any):void {
    if (this.view_mode === 'map') {
      this.mode_map_class = 'map-show';
      this.mode_list_class = 'list-hide';
      
      if (this.view_mode === 'map') {
        if (!this.map_ready) {
          /*
          const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
          const mapOptions = {
            zoom: 18,
            center: position,
            disableDefaultUI: true
          }
          this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
          const marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: 'Minha posição',
            animation: google.maps.Animation.DROP
          });
          */
          this.geolocation.getCurrentPosition()
          .then((resp) => {
            const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            const mapOptions = {
              zoom: 18,
              center: position
            }
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            const marker = new google.maps.Marker({
              position: position,
              map: this.map
            });
          }).catch((error) => {
            console.log('Erro ao recuperar sua posição', error);
          });
          this.map_ready = true;
        }
      }

    } else {
      this.mode_map_class = 'map-hide';
      this.mode_list_class = 'list-show';
    }
  }

  onSearchInput(event: any) {
    this.places = this.placesServiceInstance.getPlaces(this.filter);
  }

  openFiltersModal() {
    let data = { 
      filter: this.filter, 
      categories: this.placesServiceInstance.categories,
      tags: this.placesServiceInstance.tags
    };
    let modal = this.modalCtrl.create(FiltersModalPage, data);
    modal.present();
    modal.onDidDismiss(data => {
      this.places = this.placesServiceInstance.getPlaces(data);
    });
  }

  openPlaceModal(place:Place) {
    let data = { 
      place: place,
      categories: this.placesServiceInstance.categories,
      tags: this.placesServiceInstance.tags
    };
    let modal = this.modalCtrl.create(PlacesModalPage, data);
    modal.present();
    modal.onDidDismiss(data => {  
    });
  }

  noOnInit() {
  }

  ionViewDidLoad() {
    
  }

}
