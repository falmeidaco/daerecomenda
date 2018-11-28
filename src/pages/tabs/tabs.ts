import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PlacesPage } from '../places/places';
import { AboutPage } from '../about/about';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  data:any;

  tab1Root = HomePage;
  tab2Root = PlacesPage;
  tab3Root = AboutPage;

  constructor(public navCtrl: NavController, public navParams:NavParams) {
  }

  tabSelectEvent(tab:string) {
    console.log('e2');
    this.data = {'data': this.navParams.get('origin')};
  }

  teste() {
    console.log('hi');
  }
}
