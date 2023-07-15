import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { OpenIdAuthorizationDetail } from 'src/app/models/OpenIdAuthorizationDetail';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-pushed-authorization-requests',
  templateUrl: './pushed-authorization-requests.component.html',
  styleUrls: ['./pushed-authorization-requests.component.css']
})
export class PushedAuthorizationRequestsComponent {
  requestInfo = new RequestInfo('Pushed Authorization Request', 'POST', '/fapi/par', {
    ...Constants.ExampleClientAuthenticationParams,
    'authorization_details': new OpenIdAuthorizationDetail(),
    'claims': 'sub email',
    'redirect_uri': 'https://example.com/fapi/cb',
    'state': 'abcgdYWpFt4UQbGxmOEurI8JoKKP6D0pEI7RF3php7kViH',
    'nonce': 'xyzgdYWpFt4UQbGxmOEurI8JoKKP6D0pEI7RF3php7kViH',
    'code_challenge_method': 'S256',
    'code_challenge': 'AccDGHwdfSXq613nLTnkeIniSPWjrKdM-fiI9kIlyw0',
    'grant_id': 'yjPshfeCBTc_9SBp140giCLpIiOFeexPINukrz21xSk',
    'grant_management_action': 'merge',
    'dpop_pkh': 'AccDGHwdfSXq613nLTnkeIniSPWjrKdM-fiI9kIlyw0',
    'prompt': 'login',
    'max_age': '60'
  }, { ...Constants.ContentTypeFormUrlEncodedHeader })
}