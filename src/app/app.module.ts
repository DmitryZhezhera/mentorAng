import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './modules/header/header.component';
import {FooterComponent} from './modules/footer/footer.component';
import {MainComponent} from './modules/main/main.component';
import {CourseComponent} from './pages/course/course.component';
import {AuthComponent} from './modules/header/auth/auth.component';
import {TopCourcesComponent} from './modules/main/top-cources/top-cources.component';
import {TopCoursesService} from './services/top-courses.service';
import {NavComponent} from './components/nav/nav.component';
import {HomeComponent} from './pages/home/home.component';
import {CourseCardComponent} from './components/course-card/course-card.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {EventsComponent} from './components/events/events.component';
import {SpecialEventsComponent} from './components/special-events/special-events.component';
import {AuthService} from './services/auth/auth.service';
import {EventService} from './services/event/event.service';
import {AuthGuard} from './auth.guard';

// import { CoursesComponent } from './pages/courses/courses/courses.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        CourseComponent,
        AuthComponent,
        TopCourcesComponent,
        NavComponent,
        HomeComponent,
        CourseCardComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        SpecialEventsComponent,
        // CoursesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [TopCoursesService, AuthService, AuthGuard, EventService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
