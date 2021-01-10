import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
  constructor(private route: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("logging into" + this.selectedOption)
this.route.navigate([this.selectedOption]);
  }
}
