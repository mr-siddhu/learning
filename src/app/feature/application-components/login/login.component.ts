import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingService } from '../../services/shopping.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private _shoppingService: ShoppingService) {
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)
    })
  }

  signin() {
    console.log(this.loginForm.value);
    this._shoppingService.signInUser(this.loginForm.value).subscribe(res=>{
      console.log(res);
    })
  } 


}
