import { BlogClass } from "../Domain";
import { IBlogRepository } from "../Interfaces/IBlogRepository";

export default class InMemoryRepository implements IBlogRepository {
  private readonly _blogs: BlogClass[] = [];

  readAll(): Promise<BlogClass[]> {
    return Promise.resolve(this._blogs);
  }
  create(blog: BlogClass): Promise<{ id: unknown }> {
    this._blogs.push(blog);
    return Promise.resolve({ id: blog.id });
  }
  findWithId(id: string): Promise<BlogClass | null> {
    const blog = this._blogs.find((b) => b.id === id);
    return Promise.resolve(blog || null);
  }
  update(blog: BlogClass): Promise<BlogClass> {
    throw new Error("Method not implemented.");
  }
  deleteWithId(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
