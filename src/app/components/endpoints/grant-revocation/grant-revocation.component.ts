import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-grant-revocation',
  templateUrl: './grant-revocation.component.html',
  styleUrls: ['./grant-revocation.component.css']
})
export class GrantRevocationComponent {
  requestInfo: RequestInfo = new RequestInfo('Grant Revocation', 'DELETE', '/fapi/grants/{grantId}', {}, {}, true)
}
