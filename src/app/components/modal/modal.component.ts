import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // email!: string;
  // phone!: string;
  // checkOutForm = this.formBuilder.group({
  //   email: '',
  //   phone: ''
  // })

  email = new FormControl('')
  phone = new FormControl('')

  constructor() { }
  // private formBuilder: FormBuilder,
  //             private formGroup :FormGroup

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(`form submitted ${this.email}`);
  }

  // ngOnChanges(): void {
  //   console.log('onChanges hook')
  //   console.log(this.email)
  // }
  
  ngOnDestroy(): void {
    console.log('onDestroy hook')
  }
}
