// handle app here

import cors from "cors";
import express from "express";
import BlogController from "./Controllers";

export default class ApiServer {

  constructor(private readonly _blogController: BlogController){}

  public async start(port: number) {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    this._blogController.route(app);

    // Error handling middleware
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

      res.status(500).send('Something went wrong! ' + err.message);

    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  }

}