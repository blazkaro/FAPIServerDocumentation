import { Component } from '@angular/core';

@Component({
  selector: 'app-first-run',
  templateUrl: './first-run.component.html',
  styleUrls: ['./first-run.component.css'],
})
export class FirstRunComponent {
  minimalConfigurationExample: string = `services.AddFapiServer()
    .UseInMemorySecretCredentialsStore()
    .AddWebServices()
    .UseDefaultAuthorizationRequestPersistenceService()
    .AddUserService<>()
    .AddCibaUserNotificationService<>();`

  efStorageConfigurationExample: string = 'services.AddFapiStorageEntityFramework();'
}
