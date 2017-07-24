import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import {PersonComponent} from '../person/person.component';
import {PersonListComponent} from '../person-list/person-list.component';
import {TableElementsCountComponent} from '../table-elements-count/table-elements-count.component';
import {TablePaginationComponent} from '../table-pagination/table-pagination.component';
import {TableSortComponent} from '../table-sort/table-sort.component';
import {PersonService} from '../person.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        PersonComponent,
        PersonListComponent,
        TableElementsCountComponent,
        TablePaginationComponent,
        TableSortComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        PersonService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }