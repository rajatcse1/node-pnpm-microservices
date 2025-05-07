import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { PostService } from "../services/post.service";

@injectable()
export class PostController {
  constructor(
    @inject(PostService)
    private postService: PostService
  ) {}

  async getPosts(req: Request, res: Response) {
    let posts;
    try {
      posts = await this.postService.getPosts();
      if (!posts) {
        return res.status(404).json({ message: "No posts found" });
      }
      res.status(200).json(posts);
    } catch (error) {
      throw error;
    }
  }
}
