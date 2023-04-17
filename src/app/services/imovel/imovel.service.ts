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

  post(body: any) {
    // const body = this.createBodyRequest(form);
    return this.http.post<Imovel>(`${this.url}/${this.route}/`, body);
  }

  put(body: any) {
    // const body = this.createBodyRequest(form);
    return this.http.put<Imovel>(`${this.url}/${this.route}/`, body);
  }

  delete(id: string) {
    return this.http.delete<Imovel>(`${this.url}/${this.route}/${id}`);
  }

  createBodyRequest(form: any) {
    const body = {};
    form.forEach((input: any) => {
      
    })
    return body;
  }
}