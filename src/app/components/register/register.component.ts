import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerUserData = {};

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
    }

    registerUser() {
        console.log('RegisterComponent_', this.registerUserData);
        this._auth.registerUser(this.registerUserData)
            .subscribe(
                result => {
                    console.log(result);
                    localStorage.setItem('token', result.token);
                },
                err => console.log(err)
            );
    }

}
