import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { UserRoutes } from './user.routes';

@NgModule({
  declarations: [
  	
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(UserRoutes),
  ],
  providers: [

  ],
  exports: [
    
  ]
})
export class UserModule { }	
