import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Endpoint extends BarItem {
  rfc: URL | null
}

export interface BarItem {
  name: string
  docPath: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FAPIServerDocumentation';

  endpoints: Endpoint[] = [
    {
      name: "Pushed Authorization Requests",
      rfc: new URL("https://www.rfc-editor.org/rfc/rfc9126.html"),
      docPath: "/pushed_authorization_requests"
    },
    {
      name: "Authorization",
      rfc: new URL("https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint"),
      docPath: "/authorization"
    },
    {
      name: "Token",
      rfc: new URL("https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint"),
      docPath: "/token"
    },
    {
      name: "Token Introspection",
      rfc: new URL("https://www.rfc-editor.org/rfc/rfc7662.html"),
      docPath: "/token_introspection"
    },
    {
      name: "Token Revocation",
      rfc: new URL("https://www.rfc-editor.org/rfc/rfc7009.html"),
      docPath: "/token_revocation"
    },
    {
      name: "Grant Querying",
      rfc: new URL("https://openid.net/specs/fapi-grant-management.html#name-query-status-of-a-grant"),
      docPath: "/grant_querying"
    },
    {
      name: "Grant Revocation",
      rfc: new URL("https://openid.net/specs/fapi-grant-management.html#name-revoke-grant"),
      docPath: "/grant_revocation"
    },
    {
      name: "Client-Initiated Backchannel Authentication",
      rfc: new URL("https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html"),
      docPath: "/client_initiated_backchannel_authentication"
    },
    {
      name: "UserInfo",
      rfc: new URL("https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"),
      docPath: "/userinfo"
    },
    {
      name: "Discovery & PASERKs",
      rfc: null,
      docPath: "discovery"
    }
  ]

  general: BarItem[] = [
    {
      name: "Client Authentication",
      docPath: "client_authentication"
    },
    {
      name: "Rich Authorization Requests",
      docPath: "rich_authorization_requests"
    },
    {
      name: "Demonstrating Proof Of Possession",
      docPath: "demonstrating_proof_of_possession"
    }
  ]

  howToStart: BarItem[] = [
    {
      name: 'First run',
      docPath: 'first_run'
    },
    {
      name: 'Implementing necessary services',
      docPath: 'necessary_services'
    }
  ]

  constructor(private router: Router) { }

  openDoc(docPath: string): void {
    this.router.navigate([docPath])
  }
}
