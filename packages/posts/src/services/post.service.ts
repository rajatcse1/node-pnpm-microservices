import { inject, injectable } from "tsyringe";
import { PostRepository } from "../repositories/post.repository";
import { Post } from "../types/post";
import { log } from "console";

@injectable()
export class PostService {
  constructor(
    @inject(PostRepository)
    private postRepository: PostRepository
  ) {}

  async getPosts(): Promise<Post[]> {
    try {
      const posts = await this.postRepository.getPosts();
      return posts;
    } catch (error) {
      throw error;
    }
  }
}
