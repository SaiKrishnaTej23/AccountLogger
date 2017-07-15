import { Roles } from './roles';
export class User {
    Id: number;
    Name: string;
    Username: string;
    Password: string;
    GroupId: number;
    HasAccess: boolean;
    Roles: Array<Roles>;
    PhotoUrl: string;
}
