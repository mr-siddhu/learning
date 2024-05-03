import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snackBar: MatSnackBar) { }

  print(countVal:any,id:any){
    let el = document.createElement('li',id);
    el.innerText = countVal;
    
    document.getElementById(id)?.append(el);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: ['blue-snackbar']
    });
  }
}
