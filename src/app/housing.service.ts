import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  /* protected housingLocationList: HousingLocation[] = []; */
  //protected -> dostępny tylko z poziomu klasy, lub klas dziedziczących po tej klasie

  /* getAllHousingLocation(): HousingLocation[] {
    return this.housingLocationList;
  } */

  /* getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
 */

  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
