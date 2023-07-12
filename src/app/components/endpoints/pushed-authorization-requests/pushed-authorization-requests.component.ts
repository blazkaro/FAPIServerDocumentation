import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { OpenIdAuthorizationDetail } from 'src/app/models/OpenIdAuthorizationDetail';

@Component({
  selector: 'app-pushed-authorization-requests',
  templateUrl: './pushed-authorization-requests.component.html',
  styleUrls: ['./pushed-authorization-requests.component.css']
})
export class PushedAuthorizationRequestsComponent {
  requestInfo = new RequestInfo('Pushed Authorization Request', 'POST', 'application/x-www-form-urlencoded', '/fapi/par', {
    'client_id': 'testClient',
    'client_assertion_type': 'urn:ietf:params:oauth:client-assertion-type:paseto-bearer',
    'client_assertion': 'v4.public.eyJpc3MiOiJ0ZXN0Q2xpZW50IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzExOS9mYXBpL2NpYmEiLCJzdWIiOiJ0ZXN0Q2xpZW50IiwibmJmIjoiMjAyMy0wNy0wOVQxMDo0Mjo0NC4xODk0ODQ1WiIsImV4cCI6IjIwMjMtMDctMDlUMTE6NDI6NDQuMTg5NDg0NVoiLCJqdGkiOiI3MDlmNjQ3Zi05MTM0LTQ1YzAtOTVmNi02OWQ2MmUzZDlmNWQiffh5uoUzBLMBBka6u62Pg0nZZVQCDyg82TAYRs7kn8Oqv9knQnVGAGrNI35neltbkQkKQNzGgNQR3t5OTwQLSQ4',
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
  })
}
