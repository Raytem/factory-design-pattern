import { Types } from "./enums/Types";
import { ServiceFactory } from "./factory/ServiceFactory";
import { Type2Service } from "./services/Type2Service";

const serviceFactory = new ServiceFactory();

//TYPE_1
const service1 = serviceFactory.createService(Types.TYPE_1);
const newType1 = service1.create({
    name: "Type1",
});
console.log(newType1) 

//TYPE_2
const service2 = serviceFactory.createService(Types.TYPE_2);
if (service2 instanceof Type2Service) {
    const newType2 = service2.create({
        name: "Type2",
        description: 'desc',
    });
    console.log(newType2);
}

