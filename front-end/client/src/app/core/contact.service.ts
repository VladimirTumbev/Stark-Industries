import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { ContactApiModel } from '../models/contacts/contactApiModel';
import { ContactCreateModel } from '../models/contacts/contactCreateModel';
import { AuthService } from './auth.service';

@Injectable()
export class ContactService {

    // public contacts: Contact[];
    constructor(private httpClient: HttpClient, private authService: AuthService, private appConfig: AppConfig) { }

    /**
     * getAllContacts
     */
    public getAllContacts(): Observable<ContactApiModel> {
        return this.httpClient.get(`${this.appConfig.apiUrl}/contact`).map((data) => (data) as ContactApiModel);
    }

    public createNewContact(newContact: ContactCreateModel): void {
        const authenticated = this.authService.isAuthenticated();
        const isAdmin = this.authService.isAdmin();
        const userId = this.authService.getUserId();
        newContact.UserId = userId;
        this.httpClient.post(`${this.appConfig.apiUrl}/contact`, newContact);
    }
}
