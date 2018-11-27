import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AboutModalPage } from '../about-modal/about-modal'

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  openAboutModal() {
    let modal = this.modalCtrl.create(AboutModalPage);
    modal.present();
    modal.onDidDismiss(data => {
    });
  }
  
  closeAboutModal() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
