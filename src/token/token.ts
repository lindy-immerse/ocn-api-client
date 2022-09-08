import axios from "axios";
import { OCNTokenRequest, OCNTokenResponse } from "./model";

/**
 * Obtain a token
 */

const url = "/learning/oauth-api/rest/v1/token"

export async function OCNSignin(host: string, clientId: string, clientSecret: string, userId: string, applicationInterfaceKey?: string): Promise<OCNTokenResponse> {
    const tokenRequest = new OCNTokenRequest(
        clientId, clientSecret, userId,
    );

    let headers = {};

    if (applicationInterfaceKey) {
        headers = {
            "Application-Interface-Key": applicationInterfaceKey
        }
    }

    const response = await axios.post(host + url, tokenRequest, { headers: headers });

    return response.data as OCNTokenResponse;
}
