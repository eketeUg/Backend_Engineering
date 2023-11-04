import express from "express";
import cors from "cors";

const app: express.Application = express();

//middlewale
app.use(express.json());
app.use(cors());

app.use("/", (req: express.Request, res: express.Response): any => {
  res.json({ message: "api endpoint is working" });
});

export default app;
