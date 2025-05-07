import express from "express";
import { sayHello } from "@shared/utils";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Post service! 3" + sayHello());
});

app.listen(port, () => {
  console.log(`Post service listening at http://localhost:${port}`);
});
