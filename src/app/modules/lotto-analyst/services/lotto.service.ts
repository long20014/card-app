import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LottoList } from './../models/Lotto-list.class';
import { LottoAnalyst } from './../models/Lotto-analyst.class';


@Injectable({
  providedIn: 'root'
})
export class LottoService {

  /*public lottoAPI: string = 'https://5ca5ff2e3a08260014279076.mockapi.io/api/todo/Lotto';*/
  public analystAPI: string = 'https://5ca5ff2e3a08260014279076.mockapi.io/api/todo/analyst';
	public lottoAPI: string = 'http://localhost:3000/lottos';

  constructor(
  	public http : HttpClient
  ) { }


  //LOTTO FUNCTIONS
  getAllLottos() : Observable<any> {
  	return this.http.get(this.lottoAPI);
  }

  addLotto(lotto: LottoList) : Observable<any>{
  	return this.http.post(this.lottoAPI, lotto);
  }

  handleError(error) {
  	if (error.error instanceof Error) {
  		console.log(`Client side error: ${error.error.message}`);
  	}
  	else {
  		console.log(`Server side error: ${error.status} - ${error.error}`);
  	}
  }

  updateLotto(lotto: LottoList): Observable<any> {
    return this.http.put(`${this.lottoAPI}/${lotto.id}`, lotto);
  }
  deleteLotto(id: number): Observable<any> {
    return this.http.delete(`${this.lottoAPI}/${id}`);
  }

  //ANALYST FUNCTIONS
  getAnaLyst() : Observable<any> {
  	return this.http.get(this.analystAPI);
  }
  
  analyzeLottoList(lottoList: LottoList){

  }
}
