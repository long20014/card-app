import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CardGridComponent } from './../../modules/card/components/card-grid/card-grid.component';
import { AdminPanelComponent } from './../../modules/admin/components/admin-panel/admin-panel.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AuthGuard } from './../../services/auth.guard';
/*import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


*/


export const MainRoutes : Routes = [
  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },        
      {
        path: 'gallery',
        component: CardGridComponent
      },   
      {
        path: 'login',
        component: LoginComponent,        
      },
    ]    
  }, 
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
  },

  /*
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },  
  
  */
];