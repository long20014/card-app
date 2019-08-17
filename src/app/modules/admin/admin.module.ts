import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AdminRoutes } from './admin.routes';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
  	AdminPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AdminRoutes),
  ],
  providers: [

  ],
  exports: [
   AdminPanelComponent,
  ]
})
export class AdminModule { }
