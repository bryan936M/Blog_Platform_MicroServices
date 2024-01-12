interface IBlogDependencies {
  makeId: () => string;
}

export interface IBlogOptions {
  id?: string | number;
  coverImg: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export default class BlogFactory {
  private makeId: () => string;

  constructor({ makeId }: IBlogDependencies) {
    if (typeof makeId !== "function") {
      throw new Error("Invalid dependencies injected.");
    }

    this.makeId = makeId;
  }

  create(): any {
    const id = '1';

    return class Blog {
      private id: string | number | undefined;
      private coverImg: string;
      private title: string;
      private content: string;
      private author: string;
      private createdAt: Date;
    
      constructor(options: IBlogOptions) {
        console.log('Blog:', options)
        Blog.verifyTitle(options.title);

        this.id = options.id;
        this.coverImg = options.coverImg;
        this.title = options.title;
        this.content = options.content;
        this.author = options.author;
        this.createdAt = options.createdAt;
      }

      private static verifyTitle(title: string) { 
        if (!title) {
          throw new Error("Blog must have a title");
        }
      }
    
      // You can add any additional methods or properties specific to the Blog class here
    }
  }
}
