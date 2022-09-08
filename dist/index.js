"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OCNSignin = exports.OCNCompletionStatus = exports.OCNPostCourses = void 0;
var courses_1 = require("./courses/courses");
Object.defineProperty(exports, "OCNPostCourses", { enumerable: true, get: function () { return courses_1.OCNPostCourses; } });
var completion_1 = require("./completion/completion");
Object.defineProperty(exports, "OCNCompletionStatus", { enumerable: true, get: function () { return completion_1.OCNCompletionStatus; } });
var token_1 = require("./token/token");
Object.defineProperty(exports, "OCNSignin", { enumerable: true, get: function () { return token_1.OCNSignin; } });
