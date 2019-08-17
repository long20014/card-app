export class LottoAnalyst {
	public id: number;
	public amount_0x: number;
	public amount_1x: number;
	public amount_2x: number;
	public amount_3x: number;
	public amount_4x: number;
	public amount_5x: number;
	public total_amount_0x: number;
	public total_amount_1x: number;
	public total_amount_2x: number;
	public total_amount_3x: number;
	public total_amount_4x: number;
	public total_amount_5x: number;
	

	constructor (		
		amount_0x: number,
		amount_1x: number,
		amount_2x: number,
		amount_3x: number,
		amount_4x: number,
		amount_5x: number,
		total_amount_0x: number,
		total_amount_1x: number,
		total_amount_2x: number,
		total_amount_3x: number,
		total_amount_4x: number,
		total_amount_5x: number
	){
		this.amount_0x = amount_0x;
		this.amount_1x = amount_1x;
		this.amount_2x = amount_2x;
		this.amount_3x = amount_3x;
		this.amount_4x = amount_4x;
		this.amount_5x = amount_5x;
		this.total_amount_0x = total_amount_0x;
		this.total_amount_1x = total_amount_1x;
		this.total_amount_2x = total_amount_2x;
		this.total_amount_3x = total_amount_3x;
		this.total_amount_4x = total_amount_4x;
		this.total_amount_5x = total_amount_5x;
	}
}