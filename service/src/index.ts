import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import serverless from "serverless-http";

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "image/jpeg",
  "image/png",
  "image/gif",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml",
  "image/x-icon",
  "image/svg+xml",
  "application/x-font-ttf",
  "font/ttf",
  "font/otf",
];

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
// const port = 8080;
// const host = "0.0.0.0";

app.use(express.static(path.join(__dirname, "..", "..", "app", "build")));
app.use(express.static("public"));
app.use(cors());
app.use(express.json()); // for parsing application/json

app.get("/jam", (req, res) => {
  // res.format({
  //   "application/json": function () {
      const people = [
        {
          id: 1,
          name: "sandy",
        },
        {
          id: 2,
          name: "katy",
        },
      ];
      res.json(people);
    // },
    // "text/html": function () {
    //   res.sendFile(
    //     path.join(__dirname, "..", "..", "app", "build", "index.html")
    //   );
    // },
  // });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "app", "build", "index.html"));
});

// app.listen(port, host, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });

console.log("New version!");

const handler = serverless(app, {
  binary: binaryMimeTypes
});

export = handler;
