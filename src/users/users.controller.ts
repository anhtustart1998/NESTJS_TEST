import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users') // /users
// This controller handles requests to the /users endpoint
export class UsersController {
  // The UsersController class is decorated with @Controller('users'), which means it will handle requests to the /users endpoint.
  constructor(private readonly usersService: UsersService) {} // Injects the UsersService into the controller
  @Get() // GET /users or /users?role=value
  // The @Get() decorator is used to define a route for the GET HTTP method.
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role); // Calls the findAll method of the UsersService to get all users or filter by role
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // Calls the findOne method of the UsersService to get a user by ID
  }

  @Post() // POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user); // Calls the create method of the UsersService to create a new user
  }

  @Patch(':id') //PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate); // Calls the update method of the UsersService to update a user by ID
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id); // Calls the delete method of the UsersService to delete a user by ID
  }
}
