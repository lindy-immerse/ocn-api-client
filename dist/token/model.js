"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OCNTokenRequest = void 0;
class OCNTokenRequest {
    constructor(client_id, client_secret, userId) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.grant_type = "client_credentials";
        this.scope = {
            companyId: client_id,
            resourceType: "learning_public_api",
            userId,
            userType: "admin"
        };
    }
}
exports.OCNTokenRequest = OCNTokenRequest;
