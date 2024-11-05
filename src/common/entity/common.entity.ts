import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


export abstract class CommonEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;


  @CreateDateColumn({name:'create_time',default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @UpdateDateColumn({name:'update_time',default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;
}