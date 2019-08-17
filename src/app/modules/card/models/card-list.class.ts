export class CardList {
	public id: number;
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
	

	constructor (		
		cardName: string,
		cardLevel: number,
		cardRarity: string,
		cardAvatarUrl: string,
		cardHP: number,
		cardMP: number,
		cardAtk: number,
		cardDef: number,
		cardType: string,
		cardDesc: string,		
	){
		this.cardName = cardName;
		this.cardLevel = cardLevel;
		this.cardRarity = cardRarity;
		this.cardAvatarUrl = cardAvatarUrl;
		this.cardHP = cardHP;
		this.cardMP = cardMP;
		this.cardAtk = cardAtk;
		this.cardDef = cardDef;
		this.cardType = cardType;
		this.cardDesc = cardDesc;		
	}
}