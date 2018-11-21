export class Place {
  id: number;
  name: string;
  description: string;
  image: string;
  location: any;
  categories: any[];
  tags: any[];
  metadata: any;
  constructor(content:any) {
    this.id = content.id;
    this.name  = content.name;
    this.description = content.description;
    this.image = content.image;
    this.location = content.location;
    this.categories = content.categories;
    this.tags = content.tags;
    this.metadata = content.metadata;
  }
}