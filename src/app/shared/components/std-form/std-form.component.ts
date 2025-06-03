import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { istd } from '../models/std.models';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdArr : istd[] =[];

  editedMOde : boolean = false
@ViewChild('fname') fname !: ElementRef;
@ViewChild('lname') lname !: ElementRef;
@ViewChild('email') email !: ElementRef;
@ViewChild('contact') contact !: ElementRef;


@Output() emitobj : EventEmitter<istd> = new EventEmitter();
@Input() stdobj !: istd;

// ngOnChanges(){
//   if(this.stdobj){
//     this.editedMOde = true;

//     this.fname.nativeElement.value = this.stdobj.fname;
//     this.lname.nativeElement.value = this.stdobj.lname;
//     this.email.nativeElement.value = this.stdobj.email;
//     this.contact.nativeElement.value = this.stdobj.contact;
//   }
// }
  constructor() { }

  ngOnInit(): void {
  }
  OnformData(){
    if( this.fname.nativeElement.value.length > 0 &&  this.lname.nativeElement.value.length > 0 && this.email.nativeElement.value.length > 0
      && this.contact.nativeElement.value.length > 0
    ){
      let obj: istd ={
        fname : this.fname.nativeElement.value,
        lname : this.lname.nativeElement.value,
        email : this.email.nativeElement.value,
        contact : this.contact.nativeElement.value,
        stdId : this.generateUuid()
      }
      this.fname.nativeElement.value=" ";
      this.lname.nativeElement.value=" ";
      this.email.nativeElement.value=" ";
      this.contact.nativeElement.value=" ";
      console.log(obj)
      this.emitobj.emit(obj)
    }
  }   

  OnUpadte(){
     let upadtedObj :istd={
        fname : this.fname.nativeElement.value,
        lname : this.lname.nativeElement.value,
        email : this.email.nativeElement.value,
        contact : this.contact.nativeElement.value,
        stdId : this.stdobj.stdId
     }
     console.log(upadtedObj);
     this.emitobj.emit(upadtedObj)

     this.fname.nativeElement.value=" ";
      this.lname.nativeElement.value=" ";
      this.email.nativeElement.value=" ";
      this.contact.nativeElement.value=" ";
      this.editedMOde = false

     
  }
 
  
  generateUuid (){
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

 
}
