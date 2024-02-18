import { Controller, Post, ParseIntPipe, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post(':id')
  createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profileDto: CreateProfileDto,
  ) {
    return this.profileService.createProfile(id, profileDto);
  }
}
