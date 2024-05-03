import { Component } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { Store } from '@ngrx/store';
import { RootReducerState, getUsers } from 'src/app/store/reducers';
import { UserListRequestAction, UserListSuccessAction } from 'src/app/store/actions/user-action';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  usersList: any = []

  constructor(
    public _shoppingService: ShoppingService,
    private route: Router,
    private _utilityService: UtilityService,
    private store: Store<RootReducerState>
  ) { }


  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.store.dispatch(new UserListRequestAction());

    this._shoppingService.getUsersList().subscribe((res: any) => {
      console.log(res);
      this.store.dispatch(new UserListSuccessAction({ data: res }));
      this.usersList = res;
    })

    this.store.select(getUsers).subscribe(dt => {
      console.log(dt);

    })
  }

  deleteUser(id: any) {
    this._shoppingService.deleteUser(id).subscribe(res => {
      console.log(res);
      this._utilityService.openSnackBar('Deleted Successfully', 'Close')
      this.getUsers();
    })
  }

  updateUser(form: any) {
    console.log(form);
    this.route.navigate(['/spring-application/updateDetails'], { queryParams: form })
  }
}
