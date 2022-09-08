import axios from "axios";
import { OCNCoursesRequest, OCNCoursesResponse } from "./model";

/**
 * Upload Courses
 */

const url = "/learning/odatav4/public/admin/ocn/v1/OcnCourses"

export async function OCNPostCourses(host: string, bearerToken: string, request: OCNCoursesRequest, applicationInterfaceKey?: string) {
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

    const response = await axios.post(host + url, request, {
        headers: headers
    });

    return response.data as OCNCoursesResponse;
}
