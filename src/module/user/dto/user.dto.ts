import { ApiProperty, IntersectionType, PartialType } from "@nestjs/swagger";
import { IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { PagerDto } from "../../../common/dto/page.dto";
import { CommonDto } from "../../../common/dto/common.dto";

export class UserDto extends CommonDto{

  @ApiProperty({ description: '用户名称' })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({ description: '邮箱' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '性别' })
  @IsOptional()
  @IsString()
  sex?: string;

  @ApiProperty({ description: '头像' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ description: '状态', example: 1 })
  @IsOptional()
  @IsInt()
  status?: number = 1;
}

export class UpdateUserDto extends PartialType(UserDto){}

export class UserQueryDto extends IntersectionType(PagerDto<UserDto>,UpdateUserDto){}

