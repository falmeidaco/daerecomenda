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

  metadataAction(type:string, value:string) {
    if (type === 'phone') {
      window.open('tel:' + value);
    } else if (type === 'map') {
      window.open('https://maps.google.com/?q=' + value);
    } else if (type === 'email') {
      window.open('mailto:' + value);
    } else if (type === 'website') {
      window.open(value);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
