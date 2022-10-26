import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: User = new User('', '', '', '');
  title:string = "Formulaire d'inscription"
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model)
  }

}

export class User{
  constructor(
  public firstname:string,
  public lastname:string,
  public email:string,
  public password: string,
  ) {}
}
