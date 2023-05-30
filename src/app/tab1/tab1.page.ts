import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { accountsData } from '../dbModule';
import { Account } from '../interfaces/Account';

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
  showLoader: boolean = false;
  selectedAccount?: Account;
  accountName?: string;
  accountNumber?: string;
  balance?: string;
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
  accountsData?: Account[] = accountsData;

  constructor(private loadingCtrl: LoadingController) {
    this.showAccountDetails = false;
  }

  ngOnIt() {
    this.showAccountDetails = false;
  }

  detailsShown = false;

  toggleDetails() {
    this.detailsShown = !this.detailsShown;
  }

  openAccountDetails(account: Account) {
    this.selectedAccount = account;
    this.showLoader = true;
    this.accountName =
      account?.accountType == 'Certificate of Deposit'
        ? 'CD ' + account?.maskedAccountNumber
        : account?.accountType + ' ' + account?.maskedAccountNumber;
    this.showLoading();
    setTimeout(() => {
      this.showLoader = false;
      this.showAccountDetails = true;
    }, 2000);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Loading...',
      duration: 2000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }
}
