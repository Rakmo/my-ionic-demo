import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Recipient } from 'src/app/interfaces/Recipient';

@Component({
  selector: 'app-recipient-details-form',
  templateUrl: './recipient-details-form.component.html',
  styleUrls: ['./recipient-details-form.component.scss'],
})
export class RecipientDetailsFormComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() submit: EventEmitter<Recipient> = new EventEmitter<Recipient>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9' ]+$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9' ]+$/)],
      ],
      value: [
        '',
        [
          Validators.required,
          ,
          Validators.pattern(
            /^(\d{10}|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
          ),
        ],
      ],
      isEmail: [this.isEmail],
    });
  }

  ngOnInit() {}

  firstName?: string;
  lastName?: string;
  type?: string;
  value?: string;
  isEmail?: boolean = false;
  recipientToBeAdded?: Recipient;

  toggleChanged() {
    // Handle any additional logic if needed
    this.isEmail = !this.isEmail;
  }

  onSubmit() {
    // Handle the submit logic here

    this.recipientToBeAdded = {
      id: Math.floor(Math.random() * 10000) + 1,
      fullName: this.form.value.firstName + ' ' + this.form.value.lastName,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      tokenValue: this.form.value.value,
      recipientType: 'I',
    };
    // console.log(this.recipientToBeAdded);
    this.submit.emit(this.recipientToBeAdded);
  }

  onCancel() {
    this.cancel.emit();
  }
}
