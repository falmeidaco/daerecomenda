import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PlaceCategory, PlaceTag } from '../../providers/place-service/place';

@IonicPage()
@Component({
  selector: 'page-filters-modal',
  templateUrl: 'filters-modal.html',
})
export class FiltersModalPage {

  filter: any;
  categories: any;
  categories_array: PlaceCategory[] = new Array<PlaceCategory>();
  tags: any;
  tags_array: PlaceTag[] = new Array<PlaceTag>();;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.filter = navParams.get('filter');
    this.categories = navParams.get('categories');
    for (let key in this.categories) {
      this.categories_array.push(this.categories[key]);
    }
    this.tags = navParams.get('tags');
    for (let key in this.tags) {
      this.tags_array.push(this.tags[key]);
    }
  }

  isCategoryEnabled(key:any) {
    return this.filter.c.indexOf(key) > -1;
  }

  isTagEnabled(key:any) {
    return this.filter.t.indexOf(key) > -1;
  }

  changeFilter(event:any, type:string, value:string) {
    if (event._value) {
      if (type === 'category') {
        this.filter.c.push(value);
      } else if (type === 'tag') {
        this.filter.t.push(value);
      }
    } else {
      if (type === 'category') {
        this.filter.c = this.filter.c.filter(v => {
          return !(v == value)
        });
      } else if (type === 'tag') {
        this.filter.t = this.filter.t.filter(v => {
          return !(v == value)
        });
      }
    }
  }

  closeModal(){
    this.viewCtrl.dismiss(this.filter);
  }

  ionViewDidLoad() {
  }

}
