import { Request, Response } from "express";
import IController from "../../Interfaces/Icontroller";
import sendResponse from "../../Utils/FormateData";
import { IUseCase } from "../../Interfaces/IUseCase";

export default class ReadBlogsController implements IController {
  constructor(private readonly _read: IUseCase<any, any>) {}

  public async handle(req: Request, res: Response): Promise<void> {
    console.log("ReadBlogsController...");
    const results = await this._read.execute({});
    console.log(results);
    sendResponse(res, results);
  }
}