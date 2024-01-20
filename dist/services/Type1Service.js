"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type1Service = void 0;
class Type1Service {
    getAll() {
        return [];
    }
    create(createTypeDto) {
        return Object.assign({ id: 1 }, createTypeDto);
    }
    update(id, updateTypeDto) {
        return Object.assign({ id }, updateTypeDto);
    }
    delete(id) {
        return {
            id,
            name: 'deletedType1',
        };
    }
}
exports.Type1Service = Type1Service;
