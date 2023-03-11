import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-contact',
  templateUrl: './test-contact.component.html',
  styleUrls: ['./test-contact.component.scss']
})
export class TestContactComponent {
  name: any;

  constructor(private datatestService: DatatestService) { }

  webTitle!: string;

  getData() {
    // fetching function from service 
    this.webTitle = this.datatestService.test();
  }
}
