import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  period: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
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

  switchTab(tabIndex: number, origin:string) {
    this.storage.set('selectedTabOrigin', origin).then(() =>{
      this.navCtrl.parent.select(tabIndex);
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
