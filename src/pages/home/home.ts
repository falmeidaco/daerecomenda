import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  period: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    //Set day saudation
    let time_hour:number = new Date().getHours();
    if (time_hour > 0 && time_hour < 12) {
      this.period = 'bom dia';
    } else if (time_hour > 12 && time_hour < 18) {
      this.period = 'boa tarde';
    } else {
      this.period = 'boa noite';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
