import { Component, OnInit  } from '@angular/core';
import { Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.sass']
})


export class FirebaseComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    // this.getProfileData();
  }

//   data=[{
//     name:'siddhu',
//     skill:'angular'
//   },
//   {
//     name:'renuka ',
//     skill:'react'
//   },{
//     name:'shreyas',
//     skill:'java'
//   }

// ]

profileData:any = [];
// getProfileData(){
//   this._httpService.getProfileData().pipe(toArray())
//   .subscribe(res=>{
//     console.log(res);
//     this.profileData = res
//   })
// }

//   formSubmit(form:any){
//     console.log(form.value);
//     let data = form.value
//       this._httpService.submitForm(data)
//       .subscribe((res:any)=>{
//         this.getProfileData()
//       })
//   }
}
