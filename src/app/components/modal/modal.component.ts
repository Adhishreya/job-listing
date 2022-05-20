import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  checkOutForm: FormGroup = this.formBuilder.group({
    email: ['',Validators.required],
    phone: ['']
  })
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
}
