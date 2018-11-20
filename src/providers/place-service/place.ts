export class Place {
  
  id: number;
  name: string;
  description: string;
  metadata: any;
  categories: any[];
  tags: any[];

  constructor(content:any) {
    if (typeof content === 'string') {
      this.name = content;
    } else {
      this.name = content.name;
      this.description = content.description;
    }
  }

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
}