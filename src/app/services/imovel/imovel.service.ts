import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/app/environments/environment';

import { Imovel } from 'src/app/models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private url: string = environment.endPoint;
  private route: string = 'imovel';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Imovel[]>(`${this.url}/${this.route}`);
  }

  getById(id: number) {
    return this.http.get<Imovel>(`${this.url}/${this.route}/${id}`);
  }

  post() {

  }

  put() {

  }

  delete(id: string) {
    return 0
  }
}