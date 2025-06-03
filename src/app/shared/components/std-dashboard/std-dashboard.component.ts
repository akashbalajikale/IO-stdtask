import { Component, OnInit } from '@angular/core';
import { istd } from '../models/std.models';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  editedstd !: istd;

  constructor() { }

  ngOnInit(): void {
  }

  // sdtArray : Array<istd>= [
  //   {
  //     fname : "aksh",
  //     lname : "kale",
  //     email : "aksh@gmail.com",
  //     contact : 9467343783,
  //     stdId : "212121213"
  //   },
  //   {
  //     fname : "laksh",
  //     lname : "upadyay",
  //     email : "laksh@gmail.com",
  //     contact : 9987654236,
  //     stdId : "21212121"
  //   },
  //   {
  //     fname : "avinash",
  //     lname : "kale",
  //     email : "avinash@gmail.com",
  //     contact : 956346733,
  //     stdId : "212121214"
  //   },
  //   {
  //     fname : "soham",
  //     lname : ",amoj",
  //     email : "shil@gmail.com",
  //     contact : 956346777733,
  //     stdId : "2121212140"
  //   }
  // ]

  // newFormdata(data: istd){
  //   const index = this.sdtArray.findIndex(s => s.stdId === data.stdId);
  //   if (index > -1) {
  //     this.sdtArray[index] = data;
  //   } else {
  //     this.sdtArray.push(data);
  //   }

  // }


  editstudent(std : istd){
    this.editedstd =std
  }

 
  // deletdStd(stdId : string){
  //   this.sdtArray = this.sdtArray.filter(std => std.stdId !== stdId);
  //   console.log(stdId);
    
  // }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }



}
