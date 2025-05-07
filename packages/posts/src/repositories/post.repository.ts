import { injectable } from "tsyringe";
import { posts as postData } from "../../mock/post.mock";
import { Post } from "../types/post";

@injectable()
export class PostRepository {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return postData;
    } catch (error) {
      throw error;
    }
  }
}
