import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipient-details-form',
  templateUrl: './recipient-details-form.component.html',
  styleUrls: ['./recipient-details-form.component.scss'],
})
export class RecipientDetailsFormComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  firstName?: string;
  lastName?: string;
  type?: string;
  value?: string;
  isEmail: boolean = false;

  toggleChanged() {
    // Handle any additional logic if needed
    this.isEmail = !this.isEmail;
  }

  submit() {
    // Handle the submit logic here
  }

  onCancel() {
    this.cancel.emit();
  }
}
