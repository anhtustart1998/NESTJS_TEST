import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') // /users
// This controller handles requests to the /users endpoint
export class UsersController {
    @Get() // GET /users or /users?role=value
    // The @Get() decorator is used to define a route for the GET HTTP method.
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
        return []
    }

    @Get(':id') // GET /users/:id
    findOne( @Param('id') id: string) {
        return { id }
    }

    @Post() // POST /users
    create(@Body() users: {}) {
        return users
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate}
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }
}
