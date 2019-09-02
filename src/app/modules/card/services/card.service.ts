import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardList } from './../models/card-list.class';

interface cardList {
  obj: object;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {	
	public API: string = 'https://5ca5ff2e3a08260014279076.mockapi.io/api/todo/cards'; //external server
	//public API: string = 'http://localhost:3000/cards'; //json-server: json-server --watch cards.json
  //public API: string = '/api/cards.php';
  //public API: string = 'http://localhost:4201/api/cards.php';/**/

  constructor(
  	public http : HttpClient
  ) { }

  getAllCards() : Observable<any> {
  	return this.http.get(this.API);
  }

 /* getAllCards() {
    return this.http.get<cardList>(this.API)
  }*/

  addCard(card: CardList) : Observable<any>{
  	return this.http.post(this.API, card);
  }

  handleError(error) {
  	if (error.error instanceof Error) {
  		console.log(`Client side error: ${error.error.message}`);
  	}
  	else {
  		console.log(`Server side error: ${error.status} - ${error.error}`);
  	}
  }

  updateCard(card: CardList): Observable<any> {
    return this.http.put(`${this.API}/${card.id}`, card);
  }
  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }


}
