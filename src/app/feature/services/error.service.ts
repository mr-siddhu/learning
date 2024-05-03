import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor(private _snackBar: MatSnackBar) { }

  handleError(err:HttpErrorResponse){
    console.log(err);
    return throwError(err.message)
  }

  showSnackBar(err:any){
     this._snackBar.open(err, 'Cancel', {
      duration: 3000
    })
  }
}
