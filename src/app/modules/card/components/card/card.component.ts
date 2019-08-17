import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input('cardName') cardName: string;
	@Input('cardLevel') cardLevel: number;
	@Input('cardRarity') cardRarity: string;
	@Input('cardAvatarUrl') cardAvatarUrl: string;
	@Input('cardHP') cardHP: number;
	@Input('cardMP') cardMP: number;
	@Input('cardAtk') cardAtk: number;
	@Input('cardDef') cardDef: number;
	@Input('cardType') cardType: string;
	@Input('cardDesc') cardDesc: string;


  constructor() { }

  ngOnInit() {

  }

  setCardRarity() {
  	let cardRarityColor;
  	switch(this.cardRarity) {
  		case "common": {
  			cardRarityColor = "card-common";
  			break;
  		}
  		case "elite": {
  			cardRarityColor = "cardrare";
  			break;
  		}
  		case "rare": {
  			cardRarityColor = "card-rare";
  			break;
  		}
  		case "epic": {
  			cardRarityColor = "card-epic";
  			break;		
  		}
  		case "legendary": {
  			cardRarityColor = "card-legendary";
  			break;
  		}
  		case "myth": {
  			cardRarityColor = "card-myth";
  			break;
  		}
  		case "divine": {
  			cardRarityColor = "card-divine";
  			break;
  		}
  		default: {
  			cardRarityColor = "card-unknown"
  		}
  	}
  	return cardRarityColor;
  }

/*  cardRarityColor = {
  	"card-common": this.cardRarity = "common",
  	"card-elite": this.cardRarity = "elite",
  	"card-rare": this.cardRarity = "rare",
  	"card-epic": this.cardRarity = "epic",
  	"card-legendary": this.cardRarity = "legendary",
  	"card-myth": this.cardRarity = "myth",
  	"card-divine": this.cardRarity = "divine"
  } */ 	
}
