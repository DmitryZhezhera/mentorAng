import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CourseComponent} from './pages/course/course.component';
import {CoursesComponent} from './pages/courses/courses/courses.component';
import {EventsComponent} from './components/events/events.component';
import {SpecialEventsComponent} from './components/special-events/special-events.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'events', component: EventsComponent},
    {
        path: 'special',
        component: SpecialEventsComponent,
        canActivate: [AuthGuard]
    },
    {path: 'login', component: LoginComponent},
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard]
    },
    {path: 'home', component: HomeComponent},
    {path: 'course', component: CourseComponent},
    {path: 'courses', loadChildren: './pages/courses/courses.module#CoursesModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
