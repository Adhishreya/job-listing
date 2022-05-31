import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PasswordValidatorService } from 'src/app/services/password-validator.service';
import { passwordMatch } from './validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder,
              private validatorService : PasswordValidatorService) { }
  formGroup = this.formBuilder.group(
    { 
      firstname: ['',[Validators.required,Validators.minLength(3)]] ,
      lastname: ['',[Validators.required,Validators.minLength(3)]] ,
      email: ['',[Validators.required,Validators.minLength(8),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]] ,
      password: ['',[Validators.required,Validators.minLength(8)]] ,
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]] ,
    },
    {
      validator:this.validatorService.passwordMatch('password','confirmPassword')
    }
  )

  dynamicFormGroup = this.formBuilder.group(
    { 
      firstname: ['',[Validators.required,Validators.minLength(3)]] ,
      lastname: ['',[Validators.required,Validators.minLength(3)]] ,
      email: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^[_A-Za-z0-9-+]+(.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(.[A-Za-z0-9]+)*(.[A-Za-z]{2,})$')]] ,
      password: ['',[Validators.required,Validators.minLength(8)]] ,
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]] ,
      aliases:this.formBuilder.array([
        this.formBuilder.control(''),
        this.formBuilder.control(''),
        this.formBuilder.control(''),
        this.formBuilder.control(''),
        this.formBuilder.control('')
      ])
    }
  );


  loginFormGroup = this.formBuilder.group(
    { 
      email: ['',[Validators.required,Validators.minLength(8),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]] ,
      password: ['',[Validators.required,Validators.minLength(8)]] ,
    }
  )

  get formControls(){
    return this.formGroup.controls;
  }

  get aliases(){
    return this.dynamicFormGroup.get('aliases') as FormArray;
  }

  login:boolean=false;
  changeMethod(){
    this.login=!this.login;
  }
  onSubmit(){
      if(this.formGroup.valid)
      console.log(this.formGroup.value);

      console.log(this.loginFormGroup.value)
  }
  ngOnInit(): void {
  }

}
