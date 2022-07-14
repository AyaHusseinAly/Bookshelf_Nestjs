"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublisherDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_publisher_dto_1 = require("./create-publisher.dto");
class UpdatePublisherDto extends (0, mapped_types_1.PartialType)(create_publisher_dto_1.CreatePublisherDto) {
}
exports.UpdatePublisherDto = UpdatePublisherDto;
//# sourceMappingURL=update-publisher.dto.js.map