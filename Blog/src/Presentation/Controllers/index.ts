// Handle Requests and Responses

import express, { Request, Response, NextFunction } from "express";
import UpdateBlogController from "./UpdateBlogController";
import DeleteBlogController from "./DeleteBlogController";
import IController from "../../Interfaces/Icontroller";

export default class BlogController {
  constructor(
    private readonly writeBlogController: IController,
    private readonly readBlogsController: IController
  ) {}

  public route(app: express.Application) {
    app.get("/", this.index);
    app.post("/create", this.create.bind(this));
    app.get("/read", this.read.bind(this));
  }

  public index(req: Request, res: Response) {
    res.send("This is the blog service!");
  }

  public create(req: Request, res: Response, next: NextFunction) {
    this.writeBlogController.handle(req, res).catch((err) => {
      next(err);
    });
  }

  public read(req: Request, res: Response, next: NextFunction) {
    console.log("BlogController.read...");
    this.readBlogsController.handle(req, res).catch((err) => {
      next(err);
    });
  }

  public update(req: Request, res: Response) {
    UpdateBlogController.handle(req, res);
  }

  public delete(req: Request, res: Response) {
    DeleteBlogController.handle(req, res);
  }
}

export {default as WriteBlogController} from "./WriteBlogController";
export {default as ReadBlogsController} from "./ReadBlogsController";
