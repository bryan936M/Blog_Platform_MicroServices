import { BlogClass } from "../Domain";
import { IBlogRepository } from "../Interfaces/IBlogRepository";
import { IUseCase } from "../Interfaces/IUseCase";

interface IBlogInputs extends BlogClass {
  id: string;
}

interface IBlogResults {}

export default class UpdateBlog implements IUseCase<IBlogInputs, IBlogResults> {
  constructor(private readonly _blogRepository: IBlogRepository) {}

  public async execute(input: IBlogInputs): Promise<IBlogResults> {
    // const blogToUpdate = await this._blogRepository.findWithId(input.id);

    // if (!blogToUpdate) {
    //   throw new Error("Blog does not exist.");
    // }

    // const updateBlog: IBlog = {
    //   ...blogToUpdate,
    //   ...(input.title && { title: input.title }),
    //   ...(input.coverImg && { coverImg: input.coverImg }),
    //   ...(input.content && { content: input.content }),
    //   ...(input.author && { author: input.author }),
    // };

    // return this._blogRepository.update(updateBlog);
    throw new Error("Method not implemented.");
  }
}
