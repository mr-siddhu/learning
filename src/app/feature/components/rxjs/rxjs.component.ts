import { Component, ElementRef, ViewChild } from '@angular/core';
import { concat, count, concatAll, concatMap, debounceTime, delay, delayWhen, distinctUntilChanged, exhaustMap, filter, from, fromEvent, interval, map, merge, mergeAll, mergeMap, Observable, of, pluck, retry, retryWhen, scan, Subscription, switchAll, switchMap, take, takeLast, takeUntil, tap, timeout, timer, toArray, shareReplay, combineLatest, withLatestFrom, zip, forkJoin, catchError, Subject } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})

export class RxjsComponent {
  //Spinner Configuration
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 10;
  progressSpinner: boolean = false;

  //Global Variables 
  names: any;
  colors: any;
  subMsg: any;
  subTimer: any;
  intervalSubscription: Subscription;
  timerSubscription: Subscription;

  constructor(public _utilityService: UtilityService, private _http: HttpClient, private _errorService: ErrorService) {
    this.names = ['sid', 'renuka', 'shreyas', 'shubhi']
    this.colors = ['red', 'pink', 'green', 'yellow', 'blue', 'black']
    this.subMsg;
    this.subTimer;
    this.intervalSubscription = new Subscription;
    this.timerSubscription = new Subscription;
  }

  // Element References
  @ViewChild('addbtn') addbtn: ElementRef | undefined;
  @ViewChild('myInput') myInput: ElementRef | undefined;
  @ViewChild('myInput1') myInput1: ElementRef | undefined;
  @ViewChild('btn') btn: ElementRef | undefined;
  @ViewChild('nameSelector') nameSelector: ElementRef | undefined;
  @ViewChild('colorSelector') colorSelector: ElementRef | undefined;
  @ViewChild('nameSelector1') nameSelector1: ElementRef | undefined;
  @ViewChild('colorSelector1') colorSelector1: ElementRef | undefined;


