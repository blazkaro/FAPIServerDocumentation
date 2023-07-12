export class PhotoApiAuthorizationDetail {
    readonly type: string = "photo-api"
    readonly actions: { [key: string]: any } = {
        'read': {
            'geolocation': [
                {
                    'lat': -32.364,
                    'lng': 153.207
                },
                {
                    'lat': -35.364,
                    'lng': 158.207
                }
            ],
            'metadata': [
                'title',
                'description',
                'author',
                'likes',
                'created_at'
            ]
        },
        'write': {
            'geolocation': [
                {
                    'lat': -35.364,
                    'lng': 158.207
                }
            ]
        }
    }
    readonly locations: Array<string> = [
        'https://server.example.net/',
        'https://resource.local/other'
    ]
}