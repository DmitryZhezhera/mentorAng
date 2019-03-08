import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './services/auth/auth.service';
import {EventService} from './services/event/event.service';
import {AuthGuard} from './auth.guard';


@NgModule({
    declarations: [
        AppComponent,
        // HeaderComponent,
        // FooterComponent,
        // MainComponent,
        // CourseComponent,
        // NavComponent,
        // HomeComponent,
        // CourseCardComponent,
        // EventsComponent,
        // SpecialEventsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
