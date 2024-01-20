import { Types } from "../enums/Types";
import { ITypesService } from "../interfaces/ITypesService";
import { Type1Service } from "../services/Type1Service";
import { Type2Service } from "../services/Type2Service";

export class ServiceFactory {
    createService(type: Types): ITypesService {
        switch (type) {
            case Types.TYPE_1:
                return new Type1Service();
            case Types.TYPE_2:
                return new Type2Service();
        }
    }
}