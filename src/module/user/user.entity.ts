import { BaseEntity, Column, Entity } from "typeorm";
import { CommonEntity } from "../../common/entity/common.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name:'user'})
export class UserEntity extends CommonEntity{
  @ApiProperty({description: '用户名'})
  @Column()
  readonly name: string;

  @ApiProperty({description: '邮箱'})
  @Column()
  readonly email: string;

  @ApiProperty({description:"性别"})
  @Column({
    default: '0',
    type: 'enum',
    enum: ['0', '1'],
  })
  readonly sex: string;

  @ApiProperty({description: '头像'})
  @Column()
  readonly avatar: string;

  @ApiProperty({description: '状态'})
  @Column({
    default: 1,
    type: 'enum',
    enum: [0, 1],
  })
  readonly status: number;
}