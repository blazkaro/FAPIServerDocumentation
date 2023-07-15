import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-token-introspection',
  templateUrl: './token-introspection.component.html',
  styleUrls: ['./token-introspection.component.css']
})
export class TokenIntrospectionComponent {
  requestInfo: RequestInfo = new RequestInfo('Token Introspection Request', 'POST', '/fapi/token/introspection', {
    ...Constants.ExampleClientAuthenticationParams,
    'token': Constants.ExampleAccessToken
  }, { ...Constants.ContentTypeFormUrlEncodedHeader })
}
