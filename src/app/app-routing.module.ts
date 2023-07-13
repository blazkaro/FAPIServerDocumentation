import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushedAuthorizationRequestsComponent } from './components/endpoints/pushed-authorization-requests/pushed-authorization-requests.component';
import { ClientAuthenticationComponent } from './components/general/client-authentication/client-authentication.component';
import { RichAuthorizationRequestsComponent } from './components/general/rich-authorization-requests/rich-authorization-requests.component';
import { DemonstratingProofOfPossessionComponent } from './components/general/demonstrating-proof-of-possession/demonstrating-proof-of-possession.component';
import { FirstRunComponent } from './components/begin/first-run/first-run.component';
import { AuthorizationComponent } from './components/endpoints/authorization/authorization.component';
import { DiscoveryComponent } from './components/endpoints/discovery/discovery.component';

const routes: Routes = [
  { path: 'first_run', component: FirstRunComponent },
  { path: 'client_authentication', component: ClientAuthenticationComponent },
  { path: 'rich_authorization_requests', component: RichAuthorizationRequestsComponent },
  { path: 'demonstrating_proof_of_possession', component: DemonstratingProofOfPossessionComponent },
  { path: 'pushed_authorization_requests', component: PushedAuthorizationRequestsComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'discovery', component: DiscoveryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
