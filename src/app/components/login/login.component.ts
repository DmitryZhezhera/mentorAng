import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginUserData = {};

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
    }

    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(
                result => {
                    console.log(result);
                    localStorage.setItem('token', result.token);
                },
                err => console.log(err)
            );
    }
}
