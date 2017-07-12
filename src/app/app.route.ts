import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'accounts' },
  { path: 'accounts', component: AccountsComponent },
    { path: 'register', loadChildren: './register/register.module#RegisterModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule { }

export const routedComponents = [AccountsComponent];
