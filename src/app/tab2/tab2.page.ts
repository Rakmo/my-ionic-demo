import { Component } from '@angular/core';
import { recipientsData } from '../dbModule';
import { formatPhoneNumber } from '../utils/format-utils';
import { Recipient } from '../interfaces/Recipient';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  recipientData = recipientsData;
  recipientToBeAdded?: any;

  showRecipientDetailsForm: boolean = false;

  constructor() {}

  navigateToRecipientDetailsForm() {
    this.showRecipientDetailsForm = !this.showRecipientDetailsForm;
  }

  onCancelForm() {
    this.showRecipientDetailsForm = false;
  }

  onSubmitForm(recipient: Recipient) {
    this.recipientToBeAdded = recipient;

    this.recipientData.unshift(this.recipientToBeAdded);

    this.showRecipientDetailsForm = false;
  }

  formatPhoneRef(text?: string): string {
    return formatPhoneNumber(text);
  }
}
