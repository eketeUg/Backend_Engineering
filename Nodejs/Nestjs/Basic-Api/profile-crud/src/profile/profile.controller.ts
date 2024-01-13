import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProfileService, role } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  // adding profile service as a dependency injection
  constructor(private readonly profileService: ProfileService) {}

  @Get() //GET /profile or users?age=value
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: role) {
    return this.profileService.findAll(role);
  }

  @Get(':id') // GET /profile/id and using parseIntPipe to transform and validate the param to a number
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOne(id);
  }
  @Post() // POST /profile
  creatProfile(@Body(ValidationPipe) createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Patch(':id') //PATCH /profile/id
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id') // DELETE /profile/id
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.delete(id);
  }
}
