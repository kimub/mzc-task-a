import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts(): string {
    return 'Get Posts';
  }
}
