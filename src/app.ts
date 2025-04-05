import express from "express";
import cors from "cors";
import { errorHandling } from "./middlewares/erro-handling";
import { AppError } from "./utils/AppError";
import App from "next/app";

const app = express();
app.use(cors());

app.use(express.json());

app.use(errorHandling);

export { app };
