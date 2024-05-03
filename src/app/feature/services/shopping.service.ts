import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private _http: HttpClient) { }


  registerUser(form: any) {
    return this._http.post('http://localhost:8080/registerData', form);

  }

  getUsersList() {
    return this._http.get('http://localhost:8080/getUserData');
  }


  submitForm(data: any) {
    return this._http.put('https://angular-learning-d85c7-default-rtdb.firebaseio.com/profile.json', data)
  }

  getProfileData() {
    return this._http.get('https://angular-learning-d85c7-default-rtdb.firebaseio.com/profile.json');
  }


  updateUser(form: any) {
    console.log(form);
    return this._http.put('http://localhost:8080/updateUser', form);
  }

  deleteUser(id: any) {
    return this._http.delete('http://localhost:8080/deleteUser/' + id, { responseType: 'text' });
  }

  signInUser(credential:any){
   return this._http.post('http://localhost:8080/loginUser',credential)
  }


}
