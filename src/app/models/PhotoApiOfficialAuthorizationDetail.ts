export class PhotoApiOfficialAuthorizationDetail {
    readonly type: string = "photo-api"
    readonly actions: Array<string> = [
        'read',
        'write'
    ]
    readonly locations: Array<string> = [
        'https://server.example.net/',
        'https://resource.local/other'
    ]
    readonly datatypes: Array<string> = [
        'metadata',
        'images'
    ]
    readonly geolocation: Array<any> = [
        {
            'lat': -32.364,
            'lng': 153.207
        },
        {
            'lat': -35.364,
            'lng': 158.207
        }
    ]
}