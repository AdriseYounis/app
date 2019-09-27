import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../models/UserInfoModel';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data-form.component.html',
  styleUrls: ['./display-user-data-form.component.less']
})
export class DisplayUserDataFormComponent implements OnInit {

  user : UserInfoModel = new UserInfoModel({
    guid : "D21ds12x", 
    customerUid : "1111-1111-",
    first_name: "John", 
		last_name: "Doe", 
		email: "email@email.com", 
		zipcode: 10283,
    password: "Idasn2x2#"
  });

  constructor() { }

  ngOnInit() {
  }

}
