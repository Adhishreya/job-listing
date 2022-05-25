import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  checkOutForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required,Validators.minLength(6)]],
    phone: ['']
  });

  formClassName = {
    modal:true 
  }

  constructor(private formBuilder: FormBuilder) {
    //variables declated using private access inside the constructor cannot be accessed outside the module nor can a variable declared inside the ngOnInit method can be accessed
    console.log('constructor called')
  }
  ngOnInit(): void {
    console.log('form group initalized- ngOnInit called')
  }

  onSubmit(): void {
    console.log(`form submitted ${this.checkOutForm.value}`);
  }

  ngOnDestroy(): void {
    console.log('onDestroy hook')
  }

  get email(){
    return this.checkOutForm.get('email');
  }

  get phone(){
    return this.checkOutForm.get('phone');
  }
}
