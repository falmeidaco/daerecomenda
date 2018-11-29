import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController } from 'ionic-angular';
import { PlacesModalPage } from '../places-modal/places-modal';
import { FiltersModalPage } from '../filters-modal/filters-modal';
import { Place } from '../../providers/place-service/place';
import { PlaceService } from '../../providers/place-service/place-service';
import { Geolocation } from '@ionic-native/geolocation';
import geolib from 'geolib';
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
  map_center_default: any;
  user_location: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public loadingCtrl: LoadingController, private geolocation:Geolocation) {
    this.user_location = null;
    this.map_center_default = [-3.798484, -38.534546];
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
    this.view_mode = 'view-mode-list';
    this.map_ready = false;
  }

  viewModeChange(event: any):void {
    if (this.view_mode === 'view-mode-map') {
      if (!this.map_ready) {
        this.buildMap();
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
      this.places = this.placesServiceInstance.getPlaces(data);
    });
  }

  getPlaceDistance(place:Place) {
    if (this.user_location !== null && place.location.latlng !== null) {
      let distance = geolib.getDistance(
        {'latitude':this.user_location[0], 'longitude':this.user_location[1]},
        {'latitude':place.location.latlng[0], 'longitude':place.location.latlng[1]}
      );
      if (distance < 1000) {
        return `${distance} metros de distância`;
      } else {
        return `${(distance/1000).toFixed(2)} km de distância`;
      }
    } else {
      return 'Informação não disponível'
    }
  }

  buildMap() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando mapa...'
    });
    loading.present();
    let map_center = (this.user_location !== null) ? this.user_location : this.map_center_default;      
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
    if (this.user_location !== null) {
      let user_location_icon = leaflet.icon({
          iconUrl: 'assets/imgs/icon-pin-user-location-2.png',
          iconSize: [38, 38],
          iconAnchor: [17, 38],
          popupAnchor: [0, -30]
      });
      let user_location_market = leaflet.marker(this.user_location, {'icon': user_location_icon})
        .bindPopup('<p>Esta é sua localização</p>')
        .addTo(this.map);
    }
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
    setTimeout(() => {
      this.map.invalidateSize();
      loading.dismiss();
    }, 400);
  }

  getUserCoordinates() {
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.user_location = [resp.coords.latitude, resp.coords.longitude];
    }).catch((error) => {
      this.user_location = null;
    });
  }

  noOnInit() {
  }

  ionViewDidLoad() {
    this.getUserCoordinates();
  }

}
