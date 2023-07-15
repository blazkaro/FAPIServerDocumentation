import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { PushedAuthorizationRequestsComponent } from './components/endpoints/pushed-authorization-requests/pushed-authorization-requests.component';
import { ExampleRequestComponent } from './components/example-request/example-request.component'
import { MatCardModule } from '@angular/material/card';
import { ClientAuthenticationComponent } from './components/general/client-authentication/client-authentication.component';
import { RichAuthorizationRequestsComponent } from './components/general/rich-authorization-requests/rich-authorization-requests.component';
import { DemonstratingProofOfPossessionComponent } from './components/general/demonstrating-proof-of-possession/demonstrating-proof-of-possession.component';
import { FirstRunComponent } from './components/begin/first-run/first-run.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { AuthorizationComponent } from './components/endpoints/authorization/authorization.component';
import { DiscoveryComponent } from './components/endpoints/discovery/discovery.component';
import { TokenComponent } from './components/endpoints/token/token.component';
import { TokenIntrospectionComponent } from './components/endpoints/token-introspection/token-introspection.component';
import { TokenRevocationComponent } from './components/endpoints/token-revocation/token-revocation.component';
import { GrantQueryingComponent } from './components/endpoints/grant-querying/grant-querying.component';
import { GrantRevocationComponent } from './components/endpoints/grant-revocation/grant-revocation.component';
import { ClientInitiatedBackchannelAuthenticationComponent } from './components/endpoints/client-initiated-backchannel-authentication/client-initiated-backchannel-authentication.component';
import { NecessaryServicesComponent } from './components/begin/necessary-services/necessary-services.component';
import { UserinfoComponent } from './components/endpoints/userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    PushedAuthorizationRequestsComponent,
    ExampleRequestComponent,
    ClientAuthenticationComponent,
    RichAuthorizationRequestsComponent,
    DemonstratingProofOfPossessionComponent,
    FirstRunComponent,
    AuthorizationComponent,
    DiscoveryComponent,
    TokenComponent,
    TokenIntrospectionComponent,
    TokenRevocationComponent,
    GrantQueryingComponent,
    GrantRevocationComponent,
    ClientInitiatedBackchannelAuthenticationComponent,
    NecessaryServicesComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      languages: {
        csharp: () => import('highlight.js/lib/languages/csharp')
      }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
