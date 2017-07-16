import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate , Router } from '@angular/router';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService  } from '../utility/user.service';
import { Roles } from '../shared/entities/roles';
import { RoleFeatures } from '../shared/entities/RoleFeatures';
import { AppSettings } from '../utility/appsettings';

@Injectable()
export class CanActivateRoute implements CanActivate {
  roleFeatures: Array<RoleFeatures>;

  constructor(private router: Router, private user: UserService) {}
  canActivate( route: ActivatedRouteSnapshot,    state: RouterStateSnapshot  ): Observable<boolean>|Promise<boolean>|boolean {
      const HasAccess = this.user.isLoggedIn();
      const UserRoles: Array<Roles> = this.user.getUserRoles();
      this.user.getRoleFeatures().subscribe((res) => {
        this.roleFeatures = res.json() as Array<RoleFeatures>;
        console.log(this.roleFeatures);
      });
      if (!HasAccess) {
            this.router.navigateByUrl('/login');
            }
       return HasAccess;

  }
}

