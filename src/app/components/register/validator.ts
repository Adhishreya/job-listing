import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function passwordValidator(control:AbstractControl){
//     const valid = control.valuepassword ===targetPassword;
//       return valid ? null:{confirmPassword:{value:control.value}};
// }

export function passwordMatch(password:string,targetPassword:string):ValidatorFn{
    return (control:AbstractControl)=>{
      const valid = password ===targetPassword;
      return valid ? null:{confirmPassword:{value:control.value}};
    }
  }