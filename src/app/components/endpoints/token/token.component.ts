import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  requestInfo: RequestInfo = new RequestInfo('Token Request', 'POST', '/fapi/token', {
    ...Constants.ExampleClientAuthenticationParams,
    'grant_type': 'authorization_code',
    'code': 'N8QOaWYSlcdudVRXqLymTepnz50_sjx1NVszSvmsaO8',
    'code_verifier': 'Y3daYiOMDh37owUIoHaV2BCQAI_coy9KWy9Ix2jFH6U',
    'redirect_uri': 'https://example.com/fapi/cb'
  }, { ...Constants.ContentTypeFormUrlEncodedHeader })
}
