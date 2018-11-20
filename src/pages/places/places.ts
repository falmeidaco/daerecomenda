import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../providers/place-service/place'


/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  places: Place[] = new Array<Place>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let p;
    p = new Place({
        name:'Dae UFC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong']
      });
    p.setCategories(['Psicológico', 'Psicopedagógico', 'Psicossocial']);
    p.setTags(['gratuito', 'acessibilidade', 'ong'])
    this.places.push(p);
    
    p = new Place({
        name:'Clínica Trajano Almeida',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong']
      });
    p.setCategories(['Psicossocial']);
    p.setTags(['particular'])
    this.places.push(p);
  }

  noOnInit() {
    
  }

  ionViewDidLoad() {
    console.log(this.places);
    console.log('ionViewDidLoad PlacesPage');
  }

}
