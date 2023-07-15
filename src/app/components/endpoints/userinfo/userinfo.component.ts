import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  requestInfo: RequestInfo = new RequestInfo('UserInfo Request', 'GET/POST', '/oidc/userinfo', {}, {}, true)
}
