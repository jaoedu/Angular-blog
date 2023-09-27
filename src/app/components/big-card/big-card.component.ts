import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "";
   @Input()
   cardTitle: string = "";
   @Input()
   cardDiscription: string = "";
  @Input()
  link: string = "";
  @Input()
  Id: string = "0";


}
