import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input('property') propertyInput?: Property;
  @Output('deleteProperty') deleteEvent: EventEmitter<string> = new EventEmitter;

  constructor() {}

  deleteProperty(id?: string) {
    if (!id) return;
    this.deleteEvent?.emit(id);
  }
}
