import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  checkOutForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    phone: new FormControl('')
  });
  constructor() {
    //variables declated using private access inside the constructor cannot be accessed outside the module nor can a variable declared inside the ngOnInit method can be accessed
    console.log('constructor called')
  }
  // private formBuilder: FormBuilder,
  // private email: FormControl,
  // private phone: FormControl
  ngOnInit(): void {
    console.log('form group initalized- ngOnInit called')
  }

  onSubmit(): void {
    console.log(`form submitted ${this.checkOutForm.value}`);
  }

  ngOnDestroy(): void {
    console.log('onDestroy hook')
  }
}
