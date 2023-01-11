import express, { Express, Request, Response } from "express";
import path from "path";
const app: Express = express();

const port: number = 3000;

// CORS, JSON and URL Encoded Middlewares
import cors from "cors";
import availableMoves from "./availableMoves";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "assets"));

app.get("/", async (req: Request, res: Response) => {
  const { position } = req.query as {
    position: string;
  };

  const activeCells = availableMoves(position); // Get available moves from position
  res.render("chessBoard", {
    currentPosition: position,
    activeCells,
    setCurrentPosition: (col: string, row: number) => {
      window.history.replaceState("", "", `?position=${col + row}`);
      window.location.reload();
    },
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
