import { CreateType1Dto } from "../dto/type1/CreateType1Dto";
import { UpdateType1Dto } from "../dto/type1/UpdateType2Dto";
import { Type1Entity } from "../entity/Type1Entity";
import { ITypesService } from "../interfaces/ITypesService";

export class Type1Service implements ITypesService {
    getAll(): Type1Entity[] {
        return [];
    }
    create(createTypeDto: CreateType1Dto): Type1Entity {
        return {
            id: 1,
            ...createTypeDto,
        }
    }
    update(id: number, updateTypeDto: UpdateType1Dto): Type1Entity {
        return {
            id,
            ...updateTypeDto,
        }
    }
    delete(id: number): Type1Entity {
        return {
            id,
            name: 'deletedType1',
        }
    }
   

}