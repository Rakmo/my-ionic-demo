import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition('collapsed <=> expanded', [animate('250ms ease-in-out')]),
    ]),
  ],
})
export class Tab1Page {
  showAccountDetails: boolean = false;
  transactionData = [
    {
      id: 1,
      date: 'May 20, 2023',
      agent: 'Amazon.com~332233',
      amount: '$112.82',
    },
    {
      id: 2,
      date: 'May 12, 2023',
      agent: 'Walmart-store-at-AZ',
      amount: '$78.31',
    },
    {
      id: 3,
      date: 'May 10, 2023',
      agent: 'Online-store-at-DSW',
      amount: '$18.34',
    },
    {
      id: 4,
      date: 'May 7, 2023',
      agent: 'Chipotle-store-at-CA',
      amount: '$23.95',
    },
    {
      id: 5,
      date: 'May 1, 2023',
      agent: 'Dinner-AZ',
      amount: '$65.00',
    },
    {
      id: 6,
      date: 'April 29, 2023',
      agent: 'Subway-store-at-MI',
      amount: '$18.93',
    },
  ];

  constructor() {
    this.showAccountDetails = false;
  }

  ngOnIt() {
    this.showAccountDetails = false;
  }

  detailsShown = false;

  toggleDetails() {
    this.detailsShown = !this.detailsShown;
  }
}
