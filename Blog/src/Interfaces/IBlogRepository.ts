import { BlogClass } from "../Domain";



export interface IBlogRepository {
  readAll(): Promise<BlogClass[]>;
  create(blog: BlogClass): Promise<{id: unknown}>;
  findWithId(id: string): Promise<BlogClass | null>;
  update(blog: BlogClass): Promise<BlogClass>;
  deleteWithId(id: string): Promise<void>;
}
