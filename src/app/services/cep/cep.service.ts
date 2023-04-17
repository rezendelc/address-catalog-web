import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private route: string =  "https://viacep.com.br/ws"

  constructor(
    private http: HttpClient
  ) { }

  searchCep(cep: string) {
    try {
      return this.http.get(`${this.route}/${cep}/json`)
    } catch (error: any) {
      return error
    }
  }
}
