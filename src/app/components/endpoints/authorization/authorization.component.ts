import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  requestInfo: RequestInfo = new RequestInfo('Authorization Request', 'GET', null, '/fapi/authorization?', {
    'client_id': 'testClient',
    'request_uri': 'urn:ietf:params:oauth:request_uri:KgfyLuYJBz6kN7kEdbuKhrIviIYs_D1b1Ix3thebw8o'
  })
}
