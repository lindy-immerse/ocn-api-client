import axios from "axios";
import { OCNCompletionStatus } from "./model";

/**
 * Upload Courses
 */

const url = "/learning/odatav4/public/admin/learningevent-service/v1/OCNLearningEvents"

export async function OCNCompletionStatus(host: string, bearerToken: string, completion: OCNCompletionStatus, applicationInterfaceKey?: string) {
    let headers: Record<string,string> = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
    };

    if (applicationInterfaceKey) {
        headers = {
            ...headers,
            "Application-Interface-Key": applicationInterfaceKey
        }
    }

    const response = await axios.post(host + url, completion, {
        headers: headers
    });

    return response.data;
}
