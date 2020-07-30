import axios from "axios";
import { OCNCompletionStatus } from "./model";

/**
 * Upload Courses
 */

const url = "/learning/odatav4/public/admin/learningevent-service/v1/OCNLearningEvents"

export async function OCNCompletionStatus(host: string, bearerToken: string, completion: OCNCompletionStatus) {

    const response = await axios.post(host + url, completion, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        }
    });

    return response.data;
}
