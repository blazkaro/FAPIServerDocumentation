import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/Constants';

export class RequestInfo {
  constructor(name: string, method: string, path: string, parameters: { [key: string]: any }, headers: { [key: string]: any }, autorizationRequired: boolean = false) {
    this.name = name
    this.method = method
    this.path = path
    this.parameters = parameters
    this.headers = headers
    this.authorizationRequired = autorizationRequired

  }

  name: string
  method: string
  path: string
  parameters: { [key: string]: any }
  headers: { [key: string]: any }
  authorizationRequired: boolean
}

@Component({
  selector: 'app-example-request',
  templateUrl: './example-request.component.html',
  styleUrls: ['./example-request.component.css']
})
export class ExampleRequestComponent implements OnInit {

  ngOnInit(): void {
    this.parametersCount = Object.keys(this.reqInfo.parameters).length
    if (this.reqInfo.authorizationRequired)
      this.reqInfo.headers = { ...Constants.ExampleDPoPAuthorization, ...this.reqInfo.headers }
  }

  parametersCount: number = 0

  @Input()
  reqInfo: RequestInfo = undefined!;

  avoidSorting(): number {
    return 0
  }

  isString(obj: any) {
    return typeof obj === 'string'
  }
}
