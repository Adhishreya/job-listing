import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  passwordMatch(password:string,targetPassword:string){
    // const valid = 
    return (control:FormGroup)=>{
      // const valid = password ===targetPassword;
      const passwordControl = control.controls[password];
      const targetPasswordControl = control.controls[targetPassword];
      if(!passwordControl||!targetPassword){
        return null;
      }
      if(passwordControl.value!==targetPasswordControl.value){
        return targetPasswordControl.setErrors({unmatchedPassword:true})
      }
      else{
        targetPasswordControl.setErrors(null)
      }
      // return valid ? null:{unmatchedPassword:{value:control.value}};
    }
  }
}
