import { Injectable } from "@nestjs/common";
import { UpdateUserDto, UserDto, UserQueryDto } from "./dto/user.dto";
import { EntityManager, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { paginate } from "../../helper/paginate";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Pagination } from "../../helper/paginate/pagination";
import { ResultException } from "../../common/exception/result.exception";
import { ErrorTextEnum } from "../../common/enum/errorText.enum";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectEntityManager() private entityManager: EntityManager,
  ) {}

  //list
  async list({page,pageSize}:UserQueryDto):Promise<Pagination<UserEntity>>{
    const queryBuilder = this.userRepository.createQueryBuilder('user')
    return paginate(queryBuilder,{
      page,
      pageSize
    });
  }

  async create(userDto: UpdateUserDto): Promise<void> {
    const exists = await this.userRepository.findOne({where:{email:userDto.email}})
    if (exists)
      throw new ResultException(ErrorTextEnum.SYSTEM_USER_EXISTS)
    await this.entityManager.transaction(async (manager)=>{
      const u = manager.create(UserEntity, {
        ...userDto
      })
      const savedUser  = await manager.save(u)
      if (!savedUser )
        throw new ResultException(ErrorTextEnum.CODE_ERROR)
      return savedUser
    })
  }
}
