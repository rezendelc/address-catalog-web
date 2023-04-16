import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  properties: Property[] = [];
  
  // Using a list of subscriptions, just in case the component is destroyed
  // e.g. logout in middle of request, we cancel the subscription, to avoid data leak
  subscriptions: Subscription[] = [];

  constructor(
    private propertyService: PropertyService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.propertyService.getAll().subscribe(data => {
        setTimeout(() => {
          this.properties = data;
          this.isLoading = false;
        }, 2000)
      })
    )
  }

  deleteProperty(id: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.subscriptions.push(
        this.propertyService.delete(id).subscribe(res => {
          console.log(res.message);
        })
      )
      this.subscriptions.push(
        this.propertyService.getAll().subscribe(data => {
          this.properties = data;
          this.isLoading = false;
        })
      )
    }, 1000)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }  
}
