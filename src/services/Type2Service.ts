import { Type2Entity } from "../entity/Type2Entity";
import { ITypesService } from "../interfaces/ITypesService";
import { CreateType2Dto } from '../dto/type2/CreateType2Dto';
import { UpdateType2Dto } from "../dto/type2/UpdateType2Dto";

export class Type2Service implements ITypesService {
    getAll(): Type2Entity[] {
        return [];
    }
    create(createTypeDto: CreateType2Dto): Type2Entity {
        return {
            id: 1,
            ...createTypeDto,
        }
    }
    update(id: number, updateTypeDto: UpdateType2Dto): Type2Entity {
        return {
            id,
            ...updateTypeDto,
        }
    }
    delete(id: number): Type2Entity {
        return {
            id,
            name: 'deletedType2',
            description: 'deletedType2',
        }
    }

}