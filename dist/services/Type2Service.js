"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type2Service = void 0;
class Type2Service {
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
            name: 'deletedType2',
            description: 'deletedType2',
        };
    }
}
exports.Type2Service = Type2Service;
