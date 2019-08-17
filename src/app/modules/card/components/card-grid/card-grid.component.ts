import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardList } from './../../models/card-list.class';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CardService } from './../../services/card.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit, OnDestroy {

  public subscription : Subscription;
  public cards : CardList[] = [];
  public card: CardList = null;

  public cardName: string;
  public cardLevel: number;
  public cardRarity: string;
  public cardAvatarUrl: string;
  public cardHP: number;
  public cardMP: number;
  public cardAtk: number;
  public cardDef: number;
  public cardType: string;  
  public cardDesc: string;

  constructor(
    public cardService : CardService    
  ){}

  ngOnInit(){
    this.loadData();
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadData() {
    this.cardService.getAllCards().subscribe(data => {
      this.cards = data;
      console.log(data);
    }, error => {
      this.cardService.handleError(error);
    });
  }

  addCard() {
    let card = new CardList(
      this.cardName,
      this.cardLevel,
      this.cardAvatarUrl,
      this.cardRarity,
      this.cardHP,
      this.cardMP,
      this.cardAtk,
      this.cardDef,
      this.cardType,
      this.cardDesc
    );

    this.subscription = this.cardService.addCard(card).subscribe(data => {
      this.cards.push(data);
    }, error => {
      this.cardService.handleError(error);
    });
  }

  editCard(card : CardList) {
    this.card = card;
  }

  updateCard(){
    this.subscription = this.cardService.updateCard(this.card).subscribe(data =>{
      let index = this.getIndex(data.id);
    }, error => {
      this.cardService.handleError(error);
    });
  }

  getIndex(id: number) : number{
    let result = 0;
    this.cards.forEach((item, index) => {
      if(item.id == id) {
        result = index;
      }  
    });    
    return result;
  }

  deleteCard(id: number) {
    this.subscription = this.cardService.deleteCard(id).subscribe(data =>{
      console.log(data);
      let index = this.getIndex(data.id);
      this.cards.splice(index, 1);
    }, error => {
      this.cardService.handleError(error);
    });
  }

  setStyle() {
  	let styles = {
  		"width": "100%",
	    "height": "100%",
	    "display": "flex",
	    "align-items": "center",
	    "justify-content": "center"
  	}
  	return styles;
  }
}
