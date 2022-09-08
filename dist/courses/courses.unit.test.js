"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const courses_1 = require("./courses");
jest.mock('axios');
const mockedAxios = axios_1.default;
const url = "/learning/odatav4/public/admin/ocn/v1/OcnCourses";
const fakeHost = "fakeHost";
const fakeToken = "faketoken";
const fakeRequest = {};
const fakeApplicationInterfaceKey = "fakeKey";
describe('OCNPostCourses', () => {
    it('function gets called with correct parameters when called without optional arguments', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: "data" }));
        yield (0, courses_1.OCNPostCourses)(fakeHost, fakeToken, fakeRequest);
        expect(mockedAxios.post).toHaveBeenCalledWith(fakeHost + url, fakeRequest, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${fakeToken}`
            }
        });
    }));
    it('function gets called with correct parameters when called with optional arguments', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: "data" }));
        yield (0, courses_1.OCNPostCourses)(fakeHost, fakeToken, fakeRequest, fakeApplicationInterfaceKey);
        expect(mockedAxios.post).toHaveBeenCalledWith(fakeHost + url, fakeRequest, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${fakeToken}`,
                "Application-Interface-Key": fakeApplicationInterfaceKey
            }
        });
    }));
});
