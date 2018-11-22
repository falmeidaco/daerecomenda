import { Place, PlaceCategory, PlaceTag } from './place';

export class PlaceService {

  places: Place[];
  filter: any[];
  categories: any;
  tags: any;

  getPlaces(filter = {}): Place[] {
    console.log(filter['c']);
    let places = this.places;
    // Category filter
    if (filter['c'].length > 0) {
      places = places.filter((value: Place) => {
        for (let i = 0; i < filter['c'].length; i = i + 1) {
          if (value.categories.indexOf(filter['c'][i]) > -1) {
            return true;
          }
        }
        return false;
      });
    }
    // Tag filter
    if (filter['t'].length > 0) {
      places = places.filter((value: Place) => {
        for (let i = 0; i < filter['t'].length; i = i + 1) {
          if (value.tags.indexOf(filter['t'][i]) > -1) {
            return true;
          }
        }
        return false;
      });
    }
    // Search term filter
    if (filter['search'].trim() !== '') {
      places = places.filter((value: Place) => {
        return value.name.toLowerCase().search(filter['search'].toLowerCase()) > -1 || value.description.toLowerCase().search(filter['search'].toLowerCase()) > -1;
      });
    }
    return places;
  }

  constructor() {
    // Categories registry
    this.categories = {
      psicologico: new PlaceCategory('psicologico', 'Psicológico'),
      psicopedagogico: new PlaceCategory('psicopedagogico', 'Psicopedagógico'),
      psicossocial: new PlaceCategory('psicossocial', 'Psicossocial')
    }
    // TAGs registry
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
    // Places registry
    this.places = [
      /* Places */
      new Place({
        id: 1,
        name:'Nami/Unifor',
        description:'O Serviço de Psicologia Aplicada presta atendimentos na área de psicologia em suas diversas subespecialidades, como plantão psicológico, psicoterapia com atendimentos individuais, em grupo e familiares. O encaminhamento é feito a partir de regulação da Secretaria Municipal de Saúde de Fortaleza por meio dos Centros de Atenção Psicossocial (CAPS). Nesse setor há também a possibilidade de atendimentos privados por meio de consultas particulares ou por alguns convênios de saúde.',
        image: 'assets/imgs/unifor.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.pago.name, 
          this.tags.ligacaogratuita.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name, 
          this.tags.aceitacartao.name, 
          this.tags.planounimed.name,
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'R. Des. Floriano Benevides Magalhães, 221 Edson Queiroz',
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
            value: '85 3477-3643'
          },
          {
            name:'phone',
            value: '85 3477-3644'
          },
          {
            name:'website',
            value: 'https://www.unifor.br/nami'
          },
          {
            name:'email',
            value: 'triagemspa@unifor.br'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'FIC',
        description:'A Clínica Escola de Psicologia do Centro Universitário Estácio do Ceará oferece plantão psicológico gratuito, sem necessidade de agendamento prévio. Esta modalidade de atendimento é indicada para pessoas em situações de urgência, que necessitam de auxílio para superar circunstâncias imediatas de crises psicoemocionais. Além dos plantões, a Clínica Escola de Psicologia da Estácio oferece consultas destinadas a crianças, adolescentes, adultos, idosos, casais e famílias. Dentre os tratamentos, estão a ludoterapia (psicoterapia infantil), orientação profissional, atendimentos individuais e grupais, além de rodas de conversas com grupos da terceira idade.',
        image: 'assets/imgs/default-place-image.png',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.pago.name, 
          this.tags.ligacaogratuita.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name, 
          this.tags.aceitacartao.name, 
          this.tags.planounimed.name,
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'R. Eliseu Uchôa Beco, 600 Patriolino Ribeiro',
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
            value: '85 3270-6798'
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
      }),
      new Place({
        id: 1,
        name:'NIS - UniFanor Wyden',
        description:'O Núcleo Integrado de Saúde (NIS) promove a interdisciplinaridade por meio do UniFanor, juntamente às outras colaborações acadêmicas do grupo Adtalem Global Education, como Ross School of Medicine, Ross School de Veterinary e Chamberlain School of Nursing, centrando a saúde como um substancial valor humano, bem como em todos os âmbitos socioeconômicos e culturais. O NIS promove a saúde em locais com recursos limitados, incentivando o compromisso dos estudantes, professores e parceiros de diversas disciplinas para tratar as doenças mais presentes nas comunidades.',
        image: 'assets/imgs/unifanor.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.pago.name, 
          this.tags.ligacaogratuita.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name, 
          this.tags.aceitacartao.name, 
          this.tags.planounimed.name,
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'R. Antônio Gomes Guimarães, 256-270 Manoel Dias Branco',
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
            value: '85 3003-4430'
          },
          {
            name:'website',
            value: 'https://www.wyden.com.br/unifanor/nis'
          },
          {
            name:'email',
            value: 'email@hotmail.com.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Faculdade Maurício de Nassau',
        description:'Os serviços de psicologia encontrados na instituição são direcionados aos mais diversos perfis; da criança ao adulto idoso, pertencentes a todas as camadas sociais. O atendimento individual, tanto infantil quanto adulto, acontece dentro das perspectivas desejadas pelo conselho de psicologia da região, bem como os atendimentos em grupo que são inteiramente gratuitos. Serviços da clínica-escola: Plantão Psicológico (Gratuito); Psicoterapia - Abordagens: Psicanalítica, Analítica Junguiana, Gestalt-Terapia, Abordagem Centrada na Pessoa, Terapia Cognitivo Comportamental e Fenomenologia Existencial. (Taxa Social); Orientação Profissional (Gratuito); Psicodiagnóstico (Avaliação Psicológica) - taxa social.',
        image: 'assets/imgs/nassau.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.pago.name, 
          this.tags.ligacaogratuita.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name, 
          this.tags.aceitacartao.name, 
          this.tags.planounimed.name,
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'Tv. Juvenal de Carvalho, 140 São Gerardo',
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
            value: '85 3201-2446'
          },
          {
            name:'website',
            value: 'https://www.uninassau.edu.br/tags/clinica-escola'
          },
          {
            name:'email',
            value: 'email@hotmail.com.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'UECE',
        description:'Universidade Estadual do Ceará UECE Lema Lumen ad viam (Luz para o seu caminho) Fundação 5 de março de 1975 (43 anos) Tipo de instituição Pública Estadual Localização Fortaleza, Ceará Reitor(a) José Jackson Coelho Sampaio Vice-reitor(a) Hidelbrando dos Santos Soares Docentes 1.094 (2016) Total de estudantes 18.703 (2016) Graduação 16.975 (2016) Pós-graduação 1.728 (2016) Campus 10 Afiliações CRUB, RENEX e ABRUEM Índice Geral de Cursos 3 Orçamento anual 227.335.201,80 (2016) Página oficial http://www.uece.br A Universidade Estadual do Ceará (UECE) é uma universidade pública brasileira, com atuação em ensino, pesquisa e extensão, mantida pela Fundação Universidade Estadual do Ceará (FUNECE). A instituição é uma das três universidades mantidas pelo governo do estado do Ceará, ao lado da Universidade Estadual Vale do Acaraú (UEVA) e da Universidade Regional do Cariri (URCA).',
        image: 'assets/imgs/uece.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.acessibilidade.name, 
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'Av. Dr. Silas Munguba, 1700 – Campus Itaperi (ao lado do bloco P) Itaperi',
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
            value: '85 3101-9981'
          },
          {
            name:'website',
            value: 'http://www.website.com'
          },
          {
            name:'email',
            value: 'assecom.ch@uece.br'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Unichristus',
        description:'A Clínica Escola de Saúde (CES) do Centro Universitário Christus integra o programa de responsabilidade social da Instituição. Realiza atendimentos gratuitos, em múltiplas especialidades, de forma integrada, humanizada e de qualidade para o cuidado, ensino e pesquisa junto à comunidade da cidade de Fortaleza e circum-adjacências. Desenvolve o Programa Serviço de Atenção Especializada (SAE) em IST/AIDS, em parceria com o Sistema Único de Saúde (SUS). A equipe de profissionais da CES tem como valores o comprometimento, o respeito, a ética e o profissionalismo para desenvolver um atendimento primoroso e eficaz, junto aos usuários de saúde, os alunos dos cursos da área da saúde e seus respectivos preceptores.',
        image: 'assets/imgs/unichristus.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.acessibilidade.name, 
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'Avenida Padre Antônio Tomás, 3380 - Campus Parque Ecológico Cocó',
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
            value: '85 3265-8100'
          },
          {
            name:'website',
            value: 'https://unichristus.edu.br/institucional/infraestrutura/clinica-escola-de-saude/'
          },
          {
            name:'email',
            value: 'email@hotmail.com.com'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Instituto Raízes',
        description:'Realiza-se atendimento clínico no segmento particular e social, sendo preciso que a sessão seja previamente agendada. Ambos os serviços são constituídos por um padrão de excelência, no que se refere ao acolhimento dos profissionais e da infra-estrutura utilizada. O atendimento clínico social é um trabalho que tem a finalidade de tornar os serviços da psicologia, acessíveis à todos os públicos. Sendo os valores determinados, conforme a análise da condição sócio-econômica. Para participar do projeto, o interessado deverá comprovar que corresponde ao perfil solicitado.',
        image: 'assets/imgs/raizes.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.pago.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name, 
          this.tags.aceitacartao.name, 
          this.tags.planounimed.name,
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'Rua Adolfo Moreira de Carvalho, 86 Edson Queiroz',
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
            value: '85 3459-2477'
          },
          {
            name:'phone',
            value: '85 98623-8241'
          },
          {
            name:'website',
            value: 'http://www.raizesefac.com.br/'
          },
          {
            name:'email',
            value: 'contato@raizesefac.com.br'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'Instituto Roda Viva',
        description:'O Instituto Roda da Vida surgiu da necessidade de oferecer para pacientes oncológicos o acesso a práticas integrativas e complementares por entendermos que precisamos cuidar da "PESSOA" ao invés de cuidar da doença. A médica onco-hematologista Paola Tôrres Costa, que hoje é FELLOW em Medicina Integrativa pela Universidade do Arizona (EUA) e um grupo de profissionais das mais diversas áreas (psicológos, educadores, professores de educação física, fisioterapeutas, terapeutas holísticos, entre outros) e pacientes oncológicos se reuniram em 2011 e criaram uma associação sem fins lucrativos a qual chamaram "Instituto Roda da Vida". A idéia do nome veio do próprio ciclo constante de mudanças pelas quais passam os pacientes oncológicos e os desafios que significa estar com câncer. Ao mesmo tempo nos faz refletir sobre a transitoriedade de todos os processos vitais, com os quais devemos estar conectados para podermos obter qualidade de vida e saúde.',
        image: 'assets/imgs/rodaviva.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.acessibilidade.name, 
          this.tags.planohapvida.name
        ],
        location: {
          full_address:'Rua Lauro Maia, 1245 Bairro de Fátima',
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
            value: '85 3055-5029'
          },
          {
            name:'website',
            value: 'https://www.institutorodadavida.org.br/sobre-1-c1ori'
          },
          {
            name:'email',
            value: 'contato@institutorodadavida.org.br'
          }
        ]
      }),
      new Place({
        id: 1,
        name:'CAPS Fortaleza',
        description:'A Rede de Atenção Psicossocial do Município de Fortaleza dispõe de 15 Centros, sendo seis CAPS GERAL, sete CAPS AD – Álcool e Drogas e dois CAPS Infantis. O perfil de atendimento são pessoas que apresentam sofrimentos psíquicos e/ou transtornos mentais severos e persistentes além de dependentes químicos. Nesses casos, o cuidado é partilhado com a Atenção Primária e com os recursos comunitários do território.',
        image: 'assets/imgs/caps.jpg',
        categories:[
          this.categories.psicologico.name,
          this.categories.psicopedagogico.name,
          this.categories.psicossocial.name
        ],
        tags:[
          this.tags.gratuito.name, 
          this.tags.acessibilidade.name, 
          this.tags.estacionamento.name
        ],
        location: {
          full_address:'Rua Pinto Madeira , 1550',
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
            value: '85 3281-2012'
          },
          {
            name:'website',
            value: 'https://catalogodeservicos.fortaleza.ce.gov.br/categoria/saude/servico/321'
          }
        ]
      })
    ];
  }
}
