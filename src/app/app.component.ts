import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonsService } from './services/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';

  public results = [{name:"", age:"", genere:"", doc:""}];
  constructor( private _personService: PersonsService ) { }

  ngOnInit(): void {
    this.getAllPersons()
  }

  getAllPersons() {
    this._personService.getAllPersons()
    .subscribe( (data:any) =>this.setPersons(data.results[0]));
  }
  setPersons(data:any){
    this.results = data; 
    localStorage.setItem('persons', JSON.stringify(this.results));
  }

  addPerson(form:NgForm){

    const { name , age, genere } = form.value;
    this._personService.addNewPerson(name, age, genere)
    .subscribe((data:any) => {
      this.setPersons( data.results[0] );

    });
  }

}

