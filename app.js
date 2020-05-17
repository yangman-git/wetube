import express from "express";
import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-Parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
const app = express();

// Middleware - security
app.use(helmet());
// setting
app.set("view engine", "pug");
// Middleware - cookie-parser
app.use(cookieParser());
// Middleware - body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// Middleware - logging
app.use(morgan("dev"));
// Middleware - locals
app.use(localsMiddleware);

// routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
