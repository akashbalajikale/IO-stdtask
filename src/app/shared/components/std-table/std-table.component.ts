import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { istd } from '../models/std.models';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 @Input() getDataparent  : any[]= [];

 @Output() emitstdobj : EventEmitter<istd> = new EventEmitter();
 @Output() emitDeletstd : EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  // onEdit(std: istd){
  //   this.emitstdobj.emit(std)
  //   console.log(std);
    
  // }

  onRemove(stdId: string){
    this.emitDeletstd.emit(stdId)
  }
}
