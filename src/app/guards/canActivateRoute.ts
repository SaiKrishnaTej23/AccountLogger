import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate , Router } from '@angular/router';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService  } from '../utility/user.service';
import { Roles } from '../shared/entities/roles';
import { RolePermission } from '../shared/entities/RolePermissions';
import { AppSettings } from '../utility/appsettings';

@Injectable()
export class CanActivateRoute implements CanActivate {
  constructor(private router: Router, private user: UserService) {}
  canActivate( route: ActivatedRouteSnapshot,    state: RouterStateSnapshot  ): Observable<boolean>|Promise<boolean>|boolean {
      const HasAccess = this.user.isLoggedIn();
      const UserRoles: Array<Roles> = this.user.getUserRoles();
      const RolePermissions: Array<RolePermission> = null ;
      if (!HasAccess) {
      this.router.navigateByUrl('/login');
      }
    return HasAccess;
  }
}

