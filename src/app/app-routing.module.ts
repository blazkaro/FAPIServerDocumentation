import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushedAuthorizationRequestsComponent } from './components/endpoints/pushed-authorization-requests/pushed-authorization-requests.component';
import { ClientAuthenticationComponent } from './components/general/client-authentication/client-authentication.component';
import { RichAuthorizationRequestsComponent } from './components/general/rich-authorization-requests/rich-authorization-requests.component';
import { DemonstratingProofOfPossessionComponent } from './components/general/demonstrating-proof-of-possession/demonstrating-proof-of-possession.component';
import { FirstRunComponent } from './components/begin/first-run/first-run.component';
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

const routes: Routes = [
  { path: 'first_run', component: FirstRunComponent },
  { path: 'necessary_services', component: NecessaryServicesComponent },
  { path: 'client_authentication', component: ClientAuthenticationComponent },
  { path: 'rich_authorization_requests', component: RichAuthorizationRequestsComponent },
  { path: 'demonstrating_proof_of_possession', component: DemonstratingProofOfPossessionComponent },
  { path: 'pushed_authorization_requests', component: PushedAuthorizationRequestsComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'token', component: TokenComponent },
  { path: 'token_introspection', component: TokenIntrospectionComponent },
  { path: 'token_revocation', component: TokenRevocationComponent },
  { path: 'grant_querying', component: GrantQueryingComponent },
  { path: 'grant_revocation', component: GrantRevocationComponent },
  { path: 'client_initiated_backchannel_authentication', component: ClientInitiatedBackchannelAuthenticationComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'discovery', component: DiscoveryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
