export class OpenIdAuthorizationDetail {
    readonly type: string = "openid"
    readonly actions: { [key: string]: any } = {
        'grant_management_query': {},
        'grant_management_revoke': {}
    }
    readonly locations: Array<string> = []
}