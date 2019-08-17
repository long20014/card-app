import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AdminModule} from './modules/admin/admin.module';
import { MainModule} from './modules/main/main.module';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,   
    NotFoundComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,   
    AdminModule,
    MainModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
