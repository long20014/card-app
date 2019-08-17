import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { CardGridComponent } from './components/card-grid/card-grid.component';
import { CardComponent } from './components/card/card.component';
import { CardRoutes } from './card.routes';

@NgModule({
  declarations: [
  	CardGridComponent,
  	CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CardRoutes),
  ],
  providers: [

  ],
  exports: [
    CardGridComponent,
    CardComponent,
  ]
})
export class CardModule { }
