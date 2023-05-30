import data from '../../src/db.json';
import { Account } from './interfaces/Account';
import { Recipient } from './interfaces/Recipient';

export const accountsData: Account[] = data.accountsData;
export const recipientsData: Recipient[] = data.recipientsData;
export const settings = data.settings;
