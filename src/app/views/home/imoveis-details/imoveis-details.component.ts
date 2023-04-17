import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Imovel } from 'src/app/models/imovel';
import { ImovelService } from 'src/app/services/imovel/imovel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CepService } from 'src/app/services/cep/cep.service';

@Component({
  selector: 'app-imoveis-details',
  templateUrl: './imoveis-details.component.html',
  styleUrls: ['./imoveis-details.component.scss']
})
export class ImoveisDetailsComponent implements OnInit, OnDestroy {

  imovel: Imovel;
  isLoading: boolean = true;
  subscriptions: Subscription[] = [];
  imovelForm: FormGroup;
  cepJson: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private cepService: CepService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.createReactiveForm();
        const id = params['id'];
        if (id !== 'new') {
          this.subscriptions.push(
            this.imovelService.getById(id).subscribe(data => {
              this.imovel = data;
              this.imovelForm.patchValue(this.imovel);
              this.getAddress(this.imovel.endereco[0].cep)
              this.isLoading = false;
            })
          )
        } else {
          this.isLoading = false;
        }
      })
    )
  }

  createReactiveForm() {
    this.imovelForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      tipo: [''],
      valor: [''],
      condominio: [''],
      quartos: [''],
      banheiros: [''],
      mobiliado: [''],
      area: [''],
      venda: [''],
      aluguel: [''],
      dataAnuncio: [new Date()],
      endereco: this.formBuilder.group({
        id: [''],
        rua: [''],
        numero: [''],
        bairro: [''],
        cidade: [''],
        uf: [''],
        cep: ['']
      }),
      proprietarioId: ['']
    })
  }
        
  goBack() {
    this.location.back();
  }

  createNewImovel() {
    const form = this.imovelForm.value
    this.subscriptions.push(
      this.imovelService.post(form).subscribe(res => {
        console.log(res)
      })
    );
  }

  getAddress(imovelCep: string) {
    const cep = imovelCep.replace('-', '');
    this.subscriptions.push(
      this.cepService.searchCep(cep).subscribe((data: any) => {
        if (data.erro) {
          this.cepJson = "Não foi possível encontrar esse endereço.";
        } else {
          this.cepJson = JSON.stringify(data);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
