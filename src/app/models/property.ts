export class Property {
  id: string;
  name: string;
  address: string;
  saleValue?: number;

  constructor(property: Property) {
    this.id = property.id;
    this.name = property.name;
    this.address = property.address;
    this.saleValue = property.saleValue;
  }
}