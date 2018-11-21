import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PlaceService } from '../../providers/place-service/place-service';
import { Place, PlaceCategory, PlaceTag } from '../../providers/place-service/place';

@IonicPage()
@Component({
  selector: 'page-filters-modal',
  templateUrl: 'filters-modal.html',
})
export class FiltersModalPage {

  filter: any;
  categories: PlaceCategory[];
  tags: PlaceTag[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.filter = navParams.get('filter');
    this.categories = navParams.get('PSInstance').categories;
    console.log(this.filter, this.categories);
  }

  changeFilter(category: string, value: string, remove:boolean) {
    console.log(category, value, remove);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersModalPage');
  }

}
