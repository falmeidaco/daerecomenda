export class Place {
  
  id: number;
  name: string;
  description: string;
  location: any;
  categories: any[];
  tags: any[];
  metadata: any;
  
  constructor(content:any) {
    this.id = content.id;
    this.name  = content.name;
    this.description = content.description;
    this.location = content.location;
    this.categories = content.categories;
    this.tags = content.tags;
    this.metadata = content.metadata;
  }
  /*

  setCategories(categories: string[]) {
    this.categories = categories;
  }

  setTags(tags: string[]) {
    this.tags = tags;
  }

  setMetadata(key:string, value:any) {
    this.metadata[key] = value;
  }

  getMetadata(key:string) {
    if (this.metadata.hasOwnProperty(key)) {
      return this.metadata[key];
    }
  }
  */
}