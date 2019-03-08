import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {GuestComponent} from './guest/guest.component';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';

const routes: Routes = [
    {path: '', component: GuestComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        // CommonModule
    ],
    exports: [RouterModule]
})
export class GuestRoutingModule {
}
