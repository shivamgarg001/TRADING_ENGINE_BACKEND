
import { Schema, model } from "mongoose";
import Analytics from "./analytics.interface";

const AnalyticsSchema = new Schema(
  {
    //Financial model
    Symbol: { type: String, required: true },
    Date: { type: String, required: true },
    Profit: { type: Number, required: true },
  },
);

export default model<Analytics>("stockfinancials", AnalyticsSchema);
