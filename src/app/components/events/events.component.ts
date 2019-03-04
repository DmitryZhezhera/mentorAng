import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    events = [];

    constructor(private _eventService: EventService) {
    }

    ngOnInit() {
        this._eventService.getEvents()
            .subscribe(
                result => this.events = result,
                error => console.log(error)
            );
    }
}
