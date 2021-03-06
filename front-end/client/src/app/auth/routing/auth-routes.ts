import { Routes } from '@angular/router';

import { AlreadyLoggedInGuard } from '../../core/guards/already.logged.in.guard';
import { LoginComponent } from '../login.component';
import { RegisterComponent } from '../register.component';

export const ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedInGuard] },
];
