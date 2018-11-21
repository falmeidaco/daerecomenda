import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FiltersModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filters-modal',
  templateUrl: 'filters-modal.html',
})
export class FiltersModalPage {

  filter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.filter = navParams.get('filte');
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
