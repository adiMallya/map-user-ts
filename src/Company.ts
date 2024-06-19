import { faker } from "@faker-js/faker";
import { Mappable } from "./MyMap";

export class Company implements Mappable{
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <h3>Organization: ${this.name}</h1>
      <h4>Catchphrase: ${this.catchPhrase}</h4>
    `;
  }
}
