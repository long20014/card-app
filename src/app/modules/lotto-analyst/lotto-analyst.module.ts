import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { LottoComponent } from './components/lotto/lotto.component';
import { LottoAnalystRoutes } from './lotto-analyst.routes';


@NgModule({
  declarations: [
  	LottoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LottoAnalystRoutes),
  ],
  providers: [

  ],
  exports: [
    LottoComponent
  ]

})
export class LottoAnalystModule { }
