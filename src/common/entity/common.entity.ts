import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export abstract class CommonEntity extends BaseEntity{

  @ApiProperty({description:"用户id"})
  @PrimaryGeneratedColumn()
  @Column()
  id: number;
  @ApiProperty({description:"创建时间"})
  @CreateDateColumn({name:'create_time'})
  @Column()
  createTime: Date;
  @ApiProperty({description:"更新时间"})
  @CreateDateColumn({name:'update_time'})
  @Column()
  updateTime: Date;
}