import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {

  SignUpForm: FormGroup;
  

  constructor(
    public _shoppingService : ShoppingService,
    private route: Router,
    private _utilityService:UtilityService
    ) {
    this.SignUpForm = new FormGroup({
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required), 
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirmpassword': new FormControl(null, Validators.required),
    })

  }

  ngOnInit() {
    this.getUsers();
  }

  usersList: any = []
  getUsers() {
    this._shoppingService.getUsersList().subscribe(res => {
      console.log(res);
      this.usersList = res;
    })
  }

  formSubmit() {
    console.log(this.SignUpForm.value);

    this._shoppingService.registerUser(this.SignUpForm.value).subscribe(res => {
      console.log(res);
      this._utilityService.openSnackBar('Registered Successfully', 'Close')

      this.route.navigateByUrl('/spring-application/dashboard')
    })
  }



}
