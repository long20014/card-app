import { Component, OnInit } from '@angular/core';
import { LottoList } from './../../models/Lotto-list.class';
import { LottoAnalyst } from './../../models/lotto-analyst.class';
import { LottoService } from './../../services/lotto.service';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {
	public lottoAnalyst: LottoAnalyst;

  constructor(
  	public lottoService: LottoService
  ) { }

  ngOnInit() {
  	this.lottoService.getAnaLyst();
  }

}
