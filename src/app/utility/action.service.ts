import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
@Injectable()
export class ActionService {

    constructor(private notify: NotificationsService) { }

    public LogAction (message: any, type?: number) {
        const html1 = '<div class="container"><p>';
        const html2 = '</p></div>';
        console.log(message);
        switch (type) {
            case 1: this.notify.html(html1 + message + html2 , 'success');
                break;
            default: this.notify.html(html1 + message + html2 , 'alert');
                break;
        }
    }
}
