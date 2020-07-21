import axios from "axios";
import { OCNCoursesRequest, OCNCoursesResponse } from "./model";

/**
 * Upload Courses
 */

const url = "/learning/odatav4/public/admin/ocn/v1/OcnCourses"

export async function OCNPostCourses(host: string, bearerToken: string, request: OCNCoursesRequest) {
    console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(request);

    const response = await axios.post(host + url, request, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        }
    });

    console.log("inside OCNPostCourses", response);
    console.log("inside OCNPostCourses Data", response.data);

    // return response.data as OCNCoursesResponse;
}
