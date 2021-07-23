import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import * as swaggerFile from "./docs/swagger-output.json";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes/index";
import dotenv from "dotenv";
import { IS_PRODUCTION } from "./config";

dotenv.config();

const corsOptions: CorsOptions = {
  origin: IS_PRODUCTION ? [] : "http://localhost:3001",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());

app.use("/", router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

export default app;
