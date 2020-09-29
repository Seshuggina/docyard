import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchResolveService } from './services/search-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
    // data: {
    //   seachInput: {
    //     "type": "doctors",
    //     "searchTxt": "Bangalore"
    //   }
    // }
  }
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: 'second-component',
  // component: SecondComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
