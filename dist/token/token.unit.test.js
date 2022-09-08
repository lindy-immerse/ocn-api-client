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
const model_1 = require("./model");
const token_1 = require("./token");
jest.mock('axios');
const mockedAxios = axios_1.default;
const url = "/learning/oauth-api/rest/v1/token";
const fakeHost = "fakeHost";
const fakeClientId = "fakeClientId";
const fakeClientSecret = "fakeClientSecret";
const fakeUserId = "fakeUserId";
const fakeTokenRequest = new model_1.OCNTokenRequest(fakeClientId, fakeClientSecret, fakeUserId);
const fakeApplicationInterfaceKey = "fakeKey";
describe('OCNSignin', () => {
    it('function gets called with correct parameters when called without optional arguments', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: "data" }));
        yield (0, token_1.OCNSignin)(fakeHost, fakeClientId, fakeClientSecret, fakeUserId);
        expect(mockedAxios.post).toHaveBeenCalledWith(fakeHost + url, fakeTokenRequest, {
            headers: {}
        });
    }));
    it('function gets called with correct parameters when called with optional arguments', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: "data" }));
        yield (0, token_1.OCNSignin)(fakeHost, fakeClientId, fakeClientSecret, fakeUserId, fakeApplicationInterfaceKey);
        expect(mockedAxios.post).toHaveBeenCalledWith(fakeHost + url, fakeTokenRequest, {
            headers: {
                "Application-Interface-Key": fakeApplicationInterfaceKey
            }
        });
    }));
});
