import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-child2',
  templateUrl: './admin-child2.component.html',
  styleUrls: ['./admin-child2.component.scss']
})
export class AdminChild2Component {

  @Input() cityNameChild2 : any;
  @Input() car :any;
}
