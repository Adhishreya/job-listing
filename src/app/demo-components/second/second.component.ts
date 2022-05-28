import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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

  trustedUrl!: SafeResourceUrl;
  url: string = "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  get aliases() {
    return this.dynamicForm.get('aliases') as FormArray;
  }
  constructor(private fb: FormBuilder,
    private santizer: DomSanitizer) { }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
  ngOnInit(): void {
    this.trustedUrl = this.santizer.bypassSecurityTrustUrl(this.url);
  }

}
