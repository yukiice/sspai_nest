import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from "cache-manager";

@Injectable()
export class CacheService {
  private cache!: Cache;
  private ioRedis!: Redis;
  constructor(@Inject(CACHE_MANAGER) cache: Cache) {
    this.cache = cache;
  }
}