import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';

@Component({
    selector: 'app-special-events',
    templateUrl: './special-events.component.html',
    styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

    specialEvents = [];
    constructor(private _eventService: EventService) {
    }

    ngOnInit() {
        this._eventService.getSpecialEvents()
            .subscribe(
                result => this.specialEvents = result,
                error => console.log(error)
            );
    }

}
