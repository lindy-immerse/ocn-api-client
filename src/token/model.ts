export interface OCNTokenRequestScope {
    /**
     * same as the client_id
     */
    companyId: string
    /**
     * always “learning_public_api”
     */
    resourceType: string;
    /**
     * Can be any user
     */
    userId: string;
    /**
     * "user" or "admin"
     */
    userType: string;
}

export class OCNTokenRequest {
    /**
     * typically, the same as your demo tenant ID
     */
    public client_id: string;

    /**
     * This is the client secret that was generated in
     * the previous step or the one that the customer provided you
     */
    public client_secret: string;

    /**
     * always “client_credentials”
     */
    public grant_type: string;


    public scope: OCNTokenRequestScope;

    constructor(
        client_id: string,
        client_secret: string,
        userId: string,
    ) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.grant_type = "client_credentials";
        this.scope = <OCNTokenRequestScope>{
            companyId: client_id,
            resourceType: "learning_public_api",
            userId,
            userType: "admin"
        };
    }
}

export interface OCNTokenResponse {
    /**
     * Token to use in authenticated requests as part of the Headers:
     * "Authorization: Bearrer <token>"
     */
    access_token: string;
    /**
     * valid for
     */
    expires_in: number;
    /**
     * "Bearer"
     */
    token_type: string;
}
