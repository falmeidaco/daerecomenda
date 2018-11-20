import { Place } from './place';

export class PlaceService {

  places: Place[];
  filter: any[];

  getPlaces(filter:any): Place[] {
    return this.places;
  }

  constructor() {
    this.places = [
      new Place({
        id: 1,
        name:'Dae UFC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong'],
        location: {
          full_address:'Rua do Chico, 148 Meireles',
          zip:'000000-000',
          city:'Fortaleza',
          state:'Ceará',
          latlng: {
            lat:0,
            lng:0
          }
        },
        metadata: [
          {
            name:'phone',
            content: '88 8888-9999'
          },
          {
            name:'Website',
            contant: 'http://www.site.com'
          },
          {
            name:'E-mail',
            content: 'email@email.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Clínica Trajano Almeida',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico'],
        tags:['público','acessibiliade','ong'],
        location: {
          full_address:'Rua da Silva, 144 Aldeota',
          zip:'000000-000',
          city:'Fortaleza',
          state:'Ceará',
          latlng: {
            lat:0,
            lng:0
          }
        },
        metadata: [
          {
            name:'phone',
            content: '88 00000-9999'
          },
          {
            name:'website',
            contant: 'http://www.website.com'
          },
          {
            name:'email',
            content: 'email@hotmail.com.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Dae UFC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico', 'Psicosocial', 'Psicopedagógico'],
        tags:['público','acessibiliade','plano de saúde','ong'],
        location: {
          full_address:'Rua do Chico, 148 Meireles',
          zip:'000000-000',
          city:'Fortaleza',
          state:'Ceará',
          latlng: {
            lat:0,
            lng:0
          }
        },
        metadata: [
          {
            name:'phone',
            content: '88 8888-9999'
          },
          {
            name:'Website',
            contant: 'http://www.site.com'
          },
          {
            name:'E-mail',
            content: 'email@email.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Clínica Trajano Almeida',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        categories:['Psicológico'],
        tags:['público','acessibiliade','ong'],
        location: {
          full_address:'Rua da Silva, 144 Aldeota',
          zip:'000000-000',
          city:'Fortaleza',
          state:'Ceará',
          latlng: {
            lat:0,
            lng:0
          }
        },
        metadata: [
          {
            name:'phone',
            content: '88 00000-9999'
          },
          {
            name:'website',
            contant: 'http://www.website.com'
          },
          {
            name:'email',
            content: 'email@hotmail.com.com'
          }
        ]
      })
    ];
  }

}