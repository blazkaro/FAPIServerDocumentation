import { Component } from '@angular/core';
import { Constants } from 'src/app/Constants';
import { RequestInfo } from '../../example-request/example-request.component';

@Component({
  selector: 'app-token-revocation',
  templateUrl: './token-revocation.component.html',
  styleUrls: ['./token-revocation.component.css']
})
export class TokenRevocationComponent {
  requestInfo: RequestInfo = new RequestInfo('Token Revocation Request', 'POST', '/fapi/token/revocation', {
    ...Constants.ExampleClientAuthenticationParams,
    'token': Constants.ExampleAccessToken
  }, { ...Constants.ContentTypeFormUrlEncodedHeader })
}
