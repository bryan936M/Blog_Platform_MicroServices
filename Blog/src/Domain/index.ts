import BlogFactory, { IBlogOptions } from "./Blog";
import {randomUUID} from "crypto"

const makeId = () => randomUUID();

const blogFactory = new BlogFactory({makeId});

export class BlogClass extends blogFactory.create() {
  constructor(options: IBlogOptions) {
    super(options);
  }
}

// export const Blog = blogFactory.create();
