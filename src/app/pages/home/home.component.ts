import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../../modules/header/header.component';
import {FooterComponent} from '../../modules/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
