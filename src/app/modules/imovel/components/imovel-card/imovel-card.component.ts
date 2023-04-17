import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Imovel } from 'src/app/models/imovel';

@Component({
  selector: 'app-property-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.scss']
})
export class ImovelCardComponent {
  @Input('imovel') imovel: Imovel;
  @Output('goToImovel') goToImovel: EventEmitter<number> = new EventEmitter;

  clickImovel() {
    this.goToImovel.emit(this.imovel.id);
  }
}
