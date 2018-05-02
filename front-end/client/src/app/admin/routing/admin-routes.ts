import { Routes } from '@angular/router';

import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminFormComponent } from '../admin-contact/admin-form/admin-form.component';
import { AdminFormLinksComponent } from '../admin-links/admin-form-links/admin-form-links.component';
import { AdminLinksComponent } from '../admin-links/admin-links.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';

export const ROUTES: Routes = [
  { path: 'users', component: AdminUsersComponent},
  { path: 'contacts', component: AdminContactComponent},
  { path: 'contacts/form', component: AdminFormComponent},
  { path: 'contacts/form/:id', component: AdminFormComponent},
  { path: 'links', component: AdminLinksComponent},
  { path: 'links/form', component: AdminFormLinksComponent},
  { path: 'links/form/:id', component: AdminFormLinksComponent},
];
