import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


export abstract class CommonEntity extends BaseEntity{


  @PrimaryGeneratedColumn()
  id: number;


  @CreateDateColumn({name:'create_time'})
  createTime: Date;


  @CreateDateColumn({name:'update_time'})
  updateTime: Date;
}