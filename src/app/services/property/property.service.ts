import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { environment } from 'src/app/environments/environment';

import { Observable, of } from 'rxjs';
import { Property } from 'src/app/models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private url: string = environment.endPoint;
  private route: string = 'property';
  private mockData = mock;

  constructor(
    // private http: HttpClient
  ) { }

  getAll(): Observable<Property[]> {
    // return this.http.get(`${this.url}/${this.route}`);
    return of(
      this.mockData.map(mock => new Property(mock))
    )
  }

  post() {

  }

  put() {

  }

  delete(id: string) {
    this.mockData = this.mockData.filter(property => property.id !== id);
    return of({message: "Delete Success"})
  }
}

const mock = 
[
  {
    "id": "1",
    "name": "Móvel 1",
    "address": "Endereço 1",
    "saleValue": 200
  },
  {
    "id": "2",
    "name": "Móvel 2",
    "address": "Endereço 2",
    "saleValue": 100
  },
  {
    "id": "3",
    "name": "Móvel 3",
    "address": "Endereço 3",
    "saleValue": 500
  }
]