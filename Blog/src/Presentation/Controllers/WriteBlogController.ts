import { Request, Response } from "express";
import IController from "../../Interfaces/Icontroller";
import sendResponse from "../../Utils/FormateData";
import { IUseCase } from "../../Interfaces/IUseCase";

export default class WriteBlogController implements IController {
  constructor(private _write: IUseCase<any, any>) {}

  public async handle(req: Request, res: Response): Promise<void> {
    console.log("WriteBlogController ", req.body);
    const results = await this._write.execute(req.body);

    return sendResponse(res, results);
  }
}
