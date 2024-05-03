import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.sass']
})
export class JavascriptComponent implements OnInit {

  ngOnInit() {



    // without spread operator    
    // changed the original array
    let arr = ['a', 'b', 'c'];
    let arr2 = [];
    arr2 = arr

    arr2.push('d');

    console.log(arr2);
    console.log(arr);
    //even affected the original array(arr)


    // with spread operator
    // changed the original array
    let arr3 = ['a', 'b', 'c'];
    let arr4 = [...arr3];
    // arr2 = arr

    arr4.push('d');

    console.log(arr3);
    console.log(arr4);
    //even affected the original array(arr)



    // expand using spread operator

    let ar = ['a', 'b'];
    let ar2 = [...ar, 'c', 'd'];

    console.log(ar2);
    // [ 'a', 'b', 'c', 'd' ]





    // min in an array using Math.min()
    let arrMt = [1, 2, 3, -1];
    //console.log(Math.min(arrMt)); //NaN


    // with spread
    let arrMath = [1, 2, 3, -1];

    console.log(Math.min(...arrMath));
    //-1


    const user1 = {
      name: 'Jen',
      age: 22,
    };

    const user2 = {
      name: "Andrew",
      location: "Philadelphia"
    };

    const mergedUsers = {...user1, ...user2 };
    console.log(mergedUsers);



    // Console log variations 
    console.log('**** Console log variations **** ');

    console.log(3 + 3); //6

    console.log("3" + "3"); //33

    console.log("3" + 3); //33

    console.log("3" + + 3); //33

    console.log(3 + + "3"); //6

    console.log(3 + 3 - 3); //3

    let x: any = "3";

    console.log(x + x - x); //30


    console.log('**** End **** ');




    console.log(1);
    console.log(2);

    setTimeout(() => {
      console.log(3);
    }, 1000);

    setTimeout(() => {
      console.log(5);
    }, 0);

    setTimeout(() => {
      console.log(4);
    }, -2000);  // negative value will considered as 0 only 

    setTimeout(() => {
      console.log(8);
    }, 0);

    console.log(6);
    console.log(7);

  }


  //Closure  - retain old values 

  closureFun() {

    function sum(a: any) {
      console.log('hello closure..' + a);

      var c = 4;

      return function (b: any) {
        return a + b + c; // lexical scope 
      }
    }


    var sum1 = function (a: any, b: any, c: any) {

      return {
        getSumTwo: function () {
          return a + b // lexical scope 
        },
        getSumThree: function () {
          return a + b + c // lexical scope 
        },
      }
    }

    var store = sum(3);
    var store1 = sum1(9, 6, 23)

    console.log(store(6));
    console.log(store1.getSumTwo());
    console.log(store1.getSumThree());


  }

  applyCallBind() {

    let printDetails = function (this: any, state: any, country: any) {
      // this keyword is used for self referencing. to point the object
      console.log(this.name, state, country);
    }


    let userDetails = {
      name: "siddhant",
      age: 29,
      designation: "sofware developer",
    }

    //call
    printDetails.call(userDetails, "pune", "india");


    let userDetails2 = {
      name: "akshay",
      age: 32,
      designation: "engineer",
    }


    // apply 
    printDetails.apply(userDetails2, ["pune", "india"]);

    // bind - create copy in newfun and invoke later 
    let newfun = printDetails.bind(userDetails2, "chopda", "india");
    newfun();

  }

  data$ = [
    { name: "Siddhu", profession: "analyst" },
    { name: "Renuka", profession: "developer" },
    { name: "Rimmy", profession: "designer" },
  ]


  asyncProgram() {
    console.log('asyncProgram');
    this.createData({ name: "Aarna", profession: "School" }, this.getData)
    // this.getData()

  }

  getData() {
    setTimeout(() => {
      console.log(this.data$);
      let output = ""

      this.data$.forEach((data, index) => {
        output += `<li>${data.name}</li>`;
      })

      let el = document.createElement('li');
      document.getElementById("callback")?.append(el);
      el.innerText = output;
    }, 1000);
  }


  createData(obj: any, callback: any) {
    setTimeout(() => {
      this.data$.push(obj)
      console.log(this.data$);
      this.getData();
    }, 2000);
  }



}
