import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateRoute } from './guards/canActivateRoute';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'petty-cash', canActivate: [CanActivateRoute] },
  { path: 'register', loadChildren: './shared/register/register.module#RegisterModule'},
  { path: 'login', loadChildren: './shared/login/login.module#LoginModule' },
  { path: 'ledger', loadChildren: './ledger/ledger.module#LedgerModule', canActivate: [CanActivateRoute]  },
  { path: 'petty-cash', loadChildren: './petty-cash/petty-cash.module#PettyCashModule', canActivate: [CanActivateRoute]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule { }

export const routedComponents = [];
