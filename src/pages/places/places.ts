import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController } from 'ionic-angular';
import { PlacesModalPage } from '../places-modal/places-modal';
import { FiltersModalPage } from '../filters-modal/filters-modal';
import { Place } from '../../providers/place-service/place';
import { PlaceService } from '../../providers/place-service/place-service';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})

export class PlacesPage {
  filter: any;
  placesServiceInstance: PlaceService;
  places: Place[];
  view_mode: string;
  map: any;
  map_ready:boolean;
  map_markers: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public loadingCtrl: LoadingController, private geolocation:Geolocation) {
    this.placesServiceInstance = new PlaceService();
    this.filter = {
      search:'',
      c:[
        this.placesServiceInstance.categories.psicologico.name
      ],
      t:[]
    };
    this.places = this.placesServiceInstance.getPlaces(this.filter);
    this.map_markers = new Array<any>();
    this.view_mode = 'vew-mode-list';
    this.map_ready = false;
  }

  viewModeChange(event: any):void {
    if (this.view_mode === 'view-mode-map') {
      if (!this.map_ready) {
        let loading = this.loadingCtrl.create({
          content: 'Carregando mapa...'
        });
        loading.present();
        this.geolocation.getCurrentPosition()
        .then((resp) => {
          let map_center = [resp.coords.latitude, resp.coords.longitude]            
          this.map = leaflet.map('map', {
            center: map_center,
            zoom: 10
          });
          leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'DAE Recomenda - UFC SMD',
            maxzoom: 18,
            id: 'daerecomenda.places',
            accessToken: 'pk.eyJ1IjoiZmFsbWVpZGFjbyIsImEiOiJjam94Z3VueTIwdWlmM3ZvM25xMjh3enlnIn0.rr08D5uKKc-X9aJwxvviQQ'
          }).addTo(this.map);
          for (let i = 0; i < this.places.length; i = i + 1) {
            if (this.places[i].location.latlng !== null) {
              let marker = leaflet.marker(this.places[i].location.latlng);
              this.map.addLayer(marker);
              marker.bindPopup(`
                <div class="marker-popup-title">${this.places[i].name}</div>
                <div class="marker-popup-content">
                  <a href="${i}">Ver detalhes do local</a>
                </div>
              `);
              this.map_markers.push(marker);
            }
          }
          loading.dismiss();
        }).catch((error) => {
          loading.dismiss();
          console.log('Erro ao recuperar sua posição', error);
        });
        this.map_ready = true;
      }
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
      filters: this.filter,
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