  // -----------------------------------------
  //             NG ON INIT 
  // -----------------------------------------
  ngOnInit() {
    // interval(interval)
    const broadCastVideos = interval(1000);
    this.intervalSubscription = broadCastVideos.subscribe(res => {
      this.subMsg = 'Video : ' + res;
      if (res > 5) {
        this.intervalSubscription.unsubscribe()
      }
      this._utilityService.print(this.subMsg, 'elContainer2');
    })


    // timer(delay,interval)
    const broadCastVideosWithTimer = timer(3000, 1000)
    this.timerSubscription = broadCastVideosWithTimer.subscribe(res => {
      // console.log(res);
      this.subTimer = 'Video : ' + res;
      if (res > 2) {
        this.timerSubscription.unsubscribe();
      }
      this._utilityService.print(this.subTimer, 'elContainer3');

    })


    //of(argument)
    const obs1 = of('sid', 'renuka', 'shreyas');
    obs1.subscribe(res => {
      // console.log(res);
      this._utilityService.print(res, 'elContainer4');

    })

    //from(array/object/promise/srtring)

    const obs2 = from(['Siddhu', 'Renuka', 'Shreyas', 'Shubhi'])
    obs2.subscribe(res => {
      this._utilityService.print(res, 'elContainer5')
    })


    let obj = [
      { name: 'renuka', id: 2 },
      { name: 'sneha', id: 6 }
    ]
    const obs6 = from(obj)
    obs6.subscribe(res => {
      this._utilityService.print(res.name, 'elContainer6')
    })

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('promise resolve..')
      }, 3000);
    })

    promise.then(res => {
      // console.log(res);
    })
    const obs3 = from(promise)
    obs3.subscribe(res => {
      this._utilityService.print(res, 'elContainer7')
    })

    const obs4 = from('sid atos')
    obs4.subscribe(res => {
      this._utilityService.print(res, 'elContainer8')
    })

    //Custom Observable
    const customObservable = new Observable(observer => {
      observer.next('Angular');
      observer.next('React');
      observer.next('Java');
      observer.error(new Error('limit exceeded (custom error)'));
      observer.complete();
      observer.next('Jasmine');

    })

    customObservable.subscribe(res => {
      // console.log(res);
      this._utilityService.print(res, 'elContainer9')
    }, err => {
      this._utilityService.print(err, 'elContainer9')
    }
    )

    // To Array
    const obs7 = from([
      { name: 'Renuka', skill: 'angular', gender: 'female' },
      { name: 'Sneha', skill: 'sql', gender: 'female' },
      { name: 'Shreyash', skill: 'java', gender: 'male' },
      { name: 'Sid', skill: 'Angular', gender: 'male' },
      { name: 'Shubhangi', skill: 'sql', gender: 'female' },
      { name: 'utkarsh', skill: 'dotnet', gender: 'male' },
    ])

    obs7.pipe(
      toArray()
    ).subscribe(res => {
      console.log('toArray() => ', res);
    })


    //Map Operator
    obs7.pipe(map(data => {
      return 'available skills are  :  ' + data.skill
    })).
      subscribe(res => {
        this._utilityService.print(res, 'elContainer10')
      })


    //pluck is deprecated.   example using map Operator
    obs7.pipe(map(x => x?.name)).
      subscribe(res => {
        this._utilityService.print(res, 'elContainer11')
      })

    //Filter Operator 
    obs7.pipe(
      filter(x => x.gender == 'female')
    ).
      subscribe(res => {
        this._utilityService.print(res.name, 'elContainer12')
      })



    // Tap Operator
    const src = interval(1500);
    const arr = ['akshay', 'swapnil', 'amol', 'hitesh', 'vishal'];
    let arrSubcription: Subscription

    arrSubcription = src.pipe(
      tap(data => {
        if (data == 4) {
          arrSubcription.unsubscribe()
        }
      })
    ).subscribe(res => {

      this._utilityService.print(arr[res], 'elContainer13')
    })


    const takeSource = interval(1000);
    const takeUntilSource = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //  take
    takeSource.pipe(take(5))
      .subscribe(res => {
        this._utilityService.print(res, 'elContainer14')
      })

    //  takeLast
    takeUntilSource.pipe(takeLast(3))
      .subscribe(res => {
        this._utilityService.print(res, 'elContainer15')
      })

    //  takeUntil
    let condition = fromEvent(document, 'click')
    takeSource.pipe(take(20), takeUntil(condition))
      .subscribe(res => {
        this._utilityService.print(res, 'elContainer16')
      })

    // Concat Operator
    const sourceTech = interval(1000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5))
    const sourceComedy = interval(2000).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3))
    const sourceNews = interval(1500).pipe(map(v => 'News Video #' + (v + 1)), take(4))

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      this._utilityService.print(res, 'elContainer17')
    })

    // Merge Operator
    const finalObs1 = merge(sourceTech, sourceComedy, sourceNews)
    finalObs1.subscribe(res => {
      this._utilityService.print(res, 'elContainer18')
    })


    //MergeMap Operator

    //Ex 01 - Map
    const sourceForMergeMap = from(['Tech', 'Comedy', 'News'])

    sourceForMergeMap.pipe(map(data => {
      return this.getDataFromAPI(data)
    })).subscribe(res => {
      this._utilityService.print(res, 'elContainer19')
    })


    //Ex 02 - Map + MergeAll
    sourceForMergeMap.pipe(
      map(data => {
        return this.getDataFromAPI(data)
      }), mergeAll()
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer20')
    })

    //Ex 03 - MergeMap
    sourceForMergeMap.pipe(
      mergeMap(data => {
        return this.getDataFromAPI(data)
      }),
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer21')
    })


    //Ex 01 - Map
    const sourceForConcatMap = from(['Tech', 'Comedy', 'News'])
    sourceForConcatMap.pipe(map(data => {
      return this.getDataFromAPI(data)
    })).subscribe(res => {
      this._utilityService.print(res, 'elContainer22')
    })


    //Ex 02 - Map + ConcatAll
    sourceForConcatMap.pipe(
      map(data => {
        return this.getDataFromAPI(data)
      }), concatAll()
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer23')
    })

    //Ex 03 - ConcatMap
    sourceForConcatMap.pipe(
      concatMap(data => {
        return this.getDataFromAPI(data)
      }),
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer24')
    })

    //Ex 01 - Map
    const sourceForSwitchMap = from(['Tech', 'Comedy', 'News'])
    sourceForSwitchMap.pipe(map(data => {
      return this.getDataFromAPI(data)
    })).subscribe(res => {
      this._utilityService.print(res, 'elContainer25')
    })


    //Ex 02 - Map + SwitchAll
    sourceForSwitchMap.pipe(
      map(data => {
        return this.getDataFromAPI(data)
      }), switchAll()
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer26')
    })

    //Ex 03 - SwitchMap
    sourceForSwitchMap.pipe(
      
      switchMap(data => {
        return this.getDataFromAPI(data)
      }),
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer27')
    })


    // By default, observables are unicast and subjects are multicast.
    //Cold Observable - UNICAST

    const ColdObservable$ = new Observable(observer => {
      observer.next(Math.random())
    })

    ColdObservable$.subscribe(obs1 => {
      console.log('cold obs1 - ' + obs1);
      this._utilityService.print(obs1, 'coldObs')
    })

    ColdObservable$.subscribe(obs2 => {
      console.log('cold obs2 - ' + obs2);
      this._utilityService.print(obs2, 'coldObs')
    })

    //Hot Observable - MULTICAST  

    let number = Math.random()
    const HotObservable$ = new Observable(observer => {
      observer.next(number)
    })

    HotObservable$.subscribe(obs1 => {
      console.log('hot obs1 - ' + obs1);
      this._utilityService.print(obs1, 'hotObs')
    })

    HotObservable$.subscribe(obs2 => {
      console.log('hot obs2 - ' + obs2);
      this._utilityService.print(obs2, 'hotObs')
    })


    //Cold to Hot Observable 

    const ColdObservable1$ = interval(2000).pipe(take(5))

    let sub = new Subject();
    ColdObservable1$.subscribe(sub)


    sub.subscribe(obs1 => {
      console.log('cold to hot obs1 - ' + obs1);
      this._utilityService.print(obs1, 'coldToHotObs')
    })

    setTimeout(() => {
      sub.subscribe(obs2 => {
        console.log('cold to hot obs2 - ' + obs2);
        this._utilityService.print(obs2, 'coldToHotObs')
      })
    }, 2000)

    //Cold Observable with Interval

    const ColdObservable2$ = interval(2000).pipe(take(5))

    ColdObservable2$.subscribe(obs1 => {
      console.log('cold obs1 - ' + obs1);
      this._utilityService.print(obs1, 'coldObsWithTimer')
    })

    setTimeout(() => {
      ColdObservable2$.subscribe(obs2 => {
        console.log('cold obs2 - ' + obs2);
        this._utilityService.print(obs2, 'coldObsWithTimer')
      })
    }, 2000)




  }





  // -----------------------------------------
  //             NG AFTER VIEW INIT 
  // -----------------------------------------
  reqData: any;
  reqData1: any;
  ngAfterViewInit() {
    //CombineLatest and WithLatestFrom
    const nameObs = fromEvent(this.nameSelector?.nativeElement, 'change')
      .pipe(map((e: any) => {
        return e.target.value
      }))

    nameObs.subscribe(name => {
      console.log(name);
    })

    const colorObs = fromEvent(this.colorSelector?.nativeElement, 'change')
      .pipe(map((e: any) => {
        return e.target.value
      }))

    colorObs.subscribe(color => {
      console.log(color);
    })

    //Combine Latest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'boxContainer1')
    })

    // With latest from
    //master -nameObs
    //slave - colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      this.createBox(name, color, 'boxContainer2')
    })


    //Zip and forkJoin

    const nameObs1 = fromEvent(this.nameSelector1?.nativeElement, 'change')
      .pipe(map((e: any) => {
        return e.target.value
      }),
        take(3))

    nameObs1.subscribe(name => {
      console.log(name);
    })

    const colorObs1 = fromEvent(this.colorSelector1?.nativeElement, 'change')
      .pipe(map((e: any) => {
        return e.target.value
      }),
        take(3))

    colorObs1.subscribe(color => {
      console.log(color);
    })

    //Zip
    zip(nameObs1, colorObs1).subscribe(([name, color]) => {
      this.createBox(name, color, 'boxContainer3')
    })

    // forkJoin
    forkJoin(nameObs1, colorObs1).subscribe(([name, color]) => {
      this.createBox(name, color, 'boxContainer4')
    })




    /* ** always use after view init in case of fetching events from dom. otherwise we'll get error cannot read property of undefined as we were fetching a value before loading a dom*/


    //fromEvent Operator
    let count = 1;
    fromEvent(this.addbtn?.nativeElement, 'click').subscribe(res => {
      // console.log(res);

      let countVal = 'Video :' + count++;
      this._utilityService.print(countVal, 'elContainer1');
    })



    //debounceTime Operator

    const searchTerm = fromEvent(this.myInput?.nativeElement, 'keyup')
    searchTerm.pipe(map((e: any) => {
      return e.target.value
    }),
      debounceTime(2000)
    ).subscribe(res => {
      console.log(res);
      this.reqData = res;
    })


    //distinctUntilChanged Operator

    const searchTerm1 = fromEvent(this.myInput1?.nativeElement, 'keyup')
    searchTerm1.pipe(map((e: any) => {
      return e.target.value
    }),
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(res => {
      console.log(res);
      this.reqData1 = res;
    })


    const btnClick = fromEvent(this.btn?.nativeElement, 'click')
    btnClick
      .pipe(
        tap(() => {
          this.progressSpinner = true;
        }),
        exhaustMap(() => {
          return this.fetchData()
        })
      )
      .subscribe(res => {
        console.log(res);
        this.progressSpinner = false
      })


  }





  getDataFromAPI(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

  fetchData() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }

  spinner: boolean = false;
  fetchDataForCatchError() {
    this.spinner = true;
    return this._http.get('https://jsonplaceholder.typicode.com/posts1').pipe(catchError(this._errorService.handleError)).subscribe((res) => {
      this.spinner = false;
    },
      (error) => {
        console.log(error);
        this.spinner = false;
        this._errorService.showSnackBar(error)
      }
    )
  }

  //Share Replay Operator
  user1: any;
  user2: any;
  user3: any;
  fetchDataForShareReplay() {
    const data = from(this._http.get('https://jsonplaceholder.typicode.com/posts')).pipe(
      shareReplay()
    )
    this.user1 = data.pipe(
      map((res: any) => res.filter((user1: any) => {
        return user1['userId'] == 1
      })))

    this.user2 = data.pipe(
      map((res: any) => res.filter((user2: any) => {
        return user2['userId'] == 2
      })))

    this.user3 = data.pipe(
      map((res: any) => res.filter((user3: any) => {
        return user3['userId'] == 3
      })))



  }

  createBox(name: any, color: any, id: any) {
    console.log(name, color, id);

    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class", color);
    document.getElementById(id)?.appendChild(el)
  }

  //Retry 
  postData: any;
  apiStatus: any = '';
  retryApiCall(): void {
    this._http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        retry(3),
        map((res: any) => res.map((data: { id: any; title: any; }) => {
          return {
            id: data.id,
            title: data.title
          }
        }))
      ).subscribe((res: any) => {
        const data = from(res);
        data
          .pipe(take(7), toArray())
          .subscribe((res: any) => {
            this.postData = res;
            console.log(this.postData);
            this.apiStatus = 'Data fetched';
          })
      }, err => {
        this.postData = [];
        this.apiStatus = 'Error fetching data.. '
      }

      )
  }

  //RetryWhen, scan and Delay
  postDataRetryWhen: any;
  retryCount: any
  retryWhenApiCall(): void {
    this._http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        retryWhen(error => error.pipe(
          delay(3000),
          scan((retryCount: any) => {
            console.log(retryCount);

            if (retryCount >= 5) {
              throw error;
            }
            else {
              retryCount = retryCount + 1;
              this.retryCount = retryCount;
              console.log('retryCount -> ' + retryCount);
              return retryCount
            }
          }, 0)
        )),
        map((res: any) => res.map((data: { id: any; title: any; }) => {
          return {
            id: data.id,
            title: data.title
          }
        }))
      ).subscribe((res: any) => {
        const data = from(res);

        data.pipe(take(8), toArray())
          .subscribe((res: any) => {
            this.postDataRetryWhen = res;
            console.log(this.postDataRetryWhen);
          })
      }
      )
  }

}
