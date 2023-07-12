import { Component, Input, OnInit } from '@angular/core';

export class RequestInfo {
  constructor(name: string, method: string, contentType: string, path: string, parameters: { [key: string]: any }) {
    this.name = name
    this.method = method
    this.contentType = contentType
    this.path = path
    this.parameters = parameters
  }

  name: string
  method: string
  contentType: string
  path: string
  parameters: { [key: string]: any }
}

@Component({
  selector: 'app-example-request',
  templateUrl: './example-request.component.html',
  styleUrls: ['./example-request.component.css']
})
export class ExampleRequestComponent implements OnInit {

  ngOnInit(): void {
    this.parametersCount = Object.keys(this.reqInfo.parameters).length
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
