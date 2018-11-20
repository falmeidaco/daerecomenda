import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesPage } from './places';
import { Place } from '../../providers/place-service/place';

@NgModule({
  declarations: [
    PlacesPage,
    Place
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
  ]
})
export class PlacesPageModule {}
