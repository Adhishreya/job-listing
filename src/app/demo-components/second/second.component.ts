import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  dynamicForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    }
  );

  get aliases() {
    return this.dynamicForm.get('aliases') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
  ngOnInit(): void {
  }

}
