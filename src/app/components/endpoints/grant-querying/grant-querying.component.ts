import { Component } from '@angular/core';
import { RequestInfo } from '../../example-request/example-request.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-grant-querying',
  templateUrl: './grant-querying.component.html',
  styleUrls: ['./grant-querying.component.css']
})
export class GrantQueryingComponent {
  requestInfo: RequestInfo = new RequestInfo('Grant Querying', 'GET', '/fapi/grants/{grantId}', {}, {}, true)
}
