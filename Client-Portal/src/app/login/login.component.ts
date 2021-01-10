import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  selectedOption;
  roles: Role[] = [
    {value: 'pharm', viewValue: 'Veterinarian'},
    {value: 'user', viewValue: 'Pet Owner'},
  ];

  email: string;
  password: string;
  constructor(private route: Router, private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log("logging into" + this.selectedOption)
this.authenticationService.SignIn(this.email, this.password, this.selectedOption);
    this.email = '';
    this.password = '';
  }
  // this.route.navigate([this.selectedOption]);

 
}
