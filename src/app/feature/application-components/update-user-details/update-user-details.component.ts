import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingService } from '../../services/shopping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.sass']
})
export class UpdateUserDetailsComponent {
  updateForm: FormGroup;
  editDetails:any;

  constructor(
    public _shoppingService: ShoppingService, 
    private route: Router, 
    public activatedRoute : ActivatedRoute,
    public _utilityService : UtilityService) {

    this.updateForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, Validators.required),
    })

  }

  ngOnInit(){

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.editDetails = params
        this.updateUser();
        console.log(this.editDetails);
      }
    )
  }

  updateDetails() {
    this._shoppingService.updateUser(this.updateForm.value).subscribe(res => {
      console.log(res);
      this._utilityService.openSnackBar('Data Updated Successfully', 'Close')
      this.route.navigateByUrl('/spring-application/dashboard');
    })
  }


  updateUser() {
    this.updateForm.controls['id'].setValue(this.editDetails.id);
    this.updateForm.controls['first_name'].setValue(this.editDetails.first_name);
    this.updateForm.controls['last_name'].setValue(this.editDetails.last_name);
    this.updateForm.controls['email'].setValue(this.editDetails.email);
    this.updateForm.controls['city'].setValue(this.editDetails.city);
    this.updateForm.controls['state'].setValue(this.editDetails.state);
    this.updateForm.controls['address'].setValue(this.editDetails.address);
    this.updateForm.controls['zip'].setValue(this.editDetails.zip);
    this.updateForm.controls['mobile'].setValue(this.editDetails.mobile);
  }

  cancelUpdate() {
    this.route.navigateByUrl('/spring-application/dashboard');
    
  }

  ngOnDestroy(){
    this.updateForm.reset();
  }

}
