import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Imovel } from 'src/app/models/imovel';
import { ImovelService } from 'src/app/services/imovel/imovel.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-imoveis-details',
  templateUrl: './imoveis-details.component.html',
  styleUrls: ['./imoveis-details.component.scss']
})
export class ImoveisDetailsComponent implements OnInit, OnDestroy {

  imovel: Imovel;
  isLoading: boolean = true;
  subscriptions: Subscription[] = [];
  imovelForm: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isLoading = true
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.subscriptions.push(
          this.imovelService.getById(id).subscribe(data => {
            console.log(data)
            this.imovel = data;
            this.createReactiveForm();
            this.isLoading = false;
          })
        )
      })
    )
  }

  createReactiveForm() {
    this.imovelForm = this.formBuilder.group({
      id: [this.imovel?.id],
      nome: [this.imovel?.nome],
      tipo: [this.imovel?.tipo],
      valor: [this.imovel?.valor],
      condominio: [this.imovel?.condominio],
      quartos: [this.imovel?.quartos],
      banheiros: [this.imovel?.banheiros],
      mobiliado: [this.imovel?.mobiliado],
      area: [this.imovel?.area],
      venda: [this.imovel?.venda],
      aluguel: [this.imovel?.aluguel],
      dataAnuncio: [new Date(this.imovel?.dataAnuncio)],
      endereco: this.formBuilder.group({
        id: [this.imovel?.endereco[0]?.id],
        rua: [this.imovel?.endereco[0]?.rua],
        numero: [this.imovel?.endereco[0]?.numero],
        bairro: [this.imovel?.endereco[0]?.bairro],
        cidade: [this.imovel?.endereco[0]?.cidade],
        uf: [this.imovel?.endereco[0]?.uf],
        cep: [this.imovel?.endereco[0]?.cep]
      }),
      proprietarioId: [this.imovel?.proprietarioId]
    })
  }
        
  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
