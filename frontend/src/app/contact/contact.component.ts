import { Component, OnInit, isDevMode } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public body = '';
  public to = 'alexshirealestate@gmail.com';
  public from = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  sendEmail(event: any) {
    if (isDevMode()) {
      event.preventDefault();
    }

    console.log('send email', this.body, this.from);
  }

  get mailto(): string {
    let href = `mailto:${this.to}`;

    if (this.from !== '') {
      href += `?subject=Message from: ${this.from} using alexshi.ca/contact`;
    } else {
      href += `?subject=Message from alexshi.ca`;
    }

    if (this.body !== '') {
      href += `&body=${this.body}`;
    }

    return encodeURI(href);
  }
}
