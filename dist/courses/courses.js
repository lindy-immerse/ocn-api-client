"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * Upload Courses
 */
const url = "/learning/odatav4/public/admin/ocn/v1/OcnCourses";
function OCNPostCourses(host, bearerToken, request) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(request);
        const response = yield axios_1.default.post(host + url, request, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearerToken}`,
            }
        });
        console.log("inside OCNPostCourses", response);
        console.log("inside OCNPostCourses Data", response.data);
        // return response.data as OCNCoursesResponse;
    });
}
exports.OCNPostCourses = OCNPostCourses;
