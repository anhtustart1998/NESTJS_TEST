import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // This class extends PartialType, which makes all properties of CreateUserDto optional.
  // This is useful for update operations where not all fields need to be provided.
  // The PartialType function is imported from @nestjs/mapped-types.
  // It creates a new class with the same properties as CreateUserDto but makes them optional.
}
