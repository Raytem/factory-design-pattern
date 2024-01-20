import { AbstractCreateTypeDto } from "../dto/abstract/AbstractCreateTypeDto";
import { AbstractUpdateTypeDto } from "../dto/abstract/AbstractUpdateTypeDto";
import { AbstractTypeEntity } from "../entity/abstract/AbstractTypeEntity";

export interface ITypesService {
    getAll(): AbstractTypeEntity[];
    create(createTypeDto: AbstractCreateTypeDto): AbstractTypeEntity;
    update(id: number, updateTypeDto: AbstractUpdateTypeDto): AbstractTypeEntity;
    delete(id: number): AbstractTypeEntity;
}