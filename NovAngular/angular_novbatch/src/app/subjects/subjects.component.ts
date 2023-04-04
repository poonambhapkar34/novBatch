import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  data:any
constructor(private dataService : DataService){

}
 ngOnInit(){
    this.dataService.formName = 'xyz';
   
 }
   sendDatatoSubject(){
     this.dataService.subjectData.next(this.data)
   }

   changeData(){
    this.dataService.subjectData.next(50000)
   }

  
}
