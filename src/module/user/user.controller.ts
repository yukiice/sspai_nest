import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { UpdateUserDto, UserDto, UserQueryDto } from "./dto/user.dto";

@ApiTags("用户模块")
@Controller('user')
export class UserController{
  constructor(private userService: UserService){}

 @Get()
 @ApiOperation({summary:"获取用户列表"})
  async list(@Query() dto:UserQueryDto){
    return this.userService.list(dto)
 }


  @Post('register')
  @ApiOperation({ summary: '用户注册' })
  async register(@Body() dto: UserDto): Promise<void> {
    await this.userService.register(dto)
  }
}
