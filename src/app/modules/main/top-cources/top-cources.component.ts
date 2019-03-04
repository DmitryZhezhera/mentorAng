import {Component, OnInit} from '@angular/core';
import {TopCoursesService} from '../../../services/top-courses.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-top-cources',
    templateUrl: './top-cources.component.html',
    styleUrls: ['./top-cources.component.scss']
})
export class TopCourcesComponent implements OnInit {
    userName: string = '';
    response: any;

    constructor(private http: HttpClient) {

    }

    search() {
        this.http.get('https://test-mentor.herokuapp.com/all_image')
            .subscribe((response) => {
                this.response = response;
                console.log(this.response);
            });
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.search();
    }
}
