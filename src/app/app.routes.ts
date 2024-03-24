import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './student/register/register.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/dashboard', component: DashboardComponent },
  { path: 'admin', redirectTo: 'admin/login', pathMatch: 'full'},
  { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
];
