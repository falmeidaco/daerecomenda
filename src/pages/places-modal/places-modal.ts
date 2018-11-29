import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Place } from '../../providers/place-service/place';

@IonicPage()
@Component({
  selector: 'page-places-modal',
  templateUrl: 'places-modal.html',
})
export class PlacesModalPage {
  
  filters: any;
  place: Place;
  categories: any;
  tags: any;
  phones: any[] = new Array<any>();
  websites: any[] = new Array<any>();
  emails: any[] = new Array<any>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private toastCtrl: ToastController) {
    this.filters = navParams.get('filters');
    this.place = navParams.get('place');
    this.categories = navParams.get('categories');
    this.tags = navParams.get('tags');
    for (let i = 0; i < this.place.metadata.length; i = i + 1) {
      if (this.place.metadata[i].name === 'phone')  {
        this.phones.push(this.place.metadata[i]);
      } else if (this.place.metadata[i].name === 'email') {
        this.emails.push(this.place.metadata[i]);
      } else if (this.place.metadata[i].name === 'website') {
        this.websites.push(this.place.metadata[i]);
      }
    }
  }

  toggleFilter(event:any, filter_type:string, filter:any) {
    let toast_action;
    if (this.filters[filter_type].indexOf(filter.name) > -1) {
      this.filters[filter_type] = this.filters[filter_type].filter(item => {
        return (filter.name === item) ? false : true;
      });
      toast_action = 'desabilitado';
    } else {
      this.filters[filter_type].push(filter.name);
      toast_action = 'habilitado';
    }
    let toast = this.toastCtrl.create({
      message: `Filtro "${filter.label}" ${toast_action}`,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  isSelectedFilter(type:string, name:string) {
    let t = (type === 'category') ? 'c' : 't';
    return (this.filters[t].indexOf(name) > -1) ? 'ion-badge-list badge-selected' : 'ion-badge-list';
  }

  metadataAction(type:string, value:string) {
    if (type === 'phone') {
      window.open('tel:' + value.replace(/[^0-9\.]+/g, ''));
    } else if (type === 'map') {
      window.open('https://maps.google.com/?q=' + value);
    } else if (type === 'email') {
      window.open('mailto:' + value);
    } else if (type === 'website') {
      window.open(value);
    }
  }

  closeModal(){
    this.viewCtrl.dismiss(this.filters);
  }

  ionViewDidLoad() {
  }

}
