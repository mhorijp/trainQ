"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEnded = void 0;
var helpers_1 = require("../utilities/helpers");
var constants_1 = require("../utilities/constants");
var i18next_1 = __importDefault(require("i18next"));
exports.SessionEnded = {
    canHandle: function (handlerInput) {
        return helpers_1.IsType(handlerInput, constants_1.RequestTypes.SessionEnded);
    },
    handle: function (handlerInput) {
        var speechText = i18next_1.default.t(constants_1.Strings.GOODBYE_MSG);
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18next_1.default.t(constants_1.Strings.SKILL_NAME), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=SessionEnded.js.map