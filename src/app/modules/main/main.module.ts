import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule} from './../../modules/card/card.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MainRoutes } from './main.routes';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
	declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,   
    FormsModule,
    HttpClientModule,
    CardModule,
    RouterModule.forChild(MainRoutes),
  ],
  providers: [
     
  ],
})
export class MainModule { }
