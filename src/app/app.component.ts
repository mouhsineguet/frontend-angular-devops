import { Component } from '@angular/core';
import {TodosService} from './todos.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-front';
  mydata!: any[];
 constructor(private TS:TodosService) {
 }
  ngOnInit(): void {
    this.handleAllFiliere();
  }

  handleAllFiliere(){
    this.TS.getAllFilieres().subscribe({
      next:(data)=>{
        console.log(data[0]);
        this.mydata=data;
      }
    });
  }

}
