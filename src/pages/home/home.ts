import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  period: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Set day salut
    let time_hour:number = new Date().getHours();
    if (time_hour >= 0 && time_hour < 12) {
      this.period = 'bom dia';
    } else if (time_hour >= 12 && time_hour < 18) {
      this.period = 'boa tarde';
    } else {
      this.period = 'boa noite';
    }
  }

  switchTab(tabIndex: number, origin:any) {
    console.log('e1');
    this.navCtrl.push(TabsPage, {
      'origin': origin
    });
    this.navCtrl.parent.teste();
    this.navCtrl.parent.select(tabIndex);
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
  }

}
