import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
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

  isSelectedFilter(type:string, name:string) {
    let t = (type === 'category') ? 'c' : 't';
    return (this.filters[t].indexOf(name) > -1) ? 'ion-badge-list badge-selected' : 'ion-badge-list';
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
  }

}
