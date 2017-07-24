import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import {PersonComponent} from '../person/person.component';
import {PersonListComponent} from '../person-list/person-list.component';
import {TableElementsCountComponent} from '../table-elements-count/table-elements-count.component';
import {TablePaginationComponent} from '../table-pagination/table-pagination.component';
import {TableSortComponent} from '../table-sort/table-sort.component';
import {PersonService} from '../person.service';

const appRoutes: Routes = [
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: '', component: PersonListComponent, canActivate: [AuthGuard]},
    {path: 'person/:id', component: PersonComponent, resolve: {person: PersonService}, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);