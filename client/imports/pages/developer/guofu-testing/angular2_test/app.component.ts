// import { Component,Inject, OnInit} from '@angular/core';
// import { Service } from './service';
//
// @Component({
//   selector: 'my-app',
//   template: '<h1>Angular Test</h1> <ul><li *ngFor="let object of data">{{object.value}}</li></ul>',
//   providers: [Service]
// })
//
// export class AppComponent {
//   data : any[];
//   constructor(public service: Service) {}
//
//   ngOnInit(){
//     this.service.provideService().then(x => {
//       this.data = x;
//     });
//   }
//
//   getData(callback){
//     // this.service.provideService()
//     // this.service.provideService().then( (promise) => {
//     //   callback(promise);
//     // });
//   }
//
//   callOnSpy(){
//   }
// }
