import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }


  getAllFilieres(): Observable<any[]> {//pour travailler en mode asynchrone
    return this.http.get<any[]>("http://localhost:5000/api/todos");//of(x) return an observable for the value passed in arguments
  }
}
