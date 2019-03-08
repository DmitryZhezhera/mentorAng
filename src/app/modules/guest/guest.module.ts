import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {GuestComponent} from './guest/guest.component';
import {GuestRoutingModule} from './guest-routing.module';
import {HeaderComponent} from '../../ui/header/header.component';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';

@NgModule({
    declarations: [
        GuestComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GuestRoutingModule
    ]
})
export class GuestModule {
}
