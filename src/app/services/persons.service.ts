import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllPersons() {
    const url = "https://randomapi.com/api/sa379www?key=DVH8-EKC5-G0EJ-J0VW"
    return this._http.get(url);
  }

  addNewPerson( name: string, age:string, genere:string ){
    
    const url = "https://randomapi.com/api/sa379www?key=DVH8-EKC5-G0EJ-J0VW&name="+name+"&age="+age+"&genere="+genere;
    return this._http.get(url)
  }

}
