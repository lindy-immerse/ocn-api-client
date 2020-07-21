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
const model_1 = require("./model");
/**
 * Obtain a token
 */
const url = "/learning/oauth-api/rest/v1/token";
function OCNSignin(host, clientId, clientSecret, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenRequest = new model_1.OCNTokenRequest(clientId, clientSecret, userId);
        const response = yield axios_1.default.post(host + url, tokenRequest);
        return response.data;
    });
}
exports.OCNSignin = OCNSignin;
