import { Place } from './place';

export class PlaceService {

  places: Place[];

  getPlaces(): Place[] {
    return this.places;
  }

  constructor() {
    this.places = new Array<Place>();
    this.places.push(
      new Place({
        name:'Dae UFC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong']
      })
    );
    this.places.push(
      new Place({
        name:'Clínica Trajano Almeida',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong']
      })
    );

  }

}