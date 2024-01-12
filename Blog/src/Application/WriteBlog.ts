import { BlogClass } from '../Domain';
import { IBlogRepository } from "../Interfaces/IBlogRepository";
import { IUseCase } from "../Interfaces/IUseCase";


interface IWriteBlogInput {
  title: string;
  coverImg: string;
  content: string;
  author: string;
}

class BlogOutput {

  constructor(public readonly id: unknown) {}
  public static from(blog: BlogClass): BlogOutput {
    return new BlogOutput(blog.id);
  }
}


export default class WriteBlog implements IUseCase<IWriteBlogInput, BlogOutput> {

  constructor (private readonly _blogRepository: IBlogRepository) {}

  public async execute(input: IWriteBlogInput): Promise<BlogOutput> {
    console.log("WriteBlog:input: ",input);
    const blog = new BlogClass({
      // id: 5,
      title: input.title,
      content:input.content,
      coverImg:input.coverImg,
      author:input.author,
      createdAt: new Date(Date.now()),
    });

    return await this._blogRepository.create(blog);

  }
}