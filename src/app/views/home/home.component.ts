import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Imovel } from 'src/app/models/imovel';
import { ImovelService } from 'src/app/services/imovel/imovel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  imoveis: Imovel[] = [];
  
  // Using a list of subscriptions, just in case the component is destroyed
  // e.g. logout in middle of request, we cancel the subscription, to avoid data leak
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imovelService: ImovelService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.imovelService.getAll().subscribe(res => {
        this.imoveis = res;
        this.isLoading = false;
      })
    )
  }

  goToImovelDetail(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }  
}
