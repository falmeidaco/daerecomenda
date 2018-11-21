import { Place, PlaceCategory, PlaceTag } from './place';

export class PlaceService {

  places: Place[];
  filter: any[];
  categories: any;
  tags: any;

  getPlaces(filter = {}): Place[] {
    let places = this.places;
    if (typeof filter === 'object') {
      if (filter.hasOwnProperty('search')) {
        if (filter['search'].trim() !== '') {
          places = places.filter((value: Place) => {
            return value.name.toLowerCase().search(filter['search'].toLowerCase()) > -1 || value.description.toLowerCase().search(filter['search'].toLowerCase()) > -1;
          });
        }
      }
    }
    return places;
  }

  constructor() {

    //Categories
    this.categories = {
      psicologico: new PlaceCategory('psicologico', 'Psicológico'),
      psicopedagogico: new PlaceCategory('psicopedagogico', 'Psicopedagógico'),
      psicossocial: new PlaceCategory('psicossocial', 'Psicossocial')
    }

    this.tags = {
      gratuito: new PlaceTag('gratuito', 'Serviço gratuito'),
      pago: new PlaceTag('pago', 'Serviço pago'),
      ligacaogratuita: new PlaceTag('ligacaogratuita', 'Número 0800'),
      acessibilidade: new PlaceTag('acessibilidade', 'Possui acessibilidade'),
      planohapvida: new PlaceTag('planohapvida', 'Plano Hapvida'),
      planounimed: new PlaceTag('planounimed', 'Plano Unimed'),
      aceitacartao: new PlaceTag('aceitacartao', 'Aceita cartão de crédito'),
      estacionamento: new PlaceTag('estacionamento', 'Possui estacionamento')
    }

    this.places = [
      new Place({
        id: 1,
        name:'Divisão de Atendimento ao Aluno UFC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        image: 'assets/imgs/default-place-image.png',
        categories:[this.categories.psicologico, this.categories.psicopedagogico],
        tags:[this.tags.gratuito, this.tags.ligacaogratuita, this.tags.estacionamento, this.tags.acessibilidade],
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
            value: '88 8888-9999'
          },
          {
            name:'phone',
            value: '85 77777-0001'
          },
          {
            name:'website',
            value: 'http://www.site.com'
          },
          {
            name:'email',
            value: 'email@email.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Clínica Trajano Almeida',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit turpis venenatis neque rutrum, luctus luctus lectus finibus. In vitae sodales nisi, vel pretium mi.',
        image: 'assets/imgs/default-place-image.png',
        categories:[this.categories.psicossocial],
        tags:[this.tags.pago, this.tags.planounimed, this.tags.aceitacartao],
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
            value: '88 00000-9999'
          },
          {
            name:'website',
            value: 'http://www.website.com'
          },
          {
            name:'email',
            value: 'email@hotmail.com.com'
          }
        ]
      })
    ];
  }
}
