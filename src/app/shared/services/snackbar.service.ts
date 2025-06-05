import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

 constructor( private snackBar : MatSnackBar){}

    OpenSnackBar(msg : string){
    let Matconfig : MatSnackBarConfig ={
        horizontalPosition :'center',
        verticalPosition : "bottom",
        duration : 3000
    }
        this.snackBar.open(msg, "close", Matconfig)

    }
}
