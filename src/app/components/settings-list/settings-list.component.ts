import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
})
export class SettingsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goToAccountPreferences() {
    // Handle navigation to Account Preferences page
  }

  goToContactPreferences() {
    // Handle navigation to Contact Preferences page
  }

  goToUserSettings() {
    // Handle navigation to User Settings page
  }

  goToNotificationsAndAlerts() {
    // Handle navigation to Notifications and Alerts page
  }
}
