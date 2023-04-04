import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.scss']
})
export class SubjectOneComponent {
   subdata : any;
  constructor(private dataService : DataService){

  }

  ngOnInit(){
    
    this.dataService.subjectData.subscribe(value=>{
      this.subdata = value;
    })
  }
}
