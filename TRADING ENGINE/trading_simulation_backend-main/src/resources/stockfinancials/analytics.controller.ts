
import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import AnalyticsService from "./analytics.service";

export default class StockFinancialsController implements Controller {
  public path = "/financials";
  public router = Router();
  private AnalyticsService = new AnalyticsService();
  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.get(`${this.path}`, this.getAnalytics);
  }

  private getAnalytics = async (
    //getting financial data
    req: Request,
    res: Response,
  ): Promise<Response | void> => {
    try {
      const uID=req.query.Symbol;
      console.log(uID)
      const analytics = await this.AnalyticsService.getAnalytics(uID);
      res.send({ analytics });
    } catch (error: any) {
      console.log(error.message);
      //next(new HttpException(400, error.message));
    }
  };
}
