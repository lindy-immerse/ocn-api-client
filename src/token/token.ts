import axios from "axios";
import { OCNTokenRequest, OCNTokenResponse } from "./model";

/**
 * Obtain a token
 */

const url = "/learning/oauth-api/rest/v1/token"

export async function OCNSignin(host: string, clientId: string, clientSecret: string, userId: string): Promise<OCNTokenResponse> {
    const tokenRequest = new OCNTokenRequest(
        clientId, clientSecret, userId,
    );

    const response = await axios.post(host + url, tokenRequest);

    return response.data as OCNTokenResponse;
}
