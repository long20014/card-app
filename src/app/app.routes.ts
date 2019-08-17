import { RouterModule, Routes} from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

export const AppRoutes : Routes = [
  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/  
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'    
  } 
];