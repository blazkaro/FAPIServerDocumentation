import { Constants } from 'src/app/Constants';
import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { OpenIdAuthorizationDetail } from 'src/app/models/OpenIdAuthorizationDetail';

@Component({
  selector: 'app-client-initiated-backchannel-authentication',
  templateUrl: './client-initiated-backchannel-authentication.component.html',
  styleUrls: ['./client-initiated-backchannel-authentication.component.css']
})
export class ClientInitiatedBackchannelAuthenticationComponent {
  requestInfo: RequestInfo = new RequestInfo('Client Initiated Backchannel Authentication', 'POST', '/fapi/ciba', {
    'authorization_details': new OpenIdAuthorizationDetail(),
    'claims': 'sub email',
    'client_notification_token': 'some-token-generated-by-client',
    'login_hint': '1',
    'binding_message': 'QWERTY',
    'user_code': 'some-secret-user-code'
  }, { ...Constants.ContentTypeFormUrlEncodedHeader })
}
