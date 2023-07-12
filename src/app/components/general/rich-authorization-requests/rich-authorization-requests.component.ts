import { Component } from '@angular/core';
import { OpenIdAuthorizationDetail } from 'src/app/models/OpenIdAuthorizationDetail';
import { PhotoApiAuthorizationDetail } from 'src/app/models/PhotoApiAuthorizationDetail';
import { PhotoApiOfficialAuthorizationDetail } from 'src/app/models/PhotoApiOfficialAuthorizationDetail';

@Component({
  selector: 'app-rich-authorization-requests',
  templateUrl: './rich-authorization-requests.component.html',
  styleUrls: ['./rich-authorization-requests.component.css']
})
export class RichAuthorizationRequestsComponent {
  officialPhotoApiExample: PhotoApiOfficialAuthorizationDetail = new PhotoApiOfficialAuthorizationDetail()
  photoApiExample: PhotoApiAuthorizationDetail = new PhotoApiAuthorizationDetail()
  openIdExample: OpenIdAuthorizationDetail = new OpenIdAuthorizationDetail()
}
