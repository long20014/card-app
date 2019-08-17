export class LottoList {
	public id: number;
	public lottoNums: number[];
	

	constructor (		
		lottoNums: number[]
	){
		this.lottoNums = lottoNums;	
	}
}