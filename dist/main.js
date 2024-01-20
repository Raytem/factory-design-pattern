"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Types_1 = require("./enums/Types");
const ServiceFactory_1 = require("./factory/ServiceFactory");
const Type2Service_1 = require("./services/Type2Service");
const serviceFactory = new ServiceFactory_1.ServiceFactory();
//TYPE_1
const service1 = serviceFactory.createService(Types_1.Types.TYPE_1);
const newType1 = service1.create({
    name: "Type1",
});
console.log(newType1);
//TYPE_2
const service2 = serviceFactory.createService(Types_1.Types.TYPE_2);
if (service2 instanceof Type2Service_1.Type2Service) {
    const newType2 = service2.create({
        name: "Type2",
        description: 'desc',
    });
    console.log(newType2);
}
