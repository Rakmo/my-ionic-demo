import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  recipientData = [
    { id: 1, fullname: 'John Doe', tokenValue: '6245897202' },
    { id: 2, fullname: 'Amy Powell', tokenValue: 'amy.pow@abc.com' },
    { id: 3, fullname: 'Sundar Pichai', tokenValue: 'raj.m@test.com' },
    { id: 4, fullname: 'ABC Corporation', tokenValue: '6245897202' },
    { id: 5, fullname: 'Hair Salon', tokenValue: '9512587532' },
    { id: 6, fullname: 'Generative AI', tokenValue: 'chatgpt@oai.com' },
  ];

  showRecipientDetailsForm: boolean = false;

  constructor() {}

  navigateToRecipientDetailsForm() {
    this.showRecipientDetailsForm = !this.showRecipientDetailsForm;
  }

  onCancelForm() {
    this.showRecipientDetailsForm = false;
  }
}
