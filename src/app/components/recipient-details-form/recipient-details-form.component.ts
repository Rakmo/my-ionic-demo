import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipient-details-form',
  templateUrl: './recipient-details-form.component.html',
  styleUrls: ['./recipient-details-form.component.scss'],
})
export class RecipientDetailsFormComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  ngOnInit() {}

  firstName?: string;
  lastName?: string;
  type?: string;
  value?: string;
  isEmail?: boolean = false;

  toggleChanged() {
    // Handle any additional logic if needed
    this.isEmail = !this.isEmail;
  }

  onSubmit() {
    // Handle the submit logic here
  }

  onCancel() {
    this.cancel.emit();
  }
}
