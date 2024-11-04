import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

// 公共dto id 创建时间 更新时间
export class CommonDto{
    @ApiProperty({ description: 'id' })
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    id: string;

    @ApiProperty({ description: '创建时间' })
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    createTime: string;

    @ApiProperty({ description: '更新时间' })
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    updateTime: string;
}