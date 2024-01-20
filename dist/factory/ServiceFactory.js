"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceFactory = void 0;
const Types_1 = require("../enums/Types");
const Type1Service_1 = require("../services/Type1Service");
const Type2Service_1 = require("../services/Type2Service");
class ServiceFactory {
    createService(type) {
        switch (type) {
            case Types_1.Types.TYPE_1:
                return new Type1Service_1.Type1Service();
            case Types_1.Types.TYPE_2:
                return new Type2Service_1.Type2Service();
        }
    }
}
exports.ServiceFactory = ServiceFactory;
